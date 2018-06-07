/*
 * NOTE:
 * Maybe there should be a wrapper around this page <-- No, this is itself a wrapper for GameList.
 * We want to be able to generalize it for multiple types of lists (owned, unclaimed, all)
 * We also want to show / hide button that creates games.
*/

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Import Selectors
import { getUser } from '../../../App/AppReducer';

class AdminDashboard extends Component {

  componentWillMount() {
    if (!this.props.user || this.props.user.type !== 'admin') {
      this.context.router.push('/');
    }
  }

  render() {
    return (
      <div>
        <Link to="/admin/teams">Teams List</Link>
        <Link to="/admin/games">Games List</Link>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
AdminDashboard.need = [];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    user: getUser(state),
  };
}

AdminDashboard.propTypes = {
  user: PropTypes.shape({
    type: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

AdminDashboard.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(AdminDashboard);
