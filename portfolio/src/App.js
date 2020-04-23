import React, { Component } from 'react';
import './css/style.css';

// components
import Navbar from './components/Navbar';
import Hero from './components/hero';
import QuoteSection from './components/quotesection';


function App() {
  return (
    <div className="App">
       <Navbar />
      <Hero />
      <QuoteSection />
    </div>
  );
}

export default App;
