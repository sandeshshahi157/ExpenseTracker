
import React, { useState,useEffect } from 'react';

import './addExpense.css';

const ExpenseForm = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [error, setError] = useState(null); // State to handle errors
  const [expenses, setExpenses] = useState([]);
  const handleBlurToggle = () => {
    setIsBlurred(!isBlurred);
  };
  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await fetch('http://192.168.75.92:3000/expenses');
      if (!response.ok) {
        throw new Error('Failed to fetch expenses');
      }
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      setError(error.message);
    }
  };


  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseType, setExpenseType] = useState('Type of Expense');
  const [expenseDate, setExpenseDate] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://192.168.75.92:3000/add-expense', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          expenseTitle,
          expenseAmount,
          expenseType,
          expenseDate,
          expenseDescription,
       
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add expense');
      }

      // Reset form fields after successful submission
      setExpenseTitle('');
      setExpenseAmount('');
      setExpenseType('Type of Expense');
      setExpenseDate('');
      setExpenseDescription('');
    
      fetchExpenses();

      // Handle any success behavior, e.g., show a success message
      console.log('Expense added successfully');
    } catch (error) {
      // Handle error
      setError(error.message);
    }
  };

  return (
    <div className="h-full font-mono">
      <div className="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:border-primary-darker">
        <h1 className="text-2xl font-semibold">Add Expense</h1>
      </div>

      <div className="addExpense p-5">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="expenseTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Expense Title
              </label>
              <input
                type="text"
                id="expenseTitle"
                value={expenseTitle}
                onChange={(e) => setExpenseTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="expenseAmount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Expense Amount
              </label>
              <input
                type="text"
                id="expenseAmount"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="expenseType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Expense Type
              </label>
              <select
                id="expenseType"
                value={expenseType}
                onChange={(e) => setExpenseType(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="Type of Expense" disabled>
                  Type of Expense
                </option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Utilities">Utilities</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="expenseDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Expense Date
              </label>
              <input
                type="date"
                id="expenseDate"
                value={expenseDate}
                onChange={(e) => setExpenseDate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="expenseDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Expense Description
              </label>
              <textarea
                id="expenseDescription"
                value={expenseDescription}
                onChange={(e) => setExpenseDescription(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                rows="3"
              ></textarea>
            </div>

      

         
            <button
            onClick={handleBlurToggle}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>



          </form>
     

{/* Error handling */}
{error && <p className="text-red-500">{error}</p>}
</div>
</div>

<div className="recentExpenses mt-2 pl-5">
<h2 className="text-lg font-semibold mb-4 ">Recent Expenses</h2>
<ul>
{expenses.map((expense) => (

  <li key={expense.id} class="pb-3 sm:pb-4">
  <div class="flex items-center space-x-4 rtl:space-x-reverse">
    <div class="flex-shrink-0">
        <img class="w-8 h-8 rounded-full" src="" alt="Expense Image"/>
    </div>
    <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
        {expense.expenseTitle}
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-300">
           {expense.expenseDescription}
        </p>
    </div>
    <div class=" items-center text-base text-gray-900 dark:text-gray-400">
        <p class="font-semibold"> $ {expense.expenseAmount} </p>
        <p class="text-sm text-gray-500 font-sm"> {expense.transactionDate}</p>

    </div>
</div>
</li>
))}
</ul>
        </div>



      </div>
  
  );
};

export default ExpenseForm;






