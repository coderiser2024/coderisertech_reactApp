
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Block/Home/Home';
import About from './Block/About/About';
import Contact from './Block/Contact/Contact';
import Services from './Block/Services/Services';
import Header from './Components/Header';
import Gallery from "./Block/Gallery/Gallery"
import CareerPage from './Block/Career/CareerPage';
import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/CareerPage" element={<CareerPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

