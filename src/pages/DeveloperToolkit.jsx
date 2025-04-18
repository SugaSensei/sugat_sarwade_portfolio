import React from 'react'

function DeveloperToolkit() {

    const frontendTools = ["React.js", "vite", "Tailwind CSS", "Bootstrap 5"]
    const backendTools = ["Node.js", "Express.js", "Postman", "Axios", "JWT"]
    const debuggingAndTestingTools = ["React Developer Tools", "Redux DevTools", "Postman Console", "Chrome DevTools"]
    const codeAndGit = ["Visual Studio Code", "Prettier", "ESLint", "Git", "GitHub", "gh-pages / Netlify"]

    return (
        <div>
            <ul>
                <h1 className='text-3xl text-center font-bold'>Developer Toolkit</h1>
                <div className="flex flex-row">
                    {frontendTools.map(tools => (
                        <div key={tools} class="w-40 h-20 text-center m-2 bg-slate-500 rounded-2xl flex items-center justify-center text-amber-100">
                            {tools}
                        </div>
                    ))
                    }
                </div>


            </ul>
        </div>
        // </div>
    )
}

export default DeveloperToolkit