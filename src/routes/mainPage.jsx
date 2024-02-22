import React from "react";
import Root from "./root";
import DashBoardPage from "../views/dashboard/dashboard";
import { Outlet } from "react-router-dom";

export default function MainPage(){

    return(<>
   
    <DashBoardPage/>
    <Outlet/>



    </>);
}