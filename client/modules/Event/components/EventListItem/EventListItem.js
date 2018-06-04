import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './EventListItem.css';

function EventListItem(props) {
  return (
    <div className={styles['single-event']}>
      <h3 className={styles['event-title']}>
        <Link to={`/events/${props.event.cuid}/review`} >
          {props.event.name}
        </Link>
      </h3>
    </div>
  );
}

EventListItem.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventListItem;
