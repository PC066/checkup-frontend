import React from "react";
require("./scale.scss");

class Scale extends React.Component {
  _handleChange() {
    return event => {
      this.props.addAnswer(this.props.id, event.currentTarget.value);
    }
  }

  render() {
    return(
      <div className="question-container scale-question-container">
        <input
          className="custom-range"
          type="range"
          min="0"
          max={this.props.options.length - 1}
          onChange={this._handleChange()}
          value={this.props.value || 0}
        />
        <div className="slider-value-display">{this.props.options[this.props.value || 0]}</div>
      </div>
    )
  }
}

export default Scale;
