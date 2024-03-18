import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginForm from './components/Authentication/LoginForm';
import SignUpForm from './components/Authentication/SignUpForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
