import React, { useState } from "react";
import { axiosWithAuth } from '../utilities/axiosAuth';

const Login = (props) => {
  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");
  const { isLoading, setIsLoading } = useState("");

const onLogin = (event) => {
    event.preventDefault();
    setIsLoading(true)

    console.log({ username, password })

    axiosWithAuth
        .post('http://localhost:5000/api/login', { username, password } )
        .then(response => {
            console.log(response)
            localStorage.setItem('token', response.data.payload);
            props.history.push('/friends');
        })
}

const handleUser = (event) => {
    event.preventDefault();
    setUsername(event.target.value)
}

const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value)
}

  return (
    <form onSubmit={onLogin}>
      <h1>Login Component</h1>
      <input type="username" placeholder="username" onChange={handleUser} ></input>
      <input type="password" placeholder='password' onChange={handlePassword} ></input>
      <button>Submit</button>
      {isLoading && <p>Patientia...</p>}
    </form>
  );
};
export default Login;
