/*
 * NOTE:
 * Maybe there should be a wrapper around this page <-- No, this is itself a wrapper for EventList.
 * We want to be able to generalize it for multiple types of lists (owned, unclaimed, all)
 * We also want to show / hide button that creates events.
*/

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import EventList from '../../components/EventList/EventList';
import EventsFilter from '../../components/EventsFilter/EventsFilter';
import EventListHeader from '../../components/EventListHeader/EventListHeader';

// Import Actions
import { fetchEvents } from '../../EventActions';
import { fetchUser } from '../../../App/AppActions';

// Import Selectors
import { getEvents, getEventsFilter } from '../../EventReducer';
import { getUser } from '../../../App/AppReducer';

// Import Styles
import mainStyles from '../../../../main.css';

class EventListPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchEvents(this.props.user.cuid));
    this.props.dispatch(fetchUser());
  }

  render() {
    const {
      events,
      filter,
      user,
    } = this.props;

    return (
      <div>
        <div className={mainStyles['page-title']}>Events</div>
        <EventsFilter />
        <EventListHeader activeFields={user.activeFields} />
        <EventList events={events} filter={filter || ''} activeFields={user.activeFields} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
EventListPage.need = [
  (params, state) => fetchEvents(state.user.cuid),
  fetchUser,
];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    events: getEvents(state),
    filter: getEventsFilter(state),
    user: getUser(state),
  };
}

EventListPage.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

EventListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(EventListPage);
