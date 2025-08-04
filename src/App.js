import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import VolunteerForm from './pages/VolunteerForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const basename = process.env.PUBLIC_URL || "/";

function App() {
  return (
    <Router basename={basename}>
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/volunteer" element={<VolunteerForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
