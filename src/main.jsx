import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root";
// import LandingPage from "./views/landingpage/landingpage";
// import LoginForm from "./views/authentication/login";
// import SignUpForm from "./views/authentication/signup";
import { RouterProvider } from "react-router-dom";
import router from "./routes/mainRoutes";
import DashBoardPage from "./views/dashboard/dashboard";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router}>
 
  </RouterProvider>
  </React.StrictMode>
);
