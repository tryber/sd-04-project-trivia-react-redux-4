import React from 'react';
import PropTypes from 'prop-types';

function RankList({ player }) {
  return (
    <div>
      <img src={player.picture} alt="gravatar photo" />
      <p>{player.name}</p>
      <p>{player.score}</p>
    </div>
  );
}

RankList.propTypes = {
  player: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RankList;
