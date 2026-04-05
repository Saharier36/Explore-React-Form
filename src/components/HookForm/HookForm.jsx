import React from "react";
import useInputField from "../../hooks/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value);
    console.log("submit", name, email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={nameOnChange} defaultValue={name} />
        <br />
        <input
          type="email"
          name="email"
          onChange={emailOnChange}
          defaultValue={email}
        />
        <br />
        <input
          type="password"
          name="password"
          onChange={passwordOnChange}
          defaultValue={password}
        />

        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
