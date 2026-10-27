import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from './Projects';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-black min-h-screen font-sans selection:bg-[#e3563b] selection:text-white">
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-6" data-aos="fade-up">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
          Zubeir <span className="text-[#e3563b]">Selot</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light">
          Full-Stack Developer crafting modern web and mobile applications with MERN & .NET architectures.
        </p>
      </header>

      {/* Auto-fetching Projects Section */}
      <Projects />
    </div>
  );
}

export default App;