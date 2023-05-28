import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
export default function Login() {
  const microsoftAuth = () => {
    window.open(`https://login.microsoftonline.com/common/oauth2/v2.0/authorize`, "_self");    
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userDetails";
        }
      });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">

      <section className="background1">
        <div className="container">
          <div className="row mainrow">

          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 leftimg"> </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 leftimg">
              <div className="sign_img">
                <img
                  src="./Leftimg.svg"
                  style={{ maxwidth: 100 }}
                  alt=""
                  className="src Aipic"
                />
              </div>
            </div>
           <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
        <form onSubmit={handleSubmit} className="col-xl-9 col-lg-9 col-md-9 col-sm-12 p-4 rightform">
          <h3>Sign In</h3>

          <div className="mb-3 mt-4 myemail">
          
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required  
            />
          </div>

          <div  className="mb-3 mt-4 mypassword">
          
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="col mt-3 text-left ">
                <a href="#top" className="forgotpass text-left"> <span class=" text-left"> Forgot your password? </span>  </a>
          </div>
          <div className="d-grid gap-2">
          
                   <Button type="submit" className="mt-2 signinbutn" size="lg">
                    Sign in
                  </Button> 
          
          <div class="divider align-items-center ">
                  
                  <p class="text-center fw-bold mx-3 mb-1 mt-1 text-muted">Or</p>
                </div>
                <Button onClick={microsoftAuth} className="Dbutn" size="lg">
                  <img src="./microsoft.png"
                  style={{ maxwidth: 100 }}
                  alt=""
                  className="src microsoftimg " /> Sign in with Microsoft
                  </Button>
                  </div>
                  <div className="mt-3"> 
                <p className="smallfont"> Don't have a account? <a href="/sign-up" className="signinlink"> <span > <b>Sign up </b> </span>  </a> </p>
                </div>
                <hr class="hr" />
                <div className="text-center bottomfiller">
                <p className="smallfont">Question? <a href="#top" className="signinlink"> <span > Contact Support </span>  </a> </p> 
                </div>
        </form>
          </div>

        </div>
        </div>

      </section>

      </div>
    </div>
  );
}

