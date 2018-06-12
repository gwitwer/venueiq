import React from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './Sidebar.css';


export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li className={styles['sidebar-list-item']}>
          <Link to="/">Overview</Link>
        </li>
        <li className={styles['sidebar-list-item']}>
          <Link to="/events">Events</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
