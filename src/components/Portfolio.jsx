import React, { useState } from 'react'
import todo from '../assets/todo.png'
import jobsearch from '../assets/jobsearch app.png'
import login from '../assets/loginpage.png'
import { AiOutlineGithub } from 'react-icons/ai'
import { div } from 'framer-motion/client'
import Reveal from './Reveal'
import goalSetter from '../assets/goalSetter.png'

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
    },
    {
        img: goalSetter,
        title: 'project#4',
        description: 'MERN stack application for goal setting',
        links: {
            site: '',
            github: 'https://github.com/Afthar17/MERN-App'
        }
    }
]
const Portfolio = () => {
    const [selected, setSelected] = useState(0)
    return (
        <div className="flex flex-col items-center justify-center w-full my-5">
            <div className="flex flex-col w-full items-center justify-center">
                    <h2 className='text-5xl font-bold text-gradient text-center font-sans mb-2'>Projects</h2>
                    <div className='max-w-[1000px] h-[600px] w-full m-auto py-16 px-4 relative'>
                        <div style={{backgroundImage: `url(${projects[selected].img})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'/>
                    </div>
            </div>
        </div>
    )
}

export default Portfolio