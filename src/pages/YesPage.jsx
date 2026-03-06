import "../styles.css";
import { useNavigate } from "react-router-dom";

function YesPage() {

    const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Thank you ❤️</h1>

      <p className="message">
        You have no idea how happy this makes me.
        <br /><br />
        I promise to do better.
        I promise to speak with kindness.
        And I promise to value you the way you deserve.
        <br /><br />
        Thank you for giving us another chance.
      </p>

      <h2>I'm really grateful for you 💕</h2>

    <button
        className="backBtn"
        onClick={() => navigate("/")}
      >
        Back to Main Page
    </button>
    </div>
  );
}

export default YesPage;