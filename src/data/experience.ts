export interface Experience {
  hash: string
  role: string
  company: string
  period: string
  description: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    hash: 'a3f2b1c',
    role: 'Frontend Developer',
    company: 'TechCorp',
    period: 'Jan 2024 - Present',
    description: [
      'Utvecklade React-applikationer',
      'Arbetade med TypeScript & Tailwind',
      'Implementerade responsiv design'
    ],
    tech: ['React', 'TypeScript', 'Tailwind', 'Node.js']
  },
  {
    hash: '7d4e9f2',
    role: 'Junior Developer',
    company: 'StartupXYZ',
    period: 'Jun 2022 - Dec 2023',
    description: [
      'Byggde Webbplattformar',
      'Arbetade med JavaScript',
      'Lärde mig React'
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'React']
  },
  {
    hash: '1c2d3e4',
    role: 'Intern',
    company: 'Webbyrå',
    period: 'Jan 2022 - May 2022',
    description: [
      'Assisterade med webbutveckling',
      'Lärde mig grunderna i HTML & CSS'
    ],
    tech: ['HTML', 'CSS', 'Figma']
  }
]

export const author = {
  name: 'Samme',
  email: 'sam@me.se'
}
