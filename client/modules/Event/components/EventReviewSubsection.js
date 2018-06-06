import React, { Component } from 'react';
import slugify from 'slugify';

// Import Styles
import styles from './EventReviewSection/EventReviewSection.css';

import eventValueDisplays from '../util/eventValueDisplays';

class EventReviewSubsection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      expanded: false,
    };
  }

  expand = e => {
    e.preventDefault();
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const {
      subsectionTotal,
      subsection,
      // State of value is either display or editing (editing: true/false)
      // When we are editing, we provide a function onValueChange and onValueSave
    } = this.props;

    return (
      <div>
        <div onClick={this.expand} className={styles['event-review-section__field-row']}>
          <div>
            <span>{this.state.expanded ? '-' : '+'}</span>
            {subsection.name}
          </div>
          <div>{eventValueDisplays[subsection.display](subsectionTotal)}</div>
        </div>
        {this.state.expanded
          ? (subsection.fields.map(field => (
            <div key={field.slug} className={styles['event-review-section__field-row']}>
              <div>
                {field.name}
              </div>
              <div>
                {eventValueDisplays[field.display](field.value)}
              </div>
            </div>
          )))
          : null
        }
      </div>
    );
  }
}

export default EventReviewSubsection;
