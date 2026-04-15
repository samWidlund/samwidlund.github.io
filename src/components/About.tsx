import type { FC } from 'react';

export const About: FC = () => {
    return (
        <div className="text-white font-mono text-sm min-h-screen flex lg:items-center">
            <div className="w-full max-w-2xl">
                <div className="my-6 text-lg text-[#39FF14] font-bold">
                ═══ ABOUT ═══
                </div>
                <div className="mb-4">
                    <span className="text-[#39FF14]">$</span> cat ABOUT.md
                </div>
                <div>
                    <p># Intro</p>
                    <br />
                    -------------------------- <br />
                    hello! I'm samuel Widlund. <br />
                    -------------------------- <br />
                    <br />
                    <p>Based in
                    Uppsala, Sweden with a keen interest in web development,
                    software and design. In addition, I spend my free time engaging in
                    ultrarunning aswell as reselling clothing. Currently training for
                    tänndalen 100 miles. </p>
                    <br />
                    <p>## Tech</p>
                    <p>- JavaScript, TypeScript, React </p>
                    <p>- CSS, Tailwind, Bootstrap </p>
                    <p>- Python, C#, VBScript </p>
                    <p>- Bash, Fish, Powershell </p>
                    <p>- Windows, Linux </p>
                    <p>- Azure, Pipelines, Yaml </p>
                    <p>- SQL, SQLite </p>
                    <p>- Selenium, FlaUI </p>
                    <p>- Scrum, git </p>
                    <br />
                    <p>## Links</p>
                    <p><a href="https://github.com/samWidlund" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:underline'>Github</a></p>
                    <p><a href="https://www.linkedin.com/in/samuel-widlund-388202290/" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:underline'>Linkedin</a></p>
                    <p><a href="mailto:sam.wid415@gmail.com" className='text-blue-400 hover:underline'>Mail</a></p>
                    <p><a href="https://www.strava.com/athletes/125602388/" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:underline'>Strava</a></p>
                </div>
            </div>
        </div>
    );
};
