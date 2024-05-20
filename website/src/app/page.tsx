'use client'

import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import IndexCard from './components/index-cards/index-card';


export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container">
        <h1>Home</h1>
        <p>Welcome to the home page</p>
      </div>
      <div>
        <h1>Products</h1>
        <p>Check out our products</p>
        <div>
          <IndexCard />

        </div>
      </div>
    </main>
  );
}
