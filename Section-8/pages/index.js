import { useRef, useState } from "react";

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const [feedbackItems, setFeedBackItems] = useState([]);

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const response = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        text: enteredFeedback,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  };

  const loadFeedbackHandler = () => {
    console.log("triggered");
    fetch("/api/feedback", { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeedBackItems(data.feedback);
      });
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input ref={emailInputRef} type="email" id="email" />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea ref={feedbackInputRef} id="feedback" rows="5" />
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
}

export default HomePage;
