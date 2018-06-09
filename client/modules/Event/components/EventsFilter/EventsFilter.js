import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './EventsFilter.css';

import { getEventsFilter } from '../../EventReducer';
import { updateFilter } from '../../EventActions';

class EventsFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: props.filter,
    };
  }

  updateFilterInput = e => {
    this.setState({ filter: e.target.value });
  }

  applyFilter = e => {
    if (e.key === 'Enter') {
      this.props.dispatch(updateFilter(this.state.filter));
    }
  }

  render() {
    return (
      <div className={styles['events-filter']}>
        <input
          value={this.state.filter}
          placeholder="Filter events by name, tag, etc."
          onChange={this.updateFilterInput}
          onKeyPress={this.applyFilter}
          className={styles['events-filter-input']}
        />
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    filter: getEventsFilter(state),
  };
}

EventsFilter.propTypes = {
  filter: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(EventsFilter);
