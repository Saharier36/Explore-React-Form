import React from "react";
import { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Password must be 6 characters or longer");
    } else {
      setError("");
    }
  };

  const handlePasswordOnChange = (e) => {
    setPassword(e.target.value);

    if (password.length < 8) {
      setError("Password must be 6 characters or longer");
    }else {
        setError("")
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
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
