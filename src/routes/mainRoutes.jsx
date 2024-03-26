import React from 'react';
import { createBrowserRouter, Routes, Route } from 'react-router-dom';
import Root from './root';
import ExpenseForm from '../views/addexpense/addExpense';
import DashBoardPage from '../views/dashboard/dashboard';
import ProfilePage from '../views/profilepage/profilepage';
import SettingsPage from '../views/settings/setting';
import ExpenseView from '../views/Expensesview/expenseview';
import LandingPage from '../views/landingpage/landingpage';
import LoginForm from '../views/authentication/login';
import SignUpForm from '../views/authentication/signup';

const router = createBrowserRouter([
  {
    path: '',
    element: <LandingPage />,
  },
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'dashboard',
        element: <DashBoardPage />,
      },
      {
        path: 'addexpense',
        element: <ExpenseForm />,
      },
      {
        path: 'expenseview',
        element: <ExpenseView />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'setting',
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: 'login',
    element: <LoginForm />,
  },
  {
    path: 'signup',
    element: <SignUpForm />,
  },
]);

export default router;
