import React from 'react';

import styles from './EventReviewSection.css';

// Import modules
import EventReviewSubsection from '../EventReviewSubsection';

// Import Utils
import eventValueDisplays from '../../util/eventValueDisplays';

const EventReviewSection = ({
  section,
  sectionTotals,
}) => (
  <div className={styles['event-review-section']}>
    <div className={`${styles['event-review-section__total']} ${styles['event-review-section__field-row']}`}>
      <div>{section.name}</div>
      <div>{eventValueDisplays[section.display](sectionTotals.total)}</div>
    </div>
    <div>
      {section.fields.map(subsection => (
        <EventReviewSubsection
          key={subsection.slug}
          subsectionTotal={sectionTotals[subsection.slug]}
          subsection={subsection}
        />
      ))}
    </div>
  </div>
);

export default EventReviewSection;
