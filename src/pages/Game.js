import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './pagesComponents/Header';
import { userScore } from '../actions/userAction';

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
      hideNextButton: 'hide',
      remainingTime: 0,
      assertions: 0,
    };
  }

  componentDidMount() {
    this.timerInit();
  }

  componentDidUpdate(prevProps) {
    const { questions } = this.props;
    if (questions !== prevProps.questions && questions.length) {
      this.createAnswerIndexes();
    }
  }

  addAssertions() {
    const { player } = this.props;
    return player.assertions + 1;
  }

  calculateScore() {
    const { timer, questionIndex } = this.state;
    const { difficulty } = this.props.questions[questionIndex];
    const { player } = this.props;
    const dif = { hard: 3, medium: 2, easy: 1 };
    return player.score + (10 + (timer * dif[difficulty]));
  }

  timerInit() {
    const remainingTime = setInterval(() => {
      const { timer } = this.state;
      if (timer > 0) {
        this.setState((state) => ({ timer: state.timer - 1 }));
      } else {
        clearInterval(remainingTime);
        this.changeStatusAnswers();
      }
    }, 1000);
    this.setState({ remainingTime });
  }

  changeStatusAnswers() {
    const { remainingTime } = this.state;
    this.setState({
      correctAnswer: 'green-border',
      incorrectAnswer: 'red-border',
      disabled: true,
      hideNextButton: '',
    });
    clearInterval(remainingTime);
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
          onClick={() => {
            this.changeStatusAnswers();
            this.props.userScore(
              { score: this.calculateScore(), assertions: this.addAssertions() },
            );
          }}
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
    const answers = questions[questionIndex].incorrect_answers.map((answer, index) =>
      this.incorrectAnswers(answer, index),
    );
    answers.splice(randomIndexes[questionIndex], 0, this.correctAnswer());
    return answers;
  }

  createAnswerIndexes() {
    const { questions } = this.props;
    const index = Object.values(questions).map((question) =>
      getRandomIndex(question.incorrect_answers.length),
    );
    this.setState({ randomIndexes: index });
  }

  nextQuestion() {
    const { questionIndex } = this.state;
    const { history } = this.props;
    if (questionIndex === 4) {
      history.push('/feedback');
    } else {
      this.setState({
        timer: 30,
        questionIndex: questionIndex + 1,
        correctAnswer: '',
        incorrectAnswer: '',
        disabled: false,
        hideNextButton: 'hide',
      });
      this.timerInit();
    }
  }

  buttonNext() {
    const { hideNextButton } = this.state;
    return (
      <button
        type="button"
        data-testid="btn-next"
        onClick={() => this.nextQuestion()}
        className={`btn-next ${hideNextButton}`}
      >
        NEXT
      </button>
    );
  }

  render() {
    const { questions } = this.props;
    const { questionIndex, timer } = this.state;
    if (questions.length < 1) return <div>Loading...</div>;
    return (
      <div>
        <Header />
        <div>
          <div>
            <h3 data-testid="question-category">{questions[questionIndex].category}</h3>
            <h4 data-testid="question-text">{questions[questionIndex].question}</h4>
            {timer}
            <ul>{this.randomAnswers()}</ul>
            {questions[questionIndex].correct_answer}
            {this.buttonNext()}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  questions: state.apiReducer.questions,
  player: state.userReducer.player,
});

const mapDispatch = (dispatch) => ({
  userScore: (score) => dispatch(userScore(score)),
});

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  player: PropTypes.objectOf(PropTypes.any).isRequired,
  userScore: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(Game);
