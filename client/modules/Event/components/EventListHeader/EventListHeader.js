import React, { PropTypes } from 'react';

// Import styles
import styles from '../EventListItem/EventListItem.css';

const fieldsMap = {
  name: { name: 'Name' },
  day: { name: 'Day' },
  genre: { name: 'Genre' },
  revenue: { name: 'Revenue' },
  'promotional-spending': { name: 'Ad Spend' },
  attendance: { name: 'Attendance' },
  action: { name: 'Action' },
};

const EventListHeader = ({ activeFields }) => (
  <div className={styles['event-list-header']}>
    {['name', ...activeFields, 'action'].map(field => (
      <div
        className={`${styles[`event-list-header__${field}`] || ''} ${styles['event-list-header__item']}`}
        key={`event-list-header-${field}`}
      >
        {fieldsMap[field].name}
      </div>
    ))}
  </div>
);

EventListHeader.propTypes = {
  activeFields: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EventListHeader;
