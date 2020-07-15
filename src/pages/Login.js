import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchToken from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchToken();
  }

  handleChange() {
    
  }

  render() {
    const { fetchToken } = this.props;
    console.log(this.props.token);
    return (
      <div>
        <h1>Renderiza Aqui!</h1>
        <h2>Jessica Rules!</h2>
        <label>User</label>
        <input onChange={"a"} data-testid="input-player-name" type="text" />
        <label>Email</label>
        <input onChange={"a"} data-testid="input-gravatar-email" type="email" />
        <button disabled={true} data-testid="btn-play">
          Login
        </button>
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

export default connect(mapState, mapDispatch)(Login);
