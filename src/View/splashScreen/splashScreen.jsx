import React from "react";
import "./splashScreen.css";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function SplashScreen() {
  const sNav = "How it Work ?";
  const logo = "ExpoTrack";
  const about = "About Us";
  const contact = "Contact";
  const logIn = "Log In";
  const signup = "Sign up";

  return (
    <>
      <div className="mainBody  m-0 p-0 ">
        <div className="Splashnavbar flex  justify-around ">
          <div className="logo font-bold pt-3 text-3xl text-black">
            <h1>{logo}</h1>
          </div>
          <div className="SplashHeaderlist">
            <ul className="flex gap-24 p-3 mr-4 text-center text-lg font-semibold">
              <div className="Navlist gap-24 p-3 mr-4 text-center text-lg font-semibold">
                <li>
                  <a href="#">{sNav}</a>
                </li>
                <li>
                  <a href="#">{about}</a>
                </li>
                <li>
                  <a href="#">{contact}</a>
                </li>
              </div>
              <div className="Navbutton">
                <li>
                  <a href="#" className="text-blue-500 text-xl">
                    {logIn}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <button
                      className="
                    focus:shadow-gray-300
                    Button bg-blue-500 w-28 h-10 text-xl text-white rounded-3xl shadow-xl border-solid "
                    >
                      {signup}
                    </button>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="ContentBody flex justify-around  ">
          <div className="SplashSectionOne flex  flex-col">
            <div className="SplashText ">
              <h1>
                I manage the expense,
                <br /> not people Make your spending simple and easy as it
                should be. hackeath offers people{" "}
              </h1>
            </div>
            <div className="InviteUser ">
              <form>
                <input
                  className="bg-white "
                  placeholder="Enter Email"
                  type="email"
                  required
                ></input>
                <button class="bg-blue-500 shadow-lg shadow-blue-500/50 ... button text-2xl">
                  Invite
                </button>
              </form>
              <button
                className="shadow-gray-500 focus:shadow-red-400 shadow-lg 
              
              ... mt-20 ml-36 h-11 w-44 rounded-3xl bg-right-bottom
               bg-blue-500 text-white text-2xl
                font-semibold font-serif "
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="SplashSectionTwo">
            <div className="images">
              <img className="img1" src="src/assets/trade.jpeg"></img>
              <img className="img2" src="src/assets/trade1.jpg"></img>
              <img className="img3" src="src/assets/trade2.jpg"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
