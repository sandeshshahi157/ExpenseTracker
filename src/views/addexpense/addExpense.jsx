import React, { useState } from 'react';
import ChildComponent from './dialouge';
import './addExpense.css'

const ExpenseForm = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleBlurToggle = () => {
    setIsBlurred(!isBlurred);
  };  
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [bill, setBill] = useState(null);
  const [expenseType, setExpenseType] = useState('Type of Expense');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setBill(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your form submission logic here
    console.log('Form Submitted:', {
      expense,
      amount,
      bill,
      expenseType,
      date,
      description,
      agreeTerms,
    });
    // Reset form fields if needed
    setExpense('');
    setAmount('');
    setBill(null);
    setExpenseType('Type of Expense');
    setDate('');
    setDescription('');
    setAgreeTerms(false);
  };

  return (
    <div className="h-full font-mono ">
      <div className="flex items-center justify-between px-4 py-4 border-b lg:py-6 dark:border-primary-darker">
        <h1 className="text-2xl font-semibold">Add Expense</h1>
      </div>

      <div className="addExpense p-5">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="expense" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Expense Name
              </label>
              <input
                type="text"
                id="expense"
                value={expense}
                onChange={(e) => setExpense(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Amount
              </label>
              <input
                type="text"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Upload Bill
              </label>
              <input
                type="file"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleFileChange}
                required
              />
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                SVG, PNG, JPG, or GIF (MAX. 800x400px).
              </p>
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
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                rows="3"
              ></textarea>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:text-blue-400 dark:focus:ring-blue-800 dark:border-gray-600"
                  required
                />
                <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                  I agree to the terms and conditions
                </label>
              </div>
            </div>

            <button
            onClick={handleBlurToggle}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>



          </form>
          {isBlurred &&(
            <ChildComponent/>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
