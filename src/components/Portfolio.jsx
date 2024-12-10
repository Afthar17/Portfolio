import React from 'react'
import todo from '../assets/todo.png'
import jobsearch from '../assets/jobsearch app.png'
import login from '../assets/loginpage.png'
import { AiOutlineGithub } from 'react-icons/ai'
import { div } from 'framer-motion/client'
import Reveal from './Reveal'

const projects = [
    {
        img: todo,
        title: 'project#1',
        description: 'UI for frontend development using react',
        links: {
            site: 'https://todos-app-react-js.netlify.app/',
            github: 'https://github.com/Afthar17/React-todo-app'
        }
    },
    {
        img: jobsearch,
        title: 'project#2',
        description: 'UI for frontend development using react ',
        links: {
            site: 'https://react-jobsearch.netlify.app',
            github: 'https://github.com/Afthar17/react-job-search-app'
        }
    },
    {
        img: login,
        title: 'project#3',
        description: 'UI for frontend development using HTML and CSS and JavaScript',
        links: {
            site: '',
            github: 'https://github.com/Afthar17/loginpage'
        }
    }
]

const Portfolio = () => {
    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20 ' id='portfolio'>
            <h2 className='text-center font-bold text-gray-200 text-3xl mb-8'>Portfolio</h2>
            {projects.map((project, index) => (
                <Reveal>
                    <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                        <div className='w-full md:w-1/2 p-4 '>
                            <img src={project.img} alt={project.title} className='w-full h-full object-cover rounded-lg shadow-lg' />
                        </div>
                        <div className='w-full md:w-1/2p-4 flex flex-col justify-center space-y-4'>
                            <h3 className='text-2xl font-semibold text-gray-200'>{project.title}</h3>
                            <p className='text-gray-300'>{project.description}</p>
                            <div className='flex space-x-4 '>
                                <a href={project.links.site} className='px-4 py-2 bg-slate-600 text-gray-200 hover:bg-slate-700  rounded-lg transition duration-300'>View site</a>
                                <a href={project.links.github} className='px-4 py-2 bg-slate-600  text-4xl rounded-lg hover:bg-slate-700 transition duration-300'><AiOutlineGithub /></a>
                            </div>
                        </div>
                    </div>

                </Reveal>
            ))}
        </div>
    )
}

export default Portfolio