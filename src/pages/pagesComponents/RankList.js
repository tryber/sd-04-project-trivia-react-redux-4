import React from 'react';
import PropTypes from 'prop-types';

function RankList({ player }) {
  return (
    <div>
      <img src={player.picture} />
      <p>{player.name}</p>
      <p>{player.score}</p>
    </div>
  );
}

RankList.propTypes = {
  player: PorpTypes.arrayOf(PropTypes.string).isRequerid,
};

export default RankList;
