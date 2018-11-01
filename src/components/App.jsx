import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    debugger;
    // const acessToken = window.location;
    this.state = {
      accessToken: null
    }
  }

  async _fetchAccessToken() {

  }

  render() {
    return(
      <div>
        <h1>App</h1>
      </div>
    )
  }
}

export default App;
