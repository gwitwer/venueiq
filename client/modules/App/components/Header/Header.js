import React from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './Header.css';

// Import Images
import logo from '../../logo.png';

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/" style={{ display: 'flex' }}>
            <img src={logo} className={styles['header-logo']} alt="Logo" />
          </Link>
        </h1>
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {};

export default Header;
