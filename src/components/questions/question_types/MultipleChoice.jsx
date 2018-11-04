import React from "react";
require("./multiple_choice.scss");

class MultipleChoice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null
    }
  }

  _handleSelect(idx) {
    return () => {
      this.setState({ selected: idx })
    }
  }

  _renderSelectedClass(idx) {
    return idx === this.state.selected ? "selected" : "";
  }

  render() {
    return(
      <div className="multiple-choice-question-container">
        {
          this.props.options.map((image_name, idx) => (
            <label key={idx}>
              <input type="radio" value={idx} name="smiley" onClick={this._handleSelect(idx)} />
              <img
                alt={image_name}
                className={`multiple-choice-img ${this._renderSelectedClass(idx)}`}
                id="smile-0"
                src={`/images/${image_name}.png`}
              />
            </label>
          ))
        }
      </div>
    )
  }
}

export default MultipleChoice;
