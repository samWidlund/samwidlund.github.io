import type { FC } from 'react';

export const About: FC = () => {
    return (
        <div className="text-white font-mono text-sm min-h-screen flex items-center">
            <div className="w-full max-w-2xl">
                <div className="mb-4">
                    <span className="text-[#39FF14]">$</span> cat ABOUT.md
                </div>
                <div>
                    <h1># About</h1>

                    ## Intro < br/>
                    hello! I'm samuel Widlund. <br />
                    diploma in software engineering. based in
                    Uppsala, Sweden with a keen interest in software development,
                    testing and design. in addition, I spend my free time engaging in
                    ultrarunning aswell as reselling clothing. currently training for
                    tänndalen 100 miles.
                    <br />
                    <br />
                    ## Tech <br />
                    - JavaScript, TypeScript, React < br/>
                    - CSS, Tailwind, Bootstrap < br/>
                    - Python, C#, VBScript < br/>
                    - Bash, Fish, Powershell < br/>
                    - Windows, Linux < br/>
                    - Azure, Pipelines, Yaml < br/>
                    - SQL, SQLite < br/>
                    - Selenium, FlaUI < br/>
                    - Scrum, git < br/>

                    ## Links < br/>
                    Github < br/>
                    Linkedin < br/>
                    Mail < br/>

                </div>
            </div>
        </div>
    );
};
