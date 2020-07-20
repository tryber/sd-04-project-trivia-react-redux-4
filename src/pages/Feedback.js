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
          <p>Você acertou <span data-testid="feedback-total-question">{assertions}</span> questões!</p>
          <p>Um total de <span data-testid="feedback-total-score">{score}</span> pontos</p>
        </div>
        <Link to="/ranking"><button data-testid="btn-ranking">Ver Ranking</button></Link>
        <Link to="/"><button data-testid="btn-play-again">Jogar Novamente</button></Link>
      </div>
    );
  }
}

const mapState = (state) => ({
  player: state.userReducer.player,
});

Feedback.propTypes = {
  player: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapState)(Feedback);
