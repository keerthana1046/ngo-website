import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VolunteerForm from './pages/VolunteerForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunteer" element={<VolunteerForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
