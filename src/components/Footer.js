import FormAddComm from "./Comments/FormAddComm";
import Comments from "./Comments/Comments";
import { useState } from "react";
import "./Footer.css";

const Footer = (props) => {
  // Creeating functions for show and hide comment list
  const [isDisplay, setIsDisplay] = useState(false);
  const showCommentsHandler = (e) => {
    e.preventDefault();
    setIsDisplay(true);
  };
  const hideCommentsHandler = (e) => {
    e.preventDefault();
    setIsDisplay(false);
  };
  return (
    <div className="footer">
      <FormAddComm addCommentHandler={props.addCommentHandler} />

      {/* Button for show using booleanl*/}
      {!isDisplay && (
        <button className="btn-show-comm" onClick={showCommentsHandler}>
          Show Comment
        </button>
      )}
      {isDisplay && (
        <div>
          <Comments
            //   passing function and data with props
            hideCommentsHandler={hideCommentsHandler}
            commentsData={props.commentsData}
            // addLikeHandler={props.addLikeHandler}
          />
        </div>
      )}
    </div>
  );
};

export default Footer;
