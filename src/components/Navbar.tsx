import { motion } from 'framer-motion';
import { LayoutDashboard, Building2, BookOpen, ClipboardCheck, User, LogOut } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userEmail: string | null;
  displayName: string | null;
  onLogout: () => void;
}

export default function Navbar({ activeTab, setActiveTab, userEmail, displayName, onLogout }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'companies', label: 'Companies', icon: Building2 },
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'track', label: 'Track', icon: ClipboardCheck },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 py-3 sm:px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl text-white flex items-center justify-center font-bold text-lg shadow-md">P</div>
            <div>
              <h1 className="text-lg font-extrabold text-slate-900">Placement Pilot</h1>
              <p className="text-[9px] text-slate-400 font-mono tracking-wider font-bold">CAREER PREP FLIGHT STATION</p>
            </div>
          </div>
          <button onClick={onLogout} className="p-2 bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-600 border border-slate-200 rounded-xl transition-all md:hidden">
            <LogOut className="w-4 h-4" />
          </button>
        </div>

        <nav className="flex items-center overflow-x-auto gap-1.5 bg-slate-100 p-1.5 rounded-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 whitespace-nowrap ${
                  isActive ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-white border border-slate-200 rounded-xl shadow-sm"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon className={`w-3.5 h-3.5 relative z-10 ${isActive ? 'text-indigo-500' : 'text-slate-400'}`} />
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4 text-xs">
          <div className="text-right">
            <span className="text-slate-800 font-bold">{displayName || (userEmail ? userEmail.split('@')[0] : 'Practice Guest')}</span>
            <span className="text-[10px] text-slate-400 font-mono block">{userEmail ? 'SYNCED' : 'OFFLINE MODE'}</span>
          </div>
          <button onClick={onLogout} className="px-3.5 py-2 bg-slate-50 hover:bg-red-50 text-slate-600 hover:text-red-600 border border-slate-200 rounded-xl font-bold flex items-center gap-2">
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </header>
  );
}