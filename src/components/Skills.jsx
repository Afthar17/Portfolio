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
            { name: 'Express', icon: <SiExpress className='text-gray-800' /> },
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

const Skills = () => {
    return (
        <div>skills</div>
    )
}

export default Skills