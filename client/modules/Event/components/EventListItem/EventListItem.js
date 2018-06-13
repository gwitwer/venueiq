import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './EventListItem.css';
import mainStyles from '../../../../main.css';

// Import Methods
import getTotals from '../../util/getTotals';
import eventValueDisplays from '../../util/eventValueDisplays';

const getField = totals => event => field => {
  const keys = Object.keys(event);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === field) {
      return {
        value: event[keys[i]],
        display: 'eye',
      };
    }
  }

  for (let i = 0; i < event.data.length; i++) {
    if (event.data[i].slug === field) {
      return {
        value: totals[field].total,
        display: event.data[i].display,
      };
    }
    for (let j = 0; j < event.data[i].fields.length; j++) {
      if (event.data[i].fields[j].slug === field) {
        return {
          value: totals[event.data[i].slug][field],
          display: event.data[i].fields[j].display
        };
      }
      for (let k = 0; k < event.data[i].fields[j].fields.length; k++) {
        if (event.data[i].fields[j].fields[k].slug === field) {
          return {
            value: event.data[i].fields[j].fields[k].value,
            display: event.data[i].fields[j].fields[k].display,
          };
        }
      }
    }
  }
  return {
    display: 'eye',
    value: 'N/A',
  };
};

const getFormattedField = totals => event => field => {
  const displayField = getField(totals)(event)(field);
  return eventValueDisplays[displayField.display](displayField.value);
};

const EventListItem = ({ event, activeFields }) => {
  const parEvalGFF = getFormattedField(getTotals(event))(event);
  return (
    <Link to={`/events/${event.cuid}`}>
      <div className={styles['event-list-item']}>
        <div className={styles['event-list-header__name']}>
          {event.name}
        </div>
        {activeFields.map(field => (
          <div className={styles['event-list-header__item']} key={`${event.cuid}-${field}`}>
            {parEvalGFF(field)}
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
