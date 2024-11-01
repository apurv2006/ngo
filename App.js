import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import Projects from './components/Projects';
import Donation from './components/Donation';
import NGOs from './components/NGOs';
import NGODetails from './components/NGODetails';
import Volunteer from './components/Volunteer';
import AdminLogin from './components/AdminLogin';
import Signup from './components/Signup';
const initialNGOs = [
  // Your initial NGO data here
];

function App() {
  const [ngos, setNgos] = useState(initialNGOs);

  const addNGO = (newNGO) => {
    setNgos([...ngos, newNGO]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/donation" element={<Donation />} />
          <Route path="/ngos" element={<NGOs ngos={ngos} />} />
          <Route path="/ngo/:id" element={<NGODetails ngos={ngos} />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminLogin addNGO={addNGO} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
