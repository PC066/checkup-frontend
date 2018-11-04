import React from "react";
require("./short_response.scss");

class ShortResponse extends React.Component {
  _handleChange() {
    return event => {
      this.props.addAnswer(this.props.id, event.currentTarget.value);
    }
  }

  render() {
    return(
      <div className="question-container short-response-question-container">
        <textarea
          onChange={this._handleChange()}
          placeholder="Enter response here..."
          value={this.props.value}
        />
      </div>
    )
  }
}

export default ShortResponse;
