import { useState } from "react";
const questions = [
  {
    title: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "What is State?",
    answer:
      "State is data that can change inside a component.",
  },
  {
    title: "What are Props?",
    answer:
      "Props are used to pass data from a parent component to a child component.",
  },
];
export default function Challenge15() {
  const [openIndex, setOpenIndex] =
    useState(null);

  function toggleQuestion(index) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }
  return (
    <>
      <h2> Accordion</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <button
            className="accordion-title"
            onClick={() =>
              toggleQuestion(index)
            }
          >
            {question.title}
          </button>
          {openIndex === index && (
            <div className="card">
              {question.answer}
            </div>
          )}
        </div>
      ))}
    </>
  );
}