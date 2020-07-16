import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RankList from './pagesComponents/RankList';

const Ranking = (props) => {
  const { name, score } = props;
  return (
    <div>
      <div>
        {/* <img src={} alt="gravatar-email" /> */}

        <p>{name}</p>
        <p>{score}</p>
      </div>

      <Link data-testid="btn-go-home" to="/">
        Home
      </Link>
    </div>
  );
};

const mapState = (state) => ({
  name: state.userReducer.player.name,
  score: state.userReducer.player.score,
});

export default connect(mapState)(Ranking);
