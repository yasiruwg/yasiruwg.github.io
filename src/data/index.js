// ─── Skills ────────────────────────────────────────────────────────────────
export const skills = [
  {
    category: 'Game Development',
    icon: '🎮',
    color: 'from-blue-500 to-cyan-400',
    items: ['Unity', 'C#', 'Gameplay Programming', 'Mobile Games', 'HTML5 Games', 'PixiJS'],
  },
  {
    category: 'Programming',
    icon: '💻',
    color: 'from-violet-500 to-purple-400',
    items: ['C#', 'JavaScript', 'Java'],
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    color: 'from-cyan-500 to-blue-400',
    items: ['React', 'Redux', 'HTML', 'CSS'],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    color: 'from-indigo-500 to-violet-400',
    items: ['Git', 'GitLab', 'VS Code'],
  },
  {
    category: 'Other',
    icon: '⚡',
    color: 'from-blue-400 to-indigo-500',
    items: ['REST APIs', 'WebSocket', 'Agile Development'],
  },
]

// ─── Experience ─────────────────────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: 'Software Engineer – Game Developer',
    company: 'IMI Games',
    period: '2022 – Present',
    type: 'Full-time',
    highlights: [
      'Built and maintained 60+ HTML5 hyper casual games.',
      'Developed branded advergames for enterprise clients.',
      'Built interactive playable advertisements.',
      'Improved and maintained React PWA platform.',
      'Developed Unity real-time visualization systems for Hiru Election broadcast.',
      'Developed Unity live systems for Hiru Star national TV show.',
      'Participated in 100+ weekly live TV broadcasts.',
      'Collaborated closely with designers and developers.',
    ],
    tech: ['Unity', 'C#', 'JavaScript', 'PixiJS', 'React', 'Redux'],
    color: '#4F8CFF',
  },
  {
    id: 2,
    role: 'Software Engineer – Game Developer',
    company: 'Arimac',
    period: '2021 – 2022',
    type: 'Full-time',
    highlights: [
      'Created engaging HTML5 games for web platforms.',
      'Collaborated with designers and artists to deliver polished experiences.',
      'Built reusable gameplay systems and mechanics.',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS', 'PixiJS'],
    color: '#7B61FF',
  },
  {
    id: 3,
    role: 'Game Developer Intern',
    company: 'Arimac',
    period: '2020 – 2021',
    type: 'Internship',
    highlights: [
      'Built web-based games from scratch.',
      'Fixed bugs and improved existing gameplay systems.',
      'Created core gameplay mechanics under mentorship.',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS'],
    color: '#00E5FF',
  },
]

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'Hiru Election Live Visualization',
    description:
      'Real-time election data visualization system deployed during national television broadcasts. Processed live vote counts and rendered dynamic graphics under tight broadcast constraints.',
    tech: ['Unity', 'C#', 'WebSocket', 'REST APIs'],
    category: 'Unity',
    featured: true,
    image: '/projects/hiru-election.png',
    video: null,
    liveUrl: 'https://www.linkedin.com/pulse/behind-screens-how-we-helped-hiru-tv-stay-ahead-sri-lankas-y9itc/',
    githubUrl: null,
    color: '#4F8CFF',
    icon: '📡',
  },
  {
    id: 2,
    title: 'Hiru Star Live Visualization',
    description:
      'Real-time live visualization software powering weekly Hiru Star television broadcasts. Rendered scores, voting results, and interactive overlays for national audiences.',
    tech: ['Unity', 'C#'],
    category: 'Unity',
    featured: true,
    image: null,
    video: '/projects/hiru-star.mp4',
    liveUrl: 'https://www.youtube.com/playlist?list=PLLSxhK7aZWf3mOBiH8irwyfRGFGe_Oc5g',
    githubUrl: null,
    color: '#7B61FF',
    icon: '⭐',
  },
  {
    id: 3,
    title: '60+ Hyper Casual Games',
    description:
      'Large catalog of HTML5 hyper casual games built for the IMI Games portal. Each game optimized for performance, engagement, and fast load times on mobile and desktop.',
    tech: ['JavaScript', 'PixiJS', 'HTML5', 'CSS'],
    category: 'HTML5',
    featured: true,
    image: '/projects/imi-games.jpg',
    liveUrl: 'https://imi.games/portal/index.html',
    githubUrl: null,
    color: '#00E5FF',
    icon: '🎲',
  },
  {
    id: 4,
    title: 'Playable Advertisements',
    description:
      'Interactive playable ad experiences for enterprise clients. Delivered high-engagement mini-games used as advertising units across digital platforms.',
    tech: ['JavaScript', 'PixiJS', 'HTML5'],
    category: 'HTML5',
    featured: true,
    image: '/projects/phyco-health.jpg',
    liveUrl: 'https://imi.games/case-study/phyco-health/index.html',
    githubUrl: null,
    color: '#4F8CFF',
    icon: '📱',
  },
  {
    id: 5,
    title: 'Brand Promotion Games',
    description:
      'Custom marketing games developed for major brands. Designed to maximize brand engagement and user retention through tailored gameplay experiences.',
    tech: ['JavaScript', 'PixiJS', 'React'],
    category: 'HTML5',
    featured: false,
    image: '/projects/advergames.jpg',
    liveUrl: 'https://imi.games/case-study/advergames/index.html',
    githubUrl: null,
    color: '#7B61FF',
    icon: '🏆',
  },
]

// ─── Stats ───────────────────────────────────────────────────────────────────
export const stats = [
  { value: 6, suffix: '+', label: 'Years Experience' },
  { value: 60, suffix: '+', label: 'Games Developed' },
  { value: 10, suffix: '+', label: 'Enterprise Clients' }
]

// ─── Education ───────────────────────────────────────────────────────────────
export const education = [
  {
    degree: 'Bachelor of Science Special Degree',
    field: 'Computer Science and Technology',
    institution: 'Sabaragamuwa University of Sri Lanka',
    icon: '🎓',
    logo: '/logos/susl.png',
  },
]

// ─── Specializations (Hero typewriter) ───────────────────────────────────────
export const specializations = [
  'Unity Game Developer',
  'Mobile Game Engineer',
  'HTML5 Game Developer',
  'Gameplay Programmer',
  'Real-time Systems Dev',
  'Hyper Casual Specialist',
]

// ─── Nav Links ────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stats', href: '#stats' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

// ─── Social Links ─────────────────────────────────────────────────────────────
export const socials = {
  github: 'https://github.com/yasiruwg',
  linkedin: 'https://linkedin.com/in/yasiru-wijenayake',
  email: 'yasirulakmal95@gmail.com',
  location: 'Colombo, Sri Lanka',
}
