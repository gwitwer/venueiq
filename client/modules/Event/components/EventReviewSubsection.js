import React, { Component, PropTypes } from 'react';

// Import Styles
import styles from './EventReviewSection/EventReviewSection.css';

import eventValueDisplays from '../util/eventValueDisplays';

class EventReviewSubsection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      expanded: false,
      openInput: null,
      inputValue: '',
    };
  }

  onInputChange = e => {
    this.setState({ inputValue: e.target.value });
  }

  onValueClick = slug => value => e => {
    e.preventDefault();
    this.setState({
      inputValue: value,
      openInput: slug,
    });
  }

  checkForSubmit = e => {
    if (e.key === 'Enter') {
      this.props.updateField(this.state.openInput)(e.target.value);
      this.setState({
        openInput: null,
      });
    }
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
        <div className={`${styles['event-review-subsection']} ${styles['event-review__field-row']}`}>
          <div onClick={this.expand}>
            {
              subsection.fields.length || subsection.canAdd
                ? <span>{this.state.expanded ? '-' : '+'}</span>
                : <div style={{ display: 'inline-block', width: '9.5px' }} />
            }
            {subsection.name}
          </div>
          <div
            style={{ display: this.state.openInput === subsection.slug ? 'none' : 'block' }}
            onClick={this.onValueClick(subsection.slug)(subsection.value)}
          >
            {eventValueDisplays[subsection.display](subsectionTotal)}
          </div>
          <div style={{ display: this.state.openInput === subsection.slug ? 'block' : 'none' }}>
            <input
              className={styles['event-review-input']}
              type="number"
              value={this.state.inputValue}
              onKeyPress={this.checkForSubmit}
              onChange={this.onInputChange}
            />
          </div>
        </div>
        {this.state.expanded
          ? (
          <div>
            {subsection.fields.map(field => (
              <div key={field.slug} className={`${styles['event-review-subsection-field']} ${styles['event-review__field-row']}`}>
                <div>
                  {field.name}
                </div>
                <div
                  style={{ display: this.state.openInput === field.slug ? 'none' : 'block' }}
                  onClick={this.onValueClick(field.slug)(field.value)}
                >
                  {eventValueDisplays[field.display](field.value)}
                </div>
                <div style={{ display: this.state.openInput === field.slug ? 'block' : 'none' }}>
                  <input
                    className={styles['event-review-input']}
                    type="number"
                    value={this.state.inputValue}
                    onKeyPress={this.checkForSubmit}
                    onChange={this.onInputChange}
                  />
                </div>
              </div>
            ))}
          </div>
          )
          : null
        }
      </div>
    );
  }
}

EventReviewSubsection.propTypes = {
  subsectionTotal: PropTypes.object.isRequired,
  subsection: PropTypes.object.isRequired,
  updateField: PropTypes.func.isRequired,
};

export default EventReviewSubsection;
