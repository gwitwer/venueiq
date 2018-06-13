import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

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
      <div className={mainStyles['page-title-wrapper']}>
        <div className={mainStyles['page-title']}>{props.event.name}</div>
        <div>
          <Link to={`/events/${props.event.cuid}/review`} className={`${mainStyles['event-review-link__large']} ${mainStyles['event-review-link']}`}>REVIEW</Link>
        </div>
      </div>
      <div className={`${styles['event-detail']}`}>
        <div style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '2.4rem', margin: '6rem 0', color: '#ccc', fontWeight: '300' }}>{'Ain\'t got shit!'}</div>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
EventDetailPage.need = [
  (params, state) => fetchEvent(state.user.cuid, params.cuid),
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
