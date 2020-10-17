import React from "react";

class AlertComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if(this.props.isCustomLiveRegion){
        return <div aria-live={this.props.ariaLive ? this.props.ariaLive : "assertive"} aria-atomic={this.props.ariaAtomic ? this.props.ariaAtomic : "true"} aria-relevant={this.props.ariaRelevant ? this.props.ariaRelevant : "all"} className="alert alert-info">{this.props.message}</div>;
    }
    else
    {
        let message = this.props.messageType ? this.props.messageType : "status";
        switch(message) {
            case 'log':
                return <div role="log" className="alert alert-secondary">{this.props.message}</div>;
            case 'status':
                return <div role="status" className="alert alert-primary">{this.props.message}</div>;
            case 'alert':
                return <div role="alert" className="alert alert-danger">{this.props.message}</div>;
            default:
                return <div role="alert">incorrect aria live region role</div>;
          }
    }
  }
}

export default AlertComponent;