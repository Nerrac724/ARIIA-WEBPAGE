import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ARIIAPortal } from './components/ARIIAPortal.tsx';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <Navbar />
      <main id="main-content">
        <Hero />
        <ARIIAPortal />
      </main>
    </div>
  );
}

export default App;