import React from 'react';
import { Link } from 'react-router-dom';
import RankList from './pagesComponents/RankList';

const Ranking = () => {
  const rankLine =
    localStorage.getItem('ranking') !== null
      ? JSON.parse(localStorage.getItem('ranking'))
      : { player: { name: '', score: '', picture: '' } };
  return (
    <div>
      <div>
        <h2 data-testid="ranking-title">Ranking</h2>
        {rankLine
          .map((player, index) => <RankList key={player.id} player={player} index={index} />)
          .sort((a, b) => {
            if (a.player.score > b.player.score) return 1;
            if (a.player.score < b.player.score) return -1;
            return 0;
          })}
      </div>

      <Link data-testid="btn-go-home" to="/">
        Home
      </Link>
    </div>
  );
};

export default Ranking;
