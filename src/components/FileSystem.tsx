import type { FC } from 'react'

interface FileSystemItemProps {
  type: 'directory' | 'file' | 'command'
  name: string
  onClick?: () => void
}

const FileSystemItem: FC<FileSystemItemProps> = ({ type, name, onClick }) => {
  const icon = type === 'directory' ? '[~]' : type === 'command' ? '[>]' : '[-]'

  return (
    <div
      onClick={onClick}
      className="flex gap-2 hover:bg-[rgba(57,255,20,0.1)] cursor-pointer p-1 transition-colors"
    >
      <span className="select-none">{icon}</span>
      <span>{name}</span>
    </div>
  )
}

interface FileSystemProps {
  currentPath: string
  onCommand?: (cmd: string) => void
}

export const FileSystem: FC<FileSystemProps> = ({ currentPath, onCommand }) => {
  return (
    <div className="text-[#39FF14] font-mono text-base">
      {currentPath === '~' && (
        <>
          <FileSystemItem type="directory" name="projects/" />
          <FileSystemItem type="command" name="experience" onClick={() => onCommand?.('experience log')} />
          <FileSystemItem type="file" name="about.txt" />
        </>
      )}
    </div>
  )
}
