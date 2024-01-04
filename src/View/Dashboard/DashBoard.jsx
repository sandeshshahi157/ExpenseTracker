import React, { useState } from "react";
import "./dashboard.css";
import { Avatar, Card, Icon } from "@mui/material";
import { Pie } from "react-chartjs-2";
import ExpenseChart from "./pieChart";
import BarGraph from "./barGraph";

export default function Dashboard() {
  const Amount = "Rs. 20000";
  const name = "Smith";
  const data = [
    { id: 1, info: "Smith le khako  bangurko lado ko masu", amtSpend: 500 },
    { id: 2, info: " Smith Chunarbaad Gako kharcha.", amtSpend: 800 },
    {
      id: 3,
      info: "Smith ko weekly rusiian ko chateko kharcha",
      amtSpend: 8441,
    },
  ];

  return (
    <>
      <div className="DashBoard flex flex-col">
        <div className="  text-blue-800  rounded-sm ">
          <h1 className="font-mono text-3xl  "> {name}'s Dashboard</h1>
        </div>
        <div className="DashFullBoady flex gap-36">
          <div className="BodyStatisticsView flex gap-5 pt-8">
            <Card
              className=" flex font-mono
rounded-2xl 
items-center justify-center text-center bg-gray-50
shadow-lg shadow-blue-500/50"
            >
              <ExpenseChart />
            </Card>

            <div className="RecentsHistory rounded-md ">
              <h1 className="font-mono pl-4 pt-4 text-xl">Trasactions,</h1>
              {data.map((item) => (
                <button
                  className=" text-black  
                  bg-white
                  shadow-sm hover:shadow-lg  shadow-blue-300  rounded-lg
                  font-medium hover:shadow-blue-500/50 
                  flex  justify-around pt-2
                "
                  key={item.id}
                >
                  <h1>{item.info}</h1>{" "}
                  <h1 className="text-red-500"> -Rs.{item.amtSpend}</h1>
                </button>
              ))}
            </div>
            <div className="TotalTransaction">
              <Card className="h-28"><h1>Hello</h1></Card>
            </div>
         
          </div>

          <div className="DashAmoutAndHistoryView ">
            <div
              className="AmountView h-20 text-2xl   card  
              shadow-lg shadow-blue-500/50  text-black
            rounded-2xl  bg-white
            "
            >
              <h1 className="font-mono font-semibold text-gray-600 ">
                Tolal:-
              </h1>
              <h1
                className="
              
              font-mono font-semibold text-gray-600  "
              >
                {Amount}
              </h1>
            </div>

            <div className="RecentsHistory rounded-md ">
              <h1 className="font-mono pl-4 pt-4 text-xl">Recents History,</h1>
              {data.map((item) => (
                <button
                  className=" text-black  
                  bg-white
                  shadow-sm hover:shadow-lg  shadow-blue-300  rounded-lg
                  font-medium hover:shadow-blue-500/50 
                  flex  justify-around pt-2
                "
                  key={item.id}
                >
                  <h1>{item.info}</h1>{" "}
                  <h1 className="text-red-500"> -Rs.{item.amtSpend}</h1>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
