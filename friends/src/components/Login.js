import React, { useState } from "react";
import { axiosWithAuth } from '../utilities/axiosAuth';

const Login = ({ history }) => {
  const [ credentials, setCredentials ] = useState({username:'', password: ''});
  const [ isLoading, setIsLoading ] = useState("");

const onLogin = (event) => {
    event.preventDefault();
    setIsLoading(true)

    console.log()

    axiosWithAuth
        .post('http://localhost:5000/api/login', credentials)
        .then(response => {
            console.log(response)
            localStorage.setItem('token', response.data.payload);
            history.push('/friends');
        })
}

const handleChange = (event) => {
    event.preventDefault();
    setCredentials({...credentials, [event.target.name]: event.target.value})
}

  return (
    <form onSubmit={onLogin}>
      <h1>Login Component</h1>
      <input 
        type="username" 
        name="username"
        placeholder="username" 
        onChange={handleChange}
        value={credentials.username} 
        />
      <input 
        type="password" 
        name="password" 
        placeholder='password'
        onChange={handleChange} 
        value={credentials.password}
      />
      <button type="submit">Log In</button>
      {isLoading && <p>Patientia...</p>}
    </form>
  );
};
export default Login;
