export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  status: 'In Development' | 'Research' | 'Prototype' | 'Completed';
  github?: string;
  demo?: string;
  accent: 'blue' | 'yellow';
};

export const projects: Project[] = [
  {
    slug: 'circadia',
    title: 'Circadia',
    tagline: 'Circadian-aware health companion',
    description:
      'A system that aligns ambient lighting, wake cues and biometric feedback with the body’s natural circadian rhythm — exploring how embedded systems can support healthier sleep-wake cycles and long-term wellbeing.',
    technologies: ['ESP32', 'Arduino', 'Python', 'React'],
    status: 'In Development',
    github: 'https://github.com/',
    demo: '#',
    accent: 'yellow',
  },
  {
    slug: 'smart-farm',
    title: 'Smart Farm Monitoring System',
    tagline: 'Precision agriculture, instrumented',
    description:
      'A distributed sensor network measuring soil moisture, temperature and ambient humidity across farm plots, streaming data to a dashboard that turns raw telemetry into actionable irrigation decisions.',
    technologies: ['ESP32', 'Arduino', 'Python', 'Tailwind CSS'],
    status: 'Prototype',
    github: 'https://github.com/',
    demo: '#',
    accent: 'blue',
  },
  {
    slug: 'frontend-experiments',
    title: 'Frontend UI Experiments',
    tagline: 'Interface engineering, in public',
    description:
      'A growing collection of interface experiments — motion systems, data visualisations and interaction patterns — built to sharpen frontend craft and document the engineering thinking behind each one.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    status: 'Research',
    github: 'https://github.com/',
    demo: '#',
    accent: 'blue',
  },
  {
    slug: 'farm-to-door',
    title: 'Farm To Door',
    tagline: 'Online Farmers Market',
    description:
      'A growing collection of interface experiments — motion systems, data visualisations and interaction patterns — built to sharpen frontend craft and document the engineering thinking behind each one.',
    technologies: ['Next.js', 'Supabase', 'Tailwind CSS'],
    status: 'Prototype',
    github: 'https://github.com/',
    demo: '#',
    accent: 'blue',
  },
  {
    slug: 'queueless',
    title: 'Queueless',
    tagline: 'Customer Management Service',
    description:
      'A growing collection of interface experiments — motion systems, data visualisations and interaction patterns — built to sharpen frontend craft and document the engineering thinking behind each one.',
    technologies: ['React', 'Supabase', 'Tailwind CSS'],
    status: 'Prototype',
    github: 'https://github.com/',
    demo: '#',
    accent: 'blue',
  },
];

export type Interest = {
  title: string;
  description: string;
  icon: string;
};

export const interests: Interest[] = [
  {
    title: 'Artificial Intelligence',
    description:
      'Applying machine learning to physiological and environmental signals — turning continuous data into decisions a clinician or grower can trust.',
    icon: 'BrainCircuit',
  },
  {
    title: 'Internet of Things',
    description:
      'Designing sensor networks that are reliable, low-power and secure, from edge nodes to the dashboards that make their readings legible.',
    icon: 'Wifi',
  },
  {
    title: 'Robotics',
    description:
      'Building systems that perceive and act — kinematics, control loops and the embedded firmware that connects intention to motion.',
    icon: 'Bot',
  },
  {
    title: 'Embedded Systems',
    description:
      'Working close to the metal — microcontrollers, real-time constraints and the discipline of making constrained hardware behave predictably.',
    icon: 'Cpu',
  },
];

export type StackItem = { name: string; category: string };

export const techStack: StackItem[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Python', category: 'Programming' },
  { name: 'Arduino', category: 'Hardware' },
  { name: 'ESP32', category: 'Hardware' },
  { name: 'Git', category: 'Tooling' },
  { name: 'GitHub', category: 'Tooling' },
];

export type JourneyEntry = {
  period: string;
  title: string;
  org: string;
  description: string;
  tag: 'Education' | 'Project' | 'Milestone';
};

export const journey: JourneyEntry[] = [
  {
    period: 'In progress',
    title: 'B.Sc. Technology — Electronic & Electrical Engineering',
    org: 'Obafemi Awolowo University, Nigeria',
    description:
      'Studying the foundations — circuits, signals, systems and computation — while specialising toward intelligent, connected hardware for healthcare.',
    tag: 'Education',
  },
  {
    period: 'Current',
    title: 'Building Circadia',
    org: 'Independent research',
    description:
      'Designing a circadian-aware health system that bridges embedded sensing and software, the first concrete step toward a larger healthcare-technology vision.',
    tag: 'Project',
  },
  {
    period: 'Ongoing',
    title: 'Frontend Development Practice',
    org: 'Self-directed',
    description:
      'Sharpening interface engineering through public experiments — motion, data visualisation and the craft of building software that feels considered.',
    tag: 'Milestone',
  },
  {
    period: 'Ahead',
    title: 'Intelligent Healthcare Technologies',
    org: 'Career vision',
    description:
      'Combining AI, IoT, robotics and embedded systems to build technologies that improve how care is delivered, monitored and understood.',
    tag: 'Milestone',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Interests', href: '#interests' },
  { label: 'Stack', href: '#stack' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'Email', href: 'mailto:hello@victorowolabi.dev' },
];
