import React, { Component } from "react";

class ApprovalCard extends Component {
  componentDidMount(): void {
    this.setState(this.props);
  }
  public render(): JSX.Element {
    return (
      <div className="ui card">
        <div className="content">{this.props.children}</div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Reject</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApprovalCard;
