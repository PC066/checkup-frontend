import React from "react";


class Question extends React.Component {
  _renderActiveClass() {
    return this.props.active ? "active" : "";
  }

  render() {
    return(
      <div className={`carousel-item ${this._renderActiveClass()}`}>
        <h1>{this.props.question.title}</h1>
      </div>
    )
  }
}

export default Question;
