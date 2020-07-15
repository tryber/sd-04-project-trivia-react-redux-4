import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import fetchToken from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      shouldRedirect: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //chama a action que salva o login
    //salva o name e o email no store e no local storage na chave palyer

    this.props.fetchToken();
    this.setState({ shouldRedirect: true })
  }

  render() {
    console.log(this.props.token);
    const { name, email, shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/game" />
    return (
      <div>
        <h1>Renderiza Aqui!</h1>
        <h2>Jessica Rules!</h2>
        <label htmlFor="input-name">User</label>
        <input id="input-name" onChange={(e) => this.setState({ name: e.target.value })}
          data-testid="input-player-name" type="text" value={name}
        />
        <label htmlFor="input-email">Email</label>
        <input id="input-email" onChange={(e) => this.setState({ email: e.target.value })}
          data-testid="input-gravatar-email" type="email" value={email}
        />
        <button data-testid="btn-play" onClick={this.handleClick}>Login</button>
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
