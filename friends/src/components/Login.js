import React, { useState } from "react";

const Login = () => {
  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");

  return (
    <form>
      <h1>Login Component</h1>
      <input type="username"></input>
      <input type="password"></input>
      <button>Submit</button>
    </form>
  );
};
export default Login;
