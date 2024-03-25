import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/Productpage" element={<Productpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
