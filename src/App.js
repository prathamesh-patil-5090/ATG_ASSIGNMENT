import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import LoginCard from './components/LoginCard';
import { ModalProvider } from './context/ModalContext';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ModalProvider>
      <Router>
        <div className="App">
          <Navbar isLoggedIn={isLoggedIn} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<div>Sign In Page (Coming Soon)</div>} />
            <Route path="/groups" element={<div>Groups Page (Coming Soon)</div>} />
            <Route path="*" element={<div>404 - Not Found</div>} />
          </Routes>
          <LoginCard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;
