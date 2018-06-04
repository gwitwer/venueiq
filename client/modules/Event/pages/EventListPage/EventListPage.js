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

// Import Actions
import { fetchEvents } from '../../EventActions';

// Import Selectors
import { getEvents } from '../../EventReducer';

class EventListPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }

  render() {
    return (
      <div>
        <EventList events={this.props.events} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
EventListPage.need = [fetchEvents];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    events: getEvents(state),
  };
}

EventListPage.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

EventListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(EventListPage);
