import React from "react";

class GoodOkayBad extends React.Component {
  _handleSmileSelect(idx) {

  }

  render() {
    return(
      <div>
        <label>
          <input type="radio" value="0" name="smiley" onClick="_handleSmileSelect(0)">
          <img class="smile-img" id="smile-0" src="./images/frown.png" width="98">
        </label>
        <label>
          <input type="radio" value="1" name="smiley" onClick="_handleSmileSelect(1)">
          <img class="smile-img" id="smile-1" src="./images/neutral.png" width="98">
        </label>
        <label>
          <input type="radio" value="2" name="smiley" onClick="_handleSmileSelect(2)">
          <img class="smile-img" id="smile-2" src="./images/smile.png" width="98">
        </label>
      </div>
    )
  }
}

export default GoodOkayBad;
