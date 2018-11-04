import React from "react";
import { camelCase } from "lodash";
import MultipleChoice from "./question_types/MultipleChoice.jsx";
import Scale from "./question_types/Scale.jsx";
import Boolean from "./question_types/Boolean.jsx";

const COMPONENTS = {
  multiple_choice: MultipleChoice,
  scale: Scale,
  boolean: Boolean
}

class Question extends React.Component {
  _renderActiveClass() {
    return this.props.index === 0 ? "active" : "";
  }

  _renterNext() {
    return(
      <a className="carousel-next carousel-nav-button" href="#question-carousel-container" role="button" data-slide="next" key="next">Next</a>
    )
  }
  _renterPrevious() {
    return(
      <a className="carousel-prev carousel-nav-button" href="#question-carousel-container" role="button" data-slide="prev" key="previous">Previous</a>
    )
  }
  _renterSubmit(){
    return(
      <a className="carousel-submit carousel-nav-button" role="button" key="submit">Submit</a>
    )
  }

  _renderButtons() {
    if(this.props.numQuestions === 1) {
      return [ this._renterSubmit() ]
    } else if(this.props.index === 0) {
      return [ this._renterNext() ]
    } else if(this.props.index === this.props.numQuestions - 1) {
      return [ this._renterPrevious(), this._renterSubmit() ]
    } else {
      return [ this._renterPrevious(), this._renterNext() ]
    }
  }

  _renderQuestionType() {
    let component = COMPONENTS[this.props.question.question_type];
    return React.createElement(component, { options: this.props.question.options });
  }

  render() {
    return(
      <div className={`carousel-item ${this._renderActiveClass()}`}>
        <h1>{this.props.question.title}</h1>
        {this._renderQuestionType()}
        <div className="carousel-nav-buttons">
          {this._renderButtons()}
        </div>
      </div>
    )
  }
}

export default Question;
