import React from 'react';
import { connect } from 'react-redux';

// Import Style
// import styles from './Overview.css';

export function Overview() {
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
function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Overview);
