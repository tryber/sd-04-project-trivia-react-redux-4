import React, { Component } from 'react';
import { connect } from 'react-redux';
import MD5 from 'crypto-js/md5';
import PropTypes from 'prop-types';

class Header extends Component {
  setGravatar() {
    const { gravatarEmail } = this.props.player;
    console.log(gravatarEmail);
    const gravatarUrl = 'https://www.gravatar.com/avatar/';
    const Hash = MD5(gravatarEmail.trim().toLowerCase());
    return `${gravatarUrl}${Hash}`;
  }

  render() {
    const { name, score } = this.props.player;
    console.log(this.setGravatar());
    return (
      <div>
        <div className="header-game">
          <img
            src={this.setGravatar()}
            alt="User gravatar"
            data-testid="header-profile-picture"
            className="img-header"
          />
          <h3 data-testid="header-player-name">{name}</h3>
          <p>Score: <span data-testid="header-score" className="score">{score}</span></p>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  player: state.userReducer.player,
});

export default connect(mapState)(Header);

Header.propTypes = {
  player: PropTypes.objectOf(PropTypes.any).isRequired,
};
