import React, { PropTypes } from 'react';

// Import Components
import EventListItem from '../EventListItem/EventListItem';

const convertToDowCode = time => {
  const codes = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];
  return codes[time.getDay()];
};

const eventsFilter = filter => event => {
  if (!filter || !filter.length) {
    return true;
  }

  const matches = {
    name: event.name.toLowerCase().indexOf(filter) >= 0,
    type: event.type.toLowerCase().indexOf(filter) >= 0,
    day: convertToDowCode(new Date(event.time)).toLowerCase().indexOf(filter) >= 0,
    tags: event.tags.filter(t => t.toLowerCase().indexOf(filter) >= 0).length,
  };

  return Object.keys(matches).reduce((p, k) => matches[k] || p, false);
};

const EventList = ({ events, filter, activeFields }) => {
  return (
    <div>
      {
        events.filter(eventsFilter(filter)).map(event => (
          <EventListItem
            event={event}
            activeFields={activeFields}
            key={`event-${event.cuid}`}
          />
        ))
      }
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  activeFields: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EventList;
