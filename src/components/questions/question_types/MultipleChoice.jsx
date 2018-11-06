import React from "react";
require("./multiple_choice.scss");

class MultipleChoice extends React.Component {

  _handleSelect(idx) {
    return () => {
      this.props.addAnswer(this.props.id, idx);
    }
  }

  _renderSelectedClass(idx) {
    return idx === this.props.value ? "selected" : "";
  }

  render() {
    return(
      <div className="question-container multiple-choice-question-container">
        {
          this.props.options.map((image_name, idx) => (
            <label key={idx}>
              <input type="radio" value={idx} name={this.props.id} onClick={this._handleSelect(idx)} />
              <img
                alt={image_name}
                className={this._renderSelectedClass(idx)}
                src={`/public/images/${image_name}.png`}
              />
            </label>
          ))
        }
      </div>
    )
  }
}

export default MultipleChoice;
