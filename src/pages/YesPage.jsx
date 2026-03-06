
/*function YesPage() {

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

export default YesPage;*/

import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "../styles.css";
import { useNavigate } from "react-router-dom";

function YesPage() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    // Show popup immediately
    setShowPopup(true);

    // Hide popup after 5 seconds (confetti duration)
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 7000); // 7000ms = 7 seconds

    return () => clearTimeout(timer);
  }, []);

  // Handle window resize for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container girlyFont">

      {showPopup && (
        <>
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={300}
          />
          <div className="popup">
            <h2>Yay! 💖</h2>
            <p>
              Thank you for giving us another chance.
              <br />
              I promise to treat you better and always make you smile. 💕
            </p>
          </div>
        </>
      )}

      {/* Main YesPage content */}
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