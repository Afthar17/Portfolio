import { div, h3 } from 'framer-motion/client'
import React from 'react'
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiReact,
    DiGit,
    DiNodejsSmall,
    DiMongodb,
    DiPython
} from 'react-icons/di'
import { SiTailwindcss, SiExpress, SiAltiumdesigner } from 'react-icons/si'
import Reveal from './Reveal'

const skills = [
    {
        category: 'frontend',
        technologies: [
            { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
            { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
            { name: 'Tailwind', icon: <SiTailwindcss className='text-blue-600' /> },
            { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-600' /> },
            { name: 'React js', icon: <DiReact className='text-blue-500' /> }
        ]

    },
    {
        category: 'Fullstack',
        technologies: [
            { name: 'Node js', icon: <DiNodejsSmall className='text-green-500' /> },
            { name: 'Express', icon: <SiExpress className='text-gray-500' /> },
            { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
            { name: 'Git', icon: <DiGit className='text-orange-700' /> },
            { name: 'React js', icon: <DiReact className='text-blue-500' /> }
        ]

    }, {
        category: 'other technologies',
        technologies: [
            { name: 'Altium', icon: <SiAltiumdesigner className='text-yellow-700' /> },
            { name: 'Python', icon: <DiPython className='text-yellow-400' /> }
        ]
    }
]

const Skillss = () => {
    return (
        <div className='flex flex-col justify-center items-center px-4 text-gray-200  md:py-1 ' id='skills'>
            <Reveal>
                <h2 className='font-bold text-5xl mb-8 text-gradient text-center font-sans'>My Skills Set</h2>
                <p className='text-center mb-6 text-lg font-semibold text-gray-400'>From frontend polish to backend logic — here’s what powers my development process. <a className=' 
              cursor-pointer ' href=""><span className='font-semibold text-gradient'>view my projects →</span></a></p>
                <div className='flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-8
                max-w-[1000px] mx-auto'>
                    {skills.map((skill, index) => (
                        <div key={index} id='skills' className='border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2'>
                            <h3 className='text-xl font-bold mb-4 text-center'>{skill.category}</h3>
                            <div className=' grid grid-cols-2 gap-4'>
                                {skill.technologies.map((tech, idx) => (
                                    <div key={idx} className='flex item-center space-x-2'>
                                        <span className='text-2xl'>{tech.icon}</span>
                                        <span>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Reveal>
        </div>
    )
}

export default Skillss