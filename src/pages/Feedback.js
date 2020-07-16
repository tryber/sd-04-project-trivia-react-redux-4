import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './pagesComponents/Header';

class Feedback extends Component {
  handleFeedback() {
    const { assertions } = this.props.player;
    if (assertions >= 3) return 'Mandou Bem!';
    return 'Podia ser melhor...';
  }

  render() {
    const { score, assertions } = this.props.player;
    return (
      <div>
        <Header />
        <div>
          <h1 data-testid="feedback-text">{this.handleFeedback()}</h1>
          <p data-testid="feedback-total-question">Você acertou {assertions} questões!</p>
          <p data-testid="feedback-total-score">Um total de {score} pontos</p>
        </div>
        <Link to="/ranking" data-testid="tbn-ranking">Ver Ranking</Link>
        <Link to="/" data-testid="btn-play-again">Jogar Novamente</Link>
      </div>
    );
  }
}

const mapState = (state) => ({
  player: state.userReducer.player,
});

Feedback.propTypes = {
  player: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapState)(Feedback);
