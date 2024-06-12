'use client'

import React from 'react';
import Hero from './components/hero/hero';
import DisplayProducts from './components/index-cards/index-card';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

export default function Home() {
  return (
    <main className="w-full h-full">
      {/* When mobile view, the navbar will now be a slide in from the left menu 
        as of now, the navbar is a static component that is always visible on the top of the page.
      */}
      <Navbar className="text-white flex absolute top-0 left-0 py-5 w-full"/>

      <Hero />
      <article className='bg-stone-200 py-[6rem]'>
        <div className="flex justify-center text-center w-full">
          <h2 className="font-bold text-5xl">Ultra HOTS</h2>
        </div>
        <section className="w-full h-full grow flex px-[3rem] py-[5rem] justify-center">
          <DisplayProducts />
        </section>
      </article>
      <Footer />
    </main>
  );
}
