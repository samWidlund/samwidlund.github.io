import type { FC } from 'react';

interface FileSystemItemProps {
    type: 'directory' | 'file' | 'command';
    name: string;
    onClick?: () => void;
}

const FileSystemItem: FC<FileSystemItemProps> = ({ type, name, onClick }) => {
    const icon =
        type === 'directory'
            ? '[~]'
            : type === 'command'
              ? '[>]'
              : type === 'file'
                ? '[-]'
                : '';

    return (
        <div
            onClick={onClick}
            className="flex gap-2 hover:bg-[rgba(57,255,20,0.1)] cursor-pointer p-1 transition-colors"
        >
            <span className="select-none">{icon}</span>
            <span>{name}</span>
            <span className="animate-pulse text-white">&lt;</span>
        </div>
    );
};

interface CommandOptions {
    text: string;
    speed?: number;
}

interface FileSystemProps {
    currentPath: string;
    onCommand?: (cmd: CommandOptions) => void;
    onResume?: (textLength: number, speed: number) => void;
    onProjects?: (textLength: number, speed: number) => void;
}

export const FileSystem: FC<FileSystemProps> = ({
    currentPath,
    onCommand,
    onResume,
    onProjects,
}) => {
    return (
        <div className="text-[#39FF14] font-mono text-base">
            {currentPath === '~' && (
                <>
                    <FileSystemItem
                        type="directory"
                        name="projects/"
                        onClick={() => {
                            onCommand?.({ text: 'cd projects/', speed: 10 });
                            onProjects?.(10, 10);
                        }}
                    />
                    <FileSystemItem
                        type="file"
                        name="about.txt"
                        onClick={() =>
                            onCommand?.({ text: 'cat about.txt', speed: 10 })
                        }
                    />
                    <FileSystemItem
                        type="command"
                        name="resume"
                        onClick={() => {
                            onCommand?.({ text: 'resume log', speed: 10 });
                            onResume?.(10, 10);
                        }}
                    />
                </>
            )}
        </div>
    );
};
