import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react';
import './App.css';
import quizScreenshot from "/home/raghav/Desktop/HTB/TODO/src/assests/Screenshot from 2025-09-14 23-22-39.jpeg";
import courseBackend from "/home/raghav/Desktop/HTB/TODO/src/assests/courseselling.jpeg";
import Numbergame from "/home/raghav/Desktop/HTB/TODO/src/assests/Numbergame.jpeg";


export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const workItems = [
    {
      title: "Quiz website",
      description: "A dynamic quiz website designed to help you test and sharpen your JavaScript skills, featuring interactive questions and real-time feedback.",
      tech: ["React"],
      image: quizScreenshot,
      demo: "https://quizapp-six-lovat.vercel.app/",
      github: "https://github.com/RSCODERR/quizapp",
      type: "Frontend"
    },
    {
      title: "Backend for course selling website",
      description: "An efficient backend system for a course-selling platform, built using Express, designed to handle user authentication, course management.",
      tech: ["Javascript", "Express.js"],
      image: courseBackend,
      demo: "https://github.com/RSCODERR/course-selling-",
      github: "https://github.com/RSCODERR/course-selling-",
      type: "Backend"
    },
    {
      title: "Guess the number game",
      description: "My first mini project is a fun and interactive number guessing game, where users can challenge themselves to guess the correct number within a set range",
      tech: ["HTML", "CSS", "Javascript"],
      image: Numbergame ,
      demo: "https://rscoderr.github.io/Guess-the-number/",
      github: "https://github.com/RSCODERR/Guess-the-number",
      type: "Frontend"
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Javascript"] },
    { category: "Backend", items: ["Node.js", "Express.js"] },
    { category: "Database and Design", items: ["Figma", "MongoDB"] }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-3xl font-bold text-gray-1000">
              Raghav Sharma
            </div>

            <div className="hidden md:flex space-x-6 items-center">
              <button
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors ${
                  activeSection === 'home'
                    ? 'text-orange-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-colors ${
                  activeSection === 'about'
                    ? 'text-orange-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className={`font-medium transition-colors ${
                  activeSection === 'work'
                    ? 'text-orange-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`font-medium transition-colors ${
                  activeSection === 'contact'
                    ? 'text-orange-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact Me
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-2 font-medium text-gray-600 hover:text-orange-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 font-medium text-gray-600 hover:text-orange-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="block w-full text-left py-2 font-medium text-gray-600 hover:text-orange-600 transition-colors"
              >
                My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 font-medium text-gray-600 hover:text-orange-600 transition-colors"
              >
                Contact Me
              </button>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="pt-24 min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight">
              Building digital
              <br />
              <span className="text-orange-600">experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Full-stack developer and designer crafting thoughtful solutions for complex problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <Code className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Full Stack Development</h3>
              <p className="text-gray-600 text-sm">End-to-end web applications with modern technologies</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <Palette className="text-green-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">UI/UX Design</h3>
              <p className="text-gray-600 text-sm">User-centered design with attention to detail</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <Zap className="text-yellow-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600 text-sm">Optimized solutions that scale and perform</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('work')}
              className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-colors transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a passionate developer who believes great software comes from understanding, I am a second year student currently pursuing CSE AIML at SRM university. 
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My approach combines clean code with thoughtful design, always keeping 
                  performance and user experience at the forefront. I enjoy tackling complex 
                  problems and turning them into elegant solutions.
                </p>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">When I'm not coding:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Exploring new design trends and technologies</li>
                    <li>• Hiking and photography</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Skills & Technologies</h3>
              <div className="space-y-8">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-orange-600 mb-4">{skillGroup.category}</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-center font-medium hover:bg-gray-100 transition-colors"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of projects that showcase my work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {workItems.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
                    >
                      <ExternalLink size={18} />
                      View Live
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                    >
                      <Github size={18} />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. 
            Let's discuss how we can work on it together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:akasharmaraghav@gmail.com"
              className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all"
            >
              <Mail className="text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">akasharmaraghav@gmail.com</p>
            </a>
            
            <a
              href="https://github.com"
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all"
            >
              <Github className="text-gray-700 mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
              <p className="text-gray-600">RSCODERR</p>
            </a>
            
            <a
              href="https://www.linkedin.com/in/raghav-sharma-693575341"
              className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all"
            >
              <Linkedin className="text-blue-700 mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-gray-600">Raghav Sharma</p>
            </a>
          </div>
          
          <button
            onClick={() => window.location.href = 'mailto:akasharmaraghav@gmail.com'}
            className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-colors transform hover:scale-105"
          >
            Start a Conversation
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center">
          <p>&copy; {new Date().getFullYear()} Raghav Sharma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
