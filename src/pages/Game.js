import React, { Component } from 'react';
import Header from './pagesComponents/Header';
import { connect } from 'react-redux';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 30,
      questionIndex: 0,
    };
  }

  render() {
    const { questions } = this.props;
    const { questionIndex } = this.state;
    if (questions.length < 1) return <div>Loading...</div>;
    return (
      <div>
        <Header />
        <div>
          <div>
            {/* <h3>{question[0].incorrect_answers}</h3> */}
            {console.log(questions[0].type)};{console.log(questionIndex)};
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  token: state.apiReducer.token,
  questions: state.apiReducer.questions,
});

export default connect(mapState)(Game);
