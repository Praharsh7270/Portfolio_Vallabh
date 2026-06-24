import React, { useState } from 'react';
import { Scale, ShieldAlert, Heart, Car, Landmark, ArrowRight, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PracticeArea } from '../types';

export default function PracticeAreas() {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  // We had a duplicate id which let's fix. Oh wait, practiceData is structured correctly now. Let's fix the criminal icon issue and make sure all 5 domains from Image contact card are represented.
  const corePracticeAreas: PracticeArea[] = [
    {
      id: 'civil',
      title: 'Civil Law Litigation',
      description: 'Breach of contract, property ownership, partition suits, and business disputes.',
      longDescription: 'Our Civil Practice encompasses comprehensive advisory and trial representation. We deal with real estate conflicts, partition suits, contract enforcements, recovery of dues, and commercial property disputes. Advocate Vallabh Shrivastava represents clients meticulously before Civil Judges, District Courts, and High Courts.',
      iconName: 'Scale'
    },
    {
      id: 'criminal',
      title: 'Criminal Representation',
      description: 'Bails, Sessions trial defense, economic fraud, and cybercrime advocacy.',
      longDescription: 'V.S Legal and Associates provides robust defense representation. We specialize in regular and anticipatory bail petitions, corporate fraud lawsuits, and trial defense. We stand for the protection of constitutional liberties and ensure rigorous procedural representation across courts.',
      iconName: 'ShieldAlert'
    },
    {
      id: 'matrimonial',
      title: 'Matrimonial & Family Law',
      description: 'Mutual/contested divorce, child custody, and family property settlements.',
      longDescription: 'Family and matrimonial issues require deep legal expertise combined with human empathy. We assist in mutual/contested divorces, child custody disputes, maintenance applications, and amicable out-of-court family settlements, prioritizing our client\'s interests and mental peace.',
      iconName: 'Heart'
    },
    {
      id: 'mact',
      title: 'M.A.C.T Law',
      description: 'Advocacy in Motor Accident Claims Tribunals for maximum fair compensation.',
      longDescription: 'Motor Accident Claims Tribunals (M.A.C.T) handle claims of life loss or personal injury resulting from vehicle crashes. We advocate for victims and their dependents, preparing aggressive documentation for high-payout insurance claims and court awards.',
      iconName: 'Car'
    },
    {
      id: 'drt',
      title: 'D.R.T Law (Debt Recovery)',
      description: 'SARFAESI Act challenges, bank arbitrations, and Debt Recovery Tribunal litigation.',
      longDescription: 'We represent clients before the Debts Recovery Tribunals (D.R.T) against arbitrary asset seizures and recoveries under SARFAESI Act. We negotiate direct settlement solutions and file securitization appeals with precise regulatory strategy.',
      iconName: 'Landmark'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-8 h-8 text-gold-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-8 h-8 text-gold-500" />;
      case 'Heart':
        return <Heart className="w-8 h-8 text-gold-500" />;
      case 'Car':
        return <Car className="w-8 h-8 text-gold-500" />;
      case 'Landmark':
        return <Landmark className="w-8 h-8 text-gold-500" />;
      default:
        return <Scale className="w-8 h-8 text-gold-500" />;
    }
  };

  return (
    <section id="practice-areas" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest bg-gold-400/10 px-3 py-1 rounded-full">
            Expertise & Focus
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-950 dark:text-white mt-4 tracking-tight">
            Comprehensive Legal Practice Areas
          </h2>
          <div className="w-20 h-0.5 bg-gold-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            Founder & Principal Advocate Vallabh Shrivastava provides targeted litigative representation for diverse legal complexities in Civil, Criminal, Family, and Financial law.
          </p>
        </div>

        {/* Practice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corePracticeAreas.map((area, index) => (
            <motion.div
              id={`practice-card-${area.id}`}
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl shadow-xs hover:shadow-xl transition-all relative overflow-hidden"
              onClick={() => setSelectedArea(area)}
            >
              {/* Gold Top Light Glow Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="mb-6 bg-gold-50 dark:bg-slate-800/55 p-4 rounded-xl w-fit transition-transform group-hover:scale-110">
                {getIcon(area.iconName)}
              </div>

              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-xl font-serif font-bold text-slate-950 dark:text-white group-hover:text-gold-500 transition-colors">
                  {area.title}
                </h3>
                <span className="font-serif italic text-gold-500 text-lg opacity-80 shrink-0 font-medium">0{index + 1}</span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {area.description}
              </p>

              <div className="flex items-center text-xs font-semibold text-gold-500 dark:text-gold-400 uppercase tracking-wider gap-1.5 self-end">
                <span>Explore Legal Domain</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Assessment Prompt */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-850 dark:from-slate-900 dark:to-slate-950 border border-gold-500/20 p-8 md:p-12 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-gold-400">
              Need immediate professional guidance on a dispute?
            </h3>
            <p className="text-slate-350 text-xs md:text-sm mt-2 leading-relaxed">
              Advocate Vallabh Shrivastava offers a initial merit assessment for civil suits, accident insurance tribunals, and securitization appeals. Complete our encrypted case intake or schedule a callback.
            </p>
          </div>
          <a
            id="assess-cta"
            href="https://wa.me/917388163433?text=Hello%20Advocate%20Vallabh,%20I%20would%20like%20to%20start%20a%20case%20intake."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-slate-950 rounded-xl font-semibold shadow-md active:scale-95 transition-all text-sm uppercase tracking-wider"
          >
            Start Intake on WhatsApp
          </a>
        </div>
      </div>

      {/* Details Slide-Over / Lightbox */}
      <AnimatePresence>
        {selectedArea && (
          <div id="practice-slideover-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <motion.div
              id="practice-slideover-card"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden relative"
            >
              <button
                id="close-slideover"
                onClick={() => setSelectedArea(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gold-50 dark:bg-slate-800/80 p-4 rounded-xl">
                    {getIcon(selectedArea.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-gold-500 uppercase tracking-widest">
                      Practice Domain Profile
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-slate-950 dark:text-white">
                      {selectedArea.title}
                    </h3>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100 dark:bg-slate-850 my-6" />

                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">
                    Procedural Scope & Strategy
                  </h4>
                  <p className="text-sm md:text-base text-slate-700 dark:text-slate-350 leading-relaxed font-sans">
                    {selectedArea.longDescription}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                    <span>Office Callback Available Today</span>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      id="close-slideover-btn"
                      onClick={() => setSelectedArea(null)}
                      className="flex-1 sm:flex-initial px-4 py-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold transition-colors"
                    >
                      Close Details
                    </button>
                    <a
                      id="slideover-contact-cta"
                      href="#contact"
                      onClick={() => setSelectedArea(null)}
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-5 py-2 bg-gold-600 hover:bg-gold-700 text-white rounded-lg text-xs font-semibold transition-colors shadow-sm"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      Request Consultation
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
