import React from "react";
import "./submission_page.scss";

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <h3>Thank you! You have earned:</h3>
        <div id="earnings-container">
          <div className="earned-container">
            <img src="/images/coin.png" alt="coin" />
            <div className="earned-value">+$10.00</div>
            <div className="earned-suffix">credit</div>
          </div>
          <div className="earned-container">
            <img src="/images/team2.png" alt="logo" />
            <div className="earned-value">+100 points</div>
            <div className="earned-suffix">for your team</div>
          </div>
        </div>
        <h3>Team Scores</h3>


      </div>
    )
  }

}

export default App;
