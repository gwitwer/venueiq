import React from 'react';
import { connect } from 'react-redux';

// Import Style
import mainStyles from '../../main.css';

export function Overview() {
  return (
    <div>
      <div className={mainStyles['page-title']}>Overview</div>
      <div>
        <div style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '2.4rem', margin: '6rem 0', color: '#ccc', fontWeight: '300' }}>{'Ain\'t got shit!'}</div>
      </div>
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
