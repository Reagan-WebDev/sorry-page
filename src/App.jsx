import "./styles.css";
import { TypeAnimation } from "react-type-animation";
import { Routes, Route, useNavigate } from "react-router-dom";

import YesPage from "./pages/YesPage";
import TimePage from "./pages/TimePage";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>A message for you ❤️</h1>

      <TypeAnimation
        sequence={[
          "Hi...",
          2000,
          "I know you're upset with me.",
          2000,
          "And honestly... I understand why.",
          2000,
          "I'm really sorry for how I spoke to you.",
          2000,
          "You deserve kindness and respect.",
          2000,
          "I truly miss you.",
          2000,
        ]}
        wrapper="p"
        speed={50}
        repeat={0}
        style={{ fontSize: "1.4rem" }}
      />

      <div className="question">
        <h2>Can we try again?</h2>

        <button
          className="yesBtn"
          onClick={() => navigate("/yes")}
        >
          Yes ❤️
        </button>

        <button
          className="maybeBtn"
          onClick={() => navigate("/time")}
        >
          I need time
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yes" element={<YesPage />} />
      <Route path="/time" element={<TimePage />} />
    </Routes>
  );
}

export default App;