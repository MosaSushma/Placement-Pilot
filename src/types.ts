export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  college: string;
  degree: string;
  skills: string[];
  targetSalary: number;
  completedTopics: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  category: 'Product' | 'MNC' | 'Service';
  salary: string;
  prepTime: string;
  topics: string[];
  guide: {
    summary: string;
    difficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard' | 'Extreme' | 'Medium-Hard' | 'Easy-Medium';
    tips: string[];
    resources: { title: string; url: string }[];
  };
  rounds: string[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  resources: { name: string; url: string }[];
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  iconName: string;
  topics: Topic[];
}

export interface Application {
  id: string;
  userId: string;
  companyId: string;
  companyName: string;
  appliedAt: string;
  status: 'Pending' | 'Interview' | 'Offer' | 'Rejected';
  roundsCleared: number;
  notes: string;
}