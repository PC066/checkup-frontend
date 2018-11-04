import React from "react";
require("./boolean.scss");

const IMAGE_NAMES = [ "check", "x" ];

class Boolean extends React.Component {

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
      <div className="question-container boolean-question-container">
        {
          this.props.options.map((image_name, idx) => (
            <label key={idx}>
              <input type="radio" value={idx} name={this.props.id} onClick={this._handleSelect(idx)} />
              <img
                alt={image_name}
                className={this._renderSelectedClass(idx)}
                src={`/images/${image_name}.png`}
              />
            </label>
          ))
        }
      </div>
    )
  }
}

export default Boolean;
