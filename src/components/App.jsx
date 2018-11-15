import React from "react";
import Routes from "../constants/routes";
import Question from "./questions/Question.jsx"
import SubmissionPage from "./SubmissionPage.jsx"
import "./questions/question_carousel.scss"
import "./app.scss";

const REGEX_MATCHER = /\w*\/*$/g;

class App extends React.Component {
  constructor(props){
    super(props);
    const digestKey = window.location.href.match(REGEX_MATCHER)[0].replace("/", "")
    this.state = {
      digestKey: digestKey,
      questionnaire: {},
      answers: {},
      loading: true,
    }
  }

  async componentDidMount() {
    const questionnaire = await this._fetchQuestionnaire();
    this.setState({
      questionnaire: questionnaire,
      loading: false
    })
  }

  async _fetchQuestionnaire() {
    const response = await fetch(Routes.getQuestionnairePath(this.state.digestKey));
    const responseJson = await response.json();
    return responseJson.questionnaire_submission
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

  _renderAlreadySubmitted() {
    return "Already Submitted, Thank You!";
  }

  _renderQuestionCarousel() {
    return(
      <div id="question-carousel-container" className="carousel slide" data-interval="false">
        <div className="carousel-inner">
          {/*{
            this.state.questionnaire.questions.map(
              (question, idx) => (
                <Question
                  addAnswer={this._addAnswer.bind(this)}
                  index={idx}
                  key={idx}
                  numQuestions={this.state.questionnaire.questions.length}
                  question={question}
                  submit={this._handleSubmit.bind(this)}
                  value={this.state.answers[question.id]}
                />
              )
            )
          }*/}
          <div className="carousel-item active">
            <SubmissionPage />
          </div>
        </div>
      </div>
    );
  }

  _renderContent() {
    if(this.state.loading) {
      return this._renderLoading();
    } else if(this.state.questionnaire.status == "submitted") {
      return this._renderAlreadySubmitted();
    } else {
      return this._renderQuestionCarousel()
    }
  }

  render() {
    return(
      <div id="app-container">
        <header><img src="/images/logo.png" alt="Health Rewards"/></header>
        { this._renderContent() }
      </div>
    )
  }
}

export default App;
