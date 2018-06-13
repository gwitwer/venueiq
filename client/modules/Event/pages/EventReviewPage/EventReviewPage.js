import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Import Style
import styles from './EventReviewPage.css';
import mainStyles from '../../../../main.css';

// Import Components
import EventReviewSection from '../../components/EventReviewSection/EventReviewSection';

// Import Actions
import { fetchEvent, updateEventRequest } from '../../EventActions';
import { fetchUser } from '../../../App/AppActions';

// Import Selectors
import { getEvent } from '../../EventReducer';
import { getUser } from '../../../App/AppReducer';

// Import Methods
import getTotals from '../../util/getTotals';

const updateField = dispatch => uid => event => slug => value => {
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
  updateEventRequest(uid, event.cuid, { $set: { data: copiedData } })(dispatch);
};

export function EventReviewPage({ event, user, dispatch }) {
  const totals = getTotals(event);
  return (
    <div>
      <Helmet title={`${event.name} - Review`} />
      <div className={mainStyles['page-title']}>{event.name}</div>
      <h4>Review</h4>
      <div className={`${styles['event-detail']}`}>
        <div>
          {event.data.map(section => (
            <EventReviewSection
              section={section}
              sectionTotals={totals[section.slug]}
              key={section.slug}
              updateField={updateField(dispatch)(user.cuid)(event)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
EventReviewPage.need = [
  (params, state) => fetchEvent(state.user.cuid, params.cuid),
  fetchUser,
];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    event: getEvent(state, props.params.cuid),
    user: getUser(state),
  };
}

EventReviewPage.propTypes = {
  event: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(EventReviewPage);
