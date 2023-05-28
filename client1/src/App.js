import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Routes, Navigate, Route, Link } from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import ImageUpload from "./components/imageUpload.";


function App() {
  const [user, setUser] = useState(null);
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  const getUser = async() => {
    try{
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const {data}= await axios.get(url, {withCredentials: true});
      setUser(data.user._json);
    }catch(err){
      console.log(err);
    }
  };

    useEffect(() => {
      getUser();
    }, []);
    
    


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route exact path="/sign-in" element={UserDetails? <Navigate to="/" /> : <Login />} />
          <Route  exact path="/sign-up"  element={ <SignUp />} />
          <Route  exact path="/userDetails" element={<UserDetails />} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
