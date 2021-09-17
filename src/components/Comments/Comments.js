import React from 'react'
import CommentList from "./CommentList";
import "./Comments.css";

const Comments = (props) => {
  const mapComments = props.commentsData;

  return (
    <div className="comments-box">
      {/* Mapping on the array and display Comment elemen with a key equal to comm id */}
      {mapComments.map((comm) => (
        <CommentList
          key={comm.id}
          comm={comm}
        />
      ))}
      {/* Buttn for hide comment list */}

      <button className="btn-hide-comm" onClick={props.hideCommentsHandler}>
        Hide Comments
      </button>

      <span className="span-number-comm">
        Number of comments: {mapComments.length}
      </span>
    </div>
  );
};

export default Comments;
