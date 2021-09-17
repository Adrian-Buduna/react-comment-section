import { useState } from "react";
import Footer from "./components/Footer";
// dummy data
const commentsDataStored = [
  {
    id: "a1",
    name: "Adrian",
    text: "Hello world!",
    like: 0,
    addLike: function (){return this.like++},
    date: new Date(2021, 8, 10, 13, 14),
  },
];
function App() {
  // Adding comment to array
  const [commentsData, setComents] = useState(commentsDataStored);
  const addCommentHandler = (comment) => {
    setComents((commentsDataStored) => {
      commentsDataStored.push(comment);
      return [...commentsDataStored];
    });
  };
  return (
    <div className="App">
      <Footer
        // addLikeHandler={addLikeHandler}
        addCommentHandler={addCommentHandler}
        commentsData={commentsData}
      />
    </div>
  );
}

export default App;
