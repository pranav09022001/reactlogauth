import React from 'react';
import "../CssFile/Footer.css";
import {AiFillGoogleCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (<footer>
    <div className='fl'>
        <h1>My Office</h1>
        <p>@all rights are reserved..</p>
    </div>
    <div className='fr'>
        <h5>Follow Us</h5>
        <div style={{display:"inline"}} className="foot">
            {/* <a href="https://youtube.com" target={"blank"}><AiFillYoutube/></a>
            <a href="https://instagram.com" target={"blank"}><AiFillInstagram/></a>
            <a href="https://google.com" target={"blank"}><AiFillGoogleCircle/></a> */}
            <article>
        <div style={{animationDelay:"0.3s"}}>
          <a href="https://www.google.com/" target='_blank'><AiFillGoogleCircle/></a>
          <p>Google</p>
        </div>
        
        <div style={{animationDelay:"0.7s"}}>
          <a href="https://www.youtube.com" target='_blank'><AiFillYoutube/></a>
          <p>Youtube</p>
        </div>
        <div style={{animationDelay:"1s"}}>
          <a href="https://www.instagram.com/" target='_blank'><AiFillInstagram/></a>
          <p>Instagram</p>
        </div>
        
        </article>
        </div>
    </div>
    </footer>
  )
}

export default Footer