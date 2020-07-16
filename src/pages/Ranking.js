import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Ranking() {
  return (
    <div>
      <Link data-testid="btn-go-home" to="/">
        Home
      </Link>
    </div>
  );
}

const mapState = (state) => ({
  name: state.userReducer.player.name,
  gravatar: state.userReducer.player.gravatarEmail,
});

export default connect(mapState)(Ranking);
