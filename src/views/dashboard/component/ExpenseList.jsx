import React from 'react';

const ExpensesList = () => {
  const expenses = [
    // Replace with your actual expense data
    { id: 1, category: 'Rent', amount: 1000, date: '2024-02-06' },
    { id: 2, category: 'Groceries', amount: 250, date: '2024-02-05' },
    { id: 3, category: 'Entertainment', amount: 50, date: '2024-02-04' },
    // Add more expenses as needed
  ];

  return (
    <div className="w-full rounded-md overflow-hidden shadow-md">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-100 font-medium text-gray-700 uppercase tracking-wider">
              Category
            </th>
            <th className="px-4 py-2 bg-gray-100 font-medium text-gray-700 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-4 py-2 bg-gray-100 font-medium text-gray-700 uppercase tracking-wider">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="border-b odd:bg-white even:bg-gray-100">
              <td className="px-4 py-4">{expense.category}</td>
              <td className="px-4 py-4 text-right">{expense.amount.toFixed(2)}</td>
              <td className="px-4 py-4">{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesList;
