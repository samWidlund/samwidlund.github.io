import type { FC } from 'react'
import { experiences } from '../data/experience'

const GitCommit: FC<{
  experience: (typeof experiences)[number]
  isLast: boolean
  isOnly: boolean
  isFirst: boolean
  hasOrigin: boolean
}> = ({ experience, isLast, isOnly, isFirst, hasOrigin }) => {
  const isCurrent = experience.period.includes('current')
  const branchChar = isCurrent ? '*' : isOnly || isLast ? '├' : '├'
  const lineChar = isOnly || isLast ? '│' : '│'

  const shortHash = experience.hash.slice(0, 7)
  const refs = isFirst ? 'HEAD -> main, origin/main' : hasOrigin && isLast ? 'origin/main' : ''

  return (
    <div>
      <div>
        <span className="text-yellow-400">{branchChar}</span>
        <span className="text-cyan-400">─</span>
        <span className="text-red-400">commit </span>
        <span className="text-violet-400">{shortHash}</span>
        {refs && (
          <span className="text-cyan-400"> ({refs})</span>
        )}
      </div>
      <div className="ml-1">
        <span className="text-gray-500">{lineChar} </span>
        <span className="font-bold">Role:    </span>
        <span className="text-yellow-400 font-bold">{experience.role}</span>
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
      {experience.info.length > 0 && (
        <div className="ml-1">
          <span className="text-gray-500">{lineChar} </span>
          <span className="text-[#39FF14]">{experience.info.join(', ')}</span>
        </div>
      )}
      <div className="ml-1">
        <span className="text-gray-500">{lineChar} </span>
      </div>
      <div className="ml-1">
        <span className="text-gray-500">{lineChar} </span>
      </div>
    </div>
  )
}

export const GitLog: FC = () => {
  return (
    <div className="text-white font-mono text-sm">
      <div className="mb-1">
        <span className="text-[#39FF14]">$</span> git log --graph --all
      </div>
      <div className="mb-2 text-gray-500">  (resume log)</div>
      {experiences.map((exp, i) => (
        <GitCommit
          key={exp.hash}
          experience={exp}
          isLast={i === experiences.length - 1}
          isOnly={experiences.length === 1}
          isFirst={i === 0}
          hasOrigin={i === experiences.length - 1}
        />
      ))}
    </div>
  )
}
