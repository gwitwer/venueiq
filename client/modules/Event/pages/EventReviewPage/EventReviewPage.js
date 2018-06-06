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

const getTotals = event => {
  const totals = {};
  event.data.forEach(section => {
    totals[section.slug] = {
      total: 0,
    };
    section.fields.forEach(subsection => {
      totals[section.slug][subsection.slug] = subsection.value;

      // Subsection total can either be manually set or come from the sum of fields.
      if (!totals[section.slug][subsection.slug]) {
        subsection.fields.forEach(field => {
          totals[section.slug][subsection.slug] += field.value;
        });
      }

      // Add subvalue to overall total
      totals[section.slug].total += totals[section.slug][subsection.slug];
    });
  });
  return totals;
};

const handleValueUpdate = dispatch => event => section => subsection => field => value => {
  if (field) {
    if (subsection) {
      if (section && event && dispatch) {
        // We are dealing with a field update.
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
      } else {
        console.log('Section and event are required');
      }
    } else {
      // We are dealing with a section update.
      // Update section.value
    }
  } else {
    // We are dealing with a subsection update.
    // Update section.subsection.value
  }
}
// TODO: have a "handleValueChange" function that takes the section, subsection, and field.
// The subsection and field are optional.
// Partially-called function is passed from parent to child component based on the mapping.

export function EventReviewPage({ event, dispatch }) {
  const totals = getTotals(event);
  return (
    <div>
      <Helmet title={`${event.name} - Review`} />
      <div className={`${styles['event-detail']}`}>
        <h3 className={styles['event-title']}>{event.name}</h3>
        <h4>Review</h4>
        <div>
          {event.data.map(section => (
            <EventReviewSection
              section={section}
              sectionTotals={totals[section.slug]}
              key={section.slug}
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
