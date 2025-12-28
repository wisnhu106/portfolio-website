import { React, useEffect, useState } from 'react'
import './App.css'
import ReactLogo from "./assets/react.svg"
import TailwindLogo from "./assets/tailwind.png"
import Profile from "./img/profile.jpeg"
import PortoImg1 from "./img/porto1.png"
import PortoImg2 from "./img/porto2.png"
import PortoImg3 from "./img/porto3.png"

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize =() => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "Personal Portofolio Website",
      description: "A sleek and responsive personal portfolio designed to showcase early web projects and professional skills using vanilla web technologies.",
      tech: ["HTML", "JavaScript", "CSS"],
      link: "https://github.com/wisnhu106/portofolio",
      image: PortoImg1
    },
    {
      title: "Company Profile Website",
      description: "A professional corporate landing page featuring a modern UI, built with React to ensure a seamless and high-performance user experience.",
      tech: ["CSS", "React"],
      link: "https://github.com/wisnhu106/my-company-profile",
      image: PortoImg2
    },
    {
      title: "Personal Website",
      description: "A high-performance personal website leveraging Vite and Tailwind CSS to deliver a fast, modern, and highly responsive digital experience.",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://github.com/wisnhu106/portfolio-website",
      image: PortoImg3
    }
  ]

  return (
    <>
      <header className='bg-[#0F172A] fixed shadow-md justify-center w-full z-100 opacity-90'>
        <nav className='max-w-7xl mx-auto px-4 py-4 w-screen flex text-[#F8FAFC] justify-between'>
          <a href='#' className='content-center text-2xl font-bold'>
            Muhammad <span className='text-[#38BDF8]'>Wisnhu</span>
          </a>
          <ul className='hidden md:flex justify-between gap-15 text-md items-center'>
            <li className='content-center'>
              <a href="#home" className='duration-300 hover:text-[#38BDF8]'>Home</a>
            </li>
            <li className='content-center'>
              <a href="#about" className='duration-300 hover:text-[#38BDF8]'>About Me</a>
            </li>
            <li className='content-center'>
              <a href="#projects" className='duration-300 hover:text-[#38BDF8]'>Projects</a>
            </li>
            <li className='content-center'>
              <a href="#contact" className='duration-300 hover:text-[#38BDF8]'>Contact</a>
            </li>
          </ul>

          <button
            type="button"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </nav>

        
        <div
          className={`
            md:hidden absolute top-full left-0 w-full bg-[#0F172A] border-t border-[#1E293B]
            overflow-hidden transition-all duration-300 ease-in-out
            ${open ? "max-h-80 opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}
          `}
        >
          <ul className={`
            flex flex-col gap-5 px-6 text-[#CBD5E1] transition-all duration-300
            ${open ? "py-6" : "py-0"}
          `}>
            <li><a href="#home" onClick={() => setOpen(false)} className="hover:text-[#38BDF8] duration-300">Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)} className="hover:text-[#38BDF8] duration-300">About</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)} className="hover:text-[#38BDF8] duration-300">Projects</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)} className="hover:text-[#38BDF8] duration-300">Contact</a></li>
          </ul>
        </div>
      </header>

      <main className='bg-[linear-gradient(to_bottom,#020617_0%,#0F172A_35%,#1E1B4B_70%,#020617_100%)]'>

        <section id='home' className='relative w-full h-screen overflow-hidden flex items-center justify-center'>
          <img src={ReactLogo} alt="Logo React" className='absolute -top-30 -right-30 h-100 opacity-20 pointer-events-none animate-[spin_30s_linear_infinite]' />
          <img 
            src={TailwindLogo}
            alt='Logo Tailwind'
            className='absolute -left-30 bottom-0 pointer-events-none opacity-20 animate-[float_8s_ease-in-out_infinite] z-0'
          />
          <div className='max-w-3xl px-6 text-center z-10'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4 text-[#F8FAFC]'>
              Hi, I'm <span className='text-[#38BDF8]'>Muhammad Wisnhu Erlangga</span>
            </h1>
            <h2 className='text-xl md:text-2xl text-[#CBD5E1] mb-6'>
              Frontend Developer crafting modern & responsive web experiences
            </h2>
            <p className='text-[#94A3B8] mb-8'>
              I build clean, fast, and user-friendly websites using modern frontend technologies.
            </p>
            <div className='flex gap-10 justify-center'>
              <a 
                href="#projects"
                className='px-6 py-4 rounded-lg bg-[#2563EB] text-white hover:bg-[#1D4ED8] duration-300'
              >
                View Projects
              </a>
              <a 
                href="#contact"
                className='px-6 py-4 rounded-lg border border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#020617] duration-300'
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section id='about' className='min-h-screen flex items-center px-6 md:pt-[10vh]'>
          <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
            {/* photo profile */}
            <div className='relative group justify-self-center'>
              <div className='absolute -inset-1 bg-gradient-to-r from-[#38BDF8] to-[#2563EB] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000'></div>
              <div className='relative h-64 w-64 md:w-80 md:h-80 bg-[#1E293B] rounded-2xl border border-white/10 overflow-hidden'>
                <img src={Profile} alt=" Profile Photo" className='w-full h-full object-cover' />
              </div>
            </div>

            {/* about content */}
            <div className='text-[#F8FAFC]'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                About <span className='text-[#38BDF8]'>Me</span>
              </h2>
              <p className='text-[#94A3B8] leading-relaxed mb-6'>
                I am a Frontend Developer with a strong focus on creating high-performance, 
                visually stunning, and user-friendly web applications. My journey in web development 
                started with a curiosity about how things work on the internet, which evolved into a 
                professional career building seamless digital experiences.
              </p>

              {/* skill */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <span className="text-[#38BDF8]">▹</span>
                  <span className="text-sm text-[#CBD5E1]">React.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#38BDF8]">▹</span>
                  <span className="text-sm text-[#CBD5E1]">Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#38BDF8]">▹</span>
                  <span className="text-sm text-[#CBD5E1]">JavaScript (ES6+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#38BDF8]">▹</span>
                  <span className="text-sm text-[#CBD5E1]">Responsive Design</span>
                </div>
              </div>
            </div>

          </div>
        </section>
        
        <section id='projects' className='min-h-screen px-6 py-20'>
          <div className='max-w-6xl mx-auto'>
            {/* Heading */}
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4'>
                Featured <span className='text-[#38BDF8]'>Projects</span>
              </h2>
              <div className='h-1 w-20 bg-[#38BDF8] mx-auto rounded-full'></div>
            </div>

            {/* Project Grid */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className='group bg-[#1E293B]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-[#38BDF8]/50 transition-all duration-300 hover:-translate-y-2'
                >
                  {/* Project Image */}
                  <div className='relative h-48 overflow-hidden'>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                    />
                    <div className='absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                      <a href={project.link} target='_blank' className='bg-[#38BDF8] text-[#020617] px-4 py-2 rounded-full font-bold text-sm'>
                        View Details
                      </a>
                    </div>
                  </div>
              
                  {/* Project Info */}
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#38BDF8] transition-colors'>
                      {project.title}
                    </h3>
                    <p className='text-[#94A3B8] text-sm mb-4 line-clamp-2'>
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {project.tech.map((t, i) => (
                        <span key={i} className='text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-[#38BDF8]/10 text-[#38BDF8] rounded-md'>
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={project.link} target='_blank'
                      className='text-sm text-[#CBD5E1] hover:text-[#38BDF8] flex items-center gap-2 transition-colors'
                    >
                      Github Repository <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id='contact' className='min-h-screen px-6 py-20 flex items-center justify-center'>
          <div className='max-w-4xl mx-auto w-full text-center'>
            {/* heading */}
            <div className='mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4'>
                Let's <span className='text-[#38BDF8]'>Connect</span>
              </h2>
              <div className='h-1 w-20 bg-[#38BDF8] mx-auto rounded-full'></div>
              <p className='text-[#94A3B8] mt-6 max-w-lg mx-auto'>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            {/* links grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto'>

              {/* Email Link */}
              <a 
                href="mailto:muhammadwisnhu10@gmail.com"
                className='group relative p-6 bg-[#1E293B]/20 backdrop-blur-md border border-white/10 rounded-2xl hover:border-[#38BDF8]/50 transition-all duration-500 flex items-center gap-6 overflow-hidden'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#38BDF8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
                <div className='w-14 h-14 shrink-0 rounded-xl bg-[#38BDF8]/10 flex items-center justify-center text-[#38BDF8] group-hover:bg-[#38BDF8] group-hover:text-white transition-all duration-500 shadow-lg shadow-[#38BDF8]/20'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className='flex flex-col text-left'>
                  <h3 className='text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-bold mb-1'>Email Me</h3>
                  <p className='text-white font-medium text-sm md:text-base break-all'>muhammadwisnhu10@gmail.com</p>
                </div>
              </a>

              {/* WhatsApp Link */}
              <a 
                href="https://wa.me/6285232850273" 
                target="_blank" rel="noreferrer"
                className='group relative p-6 bg-[#1E293B]/20 backdrop-blur-md border border-white/10 rounded-2xl hover:border-[#22C55E]/50 transition-all duration-500 flex items-center gap-6 overflow-hidden'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#22C55E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
                <div className='w-14 h-14 shrink-0 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-white transition-all duration-500 shadow-lg shadow-[#22C55E]/20'>
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div className='flex flex-col text-left'>
                  <h3 className='text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-bold mb-1'>WhatsApp</h3>
                  <p className='text-white font-medium text-sm md:text-base'>+62 852 3285 0273</p>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a 
                href="https://linkedin.com/in/wisnhu65" 
                target="_blank" rel="noreferrer"
                className='group relative p-6 bg-[#1E293B]/20 backdrop-blur-md border border-white/10 rounded-2xl hover:border-[#0A66C2]/50 transition-all duration-500 flex items-center gap-6 overflow-hidden'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#0A66C2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
                <div className='w-14 h-14 shrink-0 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-all duration-500 shadow-lg shadow-[#0A66C2]/20'>
                  <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div className='flex flex-col text-left'>
                  <h3 className='text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-bold mb-1'>LinkedIn</h3>
                  <p className='text-white font-medium text-sm md:text-base'>Muhammad Wisnhu Erlangga</p>
                </div>
              </a>

              {/* Instagram Link */}
              <a 
                href="https://instagram.com/m.wisnhuuu" 
                target="_blank" rel="noreferrer"
                className='group relative p-6 bg-[#1E293B]/20 backdrop-blur-md border border-white/10 rounded-2xl hover:border-[#E4405F]/50 transition-all duration-500 flex items-center gap-6 overflow-hidden'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-[#E4405F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'></div>
                <div className='w-14 h-14 shrink-0 rounded-xl bg-[#E4405F]/10 flex items-center justify-center text-[#E4405F] group-hover:bg-gradient-to-tr group-hover:from-[#f9ce34] group-hover:via-[#ee2a7b] group-hover:to-[#6228d7] group-hover:text-white transition-all duration-500 shadow-lg shadow-[#E4405F]/20'>
                  <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div className='flex flex-col text-left'>
                  <h3 className='text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-bold mb-1'>Instagram</h3>
                  <p className='text-white font-medium text-sm md:text-base'>@m.wisnhuuu</p>
                </div>
              </a>

            </div>
          </div>
        </section>
      </main>

<footer className='bg-[#020617] border-t border-white/5 pt-16 pb-8'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8 mb-12'>
            
            {/* Brand & Motto */}
            <div className='text-center md:text-left'>
              <a href='#home' className='text-2xl font-bold text-white'>
                Muhammad <span className='text-[#38BDF8]'>Wisnhu</span>
              </a>
              <p className='text-[#64748B] text-sm mt-2 max-w-xs'>
                Building digital experiences with precision, passion, and modern frontend technologies.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className='flex gap-8 text-[#94A3B8] text-sm font-medium'>
              <a href="#home" className='hover:text-[#38BDF8] transition-colors'>Home</a>
              <a href="#about" className='hover:text-[#38BDF8] transition-colors'>About</a>
              <a href="#projects" className='hover:text-[#38BDF8] transition-colors'>Projects</a>
              <a href="#contact" className='hover:text-[#38BDF8] transition-colors'>Contact</a>
            </div>

            {/* Social Icons - Simplified */}
            <div className='flex gap-5 text-[#64748B]'>
              <a href="https://github.com/wisnhu106" target="_blank" className='hover:text-white transition-colors'>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/wisnhu65" target="_blank" className='hover:text-white transition-colors'>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Copyright & Tech */}
          <div className='pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[#64748B] text-xs'>
            <p>© {new Date().getFullYear()} Muhammad Wisnhu Erlangga. All rights reserved.</p>
            <p className='flex items-center gap-1'>
              Made with <span className='text-red-500'>❤</span> using React & Tailwind
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
