import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { toast } from "react-toastify";
import "../CssFile/EditProfile.css";

const EditProfile = () => {
  const user = auth.currentUser;
  const [newName, setnewName] = useState("");
  const [newcity, setnewCity] = useState("");
  let navigate = useNavigate();

  const editprofile=()=>{
    if(newName!=""){
    updateProfile(auth.currentUser, { displayName: newName});
    }
    if(newcity!==""){
    localStorage.setItem(user.email, newcity);
    }
    navigate("/");
    return toast.info("Profile Edited Successfully");
  }
  return (
    <div>
        <div className="reg">
          <div className="border p-3 Edit bg-light" style={{ marginTop: 50 }}>
            <h1>Edit Profile</h1>
            <div className="form-group">
              <label>Enter Full Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                onChange={(e) => {
                  setnewName(e.target.value);
                }}
              />
            </div>
            
            <div className="form-group">
              <label>City</label>
              <Form.Select aria-label="Default select example" onChange={(e) => {
            setnewCity(e.target.value);
          }}>
      <option>Select City</option>
      <option >Thane</option>
      <option >Mumbai</option>
      <option >Pune</option>
      <option >Kalyan</option>
      <option >Dombivli</option>
      <option >Dadar</option>
      <option >NaviMumbai</option>
        </Form.Select>

            </div><br/>
            <button className="btn btn-primary" onClick={editprofile}>
                  Edit 
          </button>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/" style={{textDecoration:"none",align:"center",fontSize:"16px"}}>Go Back</Link>

          </div>
      </div>
      
    </div>
  )
}

export default EditProfile