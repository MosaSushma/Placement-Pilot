import { Roadmap } from '../types';

export const roadmapsData: Roadmap[] = [
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Master arrays, lists, stacks, queues, trees, graphs, DP, and complexity.',
    iconName: 'BookOpen',
    topics: [
      {
        id: 'time-complexity',
        title: 'Time & Space Complexity',
        description: 'Big O notation, worst-case, average-case, memory footprints.',
        resources: [
          { name: 'GFG Big O', url: 'https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/' },
          { name: 'freeCodeCamp Video', url: 'https://www.youtube.com/watch?v=8syQKTdgdzc' }
        ]
      },
      {
        id: 'linear-ds',
        title: 'Linear Data Structures',
        description: 'Arrays, Linked Lists, Stacks, Queues.',
        resources: [
          { name: 'LeetCode Arrays 101', url: 'https://leetcode.com/explore/learn/card/fun-with-arrays/' }
        ]
      },
      {
        id: 'trees',
        title: 'Trees & BST',
        description: 'Binary trees, BST, traversals, LCA.',
        resources: [
          { name: 'GFG Trees', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
          { name: 'LeetCode Trees', url: 'https://leetcode.com/explore/learn/card/data-structure-tree/' }
        ]
      },
      {
        id: 'graphs',
        title: 'Graphs & Traversals',
        description: 'BFS, DFS, Dijkstra, MST, topological sort.',
        resources: [
          { name: 'Abdul Bari Graph Playlists', url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPNLFccaWwjfKpWcJ' }
        ]
      },
      {
        id: 'dp',
        title: 'Dynamic Programming',
        description: 'Memoization, tabulation, knapsack, LCS, LIS.',
        resources: [
          { name: 'LeetCode DP Explore Card', url: 'https://leetcode.com/explore/learn/card/dynamic-programming/' },
          { name: 'Alvin’s DP Tutorial', url: 'https://www.youtube.com/watch?v=oBt53YbR9Kk' }
        ]
      }
    ]
  },
  {
    id: 'programming',
    title: 'Programming Essentials',
    description: 'C++, Java, Python basics and OOP.',
    iconName: 'Code2',
    topics: [
      {
        id: 'cpp',
        title: 'C++ Basics',
        description: 'Syntax, pointers, classes, STL.',
        resources: [{ name: 'cppreference', url: 'https://en.cppreference.com/w/' }]
      },
      {
        id: 'java',
        title: 'Java Core',
        description: 'OOP, Collections, Multithreading, JVM.',
        resources: [{ name: 'JavaTpoint', url: 'https://www.javatpoint.com/java-tutorial' }]
      },
      {
        id: 'python',
        title: 'Python Fundamentals',
        description: 'Syntax, data structures, OOP, libraries.',
        resources: [{ name: 'Python Docs', url: 'https://docs.python.org/3/tutorial/' }]
      }
    ]
  },
  {
    id: 'os',
    title: 'Operating Systems',
    description: 'Processes, threads, memory management, concurrency.',
    iconName: 'Cpu',
    topics: [
      {
        id: 'processes',
        title: 'Process Management',
        description: 'Process states, scheduling, context switching.',
        resources: [{ name: 'OSTEP Book', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/' }]
      },
      {
        id: 'memory',
        title: 'Memory Management',
        description: 'Paging, segmentation, virtual memory.',
        resources: [{ name: 'GFG Memory', url: 'https://www.geeksforgeeks.org/memory-management-in-operating-system/' }]
      }
    ]
  },
  {
    id: 'dbms',
    title: 'DBMS & SQL',
    description: 'Relational databases, SQL queries, normalization.',
    iconName: 'Database',
    topics: [
      {
        id: 'sql',
        title: 'SQL Queries',
        description: 'SELECT, JOIN, GROUP BY, subqueries.',
        resources: [{ name: 'SQLZoo', url: 'https://sqlzoo.net/' }]
      },
      {
        id: 'normalization',
        title: 'Normalization',
        description: '1NF to BCNF, functional dependencies.',
        resources: [{ name: 'GFG Normalization', url: 'https://www.geeksforgeeks.org/normal-forms-in-dbms/' }]
      }
    ]
  },
  {
    id: 'cn',
    title: 'Computer Networks',
    description: 'OSI model, TCP/IP, HTTP, DNS, sockets.',
    iconName: 'Network',
    topics: [
      {
        id: 'osi',
        title: 'OSI & TCP/IP',
        description: 'Layers, encapsulation, protocols.',
        resources: [{ name: 'Cloudflare Networking', url: 'https://www.cloudflare.com/learning/network-layer/what-is-the-osi-model/' }]
      },
      {
        id: 'http',
        title: 'HTTP/HTTPS',
        description: 'Methods, status codes, headers.',
        resources: [{ name: 'MDN HTTP', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP' }]
      }
    ]
  },
  {
    id: 'fullstack',
    title: 'Full Stack Web Development',
    description: 'Frontend (HTML/CSS/JS, React) + Backend (Node.js) + Databases.',
    iconName: 'Globe',
    topics: [
      {
        id: 'frontend',
        title: 'Frontend Basics',
        description: 'HTML5, CSS3, JavaScript ES6, DOM.',
        resources: [{ name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/' }]
      },
      {
        id: 'react',
        title: 'React.js',
        description: 'Components, hooks, state management, routing.',
        resources: [{ name: 'React Docs', url: 'https://react.dev/' }]
      },
      {
        id: 'backend',
        title: 'Node.js & Express',
        description: 'REST APIs, middleware, JWT.',
        resources: [{ name: 'Node.js Docs', url: 'https://nodejs.org/en/docs/' }]
      }
    ]
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    description: 'Python data science, ML algorithms, deep learning.',
    iconName: 'Brain',
    topics: [
      {
        id: 'python-ds',
        title: 'Python for Data Science',
        description: 'NumPy, Pandas, Matplotlib.',
        resources: [{ name: 'Kaggle Learn', url: 'https://www.kaggle.com/learn' }]
      },
      {
        id: 'ml-algos',
        title: 'ML Algorithms',
        description: 'Regression, classification, clustering.',
        resources: [{ name: 'Scikit-learn docs', url: 'https://scikit-learn.org/stable/' }]
      }
    ]
  },
  {
    id: 'aptitude',
    title: 'Quantitative Aptitude',
    description: 'Percentages, profit/loss, time & work, averages, ratios.',
    iconName: 'Calculator',
    topics: [
      {
        id: 'quant',
        title: 'Quantitative Aptitude',
        description: 'Profit/Loss, Time/Speed/Distance, Averages.',
        resources: [{ name: 'IndiaBIX', url: 'https://www.indiabix.com/' }]
      },
      {
        id: 'logical',
        title: 'Logical Reasoning',
        description: 'Puzzles, syllogisms, blood relations.',
        resources: [{ name: 'Testbook', url: 'https://testbook.com/' }]
      }
    ]
  },
  {
    id: 'communication',
    title: 'Communication Skills',
    description: 'Self‑introduction, STAR method, group discussion.',
    iconName: 'MessageSquare',
    topics: [
      {
        id: 'star',
        title: 'STAR Method',
        description: 'Situation, Task, Action, Result for behavioural questions.',
        resources: [{ name: 'The Muse', url: 'https://www.themuse.com/advice/star-interview-method' }]
      }
    ]
  },
  {
    id: 'resume',
    title: 'Resume Building',
    description: 'ATS‑friendly resume, projects, bullet points.',
    iconName: 'FileText',
    topics: [
      {
        id: 'structure',
        title: 'Resume Structure',
        description: 'Header, summary, skills, experience, projects.',
        resources: [{ name: 'Overleaf Templates', url: 'https://www.overleaf.com/latex/templates/tagged/cv' }]
      }
    ]
  }
];