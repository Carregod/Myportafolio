import React from 'react';
import { Header } from './components/Header';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <LanguageToggle />
        <Header />
        <main>
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <footer className="bg-blue-900 text-white py-6 text-center">
          <p>&copy; {new Date().getFullYear()} - All rights reserved</p>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;