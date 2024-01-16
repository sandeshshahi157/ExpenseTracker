// HomePage.js
import React, { useState } from "react";
import "./homepage.css";
import Dashboard from "../Dashboard/DashBoard";
import AddExpense from "../AddExpense/addExpense";
import SettngScreen from "../settingScreen/settings"

export default function HomePage() {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      <div className="h-20 HomePageNavBar  flex justify-between sticky hue-rotate-30 pt-5">
        <div className="logo">
        <h1 className=" text-3xl font-semibold font-mono text-blue-500">Expense Tracker</h1>
          {/* <img className="h-20" src="src/assets/logo.png" alt="Logo"></img> */}
        </div>
        <div className="SearchBar">
          <form>
            <input
              type="search"
              className="h-11 rounded-2xl m-2 text-center 
            focus:outline-none absolute shadow-lg shadow-blue-500/200
            focus:shadow-blue-500/50"
              placeholder="Search"
            ></input>
            <button
              type="button"
              className="bg-blue-500 w-28 text-white font-mono
          text-xl relative          
           h-11 shadow-2xl rounded-2xl m-2 text-center
            focus:outline-none"
            >
              Search
            </button>
          </form>
        </div>
        <div className="Profile flex">
          <button className="ThemeChangeButton shadow-xl shadow-blue-500/50">
            sa
          </button>
          <button className="ThemeChangeButton shadow-xl shadow-blue-500/50">
            sa
          </button>
        </div>
      </div>
      <div className="HomePageMainBody ">
        <div className="BodySectionOne pt-28  shadow-blue-500/50">
          <a>
            <button
              onClick={() => handleButtonClick("dashboard")}
              className="h-14 text-black focus:shadow-lg shadow-lg w-64 rounded-lg 
                focus:shadow-blue-500/200  text-2xl font-mono font-medium
                focus:shadow-blue-500/50 bg-white Buttons"
            >
              Dashboard
            </button>
          </a>
          <a>
            <button
              onClick={() => handleButtonClick("addExpense")}
              className="h-14 text-black shadow-lg w-64 rounded-lg 
                shadow-blue-500/200  text-2xl font-mono font-medium
                focus:shadow-blue-500/50  bg-white Buttons"
            >
              Add Expenses
            </button>
          </a>
          <a href="#">
            <button
              className="h-14 text-black shadow-lg w-64 rounded-lg 
    shadow-blue-500/200  text-2xl font-mono font-medium
    focus:shadow-blue-500/50  bg-white Buttons
    "
            >
              Share
            </button>
          </a>
          <a href="#">
            <button
              className="h-14 text-black shadow-lg w-64 rounded-lg 
    shadow-blue-500/200  text-2xl font-mono font-medium
    focus:shadow-blue-500/50  bg-white Buttons
    "
            >
              Wallet
            </button>
          </a>
          <a href="#">
            <button
             onClick={() => handleButtonClick("settings")}
              className="h-14 text-black shadow-lg w-64 rounded-lg 
    shadow-blue-500/200  text-2xl font-mono font-medium
    focus:shadow-blue-500/50  bg-white Buttons
    "
            >
              Settings
            </button>
          </a>
          <a href="#">
            <button
            
              className="h-14 text-black shadow-lg w-64 rounded-lg 
    shadow-blue-500/200  text-2xl font-mono font-medium  bg-white
    focus:shadow-blue-500/50  Buttons
    "
            >
              Profile
            </button>
          </a>
        </div>
        <div className="BodySectionTwo">
          {activeComponent === "dashboard" && <Dashboard />}
          {activeComponent === "addExpense" && <AddExpense />}
          {activeComponent === "settings" && <SettngScreen/>}
        </div>
      </div>
    </>
  );
}
