// App.js
import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import Root from './root';
import ExpenseForm from '../views/addexpense/addExpense';
import DashBoardPage from '../views/dashboard/dashboard';

import ProfilePage from '../views/profilepage/profilepage';
import SettingsPage from '../views/settings/setting';
import ExpenseView from '../views/Expensesview/expenseview';
import LoginForm from '../views/authentication/login';
import SignUpForm from '../views/authentication/signup';

const router = createBrowserRouter([
  {
    path: "",
    element: <Root/> ,
   
    children: [
      {
        path:'/',
        element:<DashBoardPage/>,

      },
      {
        path:'/dashboard',
        element:<DashBoardPage/>,

      },
      

      {
        path: "/addexpense",
        element: <ExpenseForm/>
      },
      {
        path:"/expenseview",
        element:<ExpenseView/>
      },
       
       {
        path:'/profile',
         element:<ProfilePage/>
       },
       {
         path:'/setting',
         element:<SettingsPage/>
       }
       
    ]
  },
]);

export default router;



