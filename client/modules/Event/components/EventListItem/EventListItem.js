import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './EventListItem.css';

const EventListItem = ({ event }) => {
  return (
    <Link to={`/events/${event.cuid}`}>
      <div className={styles['event-list-item']}>
        <div className={styles['event-name']}>
          {event.name}
        </div>
        <div>
          <Link to={`/events/${event.cuid}/review`}>
            <div className={styles['event-review']}>
              Review
            </div>
          </Link>
        </div>
      </div>
    </Link>
  );
};

EventListItem.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventListItem;
