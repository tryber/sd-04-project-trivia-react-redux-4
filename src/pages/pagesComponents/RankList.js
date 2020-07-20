import React from 'react';
import PropTypes from 'prop-types';

const RankList = ({ player, index }) => (
  <div>
    <img src={player.picture} alt="gravatar" />
    <p data-testid={`player-name=${index}`}>{player.name}</p>
    <p data-testid={`player-score-${index}`}>{player.score}</p>
  </div>
);

RankList.propTypes = {
  player: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default RankList;
