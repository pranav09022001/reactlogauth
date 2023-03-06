import React from "react";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Login from "./auth/Login";
import Dashboard from "./Dashboard";
import "../CssFile/home.css"

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <div className="home" >
      {!user ? (
        <>
          <h2>
       <Login/>
          </h2>
          <p style={{textAlign:"center"}}>Don't have an account? <Link to="/register">Signup</Link></p>
        </>
      ) : (
        
        <Dashboard/>
      )}
    </div>
  );
}
