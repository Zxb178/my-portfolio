import React, { useState } from 'react';
import Tilt from "react-parallax-tilt";

const Projects = () => {
  const [ticketCount, setTicketCount] = useState(1);
  const [booked, setBooked] = useState(false);

  const projects = [
    {
      id: "01",
      title: "Nawabi Scents",
      subtitle: "E-Commerce Platform",
      description: "A hybrid e-commerce perfume management platform built with a classic 3-tier architecture, ASP.NET Web Forms, and SQL Server for seamless inventory and cart handling.",
      tech: ["ASP.NET Web Forms", "C#", "SSMS", "AJAX"],
      github: "https://github.com/Zxb178", 
      aos: "fade-right",
    },
    {
      id: "02",
      title: "YummCart",
      subtitle: "Android Application",
      description: "A native Android food ordering mobile application featuring custom XML layouts and efficient local database handling for quick interactions.",
      tech: ["Kotlin", "Android Studio", "XML"],
      github: "https://github.com/Zxb178",
      aos: "fade-left",
    },
    {
      id: "03",
      title: "Farm Dashboard",
      subtitle: "Web Application",
      description: "A modern, responsive farm management dashboard utilizing React and Node.js with Express to track daily operations and data efficiently.",
      tech: ["React.js", "Node.js", "Express.js"],
      github: "https://github.com/Zxb178",
      aos: "fade-right",
    },
  ];

  return (
    <section id="projects" className="relative bg-black py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden">
      <div className="absolute top-20 right-4 md:right-10 text-[100px] md:text-[150px] font-extrabold text-white/[0.02] tracking-tighter pointer-events-none select-none text-right">
        WORK
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div data-aos="fade-down" className="mb-20 md:mb-32">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
            <p className="text-[#e3563b] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              Interactive Showcase
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
            Engineered <br className="hidden md:block" />
            <span className="font-extrabold">solutions & widgets.</span>
          </h2>
        </div>

        {/* Live GitHub Contributions & Widgets Section (Sahil Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20" data-aos="fade-up">
          
          {/* GitHub Contributions Card */}
          <div className="lg:col-span-2 p-8 md:p-10 bg-[#080808] border border-white/5 rounded-[2rem] hover:border-white/15 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#e3563b] animate-ping"></span>
                <h3 className="text-xl font-bold text-white">Live Contributions</h3>
              </div>
              <p className="text-sm text-gray-400 font-light mb-8">Real-time sync with my GitHub repository activity and commits.</p>
            </div>
            
            {/* Simulated Contribution Grid */}
            <div className="bg-black/60 p-6 rounded-2xl border border-white/5 overflow-x-auto">
              <div className="flex justify-between text-[10px] text-gray-500 uppercase tracking-widest mb-3">
                <span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
              </div>
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[500px]">
                {Array.from({ length: 84 }).map((_, i) => {
                  const activeColors = ['bg-white/10', 'bg-[#e3563b]/40', 'bg-[#e3563b]/70', 'bg-[#e3563b]'];
                  const randomColor = activeColors[(i * 7) % activeColors.length];
                  return <div key={i} className={`w-3 h-3 rounded-sm ${i % 3 === 0 ? randomColor : 'bg-white/5'}`}></div>;
                })}
              </div>
            </div>
          </div>

          {/* Live Interactive Widget */}
          <div className="p-8 md:p-10 bg-[#080808] border border-white/5 rounded-[2rem] hover:border-white/15 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#e3563b]"></span>
                <h3 className="text-xl font-bold text-white">Live Widget</h3>
              </div>
              <p className="text-sm text-gray-400 font-light mb-6">Test a mini event-booking slot simulation.</p>
            </div>

            <div className="bg-black/60 p-6 rounded-2xl border border-white/5">
              <h4 className="font-bold text-white text-sm mb-1">Tech Meetup 2026</h4>
              <p className="text-xs text-gray-500 mb-4">Surat, Gujarat</p>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs text-gray-400">Select Seats:</span>
                <div className="flex items-center gap-3 bg-white/5 px-3 py-1 rounded-lg">
                  <button onClick={() => setTicketCount(Math.max(1, ticketCount - 1))} className="text-white font-bold px-2">-</button>
                  <span className="text-sm font-bold text-[#e3563b]">{ticketCount}</span>
                  <button onClick={() => setTicketCount(ticketCount + 1)} className="text-white font-bold px-2">+</button>
                </div>
              </div>

              <button 
                onClick={() => setBooked(true)} 
                className="w-full py-3 bg-[#e3563b] text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors shadow-lg shadow-[#e3563b]/20"
              >
                {booked ? "Slot Confirmed! ✓" : "Book Slot"}
              </button>
            </div>
          </div>

        </div>

        {/* Main Projects List */}
        <div className="flex flex-col gap-12 md:gap-24">
          {projects.map((project, index) => (
            <div key={index} data-aos={project.aos}>
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                transitionSpeed={1500}
                scale={1.02}
                glareEnable={true}
                glareMaxOpacity={0.05}
                glareColor="#e3563b"
                glarePosition="all"
                className="h-full rounded-[2rem]"
              >
                <div className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center p-8 md:p-12 lg:p-16 bg-[#080808] border border-white/5 rounded-[2rem] hover:border-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-[#e3563b]/10 h-full">
                  <div className="absolute top-4 right-8 text-[8rem] md:text-[12rem] font-black text-white/[0.02] group-hover:text-[#e3563b]/5 transition-colors duration-500 pointer-events-none select-none leading-none">
                    {project.id}
                  </div>

                  <div className="flex-1 z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-black/50 border border-white/10 rounded-xl group-hover:border-[#e3563b]/50 transition-all duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#e3563b]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>
                      </div>
                      <h4 className="text-sm md:text-base font-bold tracking-[0.1em] text-white/50 uppercase">
                        {project.subtitle}
                      </h4>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 group-hover:text-[#e3563b] transition-colors duration-500">
                      {project.title}
                    </h3>

                    <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-2xl mb-10">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 bg-black border border-white/10 rounded-full text-xs font-medium text-gray-300 group-hover:border-white/20 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-bold text-white tracking-widest uppercase hover:text-[#e3563b] transition-colors group/btn">
                        View Code
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;