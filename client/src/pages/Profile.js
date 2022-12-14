import React, { useState} from "react";
import Header from "../components/Header/Header";

const Profile = () => {

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Login = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    const userData = {
      name, 
      email,
      password,
    };
    localStorage.setItem('token-info', JSON.stringify(userData));
    setIsLoggedIn(true);
    setName('');
    setEmail('');
    setPassword('');
  };

  const logout = () => {
    localStorage.removeItem('tokenInfo');
    setIsLoggedIn(false);
  };
  
  return(
    <>
    <div style={{ textAlign: 'center' }}>
      <h1>Login:</h1>
      {!isLoggedIn ? (
        <>
        <form action="">
          <input
          type="text"
          onChange={(e)=> setName(e.target.value)}
          value={name}
          placeholder="Name"
          />
          <input
          type="email"
          onChange={(e)=> setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          />
          <input 
          type="password"
          onChange={(e)=> setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          />
        </form>
        </>
      ) : 
      <>
      <h1><Header/></h1>
      <button onClickCapture={logout}>logout</button>
      </>
      }
    </div>
    </>
  );

  };

};

export default Profile;