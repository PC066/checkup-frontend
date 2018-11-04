import React from "react";
require("./boolean.scss");

const IMAGE_NAMES = [ "check", "x" ];

class Boolean extends React.Component {
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
      <div className="boolean-question-container">
        {
          this.props.options.map((image_name, idx) => (
            <label key={idx}>
              <input type="radio" value={idx} name="Boolean" onClick={this._handleSelect(idx)} />
              <img
                alt={image_name}
                className={`Boolean ${this._renderSelectedClass(idx)}`}
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

export default Boolean;
