import React from 'react';
import { Link } from 'react-router'

// Import Style
import styles from './Sidebar.css';


export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link to="/">Overview</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
