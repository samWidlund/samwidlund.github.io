import type { FC } from 'react'

interface FileSystemItemProps {
  type: 'directory' | 'file'
  name: string
  onClick?: () => void
}

const FileSystemItem: FC<FileSystemItemProps> = ({ type, name, onClick }) => {
  const permissions = type === 'directory' ? 'drwxr-xr-x' : '-rw-r--r--'

  return (
    <div
      onClick={onClick}
      className="flex gap-2 hover:bg-[rgba(57,255,20,0.1)] cursor-pointer p-1 transition-colors"
    >
      <span className="opacity-70 select-none">{permissions}</span>
      <span>{name}</span>
    </div>
  )
}

interface FileSystemProps {
  currentPath: string
}

export const FileSystem: FC<FileSystemProps> = ({ currentPath }) => {
  return (
    <div className="text-[#39FF14] font-mono text-base">
      {currentPath === '~' && (
        <>
          <FileSystemItem type="directory" name="projects/" />
          <FileSystemItem type="directory" name="experience/" />
          <FileSystemItem type="file" name="about.txt" />
        </>
      )}
    </div>
  )
}
