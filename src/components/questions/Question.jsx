import React from "react";
import { camelCase } from "lodash";
import MultipleChoice from "./question_types/MultipleChoice.jsx";
import Scale from "./question_types/Scale.jsx";
import Boolean from "./question_types/Boolean.jsx";
import ShortResponse from "./question_types/ShortResponse.jsx";

const COMPONENTS = {
  boolean: Boolean,
  multiple_choice: MultipleChoice,
  scale: Scale,
  short_response: ShortResponse,
}

class Question extends React.Component {

  _addAnswer(...params) {
    this.props.addAnswer(...params);
  }

  _renderActiveClass() {
    return this.props.index === 0 ? "active" : "";
  }

  _progressDisabled() {
    return this.props.value === undefined;
  }

  _renterNext() {
    return(
      <button
        className="btn btn-danger"
        data-slide="next"
        disabled={this._progressDisabled()}
        href="#question-carousel-container"
        key="next"
        role="button"
      >
        Next
      </button>
    )
  }
  _renterPrevious() {
    return(
      <button
        className="btn btn-secondary"
        data-slide="prev"
        href="#question-carousel-container"
        key="previous"
        role="button"
      >
        Previous
      </button>
    )
  }
  _renterSubmit(){
    return(
      <button
        className="btn btn-success"
        data-slide="next"
        disabled={this._progressDisabled()}
        href="#question-carousel-container"
        key="submit"
        onClick={this.props.submit}
        role="button"
      >
        Submit
      </button>
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
    return React.createElement(
      component, {
        id: this.props.question.id,
        options: this.props.question.options,
        addAnswer: this._addAnswer.bind(this),
        value: this.props.value
      }
    );
  }

  render() {
    return(
      <div className={`carousel-item ${this._renderActiveClass()}`}>
        <h1>{this.props.question.title}</h1>
        {this._renderQuestionType()}
        <div className="carousel-nav-buttons-container">
          {this._renderButtons()}
        </div>
      </div>
    )
  }
}

export default Question;
