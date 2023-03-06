import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import "../CssFile/EditProfile.css";

const EditProfile = () => {
  const user = auth.currentUser;
  const [newfname, setnewfName] = useState("");
  const [newlname, setnewlName] = useState("");
  const [newcity, setnewCity] = useState("");
  let navigate = useNavigate();

  const editprofile=()=>{
    if(newfname!="" && newlname!=""){
    updateProfile(auth.currentUser, { displayName: newfname +" "+ newlname});
    }
    localStorage.setItem(user.email, newcity);
    navigate("/");
  }
  return (
    <div>
        <div className="reg">
          <div className="border p-3 Edit bg-light" style={{ marginTop: 50 }}>
            <h1>Edit Profile</h1>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                onChange={(e) => {
                  setnewfName(e.target.value);
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
                  setnewlName(e.target.value);
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