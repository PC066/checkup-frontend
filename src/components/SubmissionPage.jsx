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
        <h3>Team Scores:</h3>
        <div id="score-chart">
          <div className="bar-container">
            <img src="/images/team1.png" />
            <div className="bar">Team Heart Disease</div>
            <div className="points-container">4,500 pts</div>
          </div>
          <div className="bar-container">
            <img src="/images/team2.png" />
            <div className="bar">Team Diabetes</div>
            <div className="points-container">4,150 pts</div>
          </div>
          <div className="bar-container">
            <img src="/images/team3.png" />
            <div className="bar">Team B Cancer</div>
            <div className="points-container">3,650 pts</div>
          </div>
          <div className="bar-container">
            <img src="/images/team4.png" />
            <div className="bar">Team HIV</div>
            <div className="points-container">2,900 pts</div>
          </div>

        </div>


      </div>
    )
  }

}

export default App;
