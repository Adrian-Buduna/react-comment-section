import "./CommentList.css";
import DateComm from "./DateComm";
import LikeButton from "./LikeButton";

const CommentList = (props) => {
  const date = props.comm.date;
  return (
    // returning comment element that displays date from array
    <form className="comment-wrappeded">
      <div>
        <h2 className="name-comm">{props.comm.name}</h2>
        <p className="text-comm">{props.comm.text}</p>
        <div className="date-style">
          {/* Display date element and passing date data from array */}
          <DateComm date={date} />
        </div>
      </div>

      <LikeButton comm={props.comm} />
    </form>
  );
};

export default CommentList;
