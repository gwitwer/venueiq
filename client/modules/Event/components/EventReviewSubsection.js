import React, { Component } from 'react';
import slugify from 'slugify';

// Import Styles
import styles from './EventReviewSection/EventReviewSection.css';

class EventReviewSubsection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  expand = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {

    const {
      subsectionMap,
      subsectionTotal,
      eventData,
    } = this.props;

    console.log(subsectionMap)

    return (
      <div>
        <div className={styles['event-review-section__field-row']}>
          <div>
            <span onClick={this.expand}>{this.state.expanded ? '-' : '+'}</span>
            {subsectionMap.title}
          </div>
          <div>{subsectionMap.display(subsectionTotal)}</div>
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
