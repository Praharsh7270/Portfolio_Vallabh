import React, { useState, useEffect } from 'react';
import { 
  Scale, Shield, Award, FileText, Phone, Mail, MapPin, 
  Menu, X, Sun, Moon, Sparkles, Gavel, Users2, Landmark, 
  ArrowRight, ShieldCheck, ChevronRight, GraduationCap, Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
// Import modular components
import PracticeAreas from './components/PracticeAreas';
import GallerySection from './components/GallerySection';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('vs_dark_mode');
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Hero Carousel Index State
  const [heroPhotoIndex, setHeroPhotoIndex] = useState(0);

  const heroPhotos = [
    {
      src: '/1.jpg', 
      caption: 'Honored at Advocate Felicitation Ceremony 2026, Lucknow',
      badge: 'Felicitation'
    },
    {
      src: '/2.jpg',
      caption: 'Presented the Framed Constitution of India Preamble',
      badge: 'Civic Pride'
    },
    {
      src: '/3.jpg',
      caption: 'Receiving Court Honors at Faculty of Law, Dr. Shakuntala Misra NRU',
      badge: 'Academic Leadership'
    },
    {
      src: '/4.jpg',
      caption: 'Receiving Court Honors at Faculty of Law, Dr. Shakuntala Misra NRU',
      badge: 'Academic Leadership'
    },
    {
      src: '/5.jpg',
      caption: 'Receiving Court Honors at Faculty of Law, Dr. Shakuntala Misra NRU',
      badge: 'Academic Leadership'
    },
    {
      src: '/6.jpg',
      caption: 'Receiving Court Honors at Faculty of Law, Dr. Shakuntala Misra NRU',
      badge: 'Academic Leadership'
    },
    {
      src: '/7.jpg',
      caption: 'Receiving Court Honors at Faculty of Law, Dr. Shakuntala Misra NRU',
      badge: 'Academic Leadership'
    },
    {
      src: '/8.jpg',
      caption: 'Receiving Court Honors at Faculty of Law, Dr. Shakuntala Misra NRU',
      badge: 'Academic Leadership'
    },
    {
      src: '/9.jpg',
      caption: 'Receiving Court Honors at Faculty of Law, Dr. Shakuntala Misra NRU',
      badge: 'Academic Leadership'
    },
    {
      src: '/10.jpg',
      caption: 'Receiving Court Honors at Faculty of Law, Dr. Shakuntala Misra NRU',
      badge: 'Academic Leadership'
    },
    {
      src: '/11.jpg',
      caption: 'Receiving Court Honors at Faculty of Law, Dr. Shakuntala Misra NRU',
      badge: 'Academic Leadership'
    },
    {
      src: '/12.jpg',
      caption: 'Receiving Court Honors at Faculty of Law, Dr. Shakuntala Misra NRU',
      badge: 'Academic Leadership'
    }
  ];

  // Auto cycle hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroPhotoIndex((prev) => (prev + 1) % heroPhotos.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Sync scroll state for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark/Light Theme toggler
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
      try {
        localStorage.setItem('vs_dark_mode', 'true');
      } catch (e) {
        // ignore storage fails
      }
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      try {
        localStorage.setItem('vs_dark_mode', 'false');
      } catch (e) {
        // ignore
      }
    }
  }, [darkMode]);

  return (
    <div id="vs-legal-root" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* 1. Header Sticky Navbar */}
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-150 dark:border-slate-900 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo & Branding */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-950 border border-gold-500/30 rounded-xl overflow-hidden shadow-inner group-hover:border-gold-500 transition-colors p-1">
              <img
                src="/vs_legal_logo_1781287211670.jpeg"
                alt="V.S Legal Logo" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-serif font-bold text-sm tracking-widest text-slate-950 dark:text-gold-200">
                  V.S LEGAL
                </span>
                <span className="text-[10px] font-mono text-gold-500 font-bold border-l border-gold-500/30 pl-1.5 uppercase">
                  & ASSOCIATES
                </span>
              </div>
              <span className="text-[9px] block text-slate-450 dark:text-slate-400 font-sans tracking-tight uppercase">
                Your Rights. Our Priority
              </span>
            </div>
          </a>

          {/* Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider">
            <a href="#hero" className="text-slate-755 dark:text-slate-250 hover:text-gold-500 dark:hover:text-gold-400 transition-colors nav-glow">Home</a>
            <a href="#bio" className="text-slate-755 dark:text-slate-250 hover:text-gold-500 dark:hover:text-gold-400 transition-colors nav-glow">Advocate Bio</a>
            <a href="#practice-areas" className="text-slate-755 dark:text-slate-250 hover:text-gold-500 dark:hover:text-gold-400 transition-colors nav-glow">Practice Areas</a>
            <a href="#gallery" className="text-slate-755 dark:text-slate-250 hover:text-gold-500 dark:hover:text-gold-400 transition-colors nav-glow">Action Gallery</a>
          </nav>

          {/* Action buttons (Theme + Quick Call) */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Theme Toggle Button */}
            <button
              id="theme-toggler"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-650 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-350 hover:text-gold-500 dark:hover:text-gold-400 transition-colors cursor-pointer"
              title="Toggle Dark/Light Mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Direct Contact Button */}
            <a
              id="nav-direct-call"
              href="https://wa.me/917388163433?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-xl shadow-md transition-all flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Mobile responsive triggers */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              id="theme-toggler-mobile"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-350 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              id="mobile-menu-toggler"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drop menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-dropdown-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[68px] left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 shadow-xl z-40 block lg:hidden overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4 text-sm font-semibold uppercase tracking-wider flex flex-col">
              <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-900 text-slate-800 dark:text-slate-300 hover:text-gold-500">Home</a>
              <a href="#bio" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-900 text-slate-800 dark:text-slate-300 hover:text-gold-500">Advocate Bio</a>
              <a href="#practice-areas" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-900 text-slate-800 dark:text-slate-300 hover:text-gold-500">Practice Areas</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-900 text-slate-800 dark:text-slate-300 hover:text-gold-500">Action Gallery</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-900 text-slate-800 dark:text-slate-300 hover:text-gold-500">Intake Dossier</a>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  id="mobile-menu-call"
                  href="tel:+917388163433"
                  className="w-full text-center py-2.5 bg-gold-600 hover:bg-gold-700 text-white rounded-lg text-xs tracking-widest font-bold"
                >
                  CALL +91 7388163433
                </a>
                <a
                  id="mobile-menu-whatsapp"
                  href="https://wa.me/917388163433?text=How%20can%20I%20help%20you%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-xs tracking-widest font-bold"
                >
                  WHATSAPP CHAT NOW
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hero Presentation Section */}
      <section 
        id="hero" 
        className="relative pt-32 pb-24 md:py-36 bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 overflow-hidden"
      >
        {/* Absolute Background Blur Grid */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gold-500/5 dark:bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          
          {/* Left Hero Profile */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-gold-600 dark:text-gold-400 bg-gold-500/10 px-3.5 py-1.5 rounded-full w-fit max-w-full">
              <Sparkles className="w-4 h-4 animate-spin text-gold-500" />
              <span className="uppercase tracking-widest">Principal Legal Litigator & Jurist</span>
            </div>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-serif text-slate-500 dark:text-slate-400 tracking-tight">
                V.S Legal and Associates
              </p>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-950 dark:text-white tracking-tight leading-tight">
                Advocate <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 via-amber-600 to-gold-450">Vallabh Shrivastava</span>
              </h1>
              <h2 className="text-lg md:text-xl font-sans text-slate-700 dark:text-slate-300 font-light max-w-2xl">
                Civil, Criminal, Matrimonial, M.A.C.T, and Debts Recovery Tribunal (D.R.T) trial attorney representing clients with dedication and meticulous counsel.
              </h2>
            </div>

            {/* Quick trust counts */}
            <div className="grid grid-cols-3 gap-4 border-t border-b border-slate-150 dark:border-slate-850 py-5 max-w-xl">
              <div>
                <span className="text-xl md:text-2xl font-serif font-bold text-gold-500 block">Civil & Crim.</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Core Practices</span>
              </div>
              <div className="border-l border-r border-slate-150 dark:border-slate-850 px-4">
                <span className="text-xl md:text-2xl font-serif font-bold text-gold-500 block">D.R.T Law</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Assets Secured</span>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-serif font-bold text-gold-500 block">Lucknow</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Primary Bar Seat</span>
              </div>
            </div>

            {/* Calls To Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                id="hero-book-consult"
                href="https://wa.me/917388163433?text=Hello%20,%20I%20want%20to%20book%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-7 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl tracking-wider text-xs uppercase shadow-xl transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Book Consultation on WhatsApp
              </a>
              <a
                id="hero-view-practice"
                href="#practice-areas"
                className="flex items-center justify-center gap-2 py-3.5 px-7 border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-850 rounded-2xl tracking-wider text-xs font-semibold uppercase text-slate-800 dark:text-slate-200 transition-colors"
              >
                <span>Explore Practice Areas</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Hero Slideshow */}
          <div className="lg:col-span-5 relative">
            
            {/* Elegant luxury framing */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-amber-600 rounded-3xl blur-md opacity-30 animate-pulse " />
            
            <div className="relative bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-4 rounded-3xl shadow-2xl overflow-hidden aspect-4/5 max-w-sm mx-auto flex flex-col justify-between">
              
              {/* Photo Display Stage */}
              <div className="flex-1 overflow-hidden rounded-2xl aspect-16/11 bg-slate-950 relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={heroPhotoIndex}
                    src={heroPhotos[heroPhotoIndex].src}
                    alt={heroPhotos[heroPhotoIndex].caption}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </AnimatePresence>

                {/* Event Category Tag */}
                
              </div>

              {/* Description strip below photo */}
              <div className="pt-4 px-2">
                
                
                {/* Dots indicator */}
                <div className="flex items-center gap-1.5 mt-4">
                  {heroPhotos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setHeroPhotoIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        heroPhotoIndex === idx ? 'w-6 bg-gold-500' : 'w-2 bg-slate-200 dark:bg-slate-800'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Professional Bio & Qualification Section */}
      <section id="bio" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-850/60 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column 1: Preamble Framing Photo */}
            <div className="lg:col-span-5 relative">
              <div className="absolute top-4 left-4 w-full h-full bg-slate-100 dark:bg-slate-850 rounded-2xl -z-10 border border-slate-200 dark:border-slate-800" />
              <div className="overflow-hidden bg-slate-950 rounded-2xl shadow-xl aspect-3/4 border border-slate-200 dark:border-slate-800">
                <img
                  src="/preamble_presentation_1781287182129.jpeg"
                  alt="Vallabh Shrivastava holding Constitution of India Preamble"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                />
              </div>
              
            </div>

            {/* Column 2: Bio copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest bg-gold-400/10 px-3 py-1 rounded-full">
                Foundational Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-950 dark:text-white tracking-tight">
                The Advocacy of Vallabh Shrivastava
              </h2>
              <div className="w-16 h-0.5 bg-gold-500 rounded-full"></div>

              <div className="space-y-6 text-sm md:text-base text-slate-650 dark:text-slate-300 leading-relaxed font-sans">
                <div className="bg-slate-900 border border-gold-500/20 rounded-2xl p-6 text-white shadow-lg">
                  <div className="mb-4">
                    <h3 className="text-xl font-serif font-bold text-gold-400">VALLABH SHRIVASTAVA</h3>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Principal Advocate & Founder</p>
                  </div>
                  <div className="border-t border-slate-800 pt-4">
                    <p className="text-[10px] font-mono tracking-widest text-gold-400 uppercase">Office / Firm Registration</p>
                    <h4 className="font-serif text-slate-100">V.S Legal and Associates</h4>
                    <p className="text-xs text-slate-400 italic">Practice: Civil, Criminal, Matrimonial, M.A.C.T, D.R.T</p>
                  </div>
                  <div className="mt-4 space-y-2 text-xs">
                    <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold-500"/> <span>legalconsultancy08@gmail.com</span></p>
                    <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold-500"/> <span>+91 7388163433</span></p>
                    <p className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gold-500 mt-0.5"/> <span>551 Gha /522, Nand Nagar, Nattkhera Road, Alambagh, Lucknow, U.P - 226005</span></p>
                  </div>
                   <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>📍 LUCKNOW BAR ASSOCIATION</span>
                      <span className="text-gold-500 font-bold bg-white/5 py-1 px-2 rounded-md border border-white/5">VS-2026-REG</span>
                   </div>
                </div>
              </div>

              {/* Qualifications / Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-850/60 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <GraduationCap className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">Education & Accreditations</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Graduate of Faculty of Law, Dr. Shakuntala Misra National University. Enrolled Advocate, Lucknow Bar Association.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-850/60 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  <Briefcase className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">Practice Footprints</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Extensive research experience in SARFAESI securitization appeals, Sessions Court defense trial, and High Court petitions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Modular Practice Areas */}
      <PracticeAreas />

      {/* 5. Modular Gallery Section with Lightbox */}
      <GallerySection />

     

      {/* 8. Footer Block with Social Links & SEO Optimization */}
      <footer id="footer" className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-8 text-xs relative overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand/Office Panel */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 border border-gold-500/30 rounded-xl overflow-hidden shadow-inner p-1">
                <img src="/vs_legal_logo_1781287211670.jpeg" alt="V.S Legal Logo" referrerPolicy="no-referrer" className="w-full h-full object-cover scale-110" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm tracking-widest text-gold-400 uppercase">
                  V.S LEGAL AND ASSOCIATES
                </h4>
                <span className="text-[9px] block text-slate-400 font-sans tracking-tight uppercase">
                  Your Rights. Our Priority
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-[11px] leading-relaxed max-w-sm">
              Dedicated advocacy centered on client justice and professional competence. Headquartered in Lucknow, representing clients across Lucknow District Court, Session Court, DRT, and High Court Benches.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://wa.me/917388163433?text=How%20can%20I%20help%20you%3F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-slate-800 hover:border-gold-500/40 rounded-full hover:bg-slate-900 text-slate-400 hover:text-emerald-400 transition-all font-semibold text-xs flex items-center gap-1.5"
              >
                <span>WhatsApp Helpline</span>
              </a>
              <a 
                href="mailto:legalconsultancy08@gmail.com" 
                className="p-2 border border-slate-800 hover:border-gold-500/40 rounded-full hover:bg-slate-900 text-slate-400 hover:text-gold-400 transition-all text-xs"
              >
                <span>Email Briefing</span>
              </a>
            </div>
          </div>

          {/* Quick Smooth Navigation links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-mono text-[9px] uppercase tracking-widest text-gold-500 font-bold">Fast Navigation</h5>
            <ul className="space-y-2 text-slate-400 text-[11px]">
              <li><a href="#hero" className="hover:text-gold-400 transition-colors">Top / Home Page</a></li>
              <li><a href="#bio" className="hover:text-gold-400 transition-colors">Professional Biography</a></li>
              <li><a href="#practice-areas" className="hover:text-gold-400 transition-colors">Services & Domains</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Action Highlights</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Verify Litigation</a></li>
            </ul>
          </div>

          {/* Core SEO keywords description block */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-mono text-[9px] uppercase tracking-widest text-gold-500 font-bold">Lucknow Jurisdiction Services</h5>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Serving citizens across Alambagh, Nattkhera Road, Hazratganj, and wider District Lucknow, Uttar Pradesh. Our attorneys coordinate representation regarding SARFAESI appeal litigation, police bails, and civil partition suites.
            </p>
            <div className="text-[10px] font-mono text-slate-500">
              ⚡ SEO Optimized • SSL Secured Link • Powered by React 19
            </div>
          </div>
        </div>

        {/* Outer credit bar */}
        <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 pt-8 text-center text-slate-500 text-[10px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} V.S Legal and Associates. All Rights Reserved. Transcribed from Registered Advocate Vallabh Shrivastava ID.</p>
          <p className="font-mono">Lucknow, India • legalconsultancy08@gmail.com</p>
        </div>
      </footer>

      {/* Floating Left/Right WhatsApp Button */}
      <a
        id="floating-left-whatsapp"
        href="https://wa.me/917388163433?text=Hello."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 md:right-auto md:left-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white rounded-full shadow-lg hover:shadow-emerald-500/10 hover:shadow-xl transition-all duration-300 cursor-pointer select-none font-sans font-medium text-xs tracking-wider uppercase border border-white/10"
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <svg className="relative w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
        <span className="font-semibold">
          Chat Directly
        </span>
      </a>

    </div>
  );
}
