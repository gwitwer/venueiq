import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Import Style
import styles from './EventDetailPage.css';
import mainStyles from '../../../../main.css';

// Import Actions
import { fetchEvent } from '../../EventActions';

// Import Selectors
import { getEvent } from '../../EventReducer';

export function EventDetailPage(props) {
  return (
    <div>
      <Helmet title={props.event.name} />
      <div className={mainStyles['page-title']}>{props.event.name}</div>
      <div className={`${styles['event-detail']}`}>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
EventDetailPage.need = [
  params => fetchEvent(params.cuid),
];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    event: getEvent(state, props.params.cuid),
  };
}

EventDetailPage.propTypes = {
  event: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(EventDetailPage);
