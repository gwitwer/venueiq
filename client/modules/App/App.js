import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line

    if (typeof(window) !== 'undefined') {
      console.log('Initializing FB SDK')
      window.fbAsyncInit = function() {
        FB.init({
          appId            : 'your-app-id',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v3.0'
        });

        window.FB.Event.subscribe('auth.statusChange', response => {
          if (response.authResponse) {
            this.updateLoggedInState(response);
          } else {
            this.updateLoggedOutState();
          }
        });

      }.bind(this);

      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }

  updateLoggedInState(response) {
    console.log(response);
  }

  updateLoggedOutState() {
    console.log('Logging out');
  }

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="Venue IQ"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header />
          <div className={styles.container}>
            <Sidebar />
            <div style={{ flex: 1, padding: '2rem' }}>
              <div style={{ maxWidth: '980px' }}>
                {this.props.children}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
  };
}

export default connect(mapStateToProps)(App);
