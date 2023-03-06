
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ChangePass from "./components/ChangePass";
import "./CssFile/Login.css"
import "./App.css"
import EditProfile from "./components/EditProfile";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/changepass" element={<ChangePass/>} />
          <Route path="/editprofile" element={<EditProfile/>} />
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<Home/>} />

        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
