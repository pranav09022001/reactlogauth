import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import Dropdown from 'react-bootstrap/Dropdown';
import "../CssFile/navbar.css";
import "../CssFile/Login.css";
import logo from "../img/logo.png";


export default function Navbar() 
{
  const [user] = useAuthState(auth);
    console.log("navbar")
    console.log(user)
  return (
    <div className=" border" style={{ backgroundColor: "#9900ff" }}>
      <nav className="navbar navb" >
        <div>
          <Link to="/"><img 
            src={logo}
            width={30}
            height={30}
            alt="logo"
            className="ms-5"
          /><span style={{fontSize:"20px",marginLeft:"20px",}}>MY CUTE OFFIC</span></Link>
        </div>
        <Link className="nav-link" to="/">
          { }
        </Link>
        <div>
          {user && (
            <>
    <Dropdown id='dd'>
        <Dropdown.Toggle style={{background:"black"}}>
         { user.displayName || user.email}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item >
          <Link to="/editprofile" style={{textDecoration:"none",color:"black",width:"100%"}}>Edit Profile</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/changepass" style={{textDecoration:"none",color:"black",width:"100%"}}>Change password</Link>
          </Dropdown.Item>
          <Dropdown.Item>
          <button onClick={()=>{
            signOut(auth)
        }} style={{border:"none",background:"none",textAlign:"left",width:"100%"}}
              >Logout</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> 
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
