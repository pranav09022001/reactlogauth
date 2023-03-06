import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "../../CssFile/Login.css";

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {

  
    try {
      if(email!="" && password!=""){
      await signInWithEmailAndPassword(auth, email, password);
      }
      else{
        return toast.error("All fields are mandatory to fill");
      }
      navigate("/");
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };
  return (
    <div className="border  bg-light mx-auto login"
    style={{ marginTop:60}}
    >
      <h1>Login</h1><br/>
      <div className="form-group">
        <label>Email:</label>
        
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <br></br>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <br />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/" style={{textDecoration:"none",align:"center",fontSize:"16px"}}>Go Back</Link>
    </div>
  );
}
