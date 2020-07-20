import React, { Component } from 'react';
import { connect } from 'react-redux';
import MD5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { rankingData } from '../../actions/userAction';

class Header extends Component {
  setGravatar() {
    const { gravatarEmail, name } = this.props.player;
    const gravatarUrl = 'https://www.gravatar.com/avatar/';
    const Hash = MD5(gravatarEmail);
    const url = `${gravatarUrl}${Hash}`;
    this.props.rankingData({ name, url });
    return url;
  }

  render() {
    const { name, score } = this.props.player;
    console.log(this.setGravatar());

    return (
      <div>
        <div className="left-header">
          <img src={this.setGravatar()} alt="User gravatar" data-testid="header-profile-picture" />
          <h2 data-testid="header-player-name">Jogador: {name}</h2>
        </div>
        <div className="right-header">
          <p data-testid="header-score">Score: {Number(score)}</p>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  player: state.userReducer.player,
});

const mapDispatch = (dispatch) => ({
  rankingData: (payload) => dispatch(rankingData(payload)),
});

export default connect(mapState, mapDispatch)(Header);

Header.propTypes = {
  player: PropTypes.objectOf(PropTypes.any).isRequired,
  rankingData: PropTypes.func.isRequired,
};
