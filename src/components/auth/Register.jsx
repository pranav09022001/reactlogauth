import React, { useState } from "react";
import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../CssFile/Register.css";
import { Form } from "react-bootstrap";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [city, setCity] = useState("");
  let navigate = useNavigate();

  const handleSignup = async () => {
    try {
      if(password.length<7){
        return toast.error("pass should be greater than 7");
      }
      else{
        localStorage.setItem(email, city);
        await createUserWithEmailAndPassword(auth, email, password);
        updateProfile(auth.currentUser, { displayName: fname +" "+ lname});
        
        signOut(auth);
        navigate("/signin");


        console.log( auth);
      }
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };
  return (
    <div className="reg">
    <div className="border p-3 register bg-light " style={{ marginTop: 50 }}>
      <h1>Register</h1>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          onChange={(e) => {
            setfName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          onChange={(e) => {
            setlName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>City</label>
        <Form.Select aria-label="Default select example" onChange={(e) => {
            setCity(e.target.value);
          }}>
      <option>Select City</option>
      <option >Thane</option>
      <option >Mumbai</option>
      <option >Pune</option>
      <option >Kalyan</option>
      <option >Dombivli</option>
      <option >Dadar</option>
      <option>NaviMumbai</option>
        </Form.Select>

       
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <br />
      <button className="btn btn-primary" onClick={handleSignup}>
        Register
      </button>
      <p style={{textAlign:"center"}}>Already user- <Link to="/signin">Login</Link></p>
    </div>
    </div>
  );
}
