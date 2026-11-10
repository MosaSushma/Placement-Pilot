import { useState } from 'react';
import { User, Save, CheckCircle, PlusCircle, Trash2, Sparkles, Award, ChevronRight } from 'lucide-react';
import { UserProfile } from '../types';

interface ProfileTabProps {
  profile: UserProfile | null;
  onUpdateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  totalApplications: number;
  offersCount: number;
}

const PRESET_SKILLS = [
  'Data Structures & Algorithms', 'Object-Oriented Programming', 'SQL & DBMS',
  'React.js', 'Node.js', 'System Design', 'Python ML', 'Computer Networks', 'Docker', 'Aptitude'
];

export default function ProfileTab({ profile, onUpdateProfile, totalApplications, offersCount }: ProfileTabProps) {
  const [name, setName] = useState(profile?.name || '');
  const [college, setCollege] = useState(profile?.college || '');
  const [degree, setDegree] = useState(profile?.degree || '');
  const [target, setTarget] = useState(profile?.targetSalary || 12);
  const [skills, setSkills] = useState<string[]>(profile?.skills || []);
  const [newSkill, setNewSkill] = useState('');
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await onUpdateProfile({ name, college, degree, targetSalary: target, skills });
    setSaving(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const addSkill = () => { if(newSkill.trim() && !skills.includes(newSkill.trim())) setSkills([...skills, newSkill.trim()]); setNewSkill(''); };
  const toggleSkill = (s: string) => setSkills(skills.includes(s) ? skills.filter(x => x !== s) : [...skills, s]);

  const strategy = target >= 24 ? 'Premium MAANG Strategy' : target >= 12 ? 'MNC Core Strategy' : 'Service Engineer Strategy';
  const advice = target >= 24 ? 'Master advanced DSA, distributed systems.' : target >= 12 ? 'Focus on medium LeetCode, DB normalization.' : 'Focus on aptitude, basic loops.';

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-3xl p-6 border border-slate-200">
          <div className="flex items-center gap-2 mb-4"><User className="w-5 h-5 text-indigo-500" /><h2 className="text-lg font-bold">Candidate Information</h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><label className="text-[10px] text-slate-400 uppercase font-bold">Full Name</label><input type="text" value={name} onChange={e=>setName(e.target.value)} className="w-full bg-slate-50 rounded-xl py-2 px-3" /></div>
            <div><label className="text-[10px] text-slate-400 uppercase font-bold">College</label><input type="text" value={college} onChange={e=>setCollege(e.target.value)} className="w-full bg-slate-50 rounded-xl py-2 px-3" /></div>
            <div><label className="text-[10px] text-slate-400 uppercase font-bold">Degree</label><input type="text" value={degree} onChange={e=>setDegree(e.target.value)} className="w-full bg-slate-50 rounded-xl py-2 px-3" /></div>
            <div><label className="text-[10px] text-slate-400 uppercase font-bold">Target Package (LPA)</label><input type="number" value={target} onChange={e=>setTarget(Number(e.target.value))} className="w-full bg-slate-50 rounded-xl py-2 px-3" /></div>
          </div>
          <div className="mt-4"><label className="text-[10px] text-slate-400 uppercase font-bold">Skills</label><div className="flex flex-wrap gap-2 mt-2">{PRESET_SKILLS.map(s=><button key={s} onClick={()=>toggleSkill(s)} className={`px-3 py-1.5 rounded-xl text-xs font-bold border ${skills.includes(s)?'bg-indigo-50 border-indigo-300 text-indigo-700':'bg-slate-50 border-slate-200'}`}>{s}</button>)}</div><div className="flex items-center gap-2 mt-3"><input type="text" placeholder="Add custom skill" value={newSkill} onChange={e=>setNewSkill(e.target.value)} className="flex-1 bg-slate-50 rounded-xl py-2 px-3 text-sm" /><button onClick={addSkill} className="p-2 bg-slate-100 rounded-xl"><PlusCircle className="w-4 h-4" /></button></div>{skills.length>0 && <div className="flex flex-wrap gap-1 mt-2">{skills.map(s=><span key={s} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-lg text-[10px] flex items-center gap-1">{s}<button onClick={()=>setSkills(skills.filter(x=>x!==s))}><Trash2 className="w-3 h-3 text-red-400"/></button></span>)}</div>}</div>
          <div className="flex items-center gap-4 mt-6 pt-4 border-t"><button onClick={handleSave} disabled={saving} className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold flex items-center gap-2">{saving ? 'Saving...' : <><Save className="w-4 h-4"/> Save</>}</button>{success && <span className="text-xs text-emerald-600 flex items-center gap-1"><CheckCircle className="w-4 h-4"/> Saved!</span>}</div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-white rounded-3xl p-6 border border-slate-200"><h3 className="text-[10px] font-mono font-bold uppercase">Preparation Footprint</h3><div className="space-y-2 mt-3"><div className="flex justify-between p-2 bg-slate-50 rounded-xl"><span>Applications</span><span className="font-bold">{totalApplications}</span></div><div className="flex justify-between p-2 bg-slate-50 rounded-xl"><span>Offers</span><span className="font-bold">{offersCount}</span></div><div className="flex justify-between p-2 bg-slate-50 rounded-xl"><span>Topics Completed</span><span className="font-bold">{profile?.completedTopics?.length || 0}</span></div></div><div className="mt-4 p-3 bg-indigo-50 rounded-2xl"><div className="flex items-center gap-2"><Award className="w-5 h-5 text-indigo-600"/> SDE Pilot Active</div></div></div>
        <div className="bg-white rounded-3xl p-6 border border-indigo-100"><h3 className="text-[10px] font-mono font-bold uppercase flex items-center gap-1"><Sparkles className="w-3.5 h-3.5"/> Pilot Strategy</h3><div className="mt-3 p-3 bg-indigo-50/50 rounded-2xl"><h4 className="text-xs font-bold text-indigo-700 flex items-center gap-1"><ChevronRight className="w-3.5 h-3.5"/> {strategy}</h4><p className="text-xs text-slate-600 mt-1">{advice}</p></div><div className="text-[10px] text-slate-400 mt-3">Pro-tip: Increase target package to reformulate strategy.</div></div>
      </div>
    </div>
  );
}