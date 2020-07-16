import React from 'react';

function RankList({ player }) {
  return (
    <div>
      <img src={player.picture} />
      <p>{player.name}</p>
      <p>{player.score}</p>
    </div>
  );
}

export default RankList;
