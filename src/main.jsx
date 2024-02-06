import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import Root from "./routes/root";
import AddExpense from "./views/addexpense/addExpense";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);
