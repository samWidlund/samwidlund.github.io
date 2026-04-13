export interface Education {
  hash: string
  degree: string
  school: string
  period: string
  info: string[]
}

export const education: Education[] = [
  {
    hash: 'a1b2c3d',
    degree: 'Upper secondary school engineer',
    school: 'NTI Gymnasiet Uppsala',
    period: 'Aug 2023 - Jun 2024',
    info: ['Programming', 'Web Development', 'Design', 'Software engineering', 'Scrum/Agile', 'Project management']
  },
  {
    hash: 'e5f6g7h',
    degree: 'Information technology, 10 hp',
    school: 'Uppsala Universitet',
    period: 'Aug 2023 - Dec 2024',
    info: ['Systems', 'Computers', 'IT basics']
  },
  {
    hash: 'i9j0k1l',
    degree: 'Technology Programme, Upper Secondary Education',
    school: 'NTI Gymnasiet Uppsala',
    period: 'Aug 2020 - Jun 2023',
    info: ['Technical science', 'Mathematics', 'Physics', 'Web Development', 'Programming']
  }
]