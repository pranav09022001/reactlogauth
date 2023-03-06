import { getAuth } from 'firebase/auth';
import React from 'react';
import "../CssFile/Dashboard.css";
import Thane from "../img/Thane.jpg";
import Mumbai from "../img/Mumbai.jpg";
import NaviMumbai from "../img/NaviMumbai.jpg";
import Kalyan from "../img/Kalyan.jpg";
import Dadar from "../img/Dadar.jpg";
import Dombivli from "../img/Dombivli.jpg";
import Pune from "../img/Pune.jpg";


const Dashboard = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const data=localStorage.getItem(user.email);
    let img="";

    switch(data){
        case "Thane":
            img=Thane
        break;
        case "Dadar":
        img=Dadar
        break;
        case "NaviMumbai":
            img=NaviMumbai
        break;
        case "Mumbai":
            img=Mumbai
        break;
        case "Pune":
            img=Pune
        break;
        case "Kalyan":
            img=Kalyan
        break;
        case "Dombivli":
            img=Dombivli
        break;
    }

   
// let image="./img/"+localStorage.getItem(user.email)+".jpg"

  return (
    <div className='cont'>
        <div className='leftd'>
            <img src={img} alt="cityimg"/>
        </div>
        <div className='rightd'>
      
            <h1>User Information</h1><br></br>
            <p>Name: <span>{user.displayName}</span></p>
            <p>City:<span>{localStorage.getItem(user.email)}</span> </p>
            <p>Email:<span>{user.email}</span> </p>

        </div>
    </div>
  )
}

export default Dashboard