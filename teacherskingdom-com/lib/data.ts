export type Lesson = {
  id: string
  title: string
  duration: string
  type: 'video' | 'reading' | 'quiz'
  completed?: boolean
}

export type Module = {
  id: string
  title: string
  lessons: Lesson[]
}

export type Course = {
  slug: string
  title: string
  tagline: string
  description: string
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All levels'
  instructor: string
  instructorTitle: string
  rating: number
  reviews: number
  students: number
  hours: number
  lessonsCount: number
  price: number
  color: string
  progress?: number
  modules: Module[]
}

export const categories = [
  'All',
  'Math',
  'Science',
  'Coding',
  'Languages',
  'Arts',
  'Business',
  'Music',
]

export const courses: Course[] = [
  {
    slug: 'foundations-of-algebra',
    title: 'Foundations of Algebra',
    tagline: 'Master variables, equations, and problem solving from scratch.',
    description:
      'Build rock-solid algebra skills with bite-sized lessons, guided practice, and instant feedback. Perfect for students of any age returning to math or getting ahead.',
    category: 'Math',
    level: 'Beginner',
    instructor: 'Dr. Amara Osei',
    instructorTitle: 'Mathematics Educator, 12 yrs',
    rating: 4.9,
    reviews: 2104,
    students: 18430,
    hours: 9,
    lessonsCount: 42,
    price: 0,
    color: 'oklch(0.48 0.16 264)',
    progress: 64,
    modules: [
      {
        id: 'm1',
        title: 'Getting Started with Variables',
        lessons: [
          { id: 'l1', title: 'What is a variable?', duration: '6 min', type: 'video', completed: true },
          { id: 'l2', title: 'Writing expressions', duration: '8 min', type: 'video', completed: true },
          { id: 'l3', title: 'Practice: Expressions', duration: '5 min', type: 'quiz', completed: true },
        ],
      },
      {
        id: 'm2',
        title: 'Solving Equations',
        lessons: [
          { id: 'l4', title: 'One-step equations', duration: '10 min', type: 'video', completed: true },
          { id: 'l5', title: 'Two-step equations', duration: '11 min', type: 'video' },
          { id: 'l6', title: 'Equation challenge', duration: '7 min', type: 'quiz' },
        ],
      },
      {
        id: 'm3',
        title: 'Graphing Lines',
        lessons: [
          { id: 'l7', title: 'The coordinate plane', duration: '9 min', type: 'reading' },
          { id: 'l8', title: 'Slope and intercept', duration: '12 min', type: 'video' },
          { id: 'l9', title: 'Module quiz', duration: '10 min', type: 'quiz' },
        ],
      },
    ],
  },
  {
    slug: 'intro-to-web-development',
    title: 'Intro to Web Development',
    tagline: 'Build your first real website with HTML, CSS, and JavaScript.',
    description:
      'Go from zero to your first deployed website. Learn the building blocks of the web through hands-on projects you can show off to friends and family.',
    category: 'Coding',
    level: 'Beginner',
    instructor: 'Leo Martins',
    instructorTitle: 'Senior Frontend Engineer',
    rating: 4.8,
    reviews: 3890,
    students: 31200,
    hours: 14,
    lessonsCount: 58,
    price: 0,
    color: 'oklch(0.6 0.15 150)',
    progress: 28,
    modules: [
      {
        id: 'm1',
        title: 'The Web & HTML',
        lessons: [
          { id: 'l1', title: 'How the web works', duration: '7 min', type: 'video', completed: true },
          { id: 'l2', title: 'Your first HTML page', duration: '12 min', type: 'video', completed: true },
          { id: 'l3', title: 'HTML knowledge check', duration: '6 min', type: 'quiz' },
        ],
      },
      {
        id: 'm2',
        title: 'Styling with CSS',
        lessons: [
          { id: 'l4', title: 'Colors and typography', duration: '10 min', type: 'video' },
          { id: 'l5', title: 'Box model & layout', duration: '14 min', type: 'video' },
          { id: 'l6', title: 'CSS quiz', duration: '8 min', type: 'quiz' },
        ],
      },
    ],
  },
  {
    slug: 'the-science-of-everyday-life',
    title: 'The Science of Everyday Life',
    tagline: 'Discover the physics and chemistry hiding in plain sight.',
    description:
      'Why is the sky blue? How does a microwave work? Explore the fascinating science behind everyday phenomena with engaging experiments and visuals.',
    category: 'Science',
    level: 'All levels',
    instructor: 'Prof. Maya Chen',
    instructorTitle: 'Physics & Chemistry',
    rating: 4.9,
    reviews: 1520,
    students: 9870,
    hours: 7,
    lessonsCount: 30,
    price: 0,
    color: 'oklch(0.62 0.13 200)',
    progress: 0,
    modules: [
      {
        id: 'm1',
        title: 'Light & Color',
        lessons: [
          { id: 'l1', title: 'What is light?', duration: '8 min', type: 'video' },
          { id: 'l2', title: 'Why the sky is blue', duration: '9 min', type: 'video' },
          { id: 'l3', title: 'Light quiz', duration: '5 min', type: 'quiz' },
        ],
      },
    ],
  },
  {
    slug: 'spanish-for-beginners',
    title: 'Spanish for Beginners',
    tagline: 'Start speaking real Spanish from your very first lesson.',
    description:
      'Learn practical, conversational Spanish through immersive audio, spaced repetition, and friendly speaking challenges that build confidence fast.',
    category: 'Languages',
    level: 'Beginner',
    instructor: 'Sofía Ramírez',
    instructorTitle: 'Language Coach',
    rating: 4.7,
    reviews: 2760,
    students: 24500,
    hours: 11,
    lessonsCount: 64,
    price: 0,
    color: 'oklch(0.65 0.2 25)',
    progress: 12,
    modules: [
      {
        id: 'm1',
        title: 'Greetings & Introductions',
        lessons: [
          { id: 'l1', title: 'Hola! Saying hello', duration: '6 min', type: 'video' },
          { id: 'l2', title: 'Introducing yourself', duration: '8 min', type: 'video' },
          { id: 'l3', title: 'Speaking challenge', duration: '5 min', type: 'quiz' },
        ],
      },
    ],
  },
  {
    slug: 'digital-illustration-basics',
    title: 'Digital Illustration Basics',
    tagline: 'Turn your ideas into beautiful digital art.',
    description:
      'No talent required, just curiosity. Learn the fundamentals of digital drawing, color, and composition with step-by-step projects.',
    category: 'Arts',
    level: 'Beginner',
    instructor: 'Noah Park',
    instructorTitle: 'Illustrator & Designer',
    rating: 4.8,
    reviews: 1340,
    students: 7600,
    hours: 8,
    lessonsCount: 36,
    price: 0,
    color: 'oklch(0.82 0.15 82)',
    progress: 0,
    modules: [
      {
        id: 'm1',
        title: 'Your Digital Toolkit',
        lessons: [
          { id: 'l1', title: 'Brushes & layers', duration: '9 min', type: 'video' },
          { id: 'l2', title: 'Color theory basics', duration: '11 min', type: 'reading' },
          { id: 'l3', title: 'Toolkit quiz', duration: '6 min', type: 'quiz' },
        ],
      },
    ],
  },
  {
    slug: 'personal-finance-101',
    title: 'Personal Finance 101',
    tagline: 'Budget, save, and invest with total confidence.',
    description:
      'Take control of your money. Learn budgeting, saving, debt, and the basics of investing in plain language with real-world worksheets.',
    category: 'Business',
    level: 'All levels',
    instructor: 'Grace Whitfield',
    instructorTitle: 'Financial Educator',
    rating: 4.9,
    reviews: 4120,
    students: 28900,
    hours: 6,
    lessonsCount: 28,
    price: 0,
    color: 'oklch(0.6 0.15 150)',
    progress: 0,
    modules: [
      {
        id: 'm1',
        title: 'Budgeting Foundations',
        lessons: [
          { id: 'l1', title: 'Where does my money go?', duration: '7 min', type: 'video' },
          { id: 'l2', title: 'Building a budget', duration: '12 min', type: 'video' },
          { id: 'l3', title: 'Budget quiz', duration: '5 min', type: 'quiz' },
        ],
      },
    ],
  },
]

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug)
}

