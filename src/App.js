import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';
import LoginPage from './component/LoginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Productpage" element={<Productpage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
