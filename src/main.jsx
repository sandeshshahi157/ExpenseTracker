import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/mainRoutes";
import App from "./routes/mainRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </RouterProvider>
  </React.StrictMode>
);
