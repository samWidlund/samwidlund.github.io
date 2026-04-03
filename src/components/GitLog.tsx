import type { FC } from 'react'
import { experiences, author } from '../data/experience'

const GitCommit: FC<{
  experience: (typeof experiences)[number]
  isLast: boolean
}> = ({ experience, isLast }) => {
  return (
    <div className="mb-4">
      <div>
        <span className="text-[#39FF14]">commit {experience.hash}</span>
        {!isLast && <span className="text-[#39FF14]"> (HEAD)</span>}
      </div>
      <div>
        <span className="text-[#39FF14]">Author: </span>
        <span>{author.name} &lt;{author.email}&gt;</span>
      </div>
      <div>
        <span className="text-[#39FF14]">Date:   </span>
        <span>{experience.period}</span>
      </div>
      <div />
      <div className="pl-4">
        <span>{experience.role} @ {experience.company}</span>
      </div>
      {experience.description.map((desc, i) => (
        <div key={i} className="pl-4">
          - {desc}
        </div>
      ))}
      <div />
      <div className="pl-4">
        <span className="text-[#39FF14]">Tech: </span>
        <span>{experience.tech.join(', ')}</span>
      </div>
    </div>
  )
}

export const GitLog: FC = () => {
  return (
    <div className="text-[#39FF14] font-mono text-sm">
      <div className="mb-2">$ experience log</div>
      <div className="mb-4" />
      {experiences.map((exp, i) => (
        <GitCommit
          key={exp.hash}
          experience={exp}
          isLast={i === 0}
        />
      ))}
    </div>
  )
}
