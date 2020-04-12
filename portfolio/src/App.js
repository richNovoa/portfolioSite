import React, { Component } from 'react';
import './css/style.css';

// components
import Navbar from './components/navbar'
import Hero from './components/hero'
import QuoteSection from './components/quotesection';

function App() {
  return (
    <div className="App">
     <section className="herosection">
      <Navbar />
      <Hero />
    </section>
    <QuoteSection />
    </div>
  );
}

export default App;
