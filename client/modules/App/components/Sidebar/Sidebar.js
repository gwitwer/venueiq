import React from 'react';

// Import Style
import styles from './Sidebar.css';


export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>Overview</li>
        <li>Events</li>
        <li>Cash Reports</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