export type QuizQuestion = {
  id: string
  question: string
  options: string[]
  correct: number
  explanation: string
}

export const sampleQuiz: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Solve for x:  2x + 6 = 14',
    options: ['x = 2', 'x = 4', 'x = 6', 'x = 10'],
    correct: 1,
    explanation: 'Subtract 6 from both sides to get 2x = 8, then divide by 2 to get x = 4.',
  },
  {
    id: 'q2',
    question: 'Which expression represents "5 more than a number n"?',
    options: ['5n', 'n - 5', 'n + 5', '5 / n'],
    correct: 2,
    explanation: '"More than" means addition, so 5 more than n is n + 5.',
  },
  {
    id: 'q3',
    question: 'What is the slope of the line y = 3x - 2 ?',
    options: ['-2', '3', '2', '1/3'],
    correct: 1,
    explanation: 'In y = mx + b form, m is the slope. Here m = 3.',
  },
  {
    id: 'q4',
    question: 'Simplify:  4(x + 2)',
    options: ['4x + 2', 'x + 8', '4x + 8', '4x + 6'],
    correct: 2,
    explanation: 'Distribute the 4 across the parentheses: 4·x + 4·2 = 4x + 8.',
  },
]

export type Badge = {
  id: string
  name: string
  description: string
  icon: string
  earned: boolean
  date?: string
}

