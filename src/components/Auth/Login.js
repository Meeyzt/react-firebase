import React from "react";
import { auth } from "../../firebase/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      auth.signInWithEmailAndPassword(email.value, password.value);
      console.log("Login: Logged IN");
    } catch (error) {
      console.log("Login: ", error);
    }
  };
  const { currentUser } = useAuth();
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
