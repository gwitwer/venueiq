import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import slugify from 'slugify';

// Import Style
import styles from './EventReviewPage.css';

// Import Components
import EventReviewSection from '../../components/EventReviewSection/EventReviewSection';

// Import Actions
import { fetchEvent, updateEventRequest } from '../../EventActions';

// Import Selectors
import { getEvent } from '../../EventReducer';

// Import Utils
import eventDataMap from '../../../../util/eventDataMap';

const getTotals = (event, dataMap) => {
  const totals = {};
  Object.keys(dataMap).forEach(section => {
    totals[section] = {
      total: 0,
    };
    Object.keys(dataMap[section].fields).forEach(subsection => {
      totals[section][subsection] = 0;
      if (event[section][subsection]._total) {
        totals[section][subsection] = event[section][subsection]._total;
      } else {
        if (event[section][subsection].fields) {
          event[section][subsection].fields.forEach(field => {
            totals[section][subsection] += field.value;
          });
        } else {
          Object.keys(event[section][subsection]).forEach(field => {
            totals[section][subsection] += event[section][subsection][field];
          });
        }
      }

      // Add subtotal to overall total
      totals[section].total += totals[section][subsection];
    });
  });
  return totals;
};

const handleValueUpdate = dispatch => event => section => subsection => field => value => {
  if (field) {
    if (subsection) {
      if (section && event && dispatch) {
        // We are dealing with a field update.
        // Update section.subsection.field.value or find the [fields] key.
        if (event[section][subsection].fields) {
          const fieldsUpdate = event[section][subsection].fields.map(eventField => {
            if (slugify(eventField.key) === field) {
              return {
                ...eventField,
                value,
              };
            }
            return eventField;
          });

          const update = { $set: {  } };
          update['$set'][`${section}.${subsection}.fields`] = fieldsUpdate;
        }
      } else {
        console.log('Section and event are required');
      }
    } else {
      // We are dealing with a section update.
      // Update section._total
    }
  } else {
    // We are dealing with a subsection update.
    // Update section.subsection._total
  }
}
// TODO: have a "handleValueChange" function that takes the section, subsection, and field.
// The subsection and field are optional.
// Partially-called function is passed from parent to child component based on the mapping.

export function EventReviewPage({ event, dispatch }) {
  const DM = eventDataMap(event);
  const totals = getTotals(event, DM);
  return (
    <div>
      <Helmet title={`${event.name} - Review`} />
      <div className={`${styles['event-detail']}`}>
        <h3 className={styles['event-title']}>{event.name}</h3>
        <h4>Review</h4>
        <div>
          {Object.keys(DM).map(section => (
            <EventReviewSection
              eventData={event[section]}
              dataMap={DM[section]}
              sectionTotals={totals[section]}
              key={section}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
EventReviewPage.need = [
  params => fetchEvent(params.cuid),
];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    event: getEvent(state, props.params.cuid),
  };
}

EventReviewPage.propTypes = {
  event: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(EventReviewPage);
