import React from "react";
import { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    console.log(name, email, password);
    e.preventDefault();
    if (password.length < 8) {
      setError("Password must be 6 characters or longer");
    } else {
      setError("");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);

    if (password.length < 8) {
      setError("Password must be 6 characters or longer");
    } else {
      setError("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleNameChange}
          defaultValue={name}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          defaultValue={email}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "yellow" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
