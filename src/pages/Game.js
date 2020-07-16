import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './pagesComponents/Header';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 30,
      questionIndex: 0,
      randomIndexes: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { questions } = this.props;
    if (questions !== prevProps.questions && questions.length) {
      this.createAnswerIndexes();
    }
  }

  getRandomIndex(length){
    return Math.round(Math.random() * length);
  }

  randomAnswers() {
    const { questions } = this.props;
    const { randomIndexes, questionIndex } = this.state;
    const answers = questions[questionIndex].incorrect_answers.map((answer) => answer);
    answers.splice(randomIndexes[questionIndex], 0, questions[questionIndex].correct_answer);
    return answers;
  }

  createAnswerIndexes() {
    const { questions } = this.props;
    const index = Object.values(questions)
      .map((question) => this.getRandomIndex(question.incorrect_answers.length));
    this.setState({ randomIndexes: index });
  }

  render() {
    const { questions } = this.props;
    const { questionIndex, randomIndexes } = this.state;
    if (questions.length < 1) return <div>Loading...</div>
    return (
      <div>
        <Header />
        <div>
          <div>
            <h3>{questions[questionIndex].question}</h3>
            {console.log(questions[questionIndex].correct_answer)}
            {console.log(randomIndexes)}
            {console.log(this.randomAnswers())}
            {this.randomAnswers().map((answer) => (
              answer === questions[questionIndex].correct_answer ?
                <p><b>{answer}</b></p> : <p>{answer}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  questions: state.apiReducer.questions,
});

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapState)(Game);
