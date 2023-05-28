import React, { Component, useState } from "react";
import "./signup.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function SignUp() {
  const microsoftAuth = () => {
    window.open('https://login.microsoftonline.com/common/oauth2/v2.0/authorize', "_self");    
  };
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != " ") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (

    <section className="background1">
        <div className="container">
        <div className="auth-wrapper">
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
    <div className="auth-inner">
      <form onSubmit={handleSubmit} className="col-xl-9 col-lg-9 col-md-9 col-sm-12 p-4 rightform">
      <h4 className="mb-3"> Sign Up  </h4>
       
        <div className="mb-3">
         
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>

        {/* <div className="mb-3">
         
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div> */}

        <div className="mb-3">
         
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
         
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

                <div className="d-grid gap-2">
                  <Button type="submit" className="mt-2 signinbutn" size="lg">
                    Sign up
                  </Button> 
                  <div class="divider align-items-center ">
                    <p class="text-center fw-bold mx-3 mb-1 mt-1 text-muted">
                      Or
                    </p>
                  </div>
                  <Button onClick={microsoftAuth} className="Dbutn" size="lg">
                  <img src="./microsoft.png"
                  style={{ maxwidth: 100 }}
                  alt=""
                  className="src microsoftimg "/> Sign up with Microsoft
                  </Button>
                  </div>      
                  <div className="mt-4">
                  <p className="smallfont">
                    {" "}
                    Already have an account ?{" "}
                    <a href="/sign-in" className="signinlink">
                      {" "}
                     
                        {" "}
                        <b>Sign in </b>{" "}
                      {" "}
                    </a>{" "}
                  </p>
                </div>
                <hr class="hr" />
                <div className="text-center">
                  <p className="smallfont">
                    Ouestion?{" "}
                    <a href="#top" className="signinlink">
                      {" "}
                      <span> Contact Support </span>{" "}
                    </a>{" "}
                  </p>
                </div> 
      </form>
    </div>
        </div>
        </div>
        </div>
        </div>
    </section>
  );
}
