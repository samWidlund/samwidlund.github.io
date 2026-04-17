import { useState, type FC } from 'react';
import { projects, type Project } from '../data/projects';

interface CategoryFolderProps {
    category: string;
    projects: Project[];
    isOpen: boolean;
    isLast: boolean;
    parentIsLast: boolean;
    openProjects: Set<string>;
    onToggleCategory: () => void;
    onToggleProject: (name: string) => void;
}

const CategoryFolder: FC<CategoryFolderProps> = ({
    category,
    projects: categoryProjects,
    isOpen,
    isLast,
    parentIsLast,
    openProjects,
    onToggleCategory,
    onToggleProject,
}) => {
    const getPrefix = () => {
        const prefix = parentIsLast ? '    ' : '│   ';
        return prefix + (isLast ? '└── ' : '├── ');
    };

    return (
        <div>
            <div
                onClick={onToggleCategory}
                className="flex gap-0 hover:bg-[rgba(57,255,20,0.1)] cursor-pointer p-1 transition-colors"
            >
                <span className="select-none shrink-0 text-gray-500">
                    {getPrefix()}
                </span>
                <span className="select-none shrink-0 text-yellow-400">
                    {isOpen ? '[-] ' : '[+] '}
                </span>
                <span className="text-yellow-400">{category}/</span>
            </div>

            {isOpen && (
                <div className="ml-4">
                    {categoryProjects.map((project, index) => (
                        <ProjectFolder
                            key={project.name}
                            project={project}
                            isOpen={openProjects.has(project.name)}
                            onToggle={() => onToggleProject(project.name)}
                            isLast={index === categoryProjects.length - 1}
                            categoryIsLast={isLast}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

interface ProjectFolderProps {
    project: Project;
    isOpen: boolean;
    isLast: boolean;
    categoryIsLast: boolean;
    onToggle: () => void;
}

const ProjectFolder: FC<ProjectFolderProps> = ({
    project,
    isOpen,
    isLast,
    onToggle,
}) => {
    const getPrefix = () => {
        return isLast ? '└── ' : '├── ';
    };

    return (
        <div>
            <div
                onClick={onToggle}
                className="flex gap-0 hover:bg-[rgba(57,255,20,0.1)] cursor-pointer p-1 transition-colors break-all"
            >
                <span className="select-none shrink-0 text-gray-500">
                    {getPrefix()}
                </span>
                <span className="select-none shrink-0 text-purple-400">
                    {isOpen ? '[-] ' : '[+] '}
                </span>
                <span className="text-purple-400">{project.name}/</span>
            </div>

            {isOpen && (
                <div className="ml-4">
                    <div className="flex gap-0 p-1 text-gray-400">
                        <span className="select-none shrink-0">├── </span>
                        <span>README.md</span>
                    </div>
                    <div className="flex gap-0 p-1 text-gray-400 ml-4">
                        <span className="select-none shrink-0">└── </span>
                        <span className="text-gray-300">{project.description}</span>
                    </div>

                    <div className="flex gap-0 p-1 text-gray-400">
                        <span className="select-none shrink-0">├── </span>
                        <span>stack/</span>
                    </div>
                    <div className="flex gap-0 p-1">
                        <span className="select-none shrink-0 ml-4 text-gray-400">└── </span>
                        <span className="text-white"> {project.tech.join(', ')}</span>
                    </div>

                    {project.links && (
                        <>
                            <div className="flex gap-0 p-1 text-gray-400">
                                <span className="select-none shrink-0">├── </span>
                                <span>links/</span>
                            </div>
                            <div className="ml-4 flex flex-col gap-1 break-all">
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-0 text-blue-400 hover:underline"
                                    >                            
                                        <span className="select-none shrink-0 ml-6"></span>
                                        <span>github</span>
                                    </a>
                                )}
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-0 text-blue-400 hover:underline"
                                    >
                                        <span className="select-none shrink-0 ml-6"></span>
                                        <span>web</span>
                                    </a>
                                )}
                                {project.links.instagram && (
                                    <a
                                        href={project.links.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-0 text-blue-400 hover:underline"
                                    >
                                        <span className="select-none shrink-0">    </span>
                                        <span>instagram</span>
                                    </a>
                                )}
                                {project.links.tiktok && (
                                    <a
                                        href={project.links.tiktok}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-0 text-blue-400 hover:underline"
                                    >
                                        <span className="select-none shrink-0">    </span>
                                        <span>tiktok</span>
                                    </a>
                                )}
                                {project.links.tradera && (
                                    <a
                                        href={project.links.tradera}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-0 text-blue-400 hover:underline"
                                    >
                                        <span className="select-none shrink-0">    </span>
                                        <span>tradera</span>
                                    </a>
                                )}
                            </div>
                        </>
                    )}

                    {project.image && (
                        <>
                            <div className="flex gap-0 p-1 text-gray-400">
                                <span className="select-none shrink-0">└── </span>
                                <span>img/</span>
                            </div>
                            <div className="ml-10 mt-1">
                                <a
                                    href={project.image}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="max-w-[200px] max-h-[150px] border border-gray-600 rounded hover:border-[#39FF14] transition-colors"
                                    />
                                </a>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export const Projects: FC = () => {
    const sortedCategories = ['social', 'web', 'python', 'dotnet', 'other'];
    const [openCategories, setOpenCategories] = useState<Set<string>>(
        new Set(sortedCategories)
    );
    const [openProjects, setOpenProjects] = useState<Set<string>>(new Set());

    const toggleCategory = (category: string) => {
        setOpenCategories(prev => {
            const next = new Set(prev);
            if (next.has(category)) {
                next.delete(category);
            } else {
                next.add(category);
            }
            return next;
        });
    };

    const toggleProject = (name: string) => {
        setOpenProjects(prev => {
            const next = new Set(prev);
            if (next.has(name)) {
                next.delete(name);
            } else {
                next.clear();
                next.add(name);
            }
            return next;
        });
    };

    const groupedProjects = projects.reduce((acc, project) => {
        if (!acc[project.category]) {
            acc[project.category] = [];
        }
        acc[project.category].push(project);
        return acc;
    }, {} as Record<string, Project[]>);

    return (
        <div id="projects" className="text-white font-mono text-sm min-h-screen">

                <div className="mb-4">
                    <span className="text-[#39FF14]">$</span> tree -L 2 projects/
                </div>
                <div className="mt-2">
                    <div className="flex gap-0 p-1">
                        <span className="text-yellow-400">projects/</span>
                    </div>
                    <div className="ml-4">
                        {sortedCategories.map((category, index) => (
                            <CategoryFolder
                                key={category}
                                category={category}
                                projects={groupedProjects[category]}
                                isOpen={openCategories.has(category)}
                                isLast={index === sortedCategories.length - 1}
                                parentIsLast={true}
                                openProjects={openProjects}
                                onToggleCategory={() => toggleCategory(category)}
                                onToggleProject={toggleProject}
                            />
                        ))}
                    </div>
                </div>
        </div>
    );
};