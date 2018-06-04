import React from 'react';

import styles from './EventReviewSection.css';

import EventReviewSubsection from '../EventReviewSubsection';

const EventReviewSection = ({
  section,
  eventData,
  dataMap,
  sectionTotals,
}) => (
  <div className={styles['event-review-section']}>
    <div className={`${styles['event-review-section__total']} ${styles['event-review-section__field-row']}`}>
      <div>{dataMap.title}</div>
      <div>{dataMap.display(sectionTotals.total)}</div>
    </div>
    <div>
      {Object.keys(dataMap.fields).map(subsection => (
        <EventReviewSubsection
          key={subsection}
          subsectionMap={dataMap.fields[subsection]}
          subsectionTotal={sectionTotals[subsection]}
          eventData={eventData[subsection]}
        />
      ))}
    </div>
  </div>
);

export default EventReviewSection;
