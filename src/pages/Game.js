import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './pagesComponents/Header';

const getRandomIndex = (length) => Math.round(Math.random() * length);

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 30,
      questionIndex: 0,
      randomIndexes: [],
      correctAnswer: '',
      incorrectAnswer: '',
      disabled: false,
      disableNext: true,
    };
  }

  componentDidUpdate(prevProps) {
    const { questions } = this.props;
    if (questions !== prevProps.questions && questions.length) {
      this.createAnswerIndexes();
    }
  }

  changeStatusAnswers() {
    this.setState({
      correctAnswer: 'green-border',
      incorrectAnswer: 'red-border',
      disabled: true,
      disableNext: false,
    });
  }

  correctAnswer() {
    const { questions } = this.props;
    const { correctAnswer, disabled, questionIndex } = this.state;
    return (
      <li key="6">
        <button
          type="button"
          data-testid="correct-answer"
          disabled={disabled}
          className={`answer-button ${correctAnswer}`}
          onClick={() => this.changeStatusAnswers()}
        >
          {questions[questionIndex].correct_answer}
        </button>
      </li>
    );
  }

  incorrectAnswers(answer, index) {
    const { incorrectAnswer, disabled } = this.state;
    return (
      <li key={index}>
        <button
          type="button"
          data-testid={`wrong-answer-${index}`}
          disabled={disabled}
          className={`answer-button ${incorrectAnswer}`}
          onClick={() => this.changeStatusAnswers()}
        >
          {answer}
        </button>
      </li>
    );
  }

  randomAnswers() {
    const { questions } = this.props;
    const { randomIndexes, questionIndex } = this.state;
    const answers = questions[questionIndex].incorrect_answers
      .map((answer, index) => this.incorrectAnswers(answer, index));
    answers.splice(randomIndexes[questionIndex], 0, this.correctAnswer());
    return answers;
  }

  createAnswerIndexes() {
    const { questions } = this.props;
    const index = Object.values(questions)
      .map((question) => getRandomIndex(question.incorrect_answers.length));
    this.setState({ randomIndexes: index });
  }

  buttonNext() {
    const { disableNext } = this.state;
    return (
      <button
        data-testid="btn-next"
        onClick={() => this.nextQuestion()}
        className="btn-next"
        disabled={disableNext}
      >
        NEXT
      </button>
    );
  }

  render() {
    const { questions } = this.props;
    const { questionIndex, randomIndexes } = this.state;
    if (questions.length < 1) return <div>Loading...</div>;
    return (
      <div>
        <Header />
        <div>
          <div>
            <h3>{questions[questionIndex].question}</h3>
            {console.log(questions[questionIndex].correct_answer)}
            {console.log(randomIndexes)}
            {console.log(this.randomAnswers())}
            <ul>
              {this.randomAnswers()}
            </ul>
            {this.buttonNext()}
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
