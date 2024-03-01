import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ExpenseView = () => {
  const [expenses, setExpenses] = useState([]);
 


  return (
    <div>

   
    
      
        <>
          <div className="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:border-primary-darker">
            <h1 className="text-2xl font-semibold">Your Expenses</h1>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-none border-collapse border-gray-300 overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-2 px-4 border-b">Expense</th>
                  <th className="py-2 px-4 border-b">Amount</th>
                  <th className="py-2 px-4 border-b">Description</th>
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
            
                  <tr className="hover:bg-gray-300">
                    <td className="py-2 px-4 border-b"></td>
                    <td className="py-2 px-4 border-b"></td>
                    <td className="py-2 px-4 border-b"></td>
                    <td className="py-2 px-4 border-b"></td>
                    <td className="py-2 px-4 border-b">
                  
                      <a  className="text-red-500 hover:text-red-900">
                        Delete
                      </a>
                      &nbsp;&nbsp;
                      <a  className="text-blue-500 hover:text-blue-900">
                        Edit
                      </a>
                    </td>
                  </tr>
           
              </tbody>
            </table>
          </div>
        </>
   
    </div>
  );
};

export default ExpenseView;
