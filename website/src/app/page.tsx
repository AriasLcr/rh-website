'use client'

import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="container">
        <h1>Home</h1>
        <p>Welcome to the home page</p>
      </div>
    </main>
  );
}
