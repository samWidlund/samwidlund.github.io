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
    image?: string;
    links?: ProjectLink;
}

export const projects: Project[] = [
    {
        name: 'garderoben.w',
        category: 'e_commerce',
        description: 'Resale of curated outdoor & designer garments via social media',
        tech: ['Instagram', 'TikTok', 'Tradera', 'Shopify'],
        image: '/images/garderobenwInstagram.jpg',
        links: {
            instagram: 'https://www.instagram.com/garderoben.w',
            tiktok: 'https://www.tiktok.com/@garderoben.w',
            tradera:
                'https://www.tradera.com/profile/items/5699279/garderobenw',
        },
    },
    {
        name: 'productScraper',
        category: 'python',
        description: 'Automated scraping of multiple marketplaces notifying via telegram bot',
        tech: ['Python', 'GitHub Actions', 'Telegram Bot API', 'Multiple Marketplace APIs', 'SQLite', 'Supabase'],
        image: '/images/productScraper.png',
        links: {
            github: 'https://github.com/samWidlund/productScraper',
        },
    },    
    {
        name: 'wordTool',
        category: 'python',
        description: 'Simple command-line linux tool for fetching word definitions and translations',
        tech: ['Shell', 'Python', 'Thesaurus & Dictionary API'],
        image: '/images/wordTool.png',
        links: {
            github: 'https://github.com/samWidlund/wordTool',
        },
    },
    {
        name: 'partyW',
        category: 'web',
        description: 'Vibe coded pre-party website with games',
        tech: ['React', 'Typescript', 'CSS', 'Vite', 'Groq & Web Audio API'],
        image: '/images/partyW.png',
        links: {
            live: 'https://samwidlund.github.io/partyw/',
            github: 'https://github.com/samWidlund/partyw',
        },
    },
    {
        name: 'gamlaupsalalivs',
        category: 'web',
        description: 'Website for local grocery store in Gamla Uppsala, Sweden (wip)',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: '/images/gamlaUpsalaLivs.png',
        links: {
            live: 'https://samwidlund.github.io/gamlaupsalalivs/',
            github: 'https://github.com/samWidlund/gamlaupsalalivs',
        },
    },
    {
        name: 'kalibreringskompaniet',
        category: 'web',
        description: 'Website for calibration company based in Uppsala, Sweden (wip)',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: '/images/kalibreringsKompaniet.png',
        links: {
            live: 'https://samwidlund.github.io/kalibreringskompaniet-template/',
            github: 'https://github.com/samWidlund/kalibreringskompaniet-template',
        },
    },
    {
        name: 'maratonPlan',
        category: 'web',
        description: 'Linux terminal inspired training plan viewer for csv files',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: '/images/maratonPlan.png',
        links: {
            live: 'https://samwidlund.github.io/maratonPlan/',
            github: 'https://github.com/samWidlund/maratonPlan',
        },
    },
    {
        name: 'todolistWeb',
        category: 'web',
        description: 'Simple to-do list web application',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: '/images/todolistWebProject.jpg',
        links: {
            live: 'https://samwidlund.github.io/todolistWeb/',
            github: 'https://github.com/samWidlund/todolistWeb',
        },
    },
    {
        name: 'dotnetTodoList',
        category: '.NET',
        description: 'Simple to-do list .NET MAUI application',
        tech: ['.NET MAUI', 'C#', 'Visual Studio'],
        image: '/images/dotnetTodoList.png',
        links: {
            github: 'https://github.com/samWidlund/todolistDotnetMAUI',
        },
    },
    {
        name: 'jewelryShopTemplate',
        category: 'web',
        description: 'Jewelry shop web template',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: '/images/jewelryShopTemplate.jpg',
        links: {
            live: 'https://samwidlund.github.io/jewelryShopTemplate',
            github: 'https://github.com/samWidlund/jewelryShopTemplate',
        },
    },
    {
        name: 'calculatorWeb',
        category: 'web',
        description: 'Simple web calculator',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: '/images/calculatorWebProject.jpg',
        links: {
            live: 'https://samwidlund.github.io/calculatorWeb/',
            github: 'https://github.com/samWidlund/calculatorWeb',
        },
    },
    {
        name: 'garderobenwTemplate',
        category: 'web',
        description: 'Old template for personal e-commerce garderoben.w',
        tech: ['HTML', 'CSS', 'Bootstrap'],
        image: '/images/garderobenwTemplate.jpg',
        links: {
            live: 'https://samwidlund.github.io/garderobenwTemplate',
            github: 'https://github.com/samWidlund/garderobenwTemplate',
        },
    },
    {
        name: 'bussScheduleMonitor',
        category: 'other',
        description: 'Buss schedule monitor fetching live data displayed in school corridor',
        tech: ['HTML', 'CSS', 'JavaScript', 'SQLite', 'UL & GTFS API', 'Raspberry Pi 3'],
        image: '/images/bussMonitoWebProject.jpg',
        links: {
            github: 'https://github.com/NTIG-Uppsala/bus-schedule-remastered',
        },
    },
    {
        name: 'blaklinten',
        category: 'web',
        description: 'Florist blåklinten',
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
        image: '/images/blaklintenWebProject.png',
        links: {
            live: 'https://ntig-uppsala.github.io/blaklinten/',
            github: 'https://github.com/NTIG-Uppsala/blaklinten',
        },
    },
    {
        name: 'ntbBiluthyrning',
        category: 'web',
        description: 'Car rental booking system',
        tech: [
            'HTML',
            'CSS',
            'SCSS',
            'Bootstrap',
            'JavaScript',
            'Python',
            'Selenium',
        ],
        image: '/images/ntbBiluthyrningWebProject.png',
        links: {
            live: 'https://ntig-uppsala.github.io/ntbbiluthyrning/',
            github: 'https://github.com/NTIG-Uppsala/ntbbiluthyrning',
        },
    },
    {
        name: 'mathChallengeAlarm',
        category: 'python',
        description: 'Math challenge alarm clock, Highschool project',
        tech: ['Python', 'Raspberry Pi 3'],
        image: '/images/gaAlarmClockProject.jpg',
        links: {
            github: 'https://github.com/samWidlund/mathAlarmClock',
        },
    },
];
