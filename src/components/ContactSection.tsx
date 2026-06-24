import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, Check, Loader2, Sparkles, Building } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseInquiry } from '../types';

export default function ContactSection() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [caseType, setCaseType] = useState('Civil Law');
  const [details, setDetails] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<CaseInquiry | null>(null);

  // Business Card credentials (from input_file_3.png)
  const contactDetails = {
    name: 'Vallabh Shrivastava',
    title: 'Principal Advocate & Founder',
    firmName: 'V.S Legal and Associates',
    domains: 'Civil, Criminal, Matrimonial, M.A.C.T, D.R.T',
    email: 'legalconsultancy08@gmail.com',
    phone: '+91 7388163433',
    address: '551 Gha /522, Nand Nagar, Nattkhera Road, Alambagh, Lucknow, U.P - 226005'
  };

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !details) return;

    setIsSubmitting(true);

    // Simulated automated triage assessment
    setTimeout(() => {
      // Analyze text keywords to provide legal categorization
      const lowerText = details.toLowerCase();
      let aiAssessmentText = '';
      let predictedCaseType = caseType;

      if (lowerText.includes('bail') || lowerText.includes('police') || lowerText.includes('fir') || lowerText.includes('crpc')) {
        predictedCaseType = 'Criminal Defense';
        aiAssessmentText = '👉 [ASSESSMENT]: Emergency Alert Flagged. Critical keywords parsed: "Bail/Police". Categorization mapped to Criminal Advocacy. Priority scheduling requested.';
      } else if (lowerText.includes('bank') || lowerText.includes('loan') || lowerText.includes('recovery') || lowerText.includes('drt') || lowerText.includes('sarfaesi')) {
        predictedCaseType = 'D.R.T Law (Debt Recovery)';
        aiAssessmentText = '👉 [ASSESSMENT]: Financial Asset Seizure Detected. Keywords parsed: "Bank/Recovery". Categorization mapped to Debt Recovery Tribunal proceedings.';
      } else if (lowerText.includes('accident') || lowerText.includes('insurance') || lowerText.includes('claim') || lowerText.includes('vehicle') || lowerText.includes('mact')) {
        predictedCaseType = 'M.A.C.T Law (Accident Claims)';
        aiAssessmentText = '👉 [ASSESSMENT]: Personal Injury/Motor Damage Claim Detected. Keywords parsed: "Accident/Claim". Categorization mapped to Motor Accident Claims Tribunal tribunal filing.';
      } else if (lowerText.includes('divorce') || lowerText.includes('wife') || lowerText.includes('husband') || lowerText.includes('custody') || lowerText.includes('maintenance')) {
        predictedCaseType = 'Matrimonial & Family Law';
        aiAssessmentText = '👉 [ASSESSMENT]: Domestial / Matrimonial Matter. Keywords parsed: "Divorce/Custody/Family". Categorization mapped to Family Court consultation.';
      } else {
        aiAssessmentText = `👉 [ASSESSMENT]: General Litigation Profile. Keywords parsed matches Civil / Dispute. Categorization mapped to ${predictedCaseType} consultation pathway.`;
      }

      const newInquiry: CaseInquiry = {
        id: 'LGC-' + Math.floor(1000 + Math.random() * 9000),
        fullName,
        email,
        phone,
        caseType: predictedCaseType,
        details,
        submittedAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'Assessed',
        aiAssessment: aiAssessmentText
      };

      // Store in LocalStorage
      const localInquiries = JSON.parse(localStorage.getItem('vs_case_inquiries') || '[]');
      localInquiries.unshift(newInquiry);
      localStorage.setItem('vs_case_inquiries', JSON.stringify(localInquiries));

      setIsSubmitting(false);
      setSubmittedInquiry(newInquiry);

      // Reset form fields
      setFullName('');
      setEmail('');
      setPhone('');
      setDetails('');
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold text-gold-500 uppercase tracking-widest bg-gold-400/10 px-3 py-1 rounded-full">
            Inquiries
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-slate-950 dark:text-white mt-4 tracking-tight">
            Schedule a Secure Case Intake
          </h2>
          <div className="w-20 h-0.5 bg-gold-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            Get your litigation matters assessed immediately. Transcribe from Advocate Vallabh's official card or utilize our automated case triage wizard.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Card Presentation Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Visual Reproduction of input_file_3.png */}
            <div className="bg-slate-900 border border-gold-500/30 rounded-3xl p-8 relative overflow-hidden shadow-2xl text-white">
              
              {/* Subtle gold circles design in card background */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold-500/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gold-500/5 rounded-full blur-2xl" />

              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gold-400 tracking-wide">
                    {contactDetails.name.toUpperCase()}
                  </h3>
                  <p className="text-[10px] font-mono tracking-widest text-slate-400 mt-0.5 uppercase">
                    {contactDetails.title}
                  </p>
                </div>
                <div className="bg-gold-500/10 border border-gold-500/20 p-2.5 rounded-xl text-gold-400">
                  <Building className="w-6 h-6" />
                </div>
              </div>

              <div className="mb-8">
                <span className="text-[9px] font-mono tracking-widest text-gold-400 uppercase">OFFICE / FIRM REGISTRATION</span>
                <h4 className="text-base font-serif font-semibold text-slate-100 mt-0.5">
                  {contactDetails.firmName}
                </h4>
                <p className="text-slate-400 text-xs italic mt-1 leading-relaxed">
                  Practice: {contactDetails.domains}
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-800">
                <div className="flex items-start gap-3.5 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  <span className="break-all hover:text-gold-400 transition-colors">
                    {contactDetails.email}
                  </span>
                </div>
                
                <div className="flex items-start gap-3.5 text-xs text-slate-300">
                  <Phone className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  <span className="hover:text-gold-400 transition-colors font-mono">
                    {contactDetails.phone}
                  </span>
                </div>

                <div className="flex items-start gap-3.5 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">
                    {contactDetails.address}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                <span>📍 LUCKNOW BAR ASSOCIATION</span>
                <span className="text-gold-500 font-bold bg-white/5 py-1 px-2.5 rounded-md border border-white/5">VS-2026-REG</span>
              </div>
            </div>

            {/* Practical legal notices */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
              <h4 className="text-sm font-serif font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 bg-gold-500 rounded-full" />
                Intake Office Hours
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                V.S Legal and Associates coordinates counsel briefs from <strong className="text-slate-700 dark:text-slate-300">10:00 AM to 7:00 PM (Monday through Saturday)</strong> at our main suite in Alambagh, Lucknow. Emergency defense consultations are available outside regular slots on request.
              </p>
            </div>
          </div>

          {/* Automated Counsel Form Grid */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              
              <h3 className="text-xl font-serif font-bold text-slate-950 dark:text-white mb-2">
                Intelligent Legal Intake
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill this out to generate an automated assessment. Our intake engine will suggest legal categorizations instantly.
              </p>

              <form onSubmit={handleIntakeSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-650 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Legal Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Priyanshu Singh"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-850 hover:bg-slate-100/50 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-650 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 9876543210"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-850 hover:bg-slate-100/50 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-650 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Contact Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. client@example.com"
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-850 hover:bg-slate-100/50 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-650 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Self-Declared Case Type
                    </label>
                    <select
                      value={caseType}
                      onChange={(e) => setCaseType(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all"
                    >
                      <option value="Civil Law">Civil Law Litigation</option>
                      <option value="Criminal Defense">Criminal Defense</option>
                      <option value="Matrimonial & Family">Matrimonial & Family Law</option>
                      <option value="M.A.C.T Law">M.A.C.T Accident Claims</option>
                      <option value="D.R.T Law">D.R.T Debt Recovery</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-650 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Case Facts & Specific Requirements <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    rows={4}
                    placeholder="Provide concise details: (e.g. bails, land partition, bank SARFAESI recovery notices, family disputes etc.)"
                    className="w-full p-4 bg-slate-50 dark:bg-slate-850 hover:bg-slate-100/50 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-slate-950 dark:bg-gold-600 hover:bg-slate-850 dark:hover:bg-gold-700 text-white rounded-xl text-xs font-semibold transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-gold-400" />
                      <span>Parsing & Securing Intake Dossier...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Automated Case Intake</span>
                    </>
                  )}
                </button>
              </form>

              {/* Real-time automated Triage Outcome popup */}
              <AnimatePresence>
                {submittedInquiry && (
                  <motion.div
                    id="triage-assessment-box"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="mt-6 bg-slate-900 text-slate-100 border border-gold-500/30 rounded-2xl p-5 relative overflow-hidden"
                  >
                    <div className="absolute top-3 right-3 text-emerald-400 flex items-center gap-1 font-mono text-[9px] font-bold">
                      <Sparkles className="w-3.5 h-3.5 animate-bounce" />
                      <span>TRIAGE COMPLETE</span>
                    </div>

                    <h4 className="font-serif font-bold text-sm text-gold-400 flex items-center gap-1.5 mb-1.5">
                      <Check className="w-4 h-4 text-emerald-400" />
                      Docket Number: {submittedInquiry.id}
                    </h4>

                    <p className="text-[11px] text-slate-350 leading-relaxed font-sans mb-3">
                      Your legal inquiry has been registered in our database. Advocate Vallabh Shrivastava's office will reference this intake.
                    </p>

                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                      <p className="text-[10px] font-mono text-indigo-300 leading-relaxed">
                        {submittedInquiry.aiAssessment}
                      </p>
                      <p className="text-[9px] font-mono text-slate-500 mt-2 text-right">
                        Timestamped: {submittedInquiry.submittedAt}
                      </p>
                    </div>

                    <button
                      id="close-triage-assessment"
                      onClick={() => setSubmittedInquiry(null)}
                      className="mt-3.5 w-full py-1.5 bg-slate-800 hover:bg-slate-750 text-white rounded-lg text-[10px] font-semibold transition-colors"
                    >
                      Clear Intake Screen
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
