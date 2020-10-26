import React, { Component } from "react";
import { ICommentDetail } from "./model";

export type ICommentDetailProps = ICommentDetail;

class CommentDetail extends Component<ICommentDetailProps> {
  componentDidMount(): void {
    this.setState(this.props);
  }
  public render(): JSX.Element {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img src={this.props.image} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {this.props.author}
          </a>
          <div className="metadata">
            <span className="date">{this.props.date}</span>
          </div>
          <div className="text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default CommentDetail;
