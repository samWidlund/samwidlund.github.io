export interface ProjectLink {
    github?: string;
    live?: string;
    instagram?: string;
    tiktok?: string;
    tradera?: string;
}

export interface Project {
    name: string;
    category: string;
    description: string;
    tech: string[];
    links?: ProjectLink;
}

export const projects: Project[] = [
    {
        name: 'garderoben.w',
        category: 'social',
        description: 'resale of curated outdoor & designer garments',
        tech: ['instagram', 'tiktok', 'tradera'],
        links: {
            instagram: 'https://www.instagram.com/garderoben.w',
            tiktok: 'https://www.tiktok.com/@garderoben.w',
            tradera:
                'https://www.tradera.com/profile/items/5699279/garderobenw',
        },
    },
    {
        name: 'wordTool',
        category: 'python',
        description: 'thesaurus & dictionary api',
        tech: ['Shell', 'Python'],
        links: {
            github: 'https://github.com/samWidlund/wordTool',
        },
    },
    {
        name: 'todolistWeb',
        category: 'web',
        description: 'simple to-do list web application',
        tech: ['HTML', 'CSS', 'JavaScript'],
        links: {
            live: 'https://samwidlund.github.io/todolistWeb/',
            github: 'https://github.com/samWidlund/todolistWeb',
        },
    },
    {
        name: 'dotnetTodoList',
        category: 'dotnet',
        description: '.NET MAUI to-do list application',
        tech: ['.NET MAUI', 'C#'],
        links: {
            github: 'https://github.com/samWidlund/todolistDotnetMAUI',
        },
    },
    {
        name: 'jewelryShopTemplate',
        category: 'web',
        description: 'web jewelry shop template',
        tech: ['HTML', 'CSS', 'JavaScript'],
        links: {
            live: 'https://samwidlund.github.io/jewelryShopTemplate',
            github: 'https://github.com/samWidlund/jewelryShopTemplate',
        },
    },
    {
        name: 'calculatorWeb',
        category: 'web',
        description: 'web calculator',
        tech: ['HTML', 'CSS', 'JavaScript'],
        links: {
            live: 'https://samwidlund.github.io/calculatorWeb/',
            github: 'https://github.com/samWidlund/calculatorWeb',
        },
    },
    {
        name: 'garderobenwTemplate',
        category: 'web',
        description: 'web shop template for garderoben.w',
        tech: ['HTML', 'CSS', 'Bootstrap'],
        links: {
            live: 'https://samwidlund.github.io/garderobenwTemplate',
            github: 'https://github.com/samWidlund/garderobenwTemplate',
        },
    },
    {
        name: 'bussScheduleMonitor',
        category: 'other',
        description:
            'buss schedule monitor fetching live data from ul and gtfs API',
        tech: ['HTML', 'CSS', 'JavaScript', 'SQLite'],
        links: {
            github: 'https://github.com/NTIG-Uppsala/bus-schedule-remastered',
        },
    },
    {
        name: 'blaklinten',
        category: 'web',
        description: 'web florist blåklinten',
        tech: [
            'HTML',
            'CSS',
            'SCSS',
            'Bootstrap',
            'JavaScript',
            'TypeScript',
            'Python',
            'Selenium',
        ],
        links: {
            live: 'https://ntig-uppsala.github.io/blaklinten/',
            github: 'https://github.com/NTIG-Uppsala/blaklinten',
        },
    },
    {
        name: 'ntbBiluthyrning',
        category: 'web',
        description: 'web car rental booking system',
        tech: [
            'HTML',
            'CSS',
            'SCSS',
            'Bootstrap',
            'JavaScript',
            'Python',
            'Selenium',
        ],
        links: {
            live: 'https://ntig-uppsala.github.io/ntbbiluthyrning/',
            github: 'https://github.com/NTIG-Uppsala/ntbbiluthyrning',
        },
    },
    {
        name: 'mathChallengeAlarm',
        category: 'python',
        description: 'math challenge alarm clock with Raspberry Pi 3',
        tech: ['Python', 'Raspberry Pi 3'],
        links: {
            github: 'https://github.com/samWidlund/mathAlarmClock',
        },
    },
];
