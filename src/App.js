import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Monitor, Code, Palette, Database, Cpu, HardDrive, MousePointer,
  Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MessageCircle 
} from 'lucide-react';
import profileImage from './images/profile.jpg';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedDegree, setSelectedDegree] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const backgroundImages = {
  home: '/images/home-bg.jpg',
  about: '/images/about-bg.jpg',
  education: '/images/education-bg.jpg',
  trainings: '/images/education-bg.jpg',
  experience: '/images/experience-bg.jpg',
  skills: '/images/skills-bg.jpg',
  projects: '/images/projects-bg.jpg',
  services: '/images/services-bg.jpg',
  referees: '/images/referees-bg.jpg',
  contact: '/images/contact-bg.jpg'
};


  const sections = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'trainings', label: 'Trainings' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'referees', label: 'Referees' },
    { id: 'contact', label: 'Contact' }
  ];

  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Science - (PENDING)',
      institution: 'University of The People',
      period: '2024 - Current',
      description: 'Specialized in Systems Administration and Network Security and Computer Programming',
      image: '/images/degree-bsc.jpg'
    },
    {
      degree: 'Diploma in Computing and Information Systems (ABMA)',
      institution: 'University of Malawi, Chancellor College',
      period: '2015 - 2017',
      description: 'Passed with Merit',
      image: '/images/Diploma.jpg'
    },
    {
      degree: 'MSCE',
      institution: 'Zomba Catholic Secondary School',
      period: '2011 - 2014',
      description: 'Graduated with 13 points',
      image: '/images/msce.jpg'
    }
  ];

  const skillCategories = {
    hardware: {
      title: 'Hardware Expertise',
      icon: Cpu,
      description: 'Comprehensive knowledge in PC hardware maintenance, management, and optimization. Experienced in building custom workstations, server setup, component troubleshooting, and performance tuning.',
      skills: ['PC Assembly & Custom Builds', 'Hardware Diagnostics & Repair', 'Server Infrastructure', 'Component Upgrades & Optimization', 'Peripheral Management']
    },
  software: {
    title: 'Software & Development',
    icon: Code,
    description: 'Proficient in full-stack development, data tools, and productivity suites.',
    skills: [
      'Python, Java, C++ Programming',
      'Web Design & Development (HTML, CSS, JavaScript)',
      'Microsoft Office Suite',
      'Database Design & Development',
      'ODK & Kobo Collect'
    ]
  },
  systems: {
    title: 'Systems & IT Operations',
    icon: Cpu,
    description: 'Experienced in server administration, OS deployment, and technical support.',
    skills: [
      'Windows Server Administration',
      'PC Hardware Maintenance & OS Installation',
      'Network Troubleshooting',
      'MALTIS & CIMIS Platforms',
      'Technical Training & Documentation'
    ]
  },
  data: {
    title: 'Data Management',
    icon: Database,
    description: 'Skilled in data collection, cleaning, analysis, and reporting.',
    skills: [
      'Data Entry & Validation',
      'Monitoring & Evaluation (M&E)',
      'Report Consolidation',
      'Data Visualization',
      'Client & Case Worker Support'
    ]
  },
  professional: {
    title: 'Professional Skills',
    icon: Palette,
    description: 'Strong soft skills that enhance technical delivery.',
    skills: [
      'Project & Change Management',
      'Community Mobilization',
      'Problem Solving & Critical Thinking',
      'Time Management',
      'Teaching & Training'
    ]
  },
    creative: {
      title: 'Creative Solutions',
      icon: Palette,
      description: 'Strong foundation in design principles and multimedia creation. Capable of producing professional graphics and edited video content.',
      skills: ['Adobe Creative Suite', 'Video Editing & Post-Production', 'UI/UX Design Principles', 'Content Creation', 'Canva','Illustrator','Corel Draw', ]
    }
  };

  const cursorVariants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      scale: 1,
      opacity: 0.7
    },
    hover: {
      scale: 2,
      opacity: 0.9,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-black relative">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={cursorVariants}
        animate="default"
        style={{ left: 0, top: 0 }}
      />
      
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${backgroundImages[activeSection]})`,
          filter: 'brightness(0.4) contrast(1.2)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-cyan-900/30" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => setActiveSection('home')}
            >
              <span className="text-3xl">H</span>ome
            </motion.h1>
            <div className="flex space-x-8">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  className={`relative text-white/80 hover:text-cyan-400 transition-colors font-medium ${
                    activeSection === section.id ? 'text-cyan-400' : ''
                  }`}
                  onClick={() => setActiveSection(section.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.section
              key="home"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="min-h-screen flex items-center justify-center"
            >
              <div className="text-center">
                <motion.div
                  className="relative mb-8"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="w-64 h-64 rounded-full overflow-hidden mx-auto border-4 border-cyan-400/50 shadow-2xl">
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-pulse" />
                </motion.div>
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Phillip Khuma Phiri
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-cyan-400/90 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  IT Technician & Creative Technologist
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <button
                    onClick={() => setActiveSection('about')}
                    className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
                  >
                    Discover My Journey
                    <ChevronDown className="inline ml-2 group-hover:translate-y-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeSection === 'about' && (
            <motion.section
              key="about"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="min-h-screen py-20"
            >
              <div className="container mx-auto px-6">
                <motion.div
                  className="max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
                    About Me
                  </h2>
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
                    <motion.p 
                      className="text-lg text-gray-200 leading-relaxed mb-6"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      I'm a passionate IT technician with over 5 years of experience in hardware maintenance, 
                      software development, and creative technology solutions. My journey began with a fascination 
                      for how computers work at the most fundamental level, which evolved into a career dedicated 
                      to solving complex technical challenges and creating seamless digital experiences.
                    </motion.p>
                    <motion.p 
                      className="text-lg text-gray-200 leading-relaxed"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      What drives me is the intersection of technology and creativity. I believe that technical 
                      solutions should not only be functional but also intuitive and aesthetically pleasing. 
                      This philosophy guides my approach to every project, whether I'm building a custom PC, 
                      developing a web application, posters, flyers, or editing a photo or video for a client.
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeSection === 'education' && (
            <motion.section
              key="education"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="min-h-screen py-20"
            >
              <div className="container mx-auto px-6">
                <motion.h2 
                  className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Education & Certifications
                </motion.h2>
                <div className="max-w-4xl mx-auto space-y-8">
                  {educationData.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
                      whileHover={{ 
                        y: -5, 
                        scale: 1.02,
                        boxShadow: '0 20px 40px rgba(0, 200, 255, 0.2)'
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedDegree(edu)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-cyan-400">{edu.degree}</h3>
                        <span className="text-purple-400 font-medium">{edu.period}</span>
                      </div>
                      <p className="text-purple-300 font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
          {activeSection === 'trainings' && (
  <motion.section
    key="trainings"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.8 }}
    className="min-h-screen py-20"
  >
    <div className="container mx-auto px-6">
      <motion.h2 
        className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Professional Trainings
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {[
          {
            title: 'Server Administration & Management',
            issuer: 'Directorate of Road Traffic and Safety Services (DRTSS)',
            period: '2019',
            description: 'Comprehensive training in Windows Server setup, user management, backup strategies, and system security. Prepared to serve as system administrator for the Malawi Road Traffic Information System.'
          },
          {
            title: 'DHIS2 (District Health Information Software 2) Training',
            issuer: 'Ministry of Health / WHO / In-Service Capacity Building',
            period: '2023',
            description: 'Hands-on training in DHIS2 for health data management, including data entry, validation, dashboard creation, and indicator tracking. Focused on supporting public health reporting and decision-making at district level.'
          },
          {
            title: 'Server Virtualization',
            issuer: 'Directorate of Road Traffic and Safety Services (DRTSS)',
            period: '2019',
            description: 'Hands-on training in deploying and managing virtualized server environments using enterprise-grade virtualization platforms.'
          },
          {
            title: 'MALTIS Regional Trainer Certification',
            issuer: 'Directorate of Road Traffic and Safety Services (DRTSS)',
            period: '2016 – 2020',
            description: 'Certified to train staff across Malawi on the Malawi Road Traffic Information System (MALTIS), including terminal setup, data entry, and troubleshooting.'
          },
          {
            title: 'CIMIS Data Platform Training',
            issuer: 'Comsip Cooperative Union',
            period: '2022',
            description: 'Mastered data capture, validation, and reporting workflows in the Community Implementation Management Information System (CIMIS) for social protection programs.'
          },
          {
            title: 'ODK & Kobo Toolbox Advanced User',
            issuer: 'Self-Directed / Field Application',
            period: '2015 – Present',
            description: 'Extensive field experience designing forms, collecting data, and managing mobile-based surveys for government and NGO projects.'
          },
          {
            title: 'Linux Command Line Administration',
            issuer: 'Self-Directed / Field Application',
            period: '2015 – Present',
            description: 'Server administration on Ubuntu and CentOS via CLI, including user management, cron jobs, firewall rules (UFW/iptables), and Bash automation scripts.'
          },
          {
            title: 'Diploma in Project Management (Ongoing)',
            issuer: 'Alison Learning Platform',
            period: '2023 – Present',
            description: 'Studying project lifecycle, risk management, and stakeholder communication to enhance delivery of IT and data initiatives.'
          }
        ].map((training, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(0, 200, 255, 0.2)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">{training.title}</h3>
                <p className="text-purple-300 font-medium">{training.issuer}</p>
              </div>
              <span className="text-purple-400 font-medium mt-2 md:mt-0">{training.period}</span>
            </div>
            <p className="text-gray-300">{training.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
)}

          {activeSection === 'skills' && (
            <motion.section
              key="skills"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="min-h-screen py-20"
            >
              <div className="container mx-auto px-6">
                <motion.h2 
                  className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Technical Expertise
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {Object.entries(skillCategories).map(([key, category], index) => {
                    const IconComponent = category.icon;
                    return (
                      <motion.div
                        key={key}
                        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 cursor-pointer overflow-hidden"
                        whileHover={{ 
                          y: -10, 
                          scale: 1.03,
                          borderColor: 'rgba(56, 189, 248, 0.6)'
                        }}
                        onHoverStart={() => setHoveredSkill(key)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                        <ul className="space-y-2">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.li
                              key={skillIndex}
                              className="flex items-center text-cyan-300"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ 
                                opacity: hoveredSkill === key ? 1 : 0.7,
                                x: hoveredSkill === key ? 0 : -10
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                              {skill}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.section>
          )}
          
          {activeSection === 'experience' && (
  <motion.section
    key="experience"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.8 }}
    className="min-h-screen py-20"
  >
    <div className="container mx-auto px-6">
      <motion.h2 
        className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Professional Experience
      </motion.h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {[
          {
            title: 'Statistical Clerk',
            company: 'Partners in Hope',
            location: 'Chikwawa, Malawi',
            period: 'June 2023 – Current',
            description: 'Collecting, entering, and verifying data from health services and community outreach programs while ensuring accuracy and consistency. Maintaining organized records, preparing basic reports and visual summaries, and supporting monitoring and evaluation efforts. Working with databases, upholding data privacy standards, and assisting program teams with ongoing data needs for effective reporting.'
          },
          {
            title: 'Statistical Clerk',
            company: 'Ministry Of Health',
            location: 'Chikwawa, Malawi',
            period: 'May 2023 – June 2025',
            description: 'I collected, recorded, and validated health-related data from hospital departments, outreach clinics, and other public health programs using digital tools such as DHIS2, SurveyCTO, and KoBoCollect. I maintained accurate and confidential records in national health databases, cleaned datasets to correct errors or inconsistencies, and assisted in generating routine reports on disease prevalence, immunization coverage, maternal and child health indicators, and other key metrics. I also supported senior analysts and program officers by preparing tables, charts, and data summaries used for policy planning, outbreak response, and donor reporting. Throughout my work, I strictly adhered to data protection protocols and ensured timely submission of information to meet both national and international health reporting requirements.'
          },
          {
            title: 'Graphics Designer',
            company: 'ADVOS Solutions',
            location: 'Remote',
            period: 'September 2025',
            description: 'As a remote Graphic Designer, I created visual content for digital and print media, including logos, brochures, social media graphics, and website assets. I collaborated with clients and team members through online platforms to understand project requirements, incorporated feedback into design revisions, and delivered final files on schedule. I managed multiple projects simultaneously, maintained brand consistency across materials, and ensured all designs were original, visually compelling, and aligned with client objectives—all while working independently from a remote setup.'
          },
          {
            title: 'Data Officer',
            company: 'Comsip Cooperative Union',
            location: 'Blantyre, Malawi',
            period: 'Nov 2022 – May 2023',
            description: 'Worked with case workers on SCT & EPWP programs. Captured and cleaned data in CIMIS, consolidated district reports, and trained staff on data presentation. Designed user-friendly templates for efficient data acquisition.'
          },
          {
            title: 'IT Officer | Graphics Designer',
            company: 'Khan’s Technologies',
            location: 'Malawi',
            period: 'Oct 2021 – May 2022',
            description: 'Analyzed and designed computer systems. Provided technical support, maintained networks, scheduled upgrades, and trained staff. Redefined system requirements and resolved critical IT issues, Created Posters, Flyers, Ads and Labels for all Commecial Products made by the Office'
          },
          {
            title: 'IT Officer',
            company: 'Dynamic-Tech Solutions',
            location: 'Malawi',
            period: 'Apr 2020 – Jun 2021',
            description: 'Designed and implemented client websites (web & mobile). Provided onsite/online training, documented technical issues, and ensured systems met client specifications. Managed project risks and deadlines.'
          },
          {
            title: 'IT | Data Officer',
            company: 'Directorate of Road Traffic and Safety Services (DRTSS)',
            location: 'Malawi',
            period: 'Oct 2015 – Feb 2020',
            description: 'Served as regional trainer for MALTIS. Installed OS, configured terminals, and provided client support. Successfully completed Server Administration & Virtualization training for the Malawi Road Traffic Information System.'
          }
        ].map((job, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(0, 200, 255, 0.2)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 className="text-2xl font-bold text-cyan-400">{job.title}</h3>
              <span className="text-purple-400 font-medium">{job.period}</span>
            </div>
            <p className="text-purple-300 font-medium mb-2">{job.company} • {job.location}</p>
            <p className="text-gray-300">{job.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
)}

          {activeSection === 'projects' && (
  <motion.section
    key="projects"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.8 }}
    className="min-h-screen py-20"
  >
    <div className="container mx-auto px-6">
      <motion.h2 
        className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "IT Support Dashboard",
            description: "A responsive admin panel for monitoring network health, ticket status, and hardware inventory. Built with React and Chart.js.",
            image: "https://placehold.co/600x400/FF8C00/ffffff?text=IT+Support+Dashboard",
            tech: ["React", "Tailwind CSS", "Chart.js"]
          },
          {
            title: "Lingo Sprout: Kids' English Learning Game",
            description: "An offline-first educational game that helps parents and teachers teach English vocabulary, phonics, and numbers to children aged 3–8. Features voice interaction, progress tracking, and local language support (Chichewa/Tumbuka). Built with Python and designed for low-resource environments.",
            image: "https://placehold.co/600x400/AA44FF/ffffff?text=Lingo+Sprout+Game",
            tech: ["Python", "Kivy", "Speech Recognition", "Educational Design", "UI/UX"],
          },
          {
            title: "Portfolio Website",
            description: "This very site! A dynamic, animated portfolio using Framer Motion, Tailwind, and React — showcasing my tech and creative skills.",
            image: "/images/portfolio.jpg",
            tech: ["React", "Framer Motion", "Lucide Icons"],
            link: "https://github.com/yourusername/portfolio"
          },
          {
            title: "Driving School Management System",
            description: "A full-stack web application for driving schools to register new clients, track their progress (Learner’s Licence or Driving Licence), record payments, and display real-time balances. Features role-based dashboards for admins and students, automated status updates, and payment history logs.",
            image: "https://placehold.co/600x400/1a1a2e/ffffff?text=Driving+School+Management+System",
            tech: ["Python", "Flask", "SQLite", "HTML/CSS", "JavaScript", "Responsive Design"],
          },
          {
            title: "Lender Space",
            description: "A Python command-line tool for money lenders to register borrowers, track loan disbursements, auto-calculate compound interest, and send email/SMS reminders before due dates. Built with Python, SQLite, and smtplib.",
            image: "https://placehold.co/600x400/00BFFF/ffffff?text=Lender+Space",
            tech: ["Python", "SQLite", "smtplib", "Tabulate", "CLI"],
            
          },
          {
            title: "Graphic Design Portfolio",
            description: "Branding and UI mockups for local businesses, including logos, social media kits, and app wireframes.",
            image: "https://placehold.co/600x400/533483/ffffff?text=Design+Work",
            tech: ["Figma", "Adobe Illustrator", "Photoshop"],
            link: "#"
          }
        ].map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
            whileHover={{ 
              y: -8, 
              scale: 1.03,
              boxShadow: '0 25px 50px rgba(0, 200, 255, 0.25)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Project Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Button */}
              {project.link && (
  <a
    href={project.link}
    target={typeof project.link === 'string' && project.link.startsWith('http') ? "_blank" : undefined}
    rel={typeof project.link === 'string' && project.link.startsWith('http') ? "noopener noreferrer" : undefined}
    className="inline-block text-cyan-400 hover:text-cyan-300 font-medium text-sm mt-2"
  >
    View Project →
  </a>
)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
)}

{activeSection === 'services' && (
  <motion.section
    key="services"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.8 }}
    className="min-h-screen py-20"
  >
    <div className="container mx-auto px-6">
      <motion.h2 
        className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Professional Services
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {[
          { title: 'PC Hardware Repair & Maintenance', desc: 'Diagnosis, repair, and optimization of desktops, laptops, and workstations.' },
{ title: 'Custom PC Builds', desc: 'Tailored systems for gaming, productivity, or creative workloads.' },
{ title: 'Network Setup & Troubleshooting', desc: 'Secure and reliable home or small business network solutions.' },
{ title: 'Web & Graphic Design', desc: 'Responsive websites and professional visuals for your brand.' },
{ title: 'Data Entry & Cleaning', desc: 'Accurate, fast, and confidential entry and validation of survey or business data using Excel, Google Sheets, or databases.' },
{ title: 'Enumerator & Field Data Collection', desc: 'Professional mobile-based data gathering using ODK, Kobo Collect, or SurveyCTO for NGOs, research, and government programs.' },
{ title: 'Virtual Assistant (Tech-Savvy)', desc: 'Email/calendar management, online research, data organization, and tech tool setup for busy professionals and remote teams.' },
{ title: 'Video Editing & Post-Production', desc: 'Clean, engaging edits for training videos, social media clips, event highlights, and client testimonials.' },
{ title: 'Windows Server Administration', desc: 'Setup, user management, backup, and security for small business server environments.' },
{ title: 'IT Training & Digital Literacy', desc: 'Customized one-on-one or group training on computer basics, software, online safety, and productivity tools.' },
{ title: 'Database Design & Development', desc: 'Simple, functional databases for small businesses to manage clients, inventory, or projects.' },
{ title: 'Remote IT Support', desc: 'On-demand troubleshooting for software, connectivity, and device issues—ideal for remote workers and small offices.' }
        ].map((service, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20"
            whileHover={{ y: -5, borderColor: 'rgba(56, 189, 248, 0.6)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">{service.title}</h3>
            <p className="text-gray-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
)}

{activeSection === 'referees' && (
  <motion.section
    key="referees"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.8 }}
    className="min-h-screen py-20"
  >
    <div className="container mx-auto px-6">
      <motion.h2 
        className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Professional Referees
      </motion.h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {[
          {
            name: 'Leonard Mtonya',
            role: 'Regional Manager, Directorate of Road Traffic and Safety Services',
            contact: '+265 999 315 382 | +265 888 315 382',
            email: 'leonardmtonya@gmail.com'
          },
          {
            name: 'Damiano Banda',
            role: 'IT Manager, Dynamic Tech Solutions',
            contact: '+265 991 318 204',
            email: 'damienbanda4@gmail.com'
          },
          {
            name: 'Angus Rodgers',
            role: 'IT Manager, Zodiak Broadcasting Station',
            contact: '+265 993 195 184',
            email: ''
          }
        ].map((ref, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white">{ref.name}</h3>
            <p className="text-cyan-300">{ref.role}</p>
            <p className="text-gray-400 mt-1">{ref.contact}</p>
            {ref.email && <p className="text-gray-400">{ref.email}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
)}

{activeSection === 'contact' && (
  <motion.section
    key="contact"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.8 }}
    className="min-h-screen py-20"
  >
    <div className="container mx-auto px-6">
      <motion.h2 
        className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Get In Touch
      </motion.h2>
      
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-10 overflow-hidden">
  <div className="inline-block whitespace-nowrap">
    <div className="inline-block animate-scroll text-xl text-gray-300 font-medium">
      Have a project in mind?&nbsp;&nbsp;
      Need your own portfolio?&nbsp;&nbsp;
      IT support?&nbsp;&nbsp;
      Or perhaps a position for me?&nbsp;&nbsp;
      I'd love to hear from you!&nbsp;&nbsp;
      {/* Repeat for seamless loop */}
      Have a project in mind?&nbsp;&nbsp;
      Need your own portfolio?&nbsp;&nbsp;
      IT support?&nbsp;&nbsp;
      Or perhaps a position for me?&nbsp;&nbsp;
      I'd love to hear from you!&nbsp;&nbsp;
    </div>
  </div>
</div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-10">
          {[
            { Icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
            { Icon: Twitter, label: 'X (Twitter)', url: 'https://x.com/yourhandle' },
            { Icon: Instagram, label: 'Instagram', url: 'https://instagram.com/yourhandle' },
            { Icon: Facebook, label: 'Facebook', url: 'https://facebook.com/yourpage' }
          ].map((social, i) => {
            const IconComponent = social.Icon;
            return (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                aria-label={social.label}
              >
                <IconComponent className="w-8 h-8" />
              </motion.a>
            );
          })}
        </div>

        {/* Contact Methods */}
        <div className="space-y-4 mb-10"> {/* Reduced from space-y-5 to space-y-4 for tighter, neater look */}
          {/* Email */}
          <a 
            href="mailto:phillipkhuma@gmail.com" 
            className="inline-flex items-center justify-center w-full max-w-xs mx-auto px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-full hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Email Me
          </a>

          {/* Primary Phone */}
          <a 
            href="tel:+265990204750" 
            className="inline-flex items-center justify-center w-full max-w-xs mx-auto px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-full hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call: +265 990 204 750
          </a>

          {/* Secondary Phone */}
          <a 
            href="tel:+265881103178" 
            className="inline-flex items-center justify-center w-full max-w-xs mx-auto px-6 py-3.5 bg-gradient-to-r from-emerald-400 to-teal-400 text-white font-medium rounded-full hover:from-emerald-300 hover:to-teal-300 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call: +265 881 103 178
          </a>
          
          {/* WhatsApp */}
          <a 
            href="https://wa.me/265881103178" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full max-w-xs mx-auto px-6 py-3.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-full hover:from-green-400 hover:to-emerald-400 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp: +265 881 103 178
          </a>
          {/* Download CV Button */}
<a 
  href="/PHILLIP CV.pdf" 
  download 
  className="inline-flex items-center justify-center w-full max-w-xs mx-auto px-6 py-3.5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-full hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 shadow-md hover:shadow-lg"
>
  <HardDrive className="w-5 h-5 mr-2" />
  Download CV
</a>
        </div>

        <p className="text-gray-500 text-sm mt-6">
          Based in Blantyre, Malawi • Available for remote & on-site work
        </p>
      </div>
    </div>
  </motion.section>
)}

        </AnimatePresence>
      </main>

      {/* Scroll Indicator */}
      {activeSection === 'home' && (
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <MousePointer className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 text-sm mt-2">Scroll to explore</span>
          </div>
        </motion.div>
      )}
      {/* Degree Image Modal */}
<AnimatePresence>
  {selectedDegree && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={() => setSelectedDegree(null)} // close on outside click
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative max-w-2xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking image
      >
        <img
          src={selectedDegree.image}
          alt={`${selectedDegree.degree} Certificate`}
          className="w-full h-auto rounded-xl shadow-2xl border border-cyan-400/30"
        />
        <button
          onClick={() => setSelectedDegree(null)}
          className="absolute -top-4 -right-4 bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-cyan-400 transition-colors"
        >
          ✕
        </button>
        <div className="mt-4 text-white text-center">
          <h3 className="text-xl font-bold">{selectedDegree.degree}</h3>
          <p className="text-cyan-300">{selectedDegree.institution}</p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
};

export default App;
