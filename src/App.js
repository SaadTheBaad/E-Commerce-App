import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Homepage from './component/Homepage';
import ProductPage from './component/Productpage';
import LoginPage from './component/LoginPage';
import ProtectedRoute from './component/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Productpage" element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
