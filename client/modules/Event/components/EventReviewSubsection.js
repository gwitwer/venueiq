import React, { Component } from 'react';
import slugify from 'slugify';

// Import Styles
import styles from './EventReviewSection/EventReviewSection.css';

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
      subsectionMap,
      subsectionTotal,
      eventData,
      // State of value is either display or editing (editing: true/false)
      // When we are editing, we provide a function onValueChange and onValueSave
    } = this.props;

    return (
      <div>
        <div onClick={this.expand} className={styles['event-review-section__field-row']}>
          <div>
            <span>{this.state.expanded ? '-' : '+'}</span>
            {subsectionMap.title}
          </div>
          <div onClick={handleFieldClick}>{subsectionMap.display(subsectionTotal)}</div>
        </div>
        {this.state.expanded
          ? (Object.keys(subsectionMap.fields).map(field => (
            <div key={field} className={styles['event-review-section__field-row']}>
              <div>
                {subsectionMap.fields[field].title}
              </div>
              <div>
                {
                  eventData.fields
                    ? (
                      subsectionMap.fields[field].display(
                        eventData.fields.filter(f => slugify(f.key) === field)[0].value
                      )
                    )
                    : subsectionMap.fields[field].display(eventData[field])
                }
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
