import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Shield, Sparkles, LogIn, Compass, CheckCircle } from 'lucide-react';

interface AuthScreenProps {
  onGuestMode: () => void;
}

export default function AuthScreen({ onGuestMode }: AuthScreenProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
  setLoading(true);
  setError(null);
  try {
    const provider = new GoogleAuthProvider();
    // Force Google to show the account picker every time
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    await signInWithPopup(auth, provider);
  } catch (err: any) {
    setError(err.message || 'Google login failed.');
  } finally {
    setLoading(false);
  }
};
  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl border border-indigo-100">
            <Shield className="w-7 h-7" />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-extrabold text-slate-900">Placement Pilot</h1>
            <p className="text-[9px] text-indigo-600 font-mono font-bold">CAREER PREP FLIGHT STATION</p>
          </div>
        </div>
        <p className="text-sm text-slate-500 text-center mb-6">Unlock 45+ company guides, master 19 roadmaps, track applications.</p>

        {error && <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-xs text-red-600 mb-4 text-center">{error}</div>}

        <form onSubmit={handleEmailAuth} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="text-[10px] text-slate-400 font-mono font-bold">FULL NAME</label>
              <input type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm" />
            </div>
          )}
          <div>
            <label className="text-[10px] text-slate-400 font-mono font-bold">EMAIL ADDRESS</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm" />
          </div>
          <div>
            <label className="text-[10px] text-slate-400 font-mono font-bold">SECURE PASSWORD</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 text-sm" />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
            {loading ? <span className="w-4 h-4 border-2 border-white/80 border-t-transparent rounded-full animate-spin" /> : isSignUp ? <><Sparkles className="w-4 h-4" /> Sign Up</> : <><LogIn className="w-4 h-4" /> Sign In</>}
          </button>
        </form>

        <div className="flex items-center my-4"><div className="flex-1 border-t border-slate-100" /><span className="px-3 text-[9px] text-slate-400 font-mono">OR</span><div className="flex-1 border-t border-slate-100" /></div>

        <button onClick={handleGoogleSignIn} disabled={loading} className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          </svg>
          Continue with Google
        </button>

        <div className="flex justify-between mt-6 text-xs">
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-slate-500 hover:text-indigo-600 font-semibold">
            {isSignUp ? 'Have an account? Sign In' : 'Need an account? Sign Up'}
          </button>
          <button onClick={onGuestMode} className="flex items-center gap-1.5 text-indigo-600 font-bold">
            <Compass className="w-3.5 h-3.5" /> Try Guest Mode
          </button>
        </div>
        <div className="mt-8 pt-4 border-t flex justify-center items-center gap-1 text-[9px] text-slate-400 font-mono">
          <CheckCircle className="w-3 h-3 text-emerald-500" /> DATABASE PRACTICE PERSISTENCE SYNCED
        </div>
      </div>
    </div>
  );
}