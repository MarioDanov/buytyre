// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import PostLoginWindow from './components/PostLoginWindow';
import Register from './components/Register';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleGuestLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            {/* Navigation content can go here */}
          </div>
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <PostLoginWindow />
                ) : (
                  <Login onLoginSuccess={handleLoginSuccess} onGuestLogin={handleGuestLogin} />
                )
              }
            />
          </Routes>
        </div>
      </div>
    </Router>

    
  );
};

export default App;
