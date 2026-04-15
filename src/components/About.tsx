import type { FC } from 'react';

export const About: FC = () => {
    return (
        <div className="text-white font-mono text-sm min-h-screen flex lg:items-center">
            <div className="w-full max-w-2xl">
                <div className="mb-4">
                    <span className="text-[#39FF14]">$</span> cat ABOUT.md
                </div>
                <div>
                    -------------------------- <br />
                    hello! I'm samuel Widlund. <br />
                    -------------------------- <br />
                    <br />
                    <p># Intro</p>
                    <p>Based in
                    Uppsala, Sweden with a keen interest in web development,
                    software and design. In addition, I spend my free time engaging in
                    ultrarunning aswell as reselling clothing. Currently training for
                    tänndalen 100 miles. </p>
                    <br />
                    <p>## Tech</p>
                    <p>- [x] JavaScript, TypeScript, React </p>
                    <p>- [x] CSS, Tailwind, Bootstrap </p>
                    <p>- [x] Python, C#, VBScript </p>
                    <p>- [x] Bash, Fish, Powershell </p>
                    <p>- [x] Windows, Linux </p>
                    <p>- [x] Azure, Pipelines, Yaml </p>
                    <p>- [x] SQL, SQLite </p>
                    <p>- [x] Selenium, FlaUI </p>
                    <p>- [x] Scrum, git </p>
                    <br />
                    <p>## Links</p>
                    <a href="https://github.com/samWidlund" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:underline'>Github</a>
                    , <a href="https://www.linkedin.com/in/samuel-widlund-388202290/" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:underline'>Linkedin</a>
                    , <a href="mailto:sam.wid415@gmail.com" className='text-blue-400 hover:underline'>Mail</a>
                    , <a href="https://www.strava.com/athletes/125602388/" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:underline'>Strava</a>
                </div>
            </div>
        </div>
    );
};
