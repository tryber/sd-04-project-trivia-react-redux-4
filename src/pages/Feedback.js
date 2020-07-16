import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './pagesComponents/Header';

class Feedback extends Component {
  handleFeedback() {
    const { assertions } = this.props.player;
    if (assertions >= 3) return 'Mandou Bem!';
    else return 'Podia ser melhor...';
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <h2 data-testid="header-score">{this.handleFeedback()}</h2>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  player: state.userReducer.player,
});

export default connect(mapState)(Feedback);
