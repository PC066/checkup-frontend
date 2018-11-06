import React from "react";
import Routes from "../constants/routes";
import Question from "./questions/Question.jsx"
import "./questions/question_carousel.scss"
import "./app.scss";


class App extends React.Component {
  constructor(props){
    super(props);
    const location = window.location.href.split("/");
    const digestKey = location[location.length - 1]
    this.state = {
      digestKey: digestKey,
      questions: [],
      answers: {},
      loading: true,
    }
  }

  async componentDidMount() {
    const questions = await this._fetchQuestions();
    this.setState({
      questions: questions,
      loading: false
    })
  }

  async _fetchQuestions() {
    const response = await fetch(Routes.getQuestionnairePath(this.state.digestKey));
    const responseJson = await response.json();
    return responseJson.questionnaire_submission.questions
  }

  _addAnswer(id, value) {
    var answers = {...this.state.answers}
    answers[id] = value;
    this.setState({ answers });
  }

  _handleSubmit(event) {
    // format answers as expected by api
    let questionIds = Object.keys(this.state.answers);
    questionIds = questionIds.map(el => parseInt(el));
    const answers = questionIds.map(id => ({
      question_id: id,
      value: this.state.answers[id]
    }));
    return fetch(
      Routes.postQuestionnairePath(this.state.digestKey), {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ questionnaire_submission: { answers } })
      }
    )
  }

  _renderLoading() {
    return "Loading...";
  }

  questionCarousel() {
    return(
      <div id="question-carousel-container" className="carousel slide" data-interval="false">
        <div className="carousel-inner">
          {
            this.state.questions.map(
              (question, idx) => (
                <Question
                  addAnswer={this._addAnswer.bind(this)}
                  index={idx}
                  key={idx}
                  numQuestions={this.state.questions.length}
                  question={question}
                  submit={this._handleSubmit.bind(this)}
                  value={this.state.answers[question.id]}
                />
              )
            )
          }
          <div className="carousel-item">
            <h1>Thank You!</h1>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return(
      <div id="app-container">
        <header><img src="/public/images/logo.png" alt="Health Rewards"/></header>
        { this.state.loading ? this._renderLoading() : this.questionCarousel() }
      </div>
    )
  }
}

export default App;
