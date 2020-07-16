import React, { Component } from 'react';
import { connect } from 'react-redux';
import MD5 from 'crypto-js/md5';
import Proptypes from 'prop-types';

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
      <div>
        <div className="left-header">
          <img src={this.setGravatar()} alt="User gravatar" dataTestid="header-profile-picture" />
          <h2 dataTestid="header-player-name">{name}</h2>
        </div>
        <div className="right-header">
          <p>Score: {score}</p>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  player: state.userReducer.player,
});

export default connect(mapState)(Header);

Header.Proptype = {
  player: Proptypes.objectOf({
    gravatarEmail: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    score: Proptypes.string.isRequired,
  }).isRequired,
};
