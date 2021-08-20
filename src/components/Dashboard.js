import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase/firebase";

function Dashboard() {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <h1>Welcome</h1>
      <p>This is the dashboard, if you can see this you're logged in.</p>
      <button onClick={() => auth().signOut()}>SignOut</button>
    </>
  );
}

export default Dashboard;
