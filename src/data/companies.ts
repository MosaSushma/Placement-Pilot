import { Company } from '../types';

export const companiesData: Company[] = [
  // ==================== PRODUCT BASED (Global Tech Giants) ====================
  {
    id: 'google',
    name: 'Google',
    logo: '🔵',
    category: 'Product',
    salary: '45-65 LPA',
    prepTime: '6-8 months',
    topics: ['DSA', 'System Design', 'Leadership'],
    guide: {
      summary: 'Focused on fundamental CS, elegant code, and optimization.',
      difficulty: 'Hard',
      tips: ['Master recursion, graphs, trees.', 'Talk out loud while coding.', 'Aim for optimal complexity.'],
      resources: [
        { title: 'LeetCode Google Prep', url: 'https://leetcode.com/study-plan/google/' },
        { title: 'GFG Google Guide', url: 'https://www.geeksforgeeks.org/google-interview-preparation/' }
      ]
    },
    rounds: ['Online Assessment', 'Technical Phone Screen', '3x Coding Rounds', 'Googliness']
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    logo: '🪟',
    category: 'Product',
    salary: '40-60 LPA',
    prepTime: '6 months',
    topics: ['DSA', 'CS Core', 'System Design'],
    guide: {
      summary: 'Strong DSA + OS/DBMS fundamentals. Practice Microsoft tagged problems.',
      difficulty: 'Hard',
      tips: ['Focus on low‑level system design.', 'Practice on a whiteboard.'],
      resources: [
        { title: 'LeetCode Microsoft', url: 'https://leetcode.com/company/microsoft/' },
        { title: 'GFG Microsoft', url: 'https://www.geeksforgeeks.org/microsoft-interview-preparation/' }
      ]
    },
    rounds: ['Online Assessment', 'Technical Screen', 'Coding Rounds', 'System Design', 'Hiring Event']
  },
  {
    id: 'amazon',
    name: 'Amazon',
    logo: '📦',
    category: 'Product',
    salary: '35-55 LPA',
    prepTime: '5-6 months',
    topics: ['DSA', 'Leadership Principles'],
    guide: {
      summary: 'Focus on 14 Leadership Principles and problem solving at scale.',
      difficulty: 'Hard',
      tips: ['Prepare STAR stories for each principle.', 'Practice system design for e‑commerce.'],
      resources: [
        { title: 'LeetCode Amazon', url: 'https://leetcode.com/company/amazon/' },
        { title: 'Amazon Leadership Principles', url: 'https://www.amazon.jobs/content/en/our-workplace/leadership-principles' }
      ]
    },
    rounds: ['Online Assessment', 'Technical Phone Screen', '3x Coding/System Design', 'Bar Raiser']
  },
  {
    id: 'apple',
    name: 'Apple',
    logo: '🍎',
    category: 'Product',
    salary: '50-70 LPA',
    prepTime: '7-8 months',
    topics: ['DSA', 'System Design', 'Product Sense'],
    guide: {
      summary: 'Highly focused on product quality, user experience, and deep hardware/software integration.',
      difficulty: 'Very Hard',
      tips: ['Know your resume projects deeply.', 'Expect cross‑functional interviews.'],
      resources: [
        { title: 'LeetCode Apple', url: 'https://leetcode.com/company/apple/' },
        { title: 'Apple Interview Prep', url: 'https://www.geeksforgeeks.org/apple-interview-preparation/' }
      ]
    },
    rounds: ['Phone Screen', '3-5 Tech Rounds', 'Manager Round', 'HR']
  },
  {
    id: 'meta',
    name: 'Meta',
    logo: '🔷',
    category: 'Product',
    salary: '48-68 LPA',
    prepTime: '6 months',
    topics: ['DSA', 'System Design'],
    guide: {
      summary: 'LeetCode Medium/Hard, system design for high‑scale apps.',
      difficulty: 'Very Hard',
      tips: ['Practice coding under time pressure.', 'Design Facebook feed / Messenger.'],
      resources: [
        { title: 'LeetCode Meta', url: 'https://leetcode.com/company/meta/' },
        { title: 'Meta Engineering Blog', url: 'https://engineering.fb.com/' }
      ]
    },
    rounds: ['Coding Screen', '3 Coding Rounds', 'System Design', 'Behavioural']
  },
  {
    id: 'netflix',
    name: 'Netflix',
    logo: '🎬',
    category: 'Product',
    salary: '55-80 LPA',
    prepTime: '8 months',
    topics: ['System Design', 'Scalability'],
    guide: {
      summary: 'System Design is king. Culture fit is critical.',
      difficulty: 'Extreme',
      tips: ['Study microservices, CDN, caching.', 'Know Netflix culture deck.'],
      resources: [
        { title: 'Netflix Tech Blog', url: 'https://netflixtechblog.com/' },
        { title: 'System Design Interview', url: 'https://www.youtube.com/c/SystemDesignInterview' }
      ]
    },
    rounds: ['Phone Screen', '4-6 System Design & Coding', 'Culture Fit']
  },
  {
    id: 'adobe',
    name: 'Adobe',
    logo: '🎨',
    category: 'Product',
    salary: '32-50 LPA',
    prepTime: '4-5 months',
    topics: ['DSA', 'CS Core', 'Design'],
    guide: {
      summary: 'Strong DSA + CS fundamentals. Adobe values creative problem solving.',
      difficulty: 'Hard',
      tips: ['Focus on OOP and design patterns.', 'Prepare for product‑focused questions.'],
      resources: [
        { title: 'LeetCode Adobe', url: 'https://leetcode.com/company/adobe/' },
        { title: 'GFG Adobe', url: 'https://www.geeksforgeeks.org/adobe-interview-preparation/' }
      ]
    },
    rounds: ['Online Assessment', 'Tech Round', 'Managerial', 'HR']
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    logo: '☁️',
    category: 'Product',
    salary: '30-48 LPA',
    prepTime: '4-5 months',
    topics: ['DSA', 'Cloud', 'OOP'],
    guide: {
      summary: 'Focus on DSA and cloud concepts (Apex basics).',
      difficulty: 'Hard',
      tips: ['Learn about multi‑tenant architecture.', 'Practice REST API design.'],
      resources: [
        { title: 'LeetCode Salesforce', url: 'https://leetcode.com/company/salesforce/' },
        { title: 'Salesforce Trailhead', url: 'https://trailhead.salesforce.com/' }
      ]
    },
    rounds: ['Coding Screen', '2 Tech Rounds', 'Hiring Manager', 'Values']
  },
  {
    id: 'oracle',
    name: 'Oracle',
    logo: '🔴',
    category: 'Product',
    salary: '28-45 LPA',
    prepTime: '4-5 months',
    topics: ['DSA', 'DBMS', 'Java'],
    guide: {
      summary: 'Focus on Java, database concepts, and DSA.',
      difficulty: 'Hard',
      tips: ['Know SQL and indexing.', 'Practice core Java (Concurrency, Collections).'],
      resources: [
        { title: 'LeetCode Oracle', url: 'https://leetcode.com/company/oracle/' },
        { title: 'Oracle Interview Experience', url: 'https://www.geeksforgeeks.org/oracle-interview-preparation/' }
      ]
    },
    rounds: ['Online Test', 'Tech Round', 'Managerial', 'HR']
  },
  {
    id: 'sap',
    name: 'SAP',
    logo: '🟡',
    category: 'Product',
    salary: '25-40 LPA',
    prepTime: '3-4 months',
    topics: ['DSA', 'ABAP', 'Cloud'],
    guide: {
      summary: 'Learn SAP technologies and basic DSA.',
      difficulty: 'Medium-Hard',
      tips: ['Understand ERP basics.', 'Practice OOP in Java.'],
      resources: [
        { title: 'SAP Community', url: 'https://community.sap.com/' },
        { title: 'LeetCode SAP', url: 'https://leetcode.com/company/sap/' }
      ]
    },
    rounds: ['Online Test', 'Tech Interview', 'HR']
  },
  // ==================== PRODUCT BASED (Indian Product Companies) ====================
  {
    id: 'zoho',
    name: 'Zoho',
    logo: '🔵',
    category: 'Product',
    salary: '15-25 LPA',
    prepTime: '2-3 months',
    topics: ['DSA', 'Programming', 'Logic'],
    guide: {
      summary: 'No CGPA cutoff. Focus on logic and programming.',
      difficulty: 'Medium',
      tips: ['Practice problem solving without heavy libraries.', 'Be prepared for puzzles.'],
      resources: [
        { title: 'Zoho Interview Questions', url: 'https://www.geeksforgeeks.org/zoho-interview-preparation/' },
        { title: 'LeetCode Zoho', url: 'https://leetcode.com/company/zoho/' }
      ]
    },
    rounds: ['Written Test', 'Programming Round', 'Tech Interview', 'HR']
  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    logo: '🔵',
    category: 'Product',
    salary: '28-42 LPA',
    prepTime: '4 months',
    topics: ['DSA', 'Machine Coding'],
    guide: {
      summary: 'Flipkart tagged LeetCode. Practice low‑level design.',
      difficulty: 'Hard',
      tips: ['Focus on e‑commerce problems.', 'Design a shopping cart system.'],
      resources: [
        { title: 'LeetCode Flipkart', url: 'https://leetcode.com/company/flipkart/' },
        { title: 'GFG Flipkart', url: 'https://www.geeksforgeeks.org/flipkart-interview-preparation/' }
      ]
    },
    rounds: ['Online Test', 'Machine Coding', 'Tech Round', 'Managerial']
  },
  {
    id: 'swiggy',
    name: 'Swiggy',
    logo: '🟠',
    category: 'Product',
    salary: '25-38 LPA',
    prepTime: '3-4 months',
    topics: ['DSA', 'System Design'],
    guide: {
      summary: 'Focus on scalability and real‑world logistics problems.',
      difficulty: 'Medium-Hard',
      tips: ['Design a food delivery tracking system.', 'Practice REST APIs.'],
      resources: [
        { title: 'Swiggy Engineering Blog', url: 'https://bytes.swiggy.com/' },
        { title: 'LeetCode Swiggy', url: 'https://leetcode.com/company/swiggy/' }
      ]
    },
    rounds: ['Coding Test', 'Tech Round', 'System Design', 'HR']
  },
  {
    id: 'zomato',
    name: 'Zomato',
    logo: '❤️',
    category: 'Product',
    salary: '24-36 LPA',
    prepTime: '3 months',
    topics: ['DSA', 'Product'],
    guide: {
      summary: 'Product‑based questions and DSA.',
      difficulty: 'Medium-Hard',
      tips: ['Understand recommendation systems.', 'Practice SQL and data analysis.'],
      resources: [
        { title: 'Zomato Interview', url: 'https://www.geeksforgeeks.org/zomato-interview-preparation/' },
        { title: 'LeetCode Zomato', url: 'https://leetcode.com/company/zomato/' }
      ]
    },
    rounds: ['Online Assessment', 'Tech Round', 'Product Round', 'HR']
  },
  {
    id: 'paytm',
    name: 'Paytm',
    logo: '🔵',
    category: 'Product',
    salary: '20-35 LPA',
    prepTime: '3 months',
    topics: ['DSA', 'Fintech'],
    guide: {
      summary: 'Focus on payment systems and DSA.',
      difficulty: 'Medium-Hard',
      tips: ['Learn about transaction handling, wallets.', 'Practice backend APIs.'],
      resources: [
        { title: 'Paytm Interview', url: 'https://www.geeksforgeeks.org/paytm-interview-preparation/' },
        { title: 'LeetCode Paytm', url: 'https://leetcode.com/company/paytm/' }
      ]
    },
    rounds: ['Coding Test', 'Tech Round', 'Managerial', 'HR']
  },
  {
    id: 'razorpay',
    name: 'Razorpay',
    logo: '🔵',
    category: 'Product',
    salary: '22-38 LPA',
    prepTime: '3-4 months',
    topics: ['DSA', 'Payments', 'APIs'],
    guide: {
      summary: 'Learn payment gateway integration and DSA.',
      difficulty: 'Hard',
      tips: ['Understand OAuth, webhooks.', 'Design a payment gateway.'],
      resources: [
        { title: 'Razorpay Blog', url: 'https://razorpay.com/blog/' },
        { title: 'LeetCode Razorpay', url: 'https://leetcode.com/company/razorpay/' }
      ]
    },
    rounds: ['Online Test', 'Tech Interview', 'System Design', 'HR']
  },
  {
    id: 'cred',
    name: 'CRED',
    logo: '💳',
    category: 'Product',
    salary: '28-45 LPA',
    prepTime: '4 months',
    topics: ['DSA', 'Fintech', 'Design'],
    guide: {
      summary: 'Fintech domain knowledge and system design.',
      difficulty: 'Hard',
      tips: ['Know credit card processing.', 'Design a rewards system.'],
      resources: [
        { title: 'CRED Engineering', url: 'https://cred.app/blog' },
        { title: 'LeetCode CRED', url: 'https://leetcode.com/company/cred/' }
      ]
    },
    rounds: ['Online Assessment', '2 Tech Rounds', 'Design', 'Cultural Fit']
  },
  {
    id: 'freshworks',
    name: 'Freshworks',
    logo: '🟢',
    category: 'Product',
    salary: '20-35 LPA',
    prepTime: '3 months',
    topics: ['DSA', 'SaaS'],
    guide: {
      summary: 'Focus on SaaS products and DSA.',
      difficulty: 'Medium',
      tips: ['Understand CRM basics.', 'Practice RESTful APIs.'],
      resources: [
        { title: 'Freshworks Careers', url: 'https://www.freshworks.com/company/careers/' },
        { title: 'LeetCode Freshworks', url: 'https://leetcode.com/company/freshworks/' }
      ]
    },
    rounds: ['Online Test', 'Tech Round', 'Managerial', 'HR']
  },
  {
    id: 'browserstack',
    name: 'BrowserStack',
    logo: '🌐',
    category: 'Product',
    salary: '25-40 LPA',
    prepTime: '3-4 months',
    topics: ['DSA', 'Testing'],
    guide: {
      summary: 'Testing platforms and DSA.',
      difficulty: 'Hard',
      tips: ['Learn about browser automation, WebDriver.', 'Design a scalable testing infrastructure.'],
      resources: [
        { title: 'BrowserStack Tech Blog', url: 'https://www.browserstack.com/blog/' },
        { title: 'LeetCode BrowserStack', url: 'https://leetcode.com/company/browserstack/' }
      ]
    },
    rounds: ['Coding Test', 'Tech Interview', 'System Design', 'HR']
  },
  {
    id: 'atlassian',
    name: 'Atlassian',
    logo: '🔷',
    category: 'Product',
    salary: '35-55 LPA',
    prepTime: '4-5 months',
    topics: ['DSA', 'System Design'],
    guide: {
      summary: 'Jira/Confluence product knowledge and strong DSA.',
      difficulty: 'Hard',
      tips: ['Design a collaborative task management system.', 'Know microservices.'],
      resources: [
        { title: 'Atlassian Engineering', url: 'https://www.atlassian.com/engineering' },
        { title: 'LeetCode Atlassian', url: 'https://leetcode.com/company/atlassian/' }
      ]
    },
    rounds: ['Phone Screen', '3 Tech Rounds', 'Values']
  },
  // ==================== SERVICE BASED (Big 4 & Mid-tier) ====================
  {
    id: 'tcs',
    name: 'TCS',
    logo: '🔵',
    category: 'Service',
    salary: '9-15 LPA',
    prepTime: '1.5-2 months',
    topics: ['Aptitude', 'English', 'Coding Basics'],
    guide: {
      summary: 'TCS NQT preparation. Focus on aptitude and basic coding.',
      difficulty: 'Easy',
      tips: ['Practice previous year papers.', 'Work on speed in quantitative and verbal.'],
      resources: [
        { title: 'TCS NQT Guide', url: 'https://www.geeksforgeeks.org/tcs-nqt-preparation/' },
        { title: 'IndiaBIX', url: 'https://www.indiabix.com/' }
      ]
    },
    rounds: ['NQT (Aptitude, English, Coding)', 'Technical Interview', 'HR']
  },
  {
    id: 'infosys',
    name: 'Infosys',
    logo: '🟢',
    category: 'Service',
    salary: '12-18 LPA',
    prepTime: '2 months',
    topics: ['Aptitude', 'Programming Basics'],
    guide: {
      summary: 'Infosys specific training material and InfyTQ.',
      difficulty: 'Easy-Medium',
      tips: ['Complete InfyTQ certification.', 'Focus on DBMS and OOP basics.'],
      resources: [
        { title: 'InfyTQ Portal', url: 'https://infytq.infosys.com/' },
        { title: 'GFG Infosys', url: 'https://www.geeksforgeeks.org/infosys-interview-preparation/' }
      ]
    },
    rounds: ['InfyTQ', 'Technical Interview', 'HR']
  },
  {
    id: 'wipro',
    name: 'Wipro',
    logo: '🟢',
    category: 'Service',
    salary: '9-14 LPA',
    prepTime: '1.5 months',
    topics: ['Aptitude', 'Programming'],
    guide: {
      summary: 'Wipro NLTH preparation. Focus on aptitude and coding.',
      difficulty: 'Easy',
      tips: ['Practice pseudocode questions.', 'Enhance English communication.'],
      resources: [
        { title: 'Wipro NLTH', url: 'https://www.wipro.com/en-IN/careers/' },
        { title: 'PrepInsta Wipro', url: 'https://prepinsta.com/wipro/' }
      ]
    },
    rounds: ['Online Test', 'Technical Interview', 'HR']
  },
  {
    id: 'hcl',
    name: 'HCL Technologies',
    logo: '🔴',
    category: 'Service',
    salary: '8-13 LPA',
    prepTime: '1.5 months',
    topics: ['Aptitude', 'Communication'],
    guide: {
      summary: 'Focus on aptitude and communication skills.',
      difficulty: 'Easy',
      tips: ['Improve grammar and vocabulary.', 'Basic programming concepts.'],
      resources: [
        { title: 'HCL Interview Prep', url: 'https://www.geeksforgeeks.org/hcl-interview-preparation/' },
        { title: 'IndiaBIX', url: 'https://www.indiabix.com/' }
      ]
    },
    rounds: ['Online Test', 'Technical Interview', 'HR']
  },
  {
    id: 'cognizant',
    name: 'Cognizant',
    logo: '🔵',
    category: 'Service',
    salary: '8-14 LPA',
    prepTime: '1.5 months',
    topics: ['Aptitude', 'Communication'],
    guide: {
      summary: 'Focus on aptitude and communication.',
      difficulty: 'Easy',
      tips: ['Practice logical reasoning.', 'Work on basic coding.'],
      resources: [
        { title: 'Cognizant GenC', url: 'https://www.cognizant.com/careers' },
        { title: 'GFG Cognizant', url: 'https://www.geeksforgeeks.org/cognizant-interview-preparation/' }
      ]
    },
    rounds: ['Online Test', 'Technical Round', 'HR']
  },
  {
    id: 'techm',
    name: 'Tech Mahindra',
    logo: '🟠',
    category: 'Service',
    salary: '7-12 LPA',
    prepTime: '1.5 months',
    topics: ['Aptitude', 'Programming'],
    guide: {
      summary: 'Focus on aptitude.',
      difficulty: 'Easy',
      tips: ['Practice previous years’ papers.', 'Basics of C/Java.'],
      resources: [
        { title: 'Tech Mahindra Prep', url: 'https://prepinsta.com/tech-mahindra/' }
      ]
    },
    rounds: ['Online Test', 'Technical Interview', 'HR']
  },
  {
    id: 'ltimindtree',
    name: 'LTIMindtree',
    logo: '🟢',
    category: 'Service',
    salary: '8-13 LPA',
    prepTime: '1.5 months',
    topics: ['Aptitude', 'Programming'],
    guide: {
      summary: 'Focus on aptitude.',
      difficulty: 'Easy',
      tips: ['Practice quantitative and logical reasoning.', 'Basic coding.'],
      resources: [
        { title: 'LTIMindtree Careers', url: 'https://www.ltimindtree.com/careers/' }
      ]
    },
    rounds: ['Online Assessment', 'Technical', 'HR']
  },
  {
    id: 'mphasis',
    name: 'Mphasis',
    logo: '🔵',
    category: 'Service',
    salary: '7-12 LPA',
    prepTime: '1 month',
    topics: ['Aptitude'],
    guide: {
      summary: 'Focus on aptitude.',
      difficulty: 'Easy',
      tips: ['Work on speed and accuracy.', 'Revise basic math.'],
      resources: [
        { title: 'Mphasis Prep', url: 'https://prepinsta.com/mphasis/' }
      ]
    },
    rounds: ['Aptitude Test', 'Technical Interview', 'HR']
  },
  {
    id: 'hexaware',
    name: 'Hexaware',
    logo: '🔵',
    category: 'Service',
    salary: '6-11 LPA',
    prepTime: '1 month',
    topics: ['Aptitude'],
    guide: {
      summary: 'Focus on aptitude.',
      difficulty: 'Easy',
      tips: ['Practice mock tests.', 'Basic English.'],
      resources: [
        { title: 'Hexaware Prep', url: 'https://prepinsta.com/hexaware/' }
      ]
    },
    rounds: ['Online Test', 'Technical', 'HR']
  },
  {
    id: 'persistent',
    name: 'Persistent Systems',
    logo: '🔵',
    category: 'Service',
    salary: '9-15 LPA',
    prepTime: '2 months',
    topics: ['DSA', 'Aptitude'],
    guide: {
      summary: 'Focus on DSA and aptitude.',
      difficulty: 'Easy-Medium',
      tips: ['Prepare for coding problems easy-medium.', 'Practice logical reasoning.'],
      resources: [
        { title: 'Persistent Careers', url: 'https://www.persistent.com/careers/' }
      ]
    },
    rounds: ['Online Test', 'Technical Round', 'HR']
  },
  {
    id: 'capgemini',
    name: 'Capgemini',
    logo: '🔴',
    category: 'Service',
    salary: '8-13 LPA',
    prepTime: '1.5 months',
    topics: ['Aptitude', 'English'],
    guide: {
      summary: 'Focus on English and aptitude.',
      difficulty: 'Easy',
      tips: ['Improve reading comprehension.', 'Practice pseudocode.'],
      resources: [
        { title: 'Capgemini Prep', url: 'https://prepinsta.com/capgemini/' }
      ]
    },
    rounds: ['Online Test', 'Technical', 'HR']
  },
  {
    id: 'accenture',
    name: 'Accenture',
    logo: '🟡',
    category: 'Service',
    salary: '10-16 LPA',
    prepTime: '2 months',
    topics: ['Aptitude', 'Coding'],
    guide: {
      summary: 'Focus on aptitude and coding.',
      difficulty: 'Easy-Medium',
      tips: ['Practice common coding problems.', 'Work on communication.'],
      resources: [
        { title: 'Accenture Prep', url: 'https://prepinsta.com/accenture/' }
      ]
    },
    rounds: ['Cognitive & Technical', 'Coding', 'Interview']
  },
  {
    id: 'deloitte',
    name: 'Deloitte',
    logo: '🟢',
    category: 'Service',
    salary: '10-18 LPA',
    prepTime: '2 months',
    topics: ['Case Studies', 'Aptitude'],
    guide: {
      summary: 'Focus on case studies and aptitude.',
      difficulty: 'Medium',
      tips: ['Learn to solve business cases.', 'Basic DSA.'],
      resources: [
        { title: 'Deloitte Prep', url: 'https://prepinsta.com/deloitte/' }
      ]
    },
    rounds: ['Online Test', 'Case Study', 'Technical', 'HR']
  },
  {
    id: 'ey',
    name: 'EY',
    logo: '💛',
    category: 'Service',
    salary: '9-16 LPA',
    prepTime: '2 months',
    topics: ['Case Studies'],
    guide: {
      summary: 'Focus on business cases.',
      difficulty: 'Medium',
      tips: ['Practice Guesstimates.', 'Know about EY’s service lines.'],
      resources: [
        { title: 'EY Careers', url: 'https://www.ey.com/en_in/careers' }
      ]
    },
    rounds: ['Online Test', 'Case Interview', 'HR']
  },
  {
    id: 'pwc',
    name: 'PwC',
    logo: '🔴',
    category: 'Service',
    salary: '9-16 LPA',
    prepTime: '2 months',
    topics: ['Case Studies'],
    guide: {
      summary: 'Focus on advisory cases.',
      difficulty: 'Medium',
      tips: ['Analyze business problems.', 'Basic tech knowledge.'],
      resources: [
        { title: 'PwC Careers', url: 'https://www.pwc.com/careers' }
      ]
    },
    rounds: ['Online Assessment', 'Case Round', 'Partner Round']
  },
  {
    id: 'ibm',
    name: 'IBM India',
    logo: '🔵',
    category: 'Service',
    salary: '12-20 LPA',
    prepTime: '2-3 months',
    topics: ['DSA', 'Cloud'],
    guide: {
      summary: 'Focus on DSA and cloud concepts.',
      difficulty: 'Medium',
      tips: ['Learn about IBM Cloud.', 'Practice coding problems.'],
      resources: [
        { title: 'IBM Interview Prep', url: 'https://www.geeksforgeeks.org/ibm-interview-preparation/' }
      ]
    },
    rounds: ['Coding Test', 'Technical', 'Managerial', 'HR']
  },
  // ==================== MNCs (Investment Banks, Tech, Core Engineering) ====================
  {
    id: 'goldman',
    name: 'Goldman Sachs',
    logo: '💼',
    category: 'MNC',
    salary: '15-32 LPA',
    prepTime: '4-5 months',
    topics: ['Probability', 'Core DSA', 'Operating Systems'],
    guide: {
      summary: 'Focus on probability puzzles, DSA, and OS concepts.',
      difficulty: 'Hard',
      tips: ['Practice math puzzles.', 'Strong understanding of C++.'],
      resources: [
        { title: 'Goldman Sachs Prep', url: 'https://www.geeksforgeeks.org/goldman-sachs-interview-preparation/' },
        { title: 'LeetCode Goldman', url: 'https://leetcode.com/company/goldman-sachs/' }
      ]
    },
    rounds: ['Online Assessment', 'Coding Round', 'Tech Round', 'Hiring Committee']
  },
  {
    id: 'morgan',
    name: 'Morgan Stanley',
    logo: 'MS',
    category: 'MNC',
    salary: '14-28 LPA',
    prepTime: '3-4 months',
    topics: ['Java', 'Database Joins', 'DSA (BSTs & Lists)'],
    guide: {
      summary: 'Java core, database, and DSA.',
      difficulty: 'Hard',
      tips: ['Master Java collections and multithreading.', 'Practice SQL queries.'],
      resources: [
        { title: 'Morgan Stanley Prep', url: 'https://www.geeksforgeeks.org/morgan-stanley-interview-preparation/' }
      ]
    },
    rounds: ['Online Test', 'Technical Interview', 'Managerial', 'HR']
  },
  {
    id: 'jpmc',
    name: 'JPMorgan Chase',
    logo: 'JP',
    category: 'MNC',
    salary: '12-24 LPA',
    prepTime: '3 months',
    topics: ['Problem Solving', 'Team Collaboration', 'Software Craft'],
    guide: {
      summary: 'Focus on problem solving and behavioural questions.',
      difficulty: 'Medium-Hard',
      tips: ['Use STAR method for behavioural.', 'Practice coding on HackerRank.'],
      resources: [
        { title: 'JPMorgan Prep', url: 'https://careers.jpmorgan.com/careers' }
      ]
    },
    rounds: ['Online Assessment', 'Code for Good', 'Superday']
  },
  {
    id: 'paypal',
    name: 'PayPal',
    logo: 'Pp',
    category: 'MNC',
    salary: '14-32 LPA',
    prepTime: '4 months',
    topics: ['Transactions', 'Web Security (OAuth)'],
    guide: {
      summary: 'Transactions, web security, and system design.',
      difficulty: 'Hard',
      tips: ['Understand payment processing flows.', 'Learn about fraud detection.'],
      resources: [
        { title: 'PayPal Engineering', url: 'https://engineering.paypal.com/' },
        { title: 'LeetCode PayPal', url: 'https://leetcode.com/company/paypal/' }
      ]
    },
    rounds: ['Coding Challenge', 'Technical Interview', 'System Design', 'Hiring Manager']
  },
  {
    id: 'walmart',
    name: 'Walmart Global Tech',
    logo: 'W',
    category: 'MNC',
    salary: '13-26 LPA',
    prepTime: '3 months',
    topics: ['Consistent Hashing', 'Databases Scale', 'SDE Fundamentals'],
    guide: {
      summary: 'System design for scale and SDE fundamentals.',
      difficulty: 'Medium-Hard',
      tips: ['Design a scalable inventory system.', 'Practice NoSQL.'],
      resources: [
        { title: 'Walmart Tech Blog', url: 'https://medium.com/walmartglobaltech' }
      ]
    },
    rounds: ['Online Test', 'Tech Round', 'System Design', 'HR']
  },
  {
    id: 'cisco',
    name: 'Cisco',
    logo: '🌐',
    category: 'MNC',
    salary: '12-25 LPA',
    prepTime: '3-4 months',
    topics: ['Networking', 'DSA', 'OS'],
    guide: {
      summary: 'Strong networking concepts + DSA.',
      difficulty: 'Hard',
      tips: ['Learn CCNA basics.', 'Practice socket programming.'],
      resources: [
        { title: 'Cisco DevNet', url: 'https://developer.cisco.com/' },
        { title: 'LeetCode Cisco', url: 'https://leetcode.com/company/cisco/' }
      ]
    },
    rounds: ['Online Test', 'Technical Interview', 'Managerial', 'HR']
  },
  {
    id: 'siemens',
    name: 'Siemens',
    logo: '⚙️',
    category: 'MNC',
    salary: '8-18 LPA',
    prepTime: '3 months',
    topics: ['Embedded C/C++', 'Operating Systems (RTOS)'],
    guide: {
      summary: 'Embedded systems and OS fundamentals.',
      difficulty: 'Medium',
      tips: ['Learn about real‑time OS.', 'Practice C programming.'],
      resources: [
        { title: 'Siemens Careers', url: 'https://new.siemens.com/global/en/company/jobs.html' }
      ]
    },
    rounds: ['Online Test', 'Technical Interview', 'HR']
  },
  {
    id: 'ge',
    name: 'GE Aerospace',
    logo: '✈️',
    category: 'MNC',
    salary: '20-35 LPA',
    prepTime: '4 months',
    topics: ['DSA', 'Core Engineering'],
    guide: {
      summary: 'Focus on aerospace systems and DSA.',
      difficulty: 'Hard',
      tips: ['Know about aviation software.', 'Practice numerical algorithms.'],
      resources: [
        { title: 'GE Careers', url: 'https://jobs.gecareers.com/' }
      ]
    },
    rounds: ['Coding Test', 'Technical', 'Hiring Manager']
  },
  {
    id: 'intel',
    name: 'Intel',
    logo: '💠',
    category: 'MNC',
    salary: '25-42 LPA',
    prepTime: '4 months',
    topics: ['DSA', 'Embedded', 'OS'],
    guide: {
      summary: 'Low‑level programming and operating systems.',
      difficulty: 'Hard',
      tips: ['Study computer architecture.', 'Practice C/C++ memory management.'],
      resources: [
        { title: 'Intel Careers', url: 'https://www.intel.com/content/www/us/en/jobs.html' },
        { title: 'LeetCode Intel', url: 'https://leetcode.com/company/intel/' }
      ]
    },
    rounds: ['Online Assessment', 'Tech Round', 'Managerial', 'HR']
  },
  {
    id: 'nvidia',
    name: 'NVIDIA',
    logo: '🎮',
    category: 'MNC',
    salary: '35-55 LPA',
    prepTime: '5 months',
    topics: ['DSA', 'GPU', 'AI/ML'],
    guide: {
      summary: 'Parallel computing (CUDA) and AI/ML concepts.',
      difficulty: 'Very Hard',
      tips: ['Learn CUDA basics.', 'Know matrix operations.'],
      resources: [
        { title: 'NVIDIA Developer', url: 'https://developer.nvidia.com/' },
        { title: 'LeetCode NVIDIA', url: 'https://leetcode.com/company/nvidia/' }
      ]
    },
    rounds: ['Phone Screen', '2-3 Tech Rounds', 'Hiring Committee']
  },
  {
    id: 'qualcomm',
    name: 'Qualcomm',
    logo: '📡',
    category: 'MNC',
    salary: '24-38 LPA',
    prepTime: '4 months',
    topics: ['DSA', 'Embedded', 'Networking'],
    guide: {
      summary: 'Wireless communication and embedded systems.',
      difficulty: 'Hard',
      tips: ['Study mobile networks.', 'Practice real‑time OS concepts.'],
      resources: [
        { title: 'Qualcomm Careers', url: 'https://www.qualcomm.com/company/careers' }
      ]
    },
    rounds: ['Online Test', 'Technical Interview', 'Managerial', 'HR']
  }
];