import React, { useState } from "react";
import axios from 'axios';
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

  return (
    <form>
      <h1>Login Component</h1>
      <input type="username" placeholder="username" ></input>
      <input type="password" placeholder='password'></input>
      <button>Submit</button>
      {isLoading && <p>Patientia...</p>}
    </form>
  );
};
export default Login;
