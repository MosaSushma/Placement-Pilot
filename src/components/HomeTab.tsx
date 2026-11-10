import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Send, Calendar, Sparkles, GraduationCap, ArrowUpRight, 
  TrendingUp, CheckSquare, PlusCircle, CheckCircle2, Building 
} from 'lucide-react';
import { Company, Application, UserProfile } from '../types';

interface HomeTabProps {
  applications: Application[];
  profile: UserProfile | null;
  companies: Company[];
  totalRoadmapTopics: number;
  setActiveTab: (tab: string) => void;
  onQuickApplyCompany: (companyId: string) => void;
}

const QUOTES = [
  "Opportunities don't happen, you create them. – Chris Grosser",
  "The secret of getting ahead is getting started. – Mark Twain",
  "Confidence comes from discipline and training. – Robert Kiyosaki"
];

const PREP_ADVICES = [
  "Product-based interviews test pure DSA depth. Focus on Graphs, Trees, and DP daily.",
  "MNCs test OOP structures, DBMS normalization, and logic puzzles.",
  "Service companies weigh Quantitative Aptitude, verbal logic, and fundamental loops."
];

export default function HomeTab({ 
  applications, 
  profile, 
  companies, 
  totalRoadmapTopics, 
  setActiveTab,
  onQuickApplyCompany 
}: HomeTabProps) {
  const [quote, setQuote] = useState(QUOTES[0]);
  const [advice, setAdvice] = useState(PREP_ADVICES[0]);

  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    setAdvice(PREP_ADVICES[Math.floor(Math.random() * PREP_ADVICES.length)]);
  }, []);

  const totalApplied = applications.length;
  const totalInterviews = applications.filter(a => a.status === 'Interview').length;
  const totalOffers = applications.filter(a => a.status === 'Offer').length;
  const totalRejected = applications.filter(a => a.status === 'Rejected').length;
  const targetedCompaniesCount = new Set(applications.map(a => a.companyId)).size;
  const completedCount = profile?.completedTopics?.length || 0;
  const studyProgressPercent = totalRoadmapTopics > 0 ? Math.round((completedCount / totalRoadmapTopics) * 100) : 0;

  let profileScore = 0;
  if (profile?.name) profileScore += 20;
  if (profile?.college) profileScore += 20;
  if (profile?.degree) profileScore += 20;
  if (profile?.targetSalary && profile.targetSalary > 0) profileScore += 20;
  if (profile?.skills && profile.skills.length > 0) profileScore += 20;

  const recommendations = [];
  if (profileScore < 100) recommendations.push({ text: "Complete your profile", action: "Edit Profile", tab: "profile" });
  if (totalApplied === 0) recommendations.push({ text: "Submit applications to top companies", action: "View Companies", tab: "companies" });
  if (completedCount === 0) recommendations.push({ text: "Start studying core topics", action: "Start Studying", tab: "learn" });
  if (recommendations.length === 0) recommendations.push({ text: "Great progress! Keep applying", action: "Browse Companies", tab: "companies" });

  const quickProductCompanies = companies.filter(c => c.category === 'Product').slice(0, 3);

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-7xl mx-auto p-4 sm:p-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden shadow-xl">
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-mono">
            <Sparkles className="w-3.5 h-3.5" /> PREP INTELLIGENCE ACTIVE
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Welcome back, {profile?.name || 'Pilot'}</h2>
          <p className="text-sm text-slate-400 italic">"{quote}"</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 max-w-xs">
          <div className="flex gap-3">
            <GraduationCap className="w-6 h-6 text-indigo-400" />
            <div><h4 className="text-xs font-bold text-indigo-300">PILOT'S ADVICE</h4><p className="text-xs text-slate-300">{advice}</p></div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Targeted", value: targetedCompaniesCount, caption: `out of ${companies.length}`, icon: Building },
          { title: "Applied", value: totalApplied, caption: `${totalRejected} archived`, icon: Send },
          { title: "Interviews", value: totalInterviews, caption: "scheduled", icon: Calendar },
          { title: "Offers", value: totalOffers, caption: "received", icon: Trophy }
        ].map(stat => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white p-5 rounded-3xl border border-slate-200 h-36 flex flex-col justify-between">
              <div className="flex justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase">{stat.title}</span>
                <div className="p-2 rounded-xl border bg-indigo-50 text-indigo-600"><Icon className="w-4 h-4" /></div>
              </div>
              <div><span className="text-3xl font-extrabold text-slate-900">{stat.value}</span><span className="text-[10px] text-slate-400 ml-1">{stat.caption}</span></div>
            </div>
          );
        })}
      </div>

      {/* Learning Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-slate-200">
          <div className="flex justify-between">
            <h3 className="text-sm font-mono font-bold">LEARNING ROADMAPS</h3>
            <span className="text-[10px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">{studyProgressPercent}%</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">19 core prep divisions</p>
          <div className="relative w-36 h-36 mx-auto my-4">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="50" cy="50" r="40" strokeWidth="8" stroke="#f1f5f9" fill="transparent" />
              <circle cx="50" cy="50" r="40" strokeWidth="8" stroke="url(#indigoGradient)" fill="transparent" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * studyProgressPercent) / 100} strokeLinecap="round" />
              <defs><linearGradient id="indigoGradient"><stop offset="0%" stopColor="#4f46e5" /><stop offset="100%" stopColor="#818cf8" /></linearGradient></defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-extrabold text-slate-900">{completedCount}</span>
              <span className="text-[9px] text-slate-400">OF {totalRoadmapTopics}</span>
            </div>
          </div>
          <button onClick={() => setActiveTab('learn')} className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl border">Resume Reading <ArrowUpRight className="w-3.5 h-3.5 inline" /></button>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200">
          <h3 className="text-sm font-mono font-bold">TACTICAL RECOMMENDATIONS</h3>
          <p className="text-xs text-slate-500">Personalized milestones</p>
          <div className="space-y-3 mt-4">
            {recommendations.map((rec, i) => (
              <div key={i} className="flex gap-3 p-3 bg-slate-50 rounded-2xl">
                <CheckSquare className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-slate-650">{rec.text}</p>
                  <button onClick={() => setActiveTab(rec.tab)} className="text-[10px] text-indigo-600 font-bold">{rec.action}</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-indigo-50/55 rounded-2xl p-3 flex justify-between text-xs">
            <span className="flex items-center gap-1.5 text-indigo-600"><TrendingUp className="w-3.5 h-3.5" /> PROFILE:</span>
            <span className="font-extrabold text-indigo-700">{profileScore}%</span>
          </div>
        </div>

        {/* Quick Launch */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200">
          <h3 className="text-sm font-mono font-bold">QUICK LAUNCH PAD</h3>
          <p className="text-xs text-slate-500">One‑click applications</p>
          <div className="space-y-3 mt-4">
            {quickProductCompanies.map(company => {
              const applied = applications.some(a => a.companyId === company.id);
              return (
                <div key={company.id} className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-indigo-50 rounded-lg flex items-center justify-center font-bold">{company.logo}</div>
                    <div><h4 className="font-bold">{company.name}</h4><p className="text-[10px] text-slate-400">{company.salary}</p></div>
                  </div>
                  {applied ? (
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Applied</span>
                  ) : (
                    <button onClick={() => onQuickApplyCompany(company.id)} className="px-3 py-1.5 bg-indigo-600 text-white text-[10px] font-bold rounded-lg flex items-center gap-1">
                      <PlusCircle className="w-3 h-3" /> Apply
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <button onClick={() => setActiveTab('companies')} className="w-full mt-4 py-2.5 bg-indigo-600 text-white text-xs font-bold rounded-xl">Explore Over 45 Recruiters</button>
        </div>
      </div>
    </motion.div>
  );
}