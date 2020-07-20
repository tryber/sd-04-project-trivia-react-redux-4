import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RankList from './pagesComponents/RankList';

const Ranking = (pros) => {
  const rankLine =
    localStorage.getItem('ranking') !== null
      ? JSON.parse(localStorage.getItem('player'))
      : { player: { name: '', score: '', picture: '' } };
  return (
    <div>
      <div>
        <h2 data-testid="ranking-title">Ranking</h2>
        {rankLine.map((player, index) => (
          <RankList key={player.id} player={player} index={index} />
        ))}
        <p>{name}</p>
        <p>{score}</p>
      </div>

      <Link data-testid="btn-go-home" to="/">
        Home
      </Link>
    </div>
  );
};

export default Ranking;
