import React from "react";
import './settings.css'
export default function SettngScreen() {
  return (
    <>
      <div className="Main-Body pt-9">

        <div className="Menu-Body">
            <h1>
                Menu body
            </h1>
        </div>
        <div className="Setting-menu flex flex-col  justify-normal pt-28">
       
       
       
        <button className=" rounded-lg shadow-lg focus:shadow-blue-500/50 font-mono font-medium text-xl">Add Profile</button>
        <button className=" rounded-lg shadow-lg focus:shadow-blue-500/50 font-mono font-medium text-xl">Update Email</button>
        <button className=" rounded-lg shadow-lg focus:shadow-blue-500/50 font-mono font-medium text-xl">Update Number</button>
        <button className=" rounded-lg shadow-lg focus:shadow-blue-500/50 font-mono font-medium text-xl">Update Name</button>
        <button className=" rounded-lg shadow-lg focus:shadow-blue-500/50 font-mono font-medium text-xl">Add Cards</button>
        <button className=" rounded-lg shadow-lg focus:shadow-blue-500/50 font-mono font-medium text-xl">Add Note</button>
        <button className=" rounded-lg shadow-lg focus:shadow-blue-500/50 font-mono font-medium text-xl">Log Out</button>
        </div>
      </div>
    </>
  );
}
