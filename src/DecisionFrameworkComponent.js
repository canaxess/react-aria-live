import React from "react";
import AlertComponent from "./AlertComponent";

class DecisionFrameworkComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sJSframework: "",
      sCSSframework: "",
      APIerror: "no API errors"
    };
  }

  componentDidMount() {
    //problem with regular function had to use arrow notation for 'this'
    //hard coded URL needs to be removed
    fetch("https://canaxess-immersive-reader.herokuapp.com/getframework/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          sJSframework: data.JSframework,
          sCSSframework: data.CSSframework
        });
      })
      .catch((error) => this.setState({ APIerror: error.toString()}))
    }
  
  render() {
    let cssframework = this.state.sCSSframework;
    //prevent CSS from caching
    let date = new Date();
    let milliseconds = date.getTime();

    if (cssframework === "BOOTSTRAP") {
      return (
        <div className="grid">
          <link rel="stylesheet" type="text/css" href={"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css?" + milliseconds} />
          <AlertComponent isCustomLiveRegion={true} ariaLive="polite" ariaAtomic={false} ariaRelevant="additions" message={this.state.APIerror}/>
          <AlertComponent messageType="status" message={this.state.sCSSframework}/> 
          <AlertComponent messageType="alert" message={this.state.sJSframework}/> 
        </div>
      );
    }
    else {
    return (
      <div className="grid">
          <link rel="stylesheet" href={"https://cdnjs.cloudflare.com/ajax/libs/foundation/6.6.3/css/foundation.min.css?" + milliseconds} />
          <AlertComponent isCustomLiveRegion={true} ariaLive="polite" ariaAtomic={false} ariaRelevant="additions" message={this.state.APIerror}/>
          <AlertComponent messageType="status" message={this.state.sCSSframework}/> 
          <AlertComponent messageType="status" message={this.state.sJSframework}/> 
      </div>);
    }
  }
}

export default DecisionFrameworkComponent;