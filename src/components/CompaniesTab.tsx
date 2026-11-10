import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  DollarSign, 
  Clock, 
  HelpCircle, 
  Send, 
  BookOpen, 
  X, 
  BookMarked,
  Sparkles,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { Company, Application } from '../types';

interface CompaniesTabProps {
  companies: Company[];
  applications: Application[];
  onRegisterApplication: (companyId: string, companyName: string, status: 'Pending' | 'Interview' | 'Offer' | 'Rejected', notes: string) => Promise<void>;
  onQuickApplyCompany: (companyId: string) => Promise<void>;  // <-- add this line
}

export default function CompaniesTab({ 
  companies, 
  applications, 
  onRegisterApplication
}: CompaniesTabProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'All' | 'Product' | 'MNC' | 'Service'>('All');
  const [selectedCompanyForGuide, setSelectedCompanyForGuide] = useState<Company | null>(null);
  const [selectedCompanyForRegister, setSelectedCompanyForRegister] = useState<Company | null>(null);

  const [appStatus, setAppStatus] = useState<'Pending' | 'Interview' | 'Offer' | 'Rejected'>('Pending');
  const [appNotes, setAppNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const closeRegisterModal = () => {
    setSelectedCompanyForRegister(null);
    setAppStatus('Pending');
    setAppNotes('');
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCompanyForRegister) return;
    setSubmitting(true);
    try {
      await onRegisterApplication(
        selectedCompanyForRegister.id,
        selectedCompanyForRegister.name,
        appStatus,
        appNotes
      );
      closeRegisterModal();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          company.topics.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          company.salary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || company.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 sm:p-6 text-slate-800">
      {/* Search and Filters Header */}
      <div className="bg-white border border-slate-205 shadow-[0_4px_25px_rgb(0,0,0,0.02)] rounded-3xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search company names, salaries or key topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-11 pr-4 text-sm text-slate-800 outline-none focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500/15 transition-all font-sans"
          />
        </div>

        <div className="flex items-center overflow-x-auto no-scrollbar gap-1.5 self-start md:self-auto bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
          {(['All', 'Product', 'MNC', 'Service'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition ${
                categoryFilter === cat 
                  ? 'bg-white border border-slate-200 shadow-sm text-indigo-600' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {cat === 'All' ? 'All Portfolios' : cat === 'Product' ? 'Product Giants' : cat === 'MNC' ? 'Multinationals' : 'Service Sectors'}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 font-bold px-1">
        <span>SHOWING {filteredCompanies.length} OF {companies.length} PORTFOLIO RECRUITERS</span>
        <span>{categoryFilter === 'All' ? 'ALL CATEGORIES' : categoryFilter.toUpperCase()}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company) => {
          const hasApplied = applications.some(app => app.companyId === company.id);
          const activeApp = applications.find(app => app.companyId === company.id);

          return (
            <motion.div
              layout
              key={company.id}
              whileHover={{ y: -3 }}
              className="bg-white border border-slate-200/80 hover:border-slate-300 rounded-3xl p-5 flex flex-col justify-between h-[278px] shadow-[0_4px_20px_rgb(0,0,0,0.02)] transition-all"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-indigo-55 text-indigo-600 border border-indigo-100 rounded-xl font-bold flex items-center justify-center text-base shadow-sm">
                      {company.logo}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-800 font-sans tracking-tight">{company.name}</h3>
                      <span className="text-[9px] font-mono uppercase font-bold tracking-wider text-slate-400">{company.category} sector</span>
                    </div>
                  </div>

                  {hasApplied ? (
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-lg flex items-center gap-1 ${
                      activeApp?.status === 'Offer' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                      activeApp?.status === 'Interview' ? 'bg-indigo-50 text-indigo-650 border border-indigo-100' :
                      activeApp?.status === 'Rejected' ? 'bg-red-50 text-red-600 border border-red-100' :
                      'bg-slate-50 text-slate-500 border border-slate-250'
                    }`}>
                      <CheckCircle2 className="w-3 h-3" />
                      {activeApp?.status}
                    </span>
                  ) : (
                    <span className="text-[9px] font-mono text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg uppercase font-bold">Ready</span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 py-2 border-y border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <div>
                      <p className="text-[9px] text-slate-400 font-mono tracking-wider font-bold">PACKAGE RANGE</p>
                      <p className="font-bold text-slate-700">{company.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 border-l border-slate-100 pl-3">
                    <Clock className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <div>
                      <p className="text-[9px] text-slate-400 font-mono tracking-wider font-bold">PREPARATION</p>
                      <p className="font-bold text-slate-700">{company.prepTime}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-[9px] text-slate-400 font-mono tracking-wider uppercase font-bold">syllabus focus</p>
                  <div className="flex flex-wrap gap-1">
                    {company.topics.slice(0, 3).map((topic, i) => (
                      <span key={i} className="text-[10px] bg-slate-50 border border-slate-200/60 text-slate-650 px-2 py-0.5 rounded-md font-sans">
                        {topic}
                      </span>
                    ))}
                    {company.topics.length > 3 && (
                      <span className="text-[10px] text-slate-400 font-mono font-bold pl-1">
                        +{company.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-50 text-slate-800">
                <button
                  onClick={() => setSelectedCompanyForGuide(company)}
                  className="flex-1 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                  <span>View Guide</span>
                </button>

                <button
                  onClick={() => setSelectedCompanyForRegister(company)}
                  className={`flex-1 py-2 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer ${
                    hasApplied 
                      ? 'bg-slate-55 border border-slate-200 text-slate-400 cursor-not-allowed opacity-70' 
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-150'
                  }`}
                  disabled={hasApplied}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{hasApplied ? 'Registered' : 'Register'}</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Guide Modal */}
      <AnimatePresence>
        {selectedCompanyForGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCompanyForGuide(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="bg-white border border-slate-200 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[85vh] text-slate-700"
            >
              <div className="bg-slate-50 p-6 border-b border-slate-200 relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-55 text-indigo-600 border border-indigo-100 font-bold flex items-center justify-center rounded-xl text-lg shadow-sm">
                    {selectedCompanyForGuide.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{selectedCompanyForGuide.name} Prep Guide</h3>
                    <p className="text-[9px] text-slate-400 font-mono uppercase font-bold tracking-wider">{selectedCompanyForGuide.category} SECTOR • DIFFICULTY: {selectedCompanyForGuide.guide.difficulty}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedCompanyForGuide(null)} className="p-1.5 hover:bg-slate-200 rounded-xl text-slate-400 hover:text-slate-800 transition cursor-pointer font-bold">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm leading-relaxed text-slate-600">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                    Overview
                  </h4>
                  <p className="font-sans text-slate-600 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                    {selectedCompanyForGuide.guide.summary}
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase flex items-center gap-1.5">
                    <BookMarked className="w-3.5 h-3.5 text-indigo-500" />
                    Rounds Structure ({selectedCompanyForGuide.rounds.length} stages)
                  </h4>
                  <div className="space-y-2 pl-1.5">
                    {selectedCompanyForGuide.rounds.map((round, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-lg bg-indigo-50 text-[10px] font-mono text-indigo-600 border border-indigo-100 flex items-center justify-center font-bold shrink-0">
                          {j + 1}
                        </span>
                        <span className="text-slate-700 text-xs font-bold">{round}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3.5">
                  <h4 className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
                    Key Preparation Advice
                  </h4>
                  <ul className="space-y-2.5 pl-1.5">
                    {selectedCompanyForGuide.guide.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <span className="text-amber-500 mt-1 shrink-0 font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2.5">
                  <h4 className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">Interactive Resources</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedCompanyForGuide.guide.resources.map((res, i) => (
                      <a key={i} href={res.url} target="_blank" rel="noreferrer" className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-xs font-bold text-indigo-600 flex items-center justify-between transition group">
                        <span className="truncate">{res.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
                <button onClick={() => setSelectedCompanyForGuide(null)} className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold rounded-xl transition cursor-pointer shadow-sm">
                  Close Guide
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Registration Modal */}
      <AnimatePresence>
        {selectedCompanyForRegister && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeRegisterModal}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="bg-white border border-slate-200 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative z-10 text-slate-705"
            >
              <div className="bg-slate-50 p-5 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Practice Application Registration</h3>
                  <p className="text-[9px] text-slate-400 font-mono uppercase font-bold tracking-wider">SUBMIT SYSTEM CHECK • {selectedCompanyForRegister.name}</p>
                </div>
                <button onClick={closeRegisterModal} className="p-1.5 hover:bg-slate-200 rounded-xl text-slate-400 hover:text-slate-800 transition cursor-pointer font-bold">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleRegisterSubmit} className="p-5 space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wider">TARGET COMPANY</label>
                  <input type="text" disabled value={selectedCompanyForRegister.name} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-sm text-slate-500 font-bold outline-none select-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wider">INITIAL TRACKING STATUS</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { val: 'Pending', label: 'Pending (Applied)' },
                      { val: 'Interview', label: 'Interview Panel' },
                      { val: 'Offer', label: 'Offer Received' },
                      { val: 'Rejected', label: 'Rejected / Stopped' }
                    ].map((statusObj) => (
                      <button key={statusObj.val} type="button" onClick={() => setAppStatus(statusObj.val as any)} className={`py-2 px-3 text-xs font-bold rounded-xl border transition text-center cursor-pointer ${appStatus === statusObj.val ? 'bg-indigo-50 border-indigo-400 text-indigo-650' : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-350 hover:text-slate-850'}`}>
                        {statusObj.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wider">PRACTICE NOTES / PREPARATION DETAILS (OPTIONAL)</label>
                  <textarea rows={3} placeholder="E.g., Finished OA round coding puzzle 1. Study graphs traversal before interview scheduled." value={appNotes} onChange={(e) => setAppNotes(e.target.value)} maxLength={1000} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-sm text-slate-800 outline-none focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500/15 transition-all font-sans resize-none" />
                </div>
                <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-3 text-[10px] text-indigo-700 font-mono font-bold leading-relaxed">
                  NOTE: Confirming registration adds a secure simulated application to your central Tracker dashboard to help you assess your real-world SDE progress.
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <button type="button" onClick={closeRegisterModal} className="flex-1 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold rounded-xl transition cursor-pointer shadow-sm">
                    Cancel
                  </button>
                  <button type="submit" disabled={submitting} className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition shadow-md shadow-indigo-150 cursor-pointer flex items-center justify-center gap-1.5">
                    {submitting ? <span className="w-3.5 h-3.5 border-2 border-white/80 border-t-transparent rounded-full animate-spin" /> : <><Send className="w-3.5 h-3.5" /> Confirm Submit</>}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}