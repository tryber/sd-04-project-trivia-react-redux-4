import React from 'react';
import PropTypes from 'prop-types';

const RankList = ({ player }) => (
  <div>
    <img src={player.picture} alt="gravatar" />
    <p>{player.name}</p>
    <p>{player.score}</p>
  </div>
);

RankList.propTypes = {
  player: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RankList;
