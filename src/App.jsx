import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Zubeir,%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/918160953678?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#050505] min-h-screen font-sans text-white selection:bg-[#e3563b] selection:text-white pb-32 overflow-x-hidden">
      
      {/* Top Navbar */}
      <nav className="fixed w-full z-50 top-0 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 px-6 md:px-16 py-5 flex justify-between items-center">
        <div className="text-2xl font-black tracking-widest uppercase">ZS<span className="text-[#e3563b]">.</span></div>
        <div className="hidden md:flex gap-10 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#journey" className="hover:text-white transition-colors">Journey</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#e3563b] transition-colors">Contact</a>
        </div>
        <a 
          href="/ZubeirNetResume.pdf" 
          download="Zubeir_Selot_Resume.pdf"
          className="px-5 py-2.5 bg-[#e3563b] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-orange-600 transition-all shadow-lg shadow-[#e3563b]/20"
        >
          Resume ↓
        </a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-start justify-center min-h-screen px-6 md:px-16 lg:px-24 pt-20 bg-gradient-to-b from-[#0f0706] to-[#050505]">
        <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-[#e3563b] opacity-[0.08] blur-[140px] rounded-full pointer-events-none"></div>
        <div data-aos="fade-up" className="relative z-10 max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-[#e3563b]"></div>
            <p className="text-[#e3563b] text-sm md:text-base font-bold tracking-[0.3em] uppercase">Selot Muhammed Zubeir • .NET & Full-Stack Developer</p>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-none">
            Zubeir <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3563b] to-orange-500">Selot.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl font-light mb-10 leading-relaxed">
            Aspiring .NET Developer specializing in building scalable web applications using C#, ASP.NET Core MVC, Web Forms, and SQL Server. Passionate about clean code and optimized backend architecture.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#projects" className="px-10 py-4 bg-[#e3563b] text-white font-bold tracking-[0.2em] uppercase text-sm rounded-full hover:bg-orange-600 transition-all hover:scale-105 shadow-[0_0_25px_rgba(227,86,59,0.4)]">
              Explore Projects
            </a>
            <a href="/ZubeirNetResume.pdf" download="Zubeir_Selot_Resume.pdf" className="px-10 py-4 bg-transparent border border-white/20 text-white font-bold tracking-[0.2em] uppercase text-sm rounded-full hover:border-white transition-all">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="py-32 px-6 md:px-16 lg:px-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div data-aos="fade-right">
            <div className="flex items-center gap-8 mb-10">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[#e3563b]/50 shadow-[0_0_25px_rgba(227,86,59,0.3)]">
                <img src="/zpasspot.jpg" alt="Zubeir Selot" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight">
                  About <span className="font-extrabold text-[#e3563b]">Me.</span>
                </h2>
                <p className="text-sm text-gray-400 mt-2 font-mono">Surat, Gujarat, India</p>
              </div>
            </div>
            
            <p className="text-gray-300 font-light text-lg leading-relaxed mb-6">
              Detail-oriented .NET Developer with hands-on experience gained through professional internships and rigorous academic training (BCA completed from SASCMA, pursuing MCA at UTU). Proven ability to design relational database schemas, develop secure backend systems, and write optimized SQL Server queries.
            </p>
            <p className="text-gray-300 font-light text-lg leading-relaxed">
              Fluent in English, Hindi, and Gujarati. Focused on writing clean, maintainable code following strict Object-Oriented Programming (OOP) principles.
            </p>
          </div>
          
          <div data-aos="fade-left" className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="p-6 md:p-8 border border-white/5 rounded-[2rem] bg-[#0c0c0c] hover:border-[#e3563b]/50 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-black mb-4 text-[#e3563b]">Backend & .NET</h3>
              <ul className="text-gray-400 space-y-2 font-light text-sm">
                <li>C# & ASP.NET Core MVC</li>
                <li>ASP.NET Web Forms</li>
                <li>C# Web Services (ASMX)</li>
                <li>ADO.NET & Entity Framework</li>
              </ul>
            </div>
            <div className="p-6 md:p-8 border border-white/5 rounded-[2rem] bg-[#0c0c0c] hover:border-[#e3563b]/50 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-black mb-4 text-[#e3563b]">Databases & Tools</h3>
              <ul className="text-gray-400 space-y-2 font-light text-sm">
                <li>SQL Server (SSMS)</li>
                <li>RDBMS & Relational Design</li>
                <li>Visual Studio & IIS</li>
                <li>Git & GitHub Version Control</li>
              </ul>
            </div>
            <div className="p-6 md:p-8 border border-white/5 rounded-[2rem] bg-[#0c0c0c] hover:border-[#e3563b]/50 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-black mb-4 text-[#e3563b]">Frontend & Web</h3>
              <ul className="text-gray-400 space-y-2 font-light text-sm">
                <li>HTML5 & CSS3</li>
                <li>JavaScript & jQuery</li>
                <li>React.js & Tailwind CSS</li>
                <li>REST API Integration</li>
              </ul>
            </div>
            <div className="p-6 md:p-8 border border-white/5 rounded-[2rem] bg-[#0c0c0c] hover:border-[#e3563b]/50 transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-black mb-4 text-[#e3563b]">Core Concepts</h3>
              <ul className="text-gray-400 space-y-2 font-light text-sm">
                <li>Object-Oriented Programming (OOP)</li>
                <li>MVC Architecture</li>
                <li>CRUD Operations</li>
                <li>Debugging & Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Journey Section */}
      <section id="journey" className="py-32 px-6 md:px-16 lg:px-24 bg-black border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div data-aos="fade-down" className="mb-20 text-center">
            <p className="text-[#e3563b] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4">Career Timeline</p>
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight">Experience & <span className="font-extrabold">Education.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Experience */}
            <div data-aos="fade-right" className="p-8 md:p-10 bg-[#080808] border border-white/5 rounded-[2rem]">
              <div className="inline-block px-4 py-1.5 bg-[#e3563b]/10 text-[#e3563b] rounded-full text-xs font-bold uppercase tracking-widest mb-6">Professional Experience</div>
              <h3 className="text-2xl font-black text-white mb-2">Student Intern</h3>
              <p className="text-sm font-bold text-[#e3563b] mb-4">Om Software • Nanpura, Gujarat (01/2026 - 03/2026)</p>
              <ul className="text-gray-400 space-y-3 font-light text-sm">
                <li>• Developed and maintained dynamic ASP.NET web applications using C#, improving system efficiency.</li>
                <li>• Designed relational database schemas and optimized complex SQL Server queries, reducing data retrieval times.</li>
                <li>• Executed rigorous debugging and testing protocols prior to deployment.</li>
              </ul>
            </div>

            {/* Education */}
            <div data-aos="fade-left" className="p-8 md:p-10 bg-[#080808] border border-white/5 rounded-[2rem]">
              <div className="inline-block px-4 py-1.5 bg-[#e3563b]/10 text-[#e3563b] rounded-full text-xs font-bold uppercase tracking-widest mb-6">Academic Background</div>
              <h3 className="text-2xl font-black text-white mb-2">Bachelor of Computer Applications (BCA)</h3>
              <p className="text-sm font-bold text-[#e3563b] mb-4">SASCMA English Medium College (2023 - 2026)</p>
              <p className="text-gray-400 text-sm font-light mb-4">Currently pursuing Master of Computer Applications (MCA) at Shrimad Rajchandra Institute of Management and Computer Application (UTU).</p>
              <p className="text-xs text-gray-500 font-mono">HSC (Class XII) - RD Contractor High School, Surat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="py-32 px-6 md:px-16 lg:px-24 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-down" className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#e3563b]"></div>
              <p className="text-[#e3563b] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">Featured Works</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight">Enterprise & <span className="font-extrabold">Web Projects.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Nawabi Scents */}
            <div data-aos="fade-right">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} className="h-full rounded-[2rem]">
                <div className="p-8 md:p-12 bg-black border border-white/5 rounded-[2rem] hover:border-white/20 transition-all h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#e3563b] uppercase tracking-widest">E-Commerce Web Application</span>
                    <h3 className="text-3xl font-black text-white mt-2 mb-4">Nawabi Scents</h3>
                    <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
                      Architected a fully functional e-commerce platform dedicated to perfumes using Microsoft technology stack. Developed scalable backend services with C# Web Services (ASMX) and ADO.NET, featuring secure administrative master control panels.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {['ASP.NET Web Forms', 'C#', 'SQL Server 2012', 'ASMX', 'ADO.NET'].map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">{t}</span>
                      ))}
                    </div>
                    <a href="https://github.com/Zxb178" target="_blank" rel="noreferrer" className="text-xs font-bold text-white uppercase tracking-widest hover:text-[#e3563b] transition-colors">
                      View Code on GitHub →
                    </a>
                  </div>
                </div>
              </Tilt>
            </div>

            {/* Nexus Arena */}
            <div data-aos="fade-left">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} className="h-full rounded-[2rem]">
                <div className="p-8 md:p-12 bg-black border border-white/5 rounded-[2rem] hover:border-white/20 transition-all h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#e3563b] uppercase tracking-widest">Sports & Tournament Platform</span>
                    <h3 className="text-3xl font-black text-white mt-2 mb-4">Nexus Arena</h3>
                    <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
                      Engineered a comprehensive sports tournament and turf booking platform utilizing ASP.NET Core MVC and C#. Designed optimized relational database schemas in SQL Server with robust CRUD operations and secure authentication.
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {['.NET Core MVC', 'C#', 'SQL Server', 'OOP Principles', 'REST API'].map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">{t}</span>
                      ))}
                    </div>
                    <a href="https://github.com/Zxb178" target="_blank" rel="noreferrer" className="text-xs font-bold text-white uppercase tracking-widest hover:text-[#e3563b] transition-colors">
                      View Code on GitHub →
                    </a>
                  </div>
                </div>
              </Tilt>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section with Direct WhatsApp Integration */}
      <section id="contact" className="py-32 px-6 md:px-16 lg:px-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e3563b] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <div data-aos="fade-right">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Let's build scalable <br/><span className="text-[#e3563b]">software together.</span></h2>
            <p className="text-gray-400 mb-10 text-lg font-light leading-relaxed">
              Looking for .NET Developer or Full-Stack opportunities. Drop a message and it will instantly reach my WhatsApp (+91 8160953678)!
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">WhatsApp & Phone</p>
                <p className="text-2xl font-bold text-white">+91 81609 53678</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Address</p>
                <p className="text-xl font-bold text-[#e3563b]">selotzubeir69@gmail.com</p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="bg-[#080808] p-8 md:p-10 rounded-[2rem] border border-white/5">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Recruiter / Company Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#e3563b] outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Your Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="email@company.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#e3563b] outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  required
                  placeholder="Let's discuss an opportunity..." 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#e3563b] outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-[#e3563b] text-white font-black uppercase tracking-[0.2em] text-xs rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-[#e3563b]/20 flex items-center justify-center gap-2"
              >
                <span>Send via WhatsApp (+91 8160953678) 🚀</span>
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Floating Bottom Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#0c0c0c]/90 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-8 shadow-2xl">
        <a href="#home" className="text-gray-400 hover:text-[#e3563b] transition-colors" title="Home">🏠</a>
        <a href="#about" className="text-gray-400 hover:text-[#e3563b] transition-colors" title="About">👤</a>
        <a href="#journey" className="text-gray-400 hover:text-[#e3563b] transition-colors" title="Journey">🎓</a>
        <a href="#projects" className="text-gray-400 hover:text-[#e3563b] transition-colors" title="Projects">💻</a>
        <a href="#contact" className="text-gray-400 hover:text-[#e3563b] transition-colors" title="Contact">✉️</a>
      </div>

    </div>
  );
}

export default App;