export const badges: Badge[] = [
  { id: 'b1', name: 'First Steps', description: 'Completed your first lesson', icon: 'footprints', earned: true, date: 'May 2' },
  { id: 'b2', name: 'Quiz Whiz', description: 'Scored 100% on a quiz', icon: 'brain', earned: true, date: 'May 8' },
  { id: 'b3', name: 'Week Warrior', description: '7-day learning streak', icon: 'flame', earned: true, date: 'May 14' },
  { id: 'b4', name: 'Bookworm', description: 'Finished 10 reading lessons', icon: 'book-open', earned: true, date: 'May 20' },
  { id: 'b5', name: 'Course Champion', description: 'Completed an entire course', icon: 'trophy', earned: false },
  { id: 'b6', name: 'Math Master', description: 'Earned 5,000 XP in Math', icon: 'sigma', earned: false },
  { id: 'b7', name: 'Night Owl', description: 'Studied after midnight', icon: 'moon', earned: false },
  { id: 'b8', name: 'Mentor', description: 'Helped 3 peers in discussions', icon: 'users', earned: false },
]

export type LeaderboardEntry = {
  rank: number
  name: string
  xp: number
  streak: number
  you?: boolean
}

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: 'Priya N.', xp: 14820, streak: 64 },
  { rank: 2, name: 'Marcus T.', xp: 13240, streak: 41 },
  { rank: 3, name: 'Aiko S.', xp: 12110, streak: 33 },
  { rank: 4, name: 'You', xp: 9650, streak: 14, you: true },
  { rank: 5, name: 'Diego R.', xp: 9100, streak: 22 },
  { rank: 6, name: 'Hannah W.', xp: 8430, streak: 9 },
  { rank: 7, name: 'Omar K.', xp: 7980, streak: 18 },
]

export const learnerStats = {
  name: 'Jordan',
  xp: 9650,
  level: 12,
  xpToNext: 1350,
  levelTotal: 2000,
  streak: 14,
  minutesThisWeek: 320,
  weeklyGoal: 400,
  coursesInProgress: 3,
  lessonsCompleted: 87,
  weekActivity: [
    { day: 'Mon', minutes: 45 },
    { day: 'Tue', minutes: 60 },
    { day: 'Wed', minutes: 30 },
    { day: 'Thu', minutes: 75 },
    { day: 'Fri', minutes: 50 },
    { day: 'Sat', minutes: 40 },
    { day: 'Sun', minutes: 20 },
  ],
}

export const instructorStats = {
  name: 'Dr. Amara Osei',
  totalStudents: 36300,
  totalRevenue: 48920,
  avgRating: 4.86,
  publishedCourses: 4,
  enrollmentTrend: [
    { month: 'Jan', students: 1200 },
    { month: 'Feb', students: 1850 },
    { month: 'Mar', students: 2400 },
    { month: 'Apr', students: 2100 },
    { month: 'May', students: 3300 },
    { month: 'Jun', students: 4100 },
  ],
  courses: [
    { title: 'Foundations of Algebra', students: 18430, rating: 4.9, revenue: 24100, status: 'Published' as const },
    { title: 'Geometry Made Simple', students: 9820, rating: 4.8, revenue: 13200, status: 'Published' as const },
    { title: 'Pre-Calculus Bootcamp', students: 6050, rating: 4.9, revenue: 9800, status: 'Published' as const },
    { title: 'Statistics for Beginners', students: 2000, rating: 4.7, revenue: 1820, status: 'Draft' as const },
  ],
  reviews: [
    { name: 'Ella M.', course: 'Foundations of Algebra', rating: 5, text: 'Finally understand algebra after years of struggling. The quizzes make it stick!' },
    { name: 'Tom B.', course: 'Geometry Made Simple', rating: 5, text: 'Clear, patient, and genuinely fun. My daughter and I learn together.' },
    { name: 'Wei L.', course: 'Foundations of Algebra', rating: 4, text: 'Great pacing. Would love more advanced practice problems.' },
  ],
}
