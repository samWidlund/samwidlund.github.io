export interface Experience {
  hash: string
  role: string
  company: string
  period: string
  info: string[]
}

export const experiences: Experience[] = [
  {
    hash: 'b7c9d2e',
    role: 'Process Operator',
    company: 'Fresenius Kabi Uppsala',
    period: 'May 2025 - current',
    info: []
  },
  {
    hash: 'a6f8e1d',
    role: 'Consultant',
    company: 'Randstad Uppsala',
    period: 'May 2025 - Jan 2026',
    info: []
  },
  {
    hash: 'e4b2d6a',
    role: 'Reconciliation Agent',
    company: 'Etraveli Group',
    period: 'Sep 2024 - Dec 2024',
    info: []
  },
  {
    hash: 'd3c1f5b',
    role: 'DevOps, Automated & Manual Testing',
    company: 'Cytiva Uppsala',
    period: 'Feb 2024 - Aug 2024',
    info: ['PowerShell', 'C#', 'FlaUI', 'Azure', 'Pipelines']
  },
  {
    hash: 'c2a9e4f',
    role: 'Tire Change, Customer Service & Freight Truck Driving',
    company: 'Bildemo Uppsala',
    period: 'Spring & Autumn 2023-2024',
    info: []
  },
  {
    hash: 'b1d8c3e',
    role: 'Warehouse Management & Cleaning',
    company: 'Lundagrossisten Uppsala Norr',
    period: 'Summer 2020, 2021, 2023',
    info: []
  }
]

export const author = {
  name: 'Samuel Widlund',
  email: 'sam@me.se'
}
