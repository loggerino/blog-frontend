import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/post/:id" element={<PostDetail />} />
        <Route path="/login" element={<Login onLogin={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
