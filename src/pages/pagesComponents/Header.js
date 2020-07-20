import React, { Component } from 'react';
import { connect } from 'react-redux';
import MD5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import '../../styles/Header.css';

class Header extends Component {
  setGravatar() {
    const { gravatarEmail } = this.props.player;
    console.log(gravatarEmail);
    const gravatarUrl = 'https://www.gravatar.com/avatar/';
    const Hash = MD5(gravatarEmail);
    return `${gravatarUrl}${Hash}`;
  }

  render() {
    const { name, score } = this.props.player;
    console.log(this.setGravatar());
    return (
      <header className="header-feedback-and-game">
        <div>
          <img
            src={this.setGravatar()} className="img-from-gravatar"
            alt="User gravatar" data-testid="header-profile-picture"
          />
          <span data-testid="header-player-name" className="player-name">{name}</span>
        </div>
        <div>
          <span data-testid="header-score" className="player-score">{score}</span>
          <span>Pontos</span>
        </div>
      </header>
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
