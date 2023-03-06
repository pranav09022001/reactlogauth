import React, { useState } from 'react'
import { updatePassword, getAuth ,signInWithEmailAndPassword} from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "../CssFile/ChangePass.css";


const ChangePass = () => {

    const [cPassword, setcPassword] = useState("");
     const [nPassword, setnPassword] = useState("");
     
    const auth = getAuth();
    let navigate = useNavigate();

    const user = auth.currentUser;

    

    const handleChangePass =async ()=> {
        try {
            await signInWithEmailAndPassword(auth, user.email, cPassword);
            updatePassword(user, nPassword).then(() => {
                navigate("/");
            }).catch((error) => {
                toast(error.code, { type: "error" });
            });
           
          } catch (error) {
            toast(error.code, { type: "error" });
          }
        

        }
    
  return (
    <div className="mainchange " >
      <div className="change bg-light mt-5">
        <h1>Change Password</h1>
      <div className="form-group">
        <label>Current Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your current password"
          onChange={(e) => {
            setcPassword(e.target.value);
          }}
          value={cPassword}
        />
        <label>New Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your new password"
          onChange={(e) => {
            setnPassword(e.target.value);
          }}
          value={nPassword}
        />
        <br/>
        <button className="btn btn-primary" onClick={handleChangePass}>
        Submit
         </button>&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/" style={{textDecoration:"none",align:"center",fontSize:"16px"}}>Go Back</Link>
        </div>
    </div>
    </div>
  )
}

export default ChangePass