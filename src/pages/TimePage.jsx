import "../styles.css";
import { useNavigate } from "react-router-dom";

function TimePage() {

    const navigate = useNavigate();
  return (
    <div className="container">
      <h1>I Understand ❤️</h1>

      <p className="message">
        Take all the time you need.
        <br /><br />
        I never want you to feel pressured.
        Your feelings matter and I respect them.
        <br /><br />
        Whether it takes days or longer,
        I will be here hoping we can talk again.
        <br /><br />
        And no matter what,
        thank you for the moments we've shared.
      </p>

    <button
        className="backBtn"
        onClick={() => navigate("/")}
      >
        Back to Main Page
    </button>
    </div>
  );
}

export default TimePage;