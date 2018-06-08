import React, { PropTypes } from 'react';

// Import Components
import EventListItem from '../EventListItem/EventListItem';

function EventList(props) {
  return (
    <div className="listView">
      {
        props.events.map(event => (
          <EventListItem
            event={event}
            key={`event-${event.cuid}`}
          />
        ))
      }
    </div>
  );
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EventList;
