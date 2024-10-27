import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Profile from './pages/auth/Profile';
import Movie from './pages/details/Movie';
import Tv from './pages/details/Tv';
import Actor from './pages/details/Actor';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/tv/:id" element={<Tv />} />
        <Route path="/actor/:id" element={<Actor />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;