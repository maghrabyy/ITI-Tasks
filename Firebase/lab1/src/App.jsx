import './App.css';
import { DataPage } from './pages/DataPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useEffect, useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsLoading(false);
      setCurrentUser(user);
    });
  }, [currentUser]);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            isLoading ? (
              <div className="loading-screen min-h-screen flex justify-center items-center bg-gray-200">
                <div className="loader"></div>
              </div>
            ) : currentUser === null ? (
              <LoginPage />
            ) : (
              <DataPage />
            )
          }
        />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
