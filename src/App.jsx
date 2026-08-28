import { useState } from "react";

import Challenge11 from "./challenges/Challenge11.jsx";
import Challenge12 from "./challenges/Challenge12.jsx";
import Challenge13 from "./challenges/Challenge13.jsx";
import Challenge14 from "./challenges/Challenge14.jsx";
import Challenge15 from "./challenges/Challenge15.jsx";
import Challenge16 from "./challenges/Challenge16.jsx";
import Challenge17 from "./challenges/Challenge17.jsx";
import Challenge18 from "./challenges/Challenge18.jsx";
import Challenge19 from "./challenges/Challenge19.jsx";
import Challenge20 from "./challenges/Challenge20.jsx";
import Challenge21 from "./challenges/Challenge21.jsx";
import Challenge22 from "./challenges/Challenge22.jsx";

import Shop from "./project/Shop.jsx";

const challenges = [
  Challenge11,
  Challenge12,
  Challenge13,
  Challenge14,
  Challenge15,
  Challenge16,
  Challenge17,
  Challenge18,
  Challenge19,
  Challenge20,
  Challenge21,
  Challenge22,
];

export default function App() {
  const [current, setCurrent] = useState(0);

  const CurrentChallenge = challenges[current];

  return (
    <div className="app">
      <h1>React Level 2 - Intermediate</h1>

      <div className="tabs">
        {challenges.map((_, index) => (
          <button
            key={index}
            className={current === index ? "active" : ""}
            onClick={() => setCurrent(index)}
          >
            Challenge {index + 11}
          </button>
        ))}

        <button
          className={current === 12 ? "active" : ""}
          onClick={() => setCurrent(12)}
        >
          Final Project
        </button>
      </div>

      <div className="box">
        {current === 12 ? (
          <Shop />
        ) : (
          <CurrentChallenge />
        )}
      </div>
    </div>
  );
}