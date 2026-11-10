import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ExternalLink, CheckCircle2, Search, GraduationCap } from 'lucide-react';
import { Roadmap, UserProfile } from '../types';

interface LearnTabProps {
  roadmaps: Roadmap[];
  profile: UserProfile | null;
  onToggleTopicCompletion: (topicId: string) => Promise<void>;
}

export default function LearnTab({ roadmaps, profile, onToggleTopicCompletion }: LearnTabProps) {
  const [selectedId, setSelectedId] = useState<string>(roadmaps[0]?.id || '');
  const [search, setSearch] = useState('');
  const [loadingTopics, setLoadingTopics] = useState<Set<string>>(new Set());

  const selected = roadmaps.find(r => r.id === selectedId) || roadmaps[0];
  const completed = profile?.completedTopics || [];
  const filtered = roadmaps.filter(r => r.title.toLowerCase().includes(search.toLowerCase()));

  const handleToggle = async (topicId: string) => {
    // Prevent multiple clicks on the same topic
    if (loadingTopics.has(topicId)) return;

    setLoadingTopics(prev => new Set(prev).add(topicId));
    try {
      await onToggleTopicCompletion(topicId);
    } catch (err) {
      console.error('Failed to toggle topic:', err);
      // Optionally show a user-friendly toast/message here
    } finally {
      setLoadingTopics(prev => {
        const newSet = new Set(prev);
        newSet.delete(topicId);
        return newSet;
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
      {/* Sidebar */}
      <div className="w-full lg:w-80 shrink-0 space-y-4">
        <div className="bg-white border border-slate-200 rounded-3xl p-4">
          <h3 className="text-[10px] font-mono font-bold uppercase text-slate-400">Roadmaps</h3>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 rounded-xl py-2 pl-9 pr-3 text-xs"
            />
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl max-h-[60vh] overflow-y-auto p-2">
          {filtered.map(rm => {
            const isSelected = selectedId === rm.id;
            const cnt = rm.topics.filter(t => completed.includes(t.id)).length;
            const pct = rm.topics.length ? Math.round((cnt / rm.topics.length) * 100) : 0;
            return (
              <button
                key={rm.id}
                onClick={() => setSelectedId(rm.id)}
                className={`w-full text-left p-3 rounded-xl flex justify-between items-center ${
                  isSelected ? 'bg-indigo-50' : 'hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="font-bold text-sm">{rm.title}</div>
                  <div className="text-[10px] text-slate-400">{cnt}/{rm.topics.length} • {pct}%</div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-3xl p-6">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-2xl font-extrabold text-white">{selected.title}</h2>
                </div>
                <p className="text-slate-300 mt-2">{selected.description}</p>
              </div>

              <div className="relative border-l border-slate-200 pl-6 space-y-8">
                {selected.topics.map((topic, idx) => {
                  const isCompleted = completed.includes(topic.id);
                  const isLoading = loadingTopics.has(topic.id);

                  return (
                    <div key={topic.id} className="relative">
                      <div
                        className={`absolute -left-[33px] top-1 w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                          isCompleted
                            ? 'bg-indigo-600 border-indigo-500 text-white'
                            : 'bg-white border-slate-300'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          <span className="text-[10px] font-bold">{idx + 1}</span>
                        )}
                      </div>

                      <div
                        className={`bg-white rounded-2xl p-5 border ${
                          isCompleted
                            ? 'border-indigo-100 bg-slate-50/40'
                            : 'border-slate-200'
                        }`}
                      >
                        <div className="flex flex-wrap justify-between items-start gap-3">
                          <div>
                            <h3
                              className={`text-lg font-bold ${
                                isCompleted ? 'line-through text-slate-400' : 'text-slate-800'
                              }`}
                            >
                              {topic.title}
                            </h3>
                            <p className="text-slate-500 text-sm">{topic.description}</p>
                          </div>
                          <button
                            onClick={() => handleToggle(topic.id)}
                            disabled={isLoading}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1 ${
                              isCompleted
                                ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                          >
                            {isLoading ? (
                              <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            )}
                            {isCompleted ? 'Done' : 'Mark Learned'}
                          </button>
                        </div>

                        {topic.resources.length > 0 && (
                          <div className="mt-4">
                            <div className="text-[10px] font-mono font-bold uppercase mb-2">
                              Resources
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {topic.resources.map((res, i) => (
                                <a
                                  key={i}
                                  href={res.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 bg-slate-50 rounded-xl text-indigo-600 text-sm flex justify-between items-center hover:bg-slate-100"
                                >
                                  {res.name}
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}