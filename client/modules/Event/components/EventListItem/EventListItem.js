import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './EventListItem.css';
import mainStyles from '../../../../main.css';

const getField = event => field => {
  const keys = Object.keys(event);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === field) {
      return event[keys[i]];
    }
  }

  for (let i = 0; i < event.data.length; i++) {
    if (event.data[i].slug === field) {
      return event.data[i].value;
    }
    for (let j = 0; j < event.data[i].fields.length; j++) {
      if (event.data[i].fields[j].slug === field) {
        return event.data[i].fields[j].value;
      }
      for (let k = 0; k < event.data[i].fields[j].fields.length; k++) {
        if (event.data[i].fields[j].fields[k].slug === field) {
          return event.data[i].fields[j].fields[k].value;
        }
      }
    }
  }
  return 'N/A';
};

const EventListItem = ({ event, activeFields }) => {
  return (
    <Link to={`/events/${event.cuid}`}>
      <div className={styles['event-list-item']}>
        <div className={styles['event-list-header__name']}>
          {event.name}
        </div>
        {activeFields.map(field => (
          <div className={styles['event-list-header__item']} key={`${event.cuid}-${field}`}>
            {getField(event)(field)}
          </div>
        ))}
        <div>
          <Link to={`/events/${event.cuid}/review`} className={mainStyles['event-review-link']}>
            REVIEW
          </Link>
        </div>
      </div>
    </Link>
  );
};

EventListItem.propTypes = {
  event: PropTypes.object.isRequired,
  activeFields: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EventListItem;
