import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import store from '../store';

class AppContainer extends React.Component {
  render() {
    return (
      <App/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);