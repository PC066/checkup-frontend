import React from "react";
import QuestionCarousel from "./questions/QuestionCarousel";
import Routes from "../constants/routes";
require("./app.scss");

class App extends React.Component {
  constructor(props){
    super(props);
    const location = window.location.href.split("/");
    const accessToken = location[location.length - 1]
    this.state = {
      accessToken: accessToken,
      questions: [],
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
    const response = await fetch(Routes.userquestionnairePath(this.state.accessToken));
    const responseJson = await response.json();
    return responseJson.questionnaire_submission.questions
  }

  _renderLoading() {
    return "Loading...";
  }

  questionCarousel() {
    return <QuestionCarousel questions={this.state.questions} accessToken={this.state.accessToken}/>
  }

  render() {
    return(
      <div id="app-container">
        { this.state.loading ? this._renderLoading() : this.questionCarousel() }
      </div>
    )
  }
}

export default App;
