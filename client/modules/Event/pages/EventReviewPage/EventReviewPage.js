import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

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

const updateField = dispatch => event => slug => value => {
  // Deep copy the object to replace in the document.
  const copiedData = JSON.parse(JSON.stringify(event.data));

  // We need to first search for the field
  for (let i = 0; i < copiedData.length; i++) {
    let found = false;
    for (let j = 0; j < copiedData[i].fields.length; j++) {
      // Check if it is a subsection value change
      if (copiedData[i].fields[j].slug === slug) {
        found = true;
        copiedData[i].fields[j].value = value;
        break;
      } else {
        // Otherwise, check all the subsection fields.
        for (let k = 0; k < copiedData[i].fields[j].fields.length; k++) {
          if (copiedData[i].fields[j].fields[k].slug === slug) {
            found = true;
            copiedData[i].fields[j].fields[k].value = value;
            break;
          }
        }
      }
      if (found) break; // Break if we found it
    }
    if (found) break; // Break if we found it
  }
  updateEventRequest(event.cuid, { $set: { data: copiedData } })(dispatch);
};

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
              updateField={updateField(dispatch)(event)}
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
