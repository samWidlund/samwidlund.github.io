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
    hash: 'b7c9d2e',
    role: 'Process Operator',
    company: 'Fresenius Kabi Uppsala',
    period: 'May 2025 - current',
    description: ['Processoperatör inom läkemedelsindustrin'],
    tech: []
  },
  {
    hash: 'a6f8e1d',
    role: 'Consultant',
    company: 'Randstad Uppsala',
    period: 'May 2025 - Jan 2026',
    description: ['Konsult inom bemanning och rekrytering'],
    tech: []
  },
  {
    hash: 'e4b2d6a',
    role: 'Reconciliation Agent',
    company: 'Etraveli Group',
    period: 'Sep 2024 - Dec 2024',
    description: ['Avstämning och ekonomisk rapportering'],
    tech: []
  },
  {
    hash: 'd3c1f5b',
    role: 'DevOps, Automated & Manual Testing',
    company: 'Cytiva Uppsala',
    period: 'Feb 2024 - Aug 2024',
    description: [
      'DevOps-arbete',
      'Automatiserad mjukvarutestning',
      'Manuell testning'
    ],
    tech: ['Selenium', 'Flaui', 'Azure', 'YAML', 'Pipelines', 'PowerShell']
  },
  {
    hash: 'c2a9e4f',
    role: 'Tire Change, Customer Service & Freight Truck Driving',
    company: 'Bildemo Uppsala',
    period: 'Spring & Autumn 2023-2024',
    description: [
      'Däckbyte',
      'Kundservice',
      'Lastbilskörning'
    ],
    tech: []
  },
  {
    hash: 'b1d8c3e',
    role: 'Warehouse Management & Cleaning',
    company: 'Lundagrossisten Uppsala Norr',
    period: 'Summer 2020, 2021, 2023',
    description: ['Lagerarbete och städning'],
    tech: []
  }
]

export const author = {
  name: 'Samuel Widlund',
  email: 'sam@me.se'
}
