import React from "react";

class AlertComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if(this.props.isCustomLiveRegion){
        return <div aria-live={this.props.ariaLive ? this.props.ariaLive : "assertive"} aria-atomic={this.props.ariaAtomic ? this.props.ariaAtomic : "true"} aria-relevant={this.props.ariaRelevant ? this.props.ariaRelevant : "all"} className={this.props.cssframework.toLowerCase() === "bootstrap" ? "alert alert-secondary" : "callout secondary"}>{this.props.message}</div>;
    }
    else
    {
        let message = this.props.messageType ? this.props.messageType : "status";
        
        switch(message) {
            case "log":
                return <div role="log" className={this.props.cssframework.toLowerCase() === "bootstrap" ? "alert alert-secondary" : "callout secondary"}>{this.props.message}</div>;
            case "status":
                return <div role="status" className={this.props.cssframework.toLowerCase() === "bootstrap" ? "alert alert-primary" : "callout primary"}>{this.props.message}</div>;
            case "alert":
                return <div role="alert" className={this.props.cssframework.toLowerCase() === "bootstrap" ? "alert alert-danger" : "callout alert"}>{this.props.message}</div>;
            default:
                return <div role="alert">incorrect aria live region role</div>;
          }
    }
  }
}

export default AlertComponent;