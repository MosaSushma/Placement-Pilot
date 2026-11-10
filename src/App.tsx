import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';
import { doc, getDoc, setDoc, collection, query, where, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { companiesData } from './data/companies';
import { roadmapsData } from './data/roadmaps';
import { UserProfile, Application } from './types';
import Navbar from './components/Navbar';
import HomeTab from './components/HomeTab';
import CompaniesTab from './components/CompaniesTab';
import LearnTab from './components/LearnTab';
import TrackTab from './components/TrackTab';
import ProfileTab from './components/ProfileTab';
import AuthScreen from './components/AuthScreen';

function App() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [loading, setLoading] = useState<boolean>(true);
  const [guestMode, setGuestMode] = useState<boolean>(false);

  const totalRoadmapTopics = roadmapsData.reduce((prev, curr) => prev + curr.topics.length, 0);
  const LOCAL_PROFILE_KEY = 'placement_pilot_guest_profile';
  const LOCAL_APPS_KEY = 'placement_pilot_guest_applications';

  // Force loading to stop after 3 seconds (fallback for offline Firebase)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        console.warn("Forcing loading to false – entering guest mode");
        setGuestMode(true);
        loadGuestProfileAndApps();
        setLoading(false);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [loading]);

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setGuestMode(false);
        await ensureUserProfileExists(currentUser);
      } else {
        setUser(null);
        setProfile(null);
        setApplications([]);
        const hasGuestSession = localStorage.getItem(LOCAL_PROFILE_KEY);
        if (hasGuestSession) {
          setGuestMode(true);
          loadGuestProfileAndApps();
        } else {
          setGuestMode(false);
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Firestore listeners (only when authenticated)
  useEffect(() => {
    if (!user || guestMode) return;
    const profileRef = doc(db, 'users', user.uid);
    const unsubProfile = onSnapshot(profileRef, (snap) => {
      if (snap.exists()) setProfile(snap.data() as UserProfile);
    });
    const appsRef = collection(db, 'applications');
    const appsQuery = query(appsRef, where('userId', '==', user.uid));
    const unsubApps = onSnapshot(appsQuery, (snap) => {
      const apps: Application[] = [];
      snap.forEach(doc => apps.push(doc.data() as Application));
      apps.sort((a,b) => new Date(b.appliedAt).getTime() - new Date(a.appliedAt).getTime());
      setApplications(apps);
    });
    return () => {
      unsubProfile();
      unsubApps();
    };
  }, [user, guestMode]);

  const ensureUserProfileExists = async (firebaseUser: FirebaseUser) => {
    const profileRef = doc(db, 'users', firebaseUser.uid);
    const snap = await getDoc(profileRef);
    if (!snap.exists()) {
      const defaultProfile: UserProfile = {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Candidate Pilot',
        email: firebaseUser.email || '',
        college: '',
        degree: '',
        skills: [],
        targetSalary: 12,
        completedTopics: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      await setDoc(profileRef, defaultProfile);
      setProfile(defaultProfile);
    } else {
      setProfile(snap.data() as UserProfile);
    }
  };

  const loadGuestProfileAndApps = () => {
    const rawProfile = localStorage.getItem(LOCAL_PROFILE_KEY);
    const rawApps = localStorage.getItem(LOCAL_APPS_KEY);
    if (rawProfile) setProfile(JSON.parse(rawProfile));
    else {
      const defaultGuest: UserProfile = {
        uid: 'guest_user',
        name: 'Guest Pilot',
        email: 'guest@practice.local',
        college: 'SDE Sandbox Institute',
        degree: 'B.Tech CS (Simulated)',
        skills: ['Data Structures & Algorithms', 'React.js Front-End'],
        targetSalary: 15,
        completedTopics: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setProfile(defaultGuest);
      localStorage.setItem(LOCAL_PROFILE_KEY, JSON.stringify(defaultGuest));
    }
    if (rawApps) setApplications(JSON.parse(rawApps));
    else localStorage.setItem(LOCAL_APPS_KEY, JSON.stringify([]));
  };

  const handleInitiateGuestMode = () => {
    setGuestMode(true);
    loadGuestProfileAndApps();
    setLoading(false);
  };

  const handleRegisterApplication = async (companyId: string, companyName: string, status: 'Pending'|'Interview'|'Offer'|'Rejected', notes: string) => {
    const newApp: Application = {
      id: `app_${companyId}_${Date.now()}`,
      userId: user?.uid || 'guest_user',
      companyId,
      companyName,
      appliedAt: new Date().toISOString(),
      status,
      roundsCleared: 0,
      notes
    };
    if (guestMode) {
      const updated = [newApp, ...applications];
      setApplications(updated);
      localStorage.setItem(LOCAL_APPS_KEY, JSON.stringify(updated));
      return;
    }
    await setDoc(doc(db, 'applications', newApp.id), newApp);
  };

  const handleQuickApplyCompany = async (companyId: string) => {
    const comp = companiesData.find(c => c.id === companyId);
    if (!comp) return;
    await handleRegisterApplication(companyId, comp.name, 'Pending', 'Quick submission from Dashboard.');
  };

  const handleUpdateApplicationStatus = async (appId: string, status: 'Pending'|'Interview'|'Offer'|'Rejected', roundsCleared: number, notes: string) => {
    if (guestMode) {
      const updated = applications.map(app => app.id === appId ? { ...app, status, roundsCleared, notes } : app);
      setApplications(updated);
      localStorage.setItem(LOCAL_APPS_KEY, JSON.stringify(updated));
      return;
    }
    await updateDoc(doc(db, 'applications', appId), { status, roundsCleared, notes });
  };

  const handleDeleteApplication = async (appId: string) => {
    if (guestMode) {
      const updated = applications.filter(app => app.id !== appId);
      setApplications(updated);
      localStorage.setItem(LOCAL_APPS_KEY, JSON.stringify(updated));
      return;
    }
    await deleteDoc(doc(db, 'applications', appId));
  };

  const handleUpdateProfile = async (updates: Partial<UserProfile>) => {
    if (!profile) return;
    const merged = { ...profile, ...updates, updatedAt: new Date().toISOString() };
    if (guestMode) {
      setProfile(merged);
      localStorage.setItem(LOCAL_PROFILE_KEY, JSON.stringify(merged));
      return;
    }
    await updateDoc(doc(db, 'users', profile.uid), updates);
    setProfile(merged);
  };

  const handleToggleTopicCompletion = async (topicId: string) => {
    if (!profile) return;
    let completed = [...profile.completedTopics];
    if (completed.includes(topicId)) {
      completed = completed.filter(id => id !== topicId);
    } else {
      completed.push(topicId);
    }
    const updatedProfile = { ...profile, completedTopics: completed, updatedAt: new Date().toISOString() };
    if (guestMode) {
      setProfile(updatedProfile);
      localStorage.setItem(LOCAL_PROFILE_KEY, JSON.stringify(updatedProfile));
    } else {
      await updateDoc(doc(db, 'users', profile.uid), { completedTopics: completed });
      setProfile(updatedProfile);
    }
  };

  const handleLogout = async () => {
    if (guestMode) {
      if (window.confirm('Clear local practice session?')) {
        localStorage.removeItem(LOCAL_PROFILE_KEY);
        localStorage.removeItem(LOCAL_APPS_KEY);
        setGuestMode(false);
        setProfile(null);
        setApplications([]);
      }
      return;
    }
    await signOut(auth);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto" />
        <p className="mt-4 text-slate-600">Loading...</p>
      </div>
    );
  }

  if (!user && !guestMode) {
    return <AuthScreen onGuestMode={handleInitiateGuestMode} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userEmail={user?.email || null}
        displayName={profile?.name || null}
        onLogout={handleLogout}
      />
      <main className="flex-1 pb-16">
        {activeTab === 'home' && (
          <HomeTab
            applications={applications}
            profile={profile}
            companies={companiesData}
            totalRoadmapTopics={totalRoadmapTopics}
            setActiveTab={setActiveTab}
            onQuickApplyCompany={handleQuickApplyCompany}
          />
        )}
        {activeTab === 'companies' && (
          <CompaniesTab
            companies={companiesData}
            applications={applications}
            onRegisterApplication={handleRegisterApplication}
            onQuickApplyCompany={handleQuickApplyCompany}
          />
        )}
        {activeTab === 'learn' && (
          <LearnTab
            roadmaps={roadmapsData}
            profile={profile}
            onToggleTopicCompletion={handleToggleTopicCompletion}
          />
        )}
        {activeTab === 'track' && (
          <TrackTab
            applications={applications}
            onUpdateApplicationStatus={handleUpdateApplicationStatus}
            onDeleteApplication={handleDeleteApplication}
          />
        )}
        {activeTab === 'profile' && (
          <ProfileTab
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
            totalApplications={applications.length}
            offersCount={applications.filter(a => a.status === 'Offer').length}
          />
        )}
      </main>
      <footer className="py-5 border-t text-center text-[10px] text-slate-400 font-mono">
        © {new Date().getFullYear()} PLACEMENT PILOT • SIMULATED SDE PREPARATION STATION
      </footer>
    </div>
  );
}

export default App;