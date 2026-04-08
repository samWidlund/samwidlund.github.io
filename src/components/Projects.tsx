import { useState, type FC } from 'react';
import { projects, type Project } from '../data/projects';

interface ProjectFolderProps {
    project: Project;
    isOpen: boolean;
    onToggle: () => void;
}

const ProjectFolder: FC<ProjectFolderProps> = ({
    project,
    isOpen,
    onToggle,
}) => {
    const folderIcon = isOpen ? '[-]' : '[+]';
    const dirIcon = '[~]';

    return (
        <div>
            <div
                onClick={onToggle}
                className="flex gap-2 hover:bg-[rgba(57,255,20,0.1)] cursor-pointer p-1 transition-colors break-all"
            >
                <span className="select-none shrink-0">{folderIcon}</span>
                <span>{project.name}/</span>
            </div>

            {isOpen && (
                <div className="ml-4">
                    <div className="flex gap-2 p-1 text-gray-400">
                        <span className="select-none">{dirIcon}</span>
                        <span>ABOUT.md</span>
                    </div>
                    <div className="ml-6 p-1 text-gray-400">
                        <span className="text-white">
                            {project.description}
                        </span>
                    </div>

                    <div className="flex gap-2 p-1 text-gray-400">
                        <span className="select-none">{dirIcon}</span>
                        <span>stack/</span>
                    </div>
                    <div className="ml-6 p-1">
                        {project.tech.map((t, i) => (
                            <span key={i} className="text-cyan-400">
                                {t}
                                {i < project.tech.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </div>

                    {project.links && (
                        <>
                            <div className="flex gap-2 p-1 text-gray-400">
                                <span className="select-none">{dirIcon}</span>
                                <span>links/</span>
                            </div>
                            <div className="ml-6 p-1 flex flex-col gap-1 break-all">
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:underline"
                                    >
                                        github:{' '}
                                        {project.links.github.replace(
                                            'https://github.com/',
                                            ''
                                        )}
                                    </a>
                                )}
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:underline"
                                    >
                                        live:{' '}
                                        {project.links.live
                                            .replace('https://', '')
                                            .replace('http://', '')}
                                    </a>
                                )}
                                {project.links.instagram && (
                                    <a
                                        href={project.links.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:underline"
                                    >
                                        instagram
                                    </a>
                                )}
                                {project.links.tiktok && (
                                    <a
                                        href={project.links.tiktok}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:underline"
                                    >
                                        tiktok
                                    </a>
                                )}
                                {project.links.tradera && (
                                    <a
                                        href={project.links.tradera}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:underline"
                                    >
                                        tradera
                                    </a>
                                )}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export const Projects: FC = () => {
    const [openProjects, setOpenProjects] = useState<Set<string>>(new Set());

    const toggleProject = (name: string) => {
        setOpenProjects(prev => {
            const next = new Set(prev);
            if (next.has(name)) {
                next.delete(name);
            } else {
                next.add(name);
            }
            return next;
        });
    };

    const sortedProjects = [...projects].sort((a, b) => {
        if (a.name === 'garderoben.w') return -1;
        if (b.name === 'garderoben.w') return 1;
        return 0;
    });

    return (
        <div id="projects" className="text-white font-mono text-sm">
            <div className="mb-1">
                <span className="text-[#39FF14]">$</span> ls projects/
            </div>
            <div className="my-6 text-lg text-[#39FF14] font-bold">
                ═══ PROJECTS ═══
            </div>
            <div className="mt-2">
                {sortedProjects.map(project => (
                    <ProjectFolder
                        key={project.name}
                        project={project}
                        isOpen={openProjects.has(project.name)}
                        onToggle={() => toggleProject(project.name)}
                    />
                ))}
            </div>
        </div>
    );
};
