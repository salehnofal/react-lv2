import { useState } from "react";
export default function Challenge22() {
  const [form, setForm] =
    useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  const [success, setSuccess] =
    useState(false);

  const errors = {};
  if (!form.name.trim()) {
    errors.name =
      "Name is required";
  }
  if (
    !/^\S+@\S+\.\S+$/.test(
      form.email
    )
  ) {
    errors.email =
      "Enter a valid email";
  }
  if (
    form.password.length < 8
  ) {
    errors.password =
      "Password must be at least 8 characters";
  }
  if (
    form.password !==
    form.confirmPassword
  ) {
    errors.confirmPassword =
      "Passwords do not match";
  }
  const isValid =
    Object.keys(errors).length === 0;

  function handleSubmit(e) {
    e.preventDefault();

    if (isValid) {
      setSuccess(true);
    }
  }
  return (
    <>
      <h2>
       Registration Validation
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />
          {errors.name && (
            <p className="error">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />
          {errors.email && (
            <p className="error">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password:
                  e.target.value,
              })
            }
          />
          {errors.password && (
            <p className="error">
              {errors.password}
            </p>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={
              form.confirmPassword
            }
            onChange={(e) =>
              setForm({
                ...form,
                confirmPassword:
                  e.target.value,
              })
            }
          />
          {errors.confirmPassword && (
            <p className="error">
              {
                errors.confirmPassword
              }
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={!isValid}
        >
          Register
        </button>
      </form>
      {success && (
        <p className="success">
          Registration successful!
        </p>
      )}
    </>
  );
}