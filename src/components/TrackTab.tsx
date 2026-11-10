import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trash2, 
  FileEdit, 
  Plus, 
  Minus, 
  Save, 
  X,
  History,
  Info,
  CalendarDays,
  Search
} from 'lucide-react';
import { Application } from '../types';

interface TrackTabProps {
  applications: Application[];
  onUpdateApplicationStatus: (appId: string, status: 'Pending' | 'Interview' | 'Offer' | 'Rejected', roundsCleared: number, notes: string) => Promise<void>;
  onDeleteApplication: (appId: string) => Promise<void>;
}

export default function TrackTab({ 
  applications, 
  onUpdateApplicationStatus, 
  onDeleteApplication 
}: TrackTabProps) {
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Interview' | 'Offer' | 'Rejected'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editStatus, setEditStatus] = useState<'Pending' | 'Interview' | 'Offer' | 'Rejected'>('Pending');
  const [editRounds, setEditRounds] = useState(0);
  const [editNotes, setEditNotes] = useState('');
  const [updating, setUpdating] = useState(false);

  const filteredApps = applications.filter(app => {
    const matchesSearch = app.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.notes.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || app.status === filter;
    return matchesSearch && matchesFilter;
  });

  const countPending = applications.filter(a => a.status === 'Pending').length;
  const countInterview = applications.filter(a => a.status === 'Interview').length;
  const countOffers = applications.filter(a => a.status === 'Offer').length;

  const startEdit = (app: Application) => {
    setEditingId(app.id);
    setEditStatus(app.status);
    setEditRounds(app.roundsCleared);
    setEditNotes(app.notes);
  };
  const cancelEdit = () => setEditingId(null);
  const saveEdit = async (appId: string) => {
    setUpdating(true);
    try {
      await onUpdateApplicationStatus(appId, editStatus, editRounds, editNotes);
      setEditingId(null);
    } catch (err) {
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };
  const handleDelete = async (appId: string) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      await onDeleteApplication(appId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-200">
          <div className="text-[10px] text-slate-400">Pending / Applied</div>
          <div className="text-2xl font-extrabold">{countPending}</div>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-slate-200">
          <div className="text-[10px] text-slate-400">Interviews Ongoing</div>
          <div className="text-2xl font-extrabold">{countInterview}</div>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-slate-200">
          <div className="text-[10px] text-slate-400">Jobs Secured 🎉</div>
          <div className="text-2xl font-extrabold">{countOffers}</div>
        </div>
      </div>

      {/* Search & filters */}
      <div className="bg-white rounded-3xl p-4 flex flex-wrap gap-4 items-center justify-between border border-slate-200">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 rounded-xl py-2 pl-10 pr-3 text-sm"
          />
        </div>
        <div className="flex gap-1 bg-slate-100 p-1 rounded-2xl">
          {['All', 'Pending', 'Interview', 'Offer', 'Rejected'].map(stat => (
            <button
              key={stat}
              onClick={() => setFilter(stat as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold ${filter === stat ? 'bg-white border-slate-200 text-indigo-600' : 'text-slate-500'}`}
            >
              {stat === 'All' ? 'All' : stat}
            </button>
          ))}
        </div>
      </div>

      {/* Applications list */}
      <div className="space-y-4">
        <AnimatePresence>
          {filteredApps.map(app => {
            const isEditing = editingId === app.id;
            return (
              <motion.div
                key={app.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`bg-white rounded-3xl p-5 border transition-all shadow-sm ${
                  isEditing ? 'border-indigo-400 ring-1 ring-indigo-500/15' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {!isEditing ? (
                  <div className="flex flex-wrap justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center font-bold text-indigo-600">
                          {app.companyName[0]}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800">{app.companyName}</h3>
                          <div className="flex items-center gap-1 text-xs text-slate-400">
                            <CalendarDays className="w-3 h-3" />
                            Applied: {new Date(app.appliedAt).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="text-[10px] text-slate-400 uppercase font-bold">Remarks</div>
                        <p className="bg-slate-50 p-3 rounded-xl text-slate-600 text-sm mt-1">
                          {app.notes || 'No remarks added.'}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        app.status === 'Offer' ? 'bg-emerald-100 text-emerald-700' :
                        app.status === 'Interview' ? 'bg-indigo-100 text-indigo-700' :
                        app.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {app.status}
                      </span>
                      <div className="text-xs">Rounds cleared: {app.roundsCleared}</div>
                      <div className="flex gap-2">
                        <button onClick={() => startEdit(app)} className="p-2 bg-slate-50 rounded-lg hover:bg-slate-100">
                          <FileEdit className="w-4 h-4 text-slate-500" />
                        </button>
                        <button onClick={() => handleDelete(app.id)} className="p-2 bg-slate-50 rounded-lg hover:bg-red-50">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold flex items-center gap-2">
                        <History className="w-4 h-4 text-indigo-500" />
                        Updating {app.companyName}
                      </h4>
                      <button onClick={cancelEdit} className="p-1 hover:bg-slate-100 rounded">
                        <X className="w-5 h-5 text-slate-400" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase font-bold text-slate-400">Status</label>
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          {['Pending', 'Interview', 'Offer', 'Rejected'].map(s => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setEditStatus(s as any)}
                              className={`py-1.5 text-xs rounded-xl border ${
                                editStatus === s ? 'bg-indigo-50 border-indigo-400 text-indigo-600' : 'bg-slate-50 border-slate-200'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-bold text-slate-400">Rounds Cleared</label>
                        <div className="flex items-center gap-2 mt-1">
                          <button onClick={() => setEditRounds(Math.max(0, editRounds - 1))} className="p-1 border rounded hover:bg-slate-50">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-bold">{editRounds}</span>
                          <button onClick={() => setEditRounds(editRounds + 1)} className="p-1 border rounded hover:bg-slate-50">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400">Remarks</label>
                      <textarea
                        rows={3}
                        value={editNotes}
                        onChange={(e) => setEditNotes(e.target.value)}
                        className="w-full bg-slate-50 rounded-xl p-3 text-sm"
                        placeholder="Add notes about your progress..."
                      />
                    </div>
                    <div className="flex justify-end gap-3">
                      <button onClick={cancelEdit} className="px-4 py-2 border rounded-xl text-sm">Cancel</button>
                      <button onClick={() => saveEdit(app.id)} disabled={updating} className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm flex items-center gap-1">
                        <Save className="w-4 h-4" /> Save
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
        {filteredApps.length === 0 && (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
            <Info className="w-8 h-8 text-indigo-400 mx-auto opacity-70" />
            <p className="text-sm font-bold text-slate-700 mt-2">No applications found.</p>
            <p className="text-xs text-slate-400">Go to Companies tab to apply.</p>
          </div>
        )}
      </div>
    </div>
  );
}