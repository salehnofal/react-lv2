import { useState } from "react";
export default function Challenge14() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
  });
  function nextStep() {
    if (step === 1 && !formData.name) {
      alert("Please enter your name");
      return;
    }
    if (step === 2 && !formData.email) {
      alert("Please enter your email");
      return;
    }
    if (step === 3 && !formData.username) {
      alert("Please enter your username");
      return;
    }
    setStep(step + 1);
  }
  function previousStep() {
    setStep(step - 1);
  }
  if (step === 4) {
    return (
      <>
        <h2> Review</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Username: {formData.username}</p>
        <button
          onClick={() =>
            alert("Form submitted successfully!")
          }
        >
          Submit
        </button>
      </>
    );
  }
  return (
    <>
      <h2>Challenge 14 - Multi Step Form</h2>
      <h3>Step {step}</h3>
      {step === 1 && (
        <input
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />
      )}
      {step === 2 && (
        <input
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />
      )}
      {step === 3 && (
        <input
          placeholder="Enter your username"
          value={formData.username}
          onChange={(e) =>
            setFormData({
              ...formData,
              username: e.target.value,
            })
          }
        />
      )}
      {step > 1 && (
        <button onClick={previousStep}>
          Back
        </button>
      )}
      <button onClick={nextStep}>
        Next
      </button>
    </>
  );
}