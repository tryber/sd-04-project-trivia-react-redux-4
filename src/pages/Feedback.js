import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MD5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import Header from './pagesComponents/Header';
import { userScore } from '../actions/userAction';

class Feedback extends Component {
  componentDidMount() {
    const { name, score } = this.props.player;
    const picture = this.setGravatar();
    const oldState = JSON.parse(localStorage.getItem('ranking'));
    const newState = { name, score, picture, id: new Date() };
    if (oldState) return localStorage.setItem('ranking', JSON.stringify([...oldState, newState]));
    return localStorage.setItem('ranking', JSON.stringify([newState]));
  }

  setGravatar() {
    const { gravatarEmail } = this.props.player;
    const gravatarUrl = 'https://www.gravatar.com/avatar/';
    const Hash = MD5(gravatarEmail.trim().toLowerCase());
    return `${gravatarUrl}${Hash}`;
  }

  handleFeedback() {
    const { assertions } = this.props.player;
    if (assertions >= 3) return 'Mandou bem!';
    return 'Podia ser melhor...';
  }

  render() {
    const { score, assertions } = this.props.player;
    const restart = { score: 0, assertions: 0 };
    return (
      <div>
        <Header />
        <div>
          <h1 data-testid="feedback-text">{this.handleFeedback()}</h1>
          <p>Você acertou <span data-testid="feedback-total-question">{assertions}</span>
            questões!
          </p>
          <p>Um total de <span data-testid="feedback-total-score">{score}</span> pontos</p>
        </div>
        <Link to="/ranking"><button data-testid="btn-ranking">Ver Ranking</button></Link>
        <Link to="/">
          <button data-testid="btn-play-again" onClick={() => this.props.userScore(restart)}>
            Jogar Novamente
          </button>
        </Link>
      </div>
    );
  }
}

const mapState = (state) => ({
  player: state.userReducer.player,
});

const mapDispatch = (dispatch) => ({
  userScore: (score) => dispatch(userScore(score)),
});

Feedback.propTypes = {
  player: PropTypes.objectOf(PropTypes.any).isRequired,
  userScore: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(Feedback);
