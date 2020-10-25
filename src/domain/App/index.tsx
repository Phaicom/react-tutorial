import React from "react";
import CommentDetail, { ICommentDetailProps } from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";
// import logo from "../../assets/images/logo.svg";
// import "./index.scss";

const comments: ICommentDetailProps[] = [];
for (let i = 0; i < 5; i++) {
  const comment = {
    author: faker.name.firstName(),
    image: faker.image.avatar(),
    date:
      "Today at " +
      faker.date.recent().toISOString().split("T")[1].split(".")[0],
    text: faker.lorem.sentence(),
  };
  comments.push(comment);
}

const App = (): JSX.Element => {
  return (
    <div className="ui container comments">
      {comments.map((comment, id) => {
        return (
          <ApprovalCard key={id}>
            <CommentDetail {...comment} />
          </ApprovalCard>
        );
      })}
    </div>
  );
};

export default App;
