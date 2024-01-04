import "./addExpense.css";
import React, { useState } from "react";

export default function AddExpense() {
  const data = [
    {
      id: 1,
      info: "Smith le khako  bangurko lado ko masu",
      amtSpend: 500,
      date: "2024-01-01",
    },
    {
      id: 2,
      info: " Smith Chunarbaad Gako kharcha.",
      amtSpend: 800,
      date: "2024-01-05",
    },
    {
      id: 3,
      info: "Smith ko weekly rusiian ko chateko kharcha",
      amtSpend: 8441,
      date: "2024-01-04",
    },
  ];

  return (
    <>
      <div className="AddExpense-main flex pt-8  gap-20">
        <div className="Form-Main ">
          <div className="Form-header flex  pt-5 h-16 ">
            <h1 className="text-center text-2xl text-purple-900 font-semibold font-mono">
              Add Expenses
            </h1>
          </div>

          <form className="Form-Details flex gap-5 flex-col pt-3">
            <input
              className="text-center h-11 w-96 focus:outline-none  "
              placeholder="Expense "
              type="text"
              required
            ></input>
            <div className="date-amount flex gap-5">
              <input
                className="text-center  h-11  focus:outline-none  "
                placeholder="Amount(Rs.)"
                type="number"
                required
              ></input>
              <input
                type="datetime-local"
                required
                className="text-center flex justify-center focus:outline-none pr-5 "
              ></input>
            </div>
            <div className="Expense-Category h-11">
              <label className="text-xl text-purple-900 font-mono" for="Expense">Choose a type of expense: </label>

              <select id="Expense-Type" className="text-xl h-11 
               focus:outline-none
               bg-white rounded-lg">
                <option value="Clothes">Clothes</option>
                <option value="food">Food</option>
                <option value="Transpotation">Transpotation</option>
                <option value="select " selected>
                  Select Expense
                </option>
              </select>
            </div>
          </form>
        </div>

        <div className="Added-Exspense">
          <h1 className="font-mono pt-4 text-xl text-purple-900">Added Expenses</h1>
          {data.map((item) => (
            <div
              className=" text-black  
                  bg-white
                  hover:shadow-lg  shadow-blue-300  rounded-lg
                  font-medium hover:shadow-blue-500/50 
                  flex   flex-col h-14 
                "
              key={item.id}
            >
              <div className="flex justify-around Expense-id-amt pl-4 ">
                {" "}
                <div className="Expense-id">
                  <h1>{item.info}</h1>{" "}
                </div>
                <div className="expense-amount">
                  <h1 className="text-red-500"> -Rs.{item.amtSpend}</h1>
                </div>
              </div>
              <div className="Expense-date flex pl-4 ">
                <h1 className="text-sm flex justify-around text-gray-400">
                  {item.date}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
