import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchToken from '../actions';
import userLogin from '../actions/userAction';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gravatarEmail: '',
      disableButton: true,
    };
  }

  async handleChange(e, field) {
    await this.setState({
      [field]: e.target.value,
    });
    const { name, gravatarEmail } = this.state;
    if (name && gravatarEmail) {
      this.setState({ disableButton: false });
    } else {
      this.setState({ disableButton: true });
    }
  }

  renderInputName() {
    const { name } = this.state;
    return (
      <span>
        <label htmlFor="input-name">User</label>
        <input
          id="input-name"
          onChange={(e) => this.handleChange(e, 'name')}
          data-testid="input-player-name"
          type="text"
          value={name}
          required
        />
      </span>
    );
  }

  renderInputEmail() {
    const { gravatarEmail } = this.state;
    return (
      <span>
        <label htmlFor="input-gravatar-email">Email</label>
        <input
          id="input-gravatar-email"
          onChange={(e) => this.handleChange(e, 'gravatarEmail')}
          data-testid="input-gravatar-email"
          type="text"
          value={gravatarEmail}
          required
        />
      </span>
    );
  }

  fetchUser() {
    const { userLogin, fetchToken } = this.props;
    userLogin(this.state);
    fetchToken();
  }

  render() {
    const { disableButton } = this.state;
    return (
      <div>
        {this.renderInputName()}
        {this.renderInputEmail()}
        <Link to="/game">
          <button
            type="button"
            data-testid="btn-play"
            disabled={disableButton}
            onClick={() => this.fetchUser()}
          >
            Login
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  fetchToken: () => dispatch(fetchToken()),
  userLogin: (info) => dispatch(userLogin(info)),
});

Login.propTypes = {
  fetchToken: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Login);
