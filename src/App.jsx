import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Reducer from "./reducer";

function App() {
  return ( <BrowserRouter>

    <Routes>
      <Route path="/" element={<Reducer />}>
   
     
      </Route>
    </Routes>
  </BrowserRouter>
)
   
}

export default App;
