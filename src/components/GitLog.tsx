import type { FC } from 'react'
import { experiences } from '../data/experience'

const GitCommit: FC<{
  experience: (typeof experiences)[number]
  isLast: boolean
  isOnly: boolean
}> = ({ experience, isLast, isOnly }) => {
  const isCurrent = experience.period.includes('current')
  const branchChar = isCurrent ? '*' : isOnly || isLast ? '└' : '├'
  const lineChar = isOnly || isLast ? ' ' : '│'

  return (
    <div>
      <div>
        <span className="text-yellow-400">{branchChar}</span>
        <span className="text-cyan-400">─</span>
        <span className="text-yellow-400 font-bold"> {experience.role}</span>
        {isCurrent && <span className="text-cyan-400"> (HEAD)</span>}
      </div>
      <div className="ml-1">
        <span className="text-gray-500">{lineChar} </span>
        <span className="font-bold">Company: </span>
        <span>{experience.company}</span>
      </div>
      <div className="ml-1">
        <span className="text-gray-500">{lineChar} </span>
        <span className="font-bold">Date:   </span>
        <span className={isCurrent ? 'text-cyan-400 font-bold' : ''}>
          {experience.period}
        </span>
      </div>
      {experience.description.length > 0 && (
        <div className="ml-1">
          <span className="text-gray-500">{lineChar} </span>
          {experience.description.map((desc, i) => (
            <div key={i}>
              <span className="text-gray-500">{lineChar} </span>
              <span>{desc}</span>
            </div>
          ))}
        </div>
      )}
      {experience.tech.length > 0 && (
        <div className="ml-1">
          <span className="text-gray-500">{lineChar} </span>
          <span className="text-gray-400">Tech: </span>
          <span className="text-[#39FF14]">{experience.tech.join(', ')}</span>
        </div>
      )}
    </div>
  )
}

export const GitLog: FC = () => {
  return (
    <div className="text-white font-mono text-sm">
      <div className="mb-1">
        <span className="text-[#39FF14]">$</span> git log --graph --all
      </div>
      <div className="mb-2 text-gray-500">  (experience history)</div>
      {experiences.map((exp, i) => (
        <GitCommit
          key={exp.hash}
          experience={exp}
          isLast={i === experiences.length - 1}
          isOnly={experiences.length === 1}
        />
      ))}
    </div>
  )
}
