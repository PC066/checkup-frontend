import React from "react";
import Question from "./Question"

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
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <form method="post" action={`/user_questionnaires/${this.props.accessToken}/submit`}>
            { this.props.questions.map( (question, idx) => <Question question={question} key={idx} active={idx == 0} /> ) }
          </form>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

export default QuestionCarousel;

// <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//   <ol className="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       First slide
//     </div>
//     <div className="carousel-item">
//       Second slide
//     </div>
//     <div className="carousel-item">
//       Third slide
//     </div>
//   </div>
//   <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="sr-only">Previous</span>
//   </a>
//   <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="sr-only">Next</span>
//   </a>
// </div>
