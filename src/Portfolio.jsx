import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap, Terminal, Menu, X, Award, Calendar } from 'lucide-react';
import profilePhoto from './assets/profile.jpg';
import project1Image from './assets/project1.svg';
import project2Image from './assets/project2.svg';
import project3Image from './assets/project3.svg';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());

  const projects = [
    {
      title: "InstaDash Analytics System",
      tech: "Angular, ASP.NET Core, MongoDB",
      desc: "Data analytics and reporting system with AI-powered predictions and interactive dashboards. Built business owner dashboard, finance pages, order management, and PDF generation features.",
      link: "#",
      image: project1Image
    },
    {
      title: "Finance Management Website",
      tech: "MERN Stack, Docker",
      desc: "Full-stack finance management platform with income/expense tracking, budgeting, interactive charts, bill reminders, and dockerized deployment.",
      link: "#",
      image: project2Image
    },
    {
      title: "AutoService Vehicle Management",
      tech: "MERN Stack",
      desc: "Vehicle service management application with user authentication, customer dashboard, and service request workflow management.",
      link: "#",
      image: project3Image
    }
  ];

  const skills = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React.js", "Angular", "React Native"],
    "Backend": ["Node.js", "Express.js", "ASP.NET Core"],
    "Databases": ["MongoDB", "MySQL"],
    "Languages": ["JavaScript", "C", "Java"],
    "Tools & Platforms": ["Docker", "Git", "GitHub", "Postman", "Swagger"],
    "Design Tools": ["Figma", "Canva"]
  };

  const experience = [
    {
      role: "Article Writer (Freelance)",
      company: "Freelance",
      period: "2022 - Present",
      points: [
        "Create engaging and informative content for various platforms",
        "Research and write on diverse topics with attention to detail",
        "Meet deadlines while maintaining high-quality standards"
      ]
    },
    {
      role: "Editorial Committee Member",
      company: "IEEE WIE Student Branch - University of Moratuwa",
      period: "Term 24/25",
      points: [
        "Contributing to editorial content and communications",
        "Collaborating with team members on various publications",
        "Supporting initiatives to promote women in engineering"
      ]
    },
    {
      role: "Editorial Panelist",
      company: "Leo Club of University of Moratuwa",
      period: "Leoistic Year 2024-2025",
      points: [
        "Managing editorial content for club publications",
        "Coordinating with team members for content creation",
        "Contributing to community service initiatives"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Sc. (Hons) in Information Technology",
      school: "University of Moratuwa – Faculty of Information Technology",
      year: "2023 - 2027",
      description: "Currently pursuing undergraduate degree in Information Technology",
      side: "left"
    },
    {
      degree: "G.C.E. Advanced Level (Biology Stream)",
      school: "C.W.W. Kannangara Central College – Matugama",
      year: "2022",
      description: "ABB Grade | Z-Score: 1.7385",
      side: "right"
    },
    {
      degree: "Harvard CS50: Introduction to Computer Science",
      school: "Harvard University (Online)",
      year: "2024",
      description: "Comprehensive introduction to computer science and programming",
      side: "left"
    },
    {
      degree: "AI/ML Engineer – Stage 1",
      school: "SLIIT",
      year: "2024",
      description: "Foundational training in Artificial Intelligence and Machine Learning",
      side: "right"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const isVisible = (id) => visibleElements.has(id);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 text-emerald-400">
              <Terminal size={20} />
              <span className="font-mono font-semibold">ThilinikaEvanthi.dev</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-1">
              {['home', 'about', 'education', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 font-mono text-sm capitalize transition-all rounded-lg ${
                    activeSection === section
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-emerald-400"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              {['home', 'about', 'education', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-3 font-mono text-sm capitalize transition-all ${
                    activeSection === section
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNDgsIDE2MywgMTg0LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-emerald-500 rounded-full animate-float-slow"></div>
          <div className="absolute top-60 right-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-float"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full animate-pulse-glow">
                <span className="text-emerald-400 text-sm font-mono">Available for opportunities</span>
              </div>
              
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold animate-text-reveal">
                  <span className="inline-block bg-gradient-to-r from-slate-100 via-emerald-300 to-slate-400 bg-clip-text text-transparent animate-gradient-shift">
                    Thilinika Evanthi
                  </span>
                </h1>
                <div className="absolute -left-4 top-0 w-1 h-full bg-emerald-500 animate-cursor-blink"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-emerald-400 font-mono animate-fadeInUp animate-typing" style={{animationDelay: '0.3s'}}>
                &lt;Undergraduate | IT Enthusiast /&gt;
              </p>
              
              <p className="text-lg text-slate-400 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                A passionate and self-motivated learner with a strong interest in software engineering. 
                Eager to grow, learn, and contribute to impactful projects while building a solid foundation 
                for a successful career in the IT industry.
              </p>
              
              <div className="flex gap-4 pt-4 animate-fadeInUp" style={{animationDelay: '0.9s'}}>
                <a href="#" className="group p-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-all hover:scale-110 relative overflow-hidden">
                  <Github size={20} className="relative z-10" />
                  <div className="absolute inset-0 bg-emerald-500/10 transform scale-0 group-hover:scale-100 transition-transform rounded-lg"></div>
                </a>
                <a href="#" className="group p-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-all hover:scale-110 relative overflow-hidden">
                  <Linkedin size={20} className="relative z-10" />
                  <div className="absolute inset-0 bg-emerald-500/10 transform scale-0 group-hover:scale-100 transition-transform rounded-lg"></div>
                </a>
                <a href="#" className="group p-3 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-all hover:scale-110 relative overflow-hidden">
                  <Mail size={20} className="relative z-10" />
                  <div className="absolute inset-0 bg-emerald-500/10 transform scale-0 group-hover:scale-100 transition-transform rounded-lg"></div>
                </a>
              </div>

              <div className="pt-8 animate-fadeInUp" style={{animationDelay: '1.2s'}}>
                <button
                  onClick={() => scrollToSection('about')}
                  className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-lg transition-all hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                </button>
              </div>
            </div>

            <div className="relative">
              {/* Rotating rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 border-2 border-emerald-500/20 rounded-full animate-spin-slow"></div>
                <div className="absolute w-80 h-80 border-2 border-cyan-500/20 rounded-full animate-spin-reverse"></div>
              </div>
              
              {/* Profile Image Container */}
              <div className="relative w-full aspect-square max-w-md mx-auto animate-float-gentle">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
                
                {/* Hexagon border effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full border-4 border-emerald-500/30 rounded-full animate-border-flow"></div>
                </div>
                
                {/* Profile Image */}
                <div className="relative rounded-full w-full h-full overflow-hidden border-4 border-slate-800 shadow-2xl group">
                  <img 
                    src={profilePhoto} 
                    alt="Profile"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 rounded-full animate-ping opacity-75" style={{animationDelay: '0.5s'}}></div>
              </div>

              {/* Tech icons floating around */}
              <div className="absolute top-10 right-0 animate-float-slow">
                <div className="p-3 bg-slate-900 rounded-lg border border-emerald-500/30 shadow-lg">
                  <Code2 className="text-emerald-400" size={24} />
                </div>
              </div>
              <div className="absolute bottom-20 left-0 animate-float" style={{animationDelay: '0.5s'}}>
                <div className="p-3 bg-slate-900 rounded-lg border border-cyan-500/30 shadow-lg">
                  <Terminal className="text-cyan-400" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            id="about-title"
            data-animate
            className={`flex items-center gap-3 mb-12 transition-all duration-700 ${
              isVisible('about-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Code2 className="text-emerald-400" size={32} />
            <h2 className="text-4xl font-bold text-slate-100">About Me</h2>
          </div>
          
          <div 
            id="about-content"
            data-animate
            className={`bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-6 transition-all duration-700 delay-200 ${
              isVisible('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-slate-300 leading-relaxed text-lg">
              I'm an undergraduate student at the University of Moratuwa, Faculty of Information Technology, 
              pursuing a B.Sc. (Hons) in Information Technology. I have a strong passion for software 
              development and enjoy working on full-stack projects that solve real-world problems.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              My technical journey includes building web applications using MERN stack, Angular, and ASP.NET Core. 
              I'm actively involved in extracurricular activities including IEEE WIE and Leo Club, where I serve 
              in editorial roles. I also work as a freelance article writer, combining my technical knowledge 
              with strong communication skills.
            </p>
            <div className="pt-4 border-t border-slate-800">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4 font-mono">Core Competencies</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {['Full-Stack Development', 'API Development', 'Database Design', 'UI/UX Design', 
                  'Teamwork & Communication', 'Problem Solving'].map((comp, idx) => (
                  <div 
                    key={comp} 
                    className="flex items-center gap-3 text-slate-300 animate-fadeInUp"
                    style={{animationDelay: `${idx * 0.1}s`}}
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-lg">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Timeline Style */}
      <section id="education" className="py-20 bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            id="education-title"
            data-animate
            className={`flex items-center gap-3 mb-16 justify-center transition-all duration-700 ${
              isVisible('education-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <GraduationCap className="text-emerald-400" size={32} />
            <h2 className="text-4xl font-bold text-slate-100">Education & Certifications</h2>
          </div>

          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500/50 via-emerald-500/30 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div
                key={idx}
                id={`education-${idx}`}
                data-animate
                className={`relative transition-all duration-700 delay-${idx * 100} ${
                  isVisible(`education-${idx}`) 
                    ? 'opacity-100 translate-x-0' 
                    : edu.side === 'left' 
                      ? 'opacity-0 -translate-x-20' 
                      : 'opacity-0 translate-x-20'
                }`}
              >
                <div className={`grid md:grid-cols-2 gap-8 items-center ${
                  edu.side === 'right' ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Left Side */}
                  <div className={`${edu.side === 'left' ? 'md:text-right' : 'md:order-2'}`}>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/30 transition-all">
                      <div className="flex items-start gap-3 mb-3">
                        <Award className="text-emerald-400 flex-shrink-0" size={24} />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-100 mb-1">{edu.degree}</h3>
                          <p className="text-emerald-400 font-mono">{edu.school}</p>
                        </div>
                      </div>
                      <p className="text-slate-400 mb-3">{edu.description}</p>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar size={16} />
                        <span>{edu.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-950 z-10"></div>
                  </div>

                  {/* Right Side - Empty Space for Zigzag */}
                  <div className={`${edu.side === 'right' ? 'md:text-right' : 'md:order-1'} hidden md:block`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            id="skills-title"
            data-animate
            className={`flex items-center gap-3 mb-12 transition-all duration-700 ${
              isVisible('skills-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Code2 className="text-emerald-400" size={32} />
            <h2 className="text-4xl font-bold text-slate-100">Technical Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div 
                key={category}
                id={`skill-${idx}`}
                data-animate
                className={`bg-slate-900 border border-slate-800 rounded-xl p-8 transition-all duration-700 ${
                  isVisible(`skill-${idx}`) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{transitionDelay: `${idx * 0.1}s`}}
              >
                <h3 className="text-xl font-semibold text-emerald-400 mb-6 font-mono">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, sidx) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg border border-slate-700 hover:border-emerald-500/50 hover:scale-105 transition-all text-lg animate-fadeInUp"
                      style={{animationDelay: `${sidx * 0.05}s`}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            id="projects-title"
            data-animate
            className={`flex items-center gap-3 mb-12 transition-all duration-700 ${
              isVisible('projects-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Terminal className="text-emerald-400" size={32} />
            <h2 className="text-4xl font-bold text-slate-100">Featured Projects</h2>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                id={`project-${idx}`}
                data-animate
                className={`bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all duration-700 group ${
                  isVisible(`project-${idx}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{transitionDelay: `${idx * 0.15}s`}}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative overflow-hidden h-64 md:h-auto">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <a href={project.link} className="text-slate-400 hover:text-emerald-400 transition-colors">
                        <ExternalLink size={24} />
                      </a>
                    </div>
                    <p className="text-slate-400 mb-6 text-lg">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.split(', ').map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-slate-800 text-emerald-400 text-sm rounded-lg font-mono border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            id="experience-title"
            data-animate
            className={`flex items-center gap-3 mb-12 transition-all duration-700 ${
              isVisible('experience-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Briefcase className="text-emerald-400" size={32} />
            <h2 className="text-4xl font-bold text-slate-100">Experience</h2>
          </div>
          
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div 
                key={idx}
                id={`experience-${idx}`}
                data-animate
                className={`bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-emerald-500/30 transition-all duration-700 ${
                  isVisible(`experience-${idx}`) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{transitionDelay: `${idx * 0.2}s`}}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-100">{exp.role}</h3>
                    <p className="text-emerald-400 font-mono text-lg">{exp.company}</p>
                  </div>
                  <span className="px-4 py-2 bg-slate-800 text-slate-400 text-sm rounded-full font-mono border border-slate-700 w-fit">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, pidx) => (
                    <li key={pidx} className="flex gap-3 text-slate-300 text-lg">
                      <span className="text-emerald-400 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            id="contact-content"
            data-animate
            className={`text-center space-y-6 transition-all duration-700 ${
              isVisible('contact-content') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <h2 className="text-4xl font-bold text-slate-100">Get In Touch</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              I'm currently open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <a href="mailto:evanthithilinika@gmail.com" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-lg transition-all text-lg hover:scale-105">
                Say Hello
              </a>
              <a href="#" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-all text-lg hover:scale-105">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 font-mono text-sm">© 2025 Thilinika Evanthi Wadanambi. Built with React & Tailwind</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Github</a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">LinkedIn</a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
