import React, { PropTypes } from 'react';

// Import styles
import styles from './EventReviewSection.css';

// Import modules
import EventReviewSubsection from '../EventReviewSubsection';

// Import Utils
import eventValueDisplays from '../../util/eventValueDisplays';

const EventReviewSection = ({
  section,
  sectionTotals,
  updateField,
}) => (
  <div className={styles['event-review']}>
    <div className={`${styles['event-review__total']} ${styles['event-review__field-row']}`}>
      <div>{section.name}</div>
      <div>{eventValueDisplays[section.display](sectionTotals.total)}</div>
    </div>
    <div>
      {section.fields.map(subsection => (
        <EventReviewSubsection
          key={subsection.slug}
          subsectionTotal={sectionTotals[subsection.slug]}
          subsection={subsection}
          updateField={updateField}
        />
      ))}
    </div>
  </div>
);

EventReviewSection.propTypes = {
  sectionTotals: PropTypes.object.isRequired,
  section: PropTypes.object.isRequired,
  updateField: PropTypes.func.isRequired,
};

export default EventReviewSection;
