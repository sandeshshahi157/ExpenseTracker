// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Root from './root';
import ExpenseForm from '../views/addexpense/addExpense';
import DashBoardPage from '../views/dashboard/dashboard';

const RoutesPage = () => {
  return (
  <BrowserRouter>

      <Routes>
        
        <Route path="/dashboard" Component={<DashBoardPage/>} />
        <Route path="/addexpense" Component={<ExpenseForm />} />
     
      </Routes>

  </BrowserRouter>

  );
};

export default RoutesPage;
