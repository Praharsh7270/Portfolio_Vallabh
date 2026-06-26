import React, { useState } from 'react';
import { Maximize2, X, Calendar, MapPin, Award, CheckCircle2, ChevronLeft, ChevronRight, QrCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryItem } from '../types';

// Moved outside the component to prevent recreation on every render
const galleryItems: GalleryItem[] = [
  {
    id: 'moot-court-award-1',
    imageUrl: '../public/moot_court_award_1_1781287114796.jpeg',
    title: 'Moot Court Convener Recognition',
    description: 'Awarded Certificate of honor at the Faculty of Law, Dr. Shakuntala Misra National Rehabilitation University, Lucknow during the Intra Moot Court Competition.',
    date: 'May 18-20, 2023',
    category: 'ceremony'
  },
  {
    id: 'moot-court-award-2',
    imageUrl: '../public/moot_court_award_2_1781287147836.jpeg',
    title: 'Academic Legal Facilitation Honor',
    description: 'Receiving formal congratulations and academic appreciation certificates from senior university legal chancellors and administrators.',
    date: 'May 20, 2023',
    category: 'ceremony'
  },
  {
    id: 'association-celebration',
    imageUrl: '../public/vs_legal_celebration_1781287162297.jpeg',
    title: 'Lucrative Trial Success Celebration',
    description: 'Encouraging camaraderie beside fellow Advocates and legal professionals in Lucknow during an annual corporate/institutional cake-cutting gathering.',
    date: 'December 2024',
    category: 'advocacy'
  },
  {
    id: 'constitutional-preamble-honor',
    imageUrl: '../public/preamble_presentation_1781287182129.jpeg',
    title: 'Preamble presentation to Constitutional Scholars',
    description: 'Presented with a framed copy of the original Preamble to the Constitution of India in Lucknow, reiterating advocacy commitment.',
    date: 'Constitution Day',
    category: 'advocacy'
  },
  {
    id: 'advocate-felicitation-ceremony',
    imageUrl: '../public/felicitation_ceremony_2026_1781287197824.jpeg',
    title: 'Babu Hargobind Dayal Srivastava Felicitation',
    description: 'Honored with prestigious awards at the Advocate Felicitation Ceremony ("अधिवक्ता सम्मान समारोह - 2026") alongside senior bar leaders.',
    date: 'April 2026',
    category: 'ceremony'
  }
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<'all' | 'ceremony' | 'firm' | 'advocacy'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const openLightbox = (item: GalleryItem) => {
    setSelectedPhoto(item);
    // Fixed: Search inside filteredItems so indices match current view
    const index = filteredItems.findIndex(g => g.id === item.id);
    setActiveIndex(index);
  };

  const nextPhoto = () => {
    if (activeIndex < filteredItems.length - 1) {
      const nextIdx = activeIndex + 1;
      setActiveIndex(nextIdx);
      setSelectedPhoto(filteredItems[nextIdx]);
    } else {
      setActiveIndex(0);
      setSelectedPhoto(filteredItems[0]);
    }
  };

  const prevPhoto = () => {
    if (activeIndex > 0) {
      const prevIdx = activeIndex - 1;
      setActiveIndex(prevIdx);
      setSelectedPhoto(filteredItems[prevIdx]);
    } else {
      const lastIdx = filteredItems.length - 1;
      setActiveIndex(lastIdx);
      setSelectedPhoto(filteredItems[lastIdx]);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest bg-gold-400/10 px-3 py-1 rounded-full">
            In Action
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-950 dark:text-white mt-4 tracking-tight">
            Distinguished Portfolio & Gallery
          </h2>
          <div className="w-20 h-0.5 bg-gold-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            A visual retrospective of Advocate Vallabh Shrivastava’s legal leadership, collegiate associations, academic moot courts, and prestigious felicitation honors.
          </p>
        </div>

        {/* Deep Portfolio Grid Container */}
        <div id="gallery-portfolio-container" className="mb-16">
          
          {/* Navigation/Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 border-b border-slate-200 dark:border-slate-800 pb-0 max-w-2xl mx-auto">
            {(['all', 'ceremony', 'firm', 'advocacy'] as const).map((tab) => (
              <button
                key={tab}
                id={`tab-${tab}`}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedPhoto(null); // Reset lightbox state on tab change to prevent bugs
                }}
                className={`px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 -mb-[1px] ${
                  activeTab === tab
                    ? 'border-gold-500 text-gold-500 font-bold'
                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab === 'all' ? 'All Works' : tab === 'ceremony' ? 'Ceremonies & Awards' : tab === 'firm' ? 'Firm & Credentials' : 'Advocacy Life'}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  id={`gallery-thumb-${item.id}`}
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-800 cursor-pointer shadow-xs hover:shadow-lg transition-all relative"
                  onClick={() => openLightbox(item)}
                >
                  {/* Visual Thumb - Fixed aspect ratio syntax */}
                  <div className="relative aspect-[3/2] overflow-hidden bg-slate-950">
                    <img
                      src={item.imageUrl}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-slate-900/90 text-white p-2.5 rounded-full shadow-lg border border-slate-700">
                        <Maximize2 className="w-4 h-4 text-gold-400" />
                      </div>
                    </div>
                  </div>                
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Full-Screen Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <div id="lightbox-overlay" className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md">
            
            {/* Top Toolbar controls */}
            <div className="w-full max-w-5xl flex items-center justify-between text-white py-4 px-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono py-1 px-2.5 bg-slate-800 rounded-full border border-slate-700 text-gold-400">
                  {activeIndex + 1} / {filteredItems.length}
                </span>
                <span id="lightbox-cat" className="text-xs uppercase tracking-wider text-slate-400">
                  {selectedPhoto.category}
                </span>
              </div>
              
              <button
                id="lightbox-close"
                onClick={() => setSelectedPhoto(null)}
                className="p-2 border border-slate-800 hover:bg-slate-800 rounded-full text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Slider Stage */}
            <div className="flex-1 w-full max-w-5xl flex items-center justify-between gap-4 relative">
              
              {/* Prev Button */}
              <button
                id="lightbox-prev"
                onClick={prevPhoto}
                className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white shadow-xl transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div id="lightbox-image-stage" className="flex-1 max-h-[70vh] flex items-center justify-center">
                <motion.img
                  key={selectedPhoto.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[70vh] object-contain rounded-lg border border-slate-800 shadow-2xl"
                />
              </div>

              {/* Next Button */}
              <button
                id="lightbox-next"
                onClick={nextPhoto}
                className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white shadow-xl transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Details panel */}
            <div className="w-full max-w-3xl text-center text-white py-6 px-4">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-gold-400">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-300 mt-2 line-clamp-3">
                  {selectedPhoto.description}
              </p>
              {selectedPhoto.date && (
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mt-3 font-mono">
                  <Calendar className="w-4 h-4 text-gold-500" />
                  <span>Honored Code Date: {selectedPhoto.date}</span>
                </div>
              )}

              {/* Mobile Slideshow controls */}
              <div className="flex sm:hidden items-center justify-center gap-4 mt-5">
                <button
                  id="lightbox-prev-mobile"
                  onClick={prevPhoto}
                  className="flex items-center gap-1 px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs"
                >
                  <ChevronLeft className="w-4 h-4" /> Prev
                </button>
                <button
                  id="lightbox-next-mobile"
                  onClick={nextPhoto}
                  className="flex items-center gap-1 px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}