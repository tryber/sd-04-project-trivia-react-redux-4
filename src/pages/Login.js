import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchToken from '../actions';

class Login extends Component {
  componentDidMount() {
    this.props.fetchToken();
  }

  render() {
    console.log(this.props.token);
    return (
      <div>
        <h1>Renderiza Aqui!</h1>
        <h2>Jessica Rules!</h2>
        <label htmlFor="input-name">User</label>
        <input id="input-name" onChange={'a'} data-testid="input-player-name" type="text" />
        <label htmlFor="input-email">Email</label>
        <input id="input-email" onChange={'a'} data-testid="input-gravatar-email" type="email" />
        <button data-testid="btn-play">Login</button>
      </div>
    );
  }
}

const mapState = (state) => ({
  token: state.apiReducer.token,
});

const mapDispatch = (dispatch) => ({
  fetchToken: () => dispatch(fetchToken()),
});

Login.propTypes = {
  token: PropTypes.string.isRequired,
  fetchToken: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(Login);
