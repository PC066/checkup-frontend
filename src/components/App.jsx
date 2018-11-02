import React from "react";
import QuestionCarousel from "./QuestionCarousel";

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
    return await fetch(`user_questionnaires/${this.state.accessToken}`)
  }

  _renderLoading() {
    return "Loading..."
  }

  questionCarousel() {
    return <QuestionCarousel questions={this.state.questions}/>
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
