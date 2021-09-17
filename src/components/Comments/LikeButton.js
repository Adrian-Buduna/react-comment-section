import { AiFillLike } from "react-icons/ai";
import "./LikeButton.css";
import { useState } from "react";
const LikeButton = (props) => {
  // add like handler
  const [isLiked, setIsliked] = useState(props.comm.like);
  const onAddLikeHandler = (e) => {
    e.preventDefault();
    setIsliked(props.comm.addLike());
  };
  return (
    // return like button elements
    <div className="like-box">
      <div className="likes">{isLiked}</div>
      <button onClick={onAddLikeHandler} className="btn-like">
        <AiFillLike />
      </button>
    </div>
  );
};

export default LikeButton;
