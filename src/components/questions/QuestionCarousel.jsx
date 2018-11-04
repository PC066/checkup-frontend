import React from "react";
import Question from "./Question.jsx"
import "./question_carousel.scss"

class QuestionCarousel extends React.Component {

  _renderIndicators() {
    return(
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
    )
  }

  render() {
    return(
      <div id="question-carousel-container" className="carousel slide" data-interval="false">
        <div className="carousel-inner">
          <form method="post" action={`/user_questionnaires/${this.props.accessToken}/submit`}>
            {
              this.props.questions.map(
                (question, idx) => <Question question={question} key={idx} index={idx} numQuestions={this.props.questions.length} />
              )
            }
          </form>
        </div>
      </div>
    )
  }
}

export default QuestionCarousel;
