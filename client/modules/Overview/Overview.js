import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
// import styles from './Overview.css';

export function Overview(props) {
  return (
    <div>
      <h1>Overview</h1>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
Overview.need = [
];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps)(Overview);
