import { useEffect, useRef, useState, type FC } from 'react'
import { experiences } from '../data/experience'
import { education } from '../data/education'

const LineWithPrefix: FC<{
  prefix: string
  children: React.ReactNode
}> = ({ prefix, children }) => {
  const contentRef = useRef<HTMLSpanElement>(null)
  const [lineCount, setLineCount] = useState(1)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const measure = () => {
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight)
      const height = el.scrollHeight
      const count = Math.max(1, Math.round(height / lineHeight))
      setLineCount(count)
    }

    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="ml-1 flex flex-wrap">
      <div className="flex flex-col pr-1 text-gray-500">
        {Array.from({ length: lineCount }).map((_, i) => (
          <span key={i}>{prefix}</span>
        ))}
      </div>
      <span ref={contentRef}>{children}</span>
    </div>
  )
}

const GitCommitExperience: FC<{
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
  const refs = isFirst ? 'HEAD -> main' : hasOrigin && isLast ? 'portfolio/main' : ''

  return (
    <div>
      <div>
        <span className="text-yellow-400">{branchChar}</span>
        <span className="text-cyan-400">─</span>
        <span className="text-red-400">commit </span>
        <span className="text-violet-400">{shortHash}</span>
        {refs && (
          <span className={refs === 'portfolio/main' ? 'text-red-600' : 'text-cyan-400'}> ({refs})</span>
        )}
      </div>
      <LineWithPrefix prefix={lineChar}>
        <span className="font-bold">Role:    </span>
        <span className="text-yellow-400 font-bold">{experience.role}</span>
      </LineWithPrefix>
      <LineWithPrefix prefix={lineChar}>
        <span className="font-bold">Company: </span>
        <span>{experience.company}</span>
      </LineWithPrefix>
      <LineWithPrefix prefix={lineChar}>
        <span className="font-bold">Date:   </span>
        <span className={isCurrent ? 'text-cyan-400 font-bold' : ''}>
          {experience.period}
        </span>
      </LineWithPrefix>
      {experience.info.map((info, i) => (
        <LineWithPrefix key={i} prefix={lineChar}>
          <span className="text-[#39FF14]">{info}</span>
        </LineWithPrefix>
      ))}
      <LineWithPrefix prefix={lineChar}>
        <span />
      </LineWithPrefix>
      <LineWithPrefix prefix={lineChar}>
        <span />
      </LineWithPrefix>
    </div>
  )
}

const GitCommitEducation: FC<{
  edu: (typeof education)[number]
  isLast: boolean
  isOnly: boolean
}> = ({ edu, isLast, isOnly }) => {
  const branchChar = isOnly || isLast ? '├' : '├'
  const lineChar = isOnly || isLast ? '│' : '│'

  const shortHash = edu.hash.slice(0, 7)

  return (
    <div>
      <div>
        <span className="text-yellow-400">{branchChar}</span>
        <span className="text-cyan-400">─</span>
        <span className="text-red-400">commit </span>
        <span className="text-violet-400">{shortHash}</span>
      </div>
      <LineWithPrefix prefix={lineChar}>
        <span className="font-bold">Degree: </span>
        <span className="text-[#39FF14] font-bold">{edu.degree}</span>
      </LineWithPrefix>
      <LineWithPrefix prefix={lineChar}>
        <span className="font-bold">School: </span>
        <span>{edu.school}</span>
      </LineWithPrefix>
      <LineWithPrefix prefix={lineChar}>
        <span className="font-bold">Date:   </span>
        <span>{edu.period}</span>
      </LineWithPrefix>
      {edu.info.map((info, i) => (
        <LineWithPrefix key={i} prefix={lineChar}>
          <span className="text-orange-400">{info}</span>
        </LineWithPrefix>
      ))}
      <LineWithPrefix prefix={lineChar}>
        <span />
      </LineWithPrefix>
      <LineWithPrefix prefix={lineChar}>
        <span />
      </LineWithPrefix>
    </div>
  )
}

export const GitLog: FC = () => {
  return (
    <div className="text-white font-mono text-sm">
      <div className="mb-1">
        <span className="text-[#39FF14]">$</span> resume log --graph --all
      </div>
      <div className="my-6 text-lg text-[#39FF14] font-bold">
        ═══ EDUCATION ═══
      </div>
      {education.map((edu, i) => (
        <GitCommitEducation
          key={edu.hash}
          edu={edu}
          isLast={i === education.length - 1}
          isOnly={education.length === 1}
        />
      ))}
      <div className="my-6 text-lg text-[#39FF14] font-bold">
        ═══ EXPERIENCE ═══
      </div>
      {experiences.map((exp, i) => (
        <GitCommitExperience
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