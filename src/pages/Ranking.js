import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RankList from './pagesComponents/RankList';
import { userScore } from '../actions/userAction';

class Ranking extends React.Component {
  static rankLine() {
    return localStorage.getItem('ranking') !== null
      ? JSON.parse(localStorage.getItem('ranking'))
      : { player: { name: '', score: '', picture: '' } };
  }

  render() {
    const restart = { score: 0, assertions: 0 };
    const ranking = this.rankLine();
    return (
      <div>
        <div>
          <h2 data-testid="ranking-title">Ranking</h2>
          {ranking
            .sort((a, b) => b.score - a.score)
            .map((player, index) => <RankList key={player.id} player={player} index={index} />)}
        </div>

        <Link data-testid="btn-go-home" to="/">
          <button onClick={() => userScore(restart)}>Home</button>
        </Link>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  userScore: (score) => dispatch(userScore(score)),
});

Ranking.propTypes = {
  userScore: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Ranking);
