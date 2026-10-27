import { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // YAHAN APNA ASLI GITHUB USERNAME LIKHEIN 
    const githubUsername = "Aapka_GitHub_Username";

    fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc`)
      .then((response) => response.json())
      .then((data) => {
        const originalRepos = data.filter((repo) => !repo.fork).slice(0, 6);
        setRepos(originalRepos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("GitHub API Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="relative bg-black py-20 px-6 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden">
      <div className="absolute top-10 right-4 md:right-10 text-[80px] md:text-[150px] font-extrabold text-white/[0.02] tracking-tighter pointer-events-none select-none text-right">
        WORK
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div data-aos="fade-down" className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#e3563b]"></div>
            <p className="text-[#e3563b] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">Featured Work</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
            Engineered <br className="hidden md:block" /><span className="font-extrabold">solutions.</span>
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-10 h-10 border-4 border-[#e3563b]/30 border-t-[#e3563b] rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {repos.map((repo, index) => {
              const aosAnimation = index % 2 === 0 ? "fade-right" : "fade-left";
              return (
                <div key={repo.id} data-aos={aosAnimation}>
                  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} glareEnable={true} glareMaxOpacity={0.05} glareColor="#e3563b" className="h-full rounded-[2rem]">
                    <div className="group relative p-8 md:p-10 bg-[#080808] border border-white/5 rounded-[2rem] hover:border-white/15 transition-all duration-500 hover:shadow-2xl hover:shadow-[#e3563b]/10 h-full flex flex-col">
                      <h3 className="text-2xl font-extrabold text-white mb-4 group-hover:text-[#e3563b] transition-colors capitalize">
                        {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
                      </h3>
                      <p className="text-sm text-gray-400 font-light mb-6 flex-grow">
                        {repo.description || "A custom engineered solution focused on performance and scalable architecture."}
                      </p>
                      <div className="flex items-center gap-6 mt-auto">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white uppercase hover:text-[#e3563b] transition-colors">
                          View Code →
                        </a>
                      </div>
                    </div>
                  </Tilt>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;