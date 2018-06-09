import React, { PropTypes } from 'react';

const EventListHeader = ({ activeFields }) => {
  return (
    <div>
      header.
    </div>
  );
};

EventListHeader.propTypes = {
  activeFields: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EventListHeader;
