import "./FormAddComm.css";
import React, { useState } from "react";
import { upperCaseFirstLeterString, anonimName } from "../Functions/Functions";
const FormAddComm = (props) => {
  const [isName, setIsName] = useState("");
  const [isText, setIsText] = useState("");
  // Adding data to array
  const onAddComm = (e) => {
    e.preventDefault();
    //  use functions for change data
    const filtredName = anonimName(isName);
    const filtredText = upperCaseFirstLeterString(isText);
    // creating an object containing data from input and textarea
    const comment = {
      id: Math.random().toString(),
      name: filtredName,
      text: filtredText,
      like: 0,
      addLike: function () {
        return this.like++;
      },
      date: new Date(),
    };
    // set conditions for pushing data to array
    if (
      (isName !== "") &
      (isText !== "") &
      (isText.length < 500) &
      (isName.length < 30)
    )
      // Use function to push object in array
      // Function was created in App.js
      props.addCommentHandler(comment);

    // set input and textarea empty
    setIsName("");
    setIsText("");
  };
  //Functions handlers to select values from input and textarea
  const nameChangeHandler = (e) => {
    setIsName(e.target.value);
  };
  const textChangeHandler = (e) => {
    setIsText(e.target.value);
  };
  return (
    // Return form with elements used for ading comments
    <form onSubmit={onAddComm} className="form-add-comment">
      <div className="upper-form">
        <input
          value={isName}
          onChange={nameChangeHandler}
          placeholder="name..."
          className="input-name"
        />
        <button type="submit" className="btn-add-comment">
          Add Comment
        </button>
      </div>
      <textarea
        value={isText}
        onChange={textChangeHandler}
        placeholder="comment someting..."
        className="textarea-comment"
      />
    </form>
  );
};

export default FormAddComm;
