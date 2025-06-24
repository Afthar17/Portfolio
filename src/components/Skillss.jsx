import { div, h3, image } from 'framer-motion/client'
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
import { SiTailwindcss, SiExpress, SiAltiumdesigner, SiSocketdotio, SiMui, SiRedux, SiPostman, SiJsonwebtokens, SiMqtt } from 'react-icons/si'
import Reveal from './Reveal';
import bg_frontend from '../assets/skills.jpg'
import { motion } from 'framer-motion'
import backend from '../assets/backend.jpg'
import zustand from '../assets/logo512.png'
import { TbBrandFramerMotion } from 'react-icons/tb';

const skills = [
    
    {
        category: 'Frontend',
        image: bg_frontend,
        technologies: [
            { name: 'HTML', icon: <DiHtml5 className='text-orange-600 text-4xl md:text-5xl' /> },
            { name: 'CSS', icon: <DiCss3 className='text-blue-600 text-4xl md:text-5xl' /> },
            { name: 'Tailwind', icon: <SiTailwindcss className='text-blue-600 text-4xl md:text-5xl' /> },
            { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-600 text-4xl md:text-5xl' /> },
            { name: 'React js', icon: <DiReact className='text-blue-500 text-4xl md:text-5xl' /> },
            {name:"Material UI",icon:<SiMui className="text-blue-600 text-4xl md:text-5xl" />},
            { name: 'Redux', icon: <SiRedux className="text-purple-600 text-4xl md:text-5xl" /> },
            {name:'Zustand',icon:<img src={zustand} className="text-gray-600 w-10 h-10 md:w-14 md:h-14 " />},
            { name: 'Git', icon: <DiGit className='text-orange-700 text-4xl md:text-5xl' /> },
            { name: 'Framer motion', icon: <TbBrandFramerMotion className="text-purple-600 text-4xl md:text-5xl" /> },
        ]

    },
    {
        category: 'Backend',
        image: backend,
        technologies: [
            { name: 'Node js', icon: <DiNodejsSmall className='text-green-500 text-4xl md:text-5xl' /> },
            { name: 'Express', icon: <SiExpress className='text-gray-500 text-4xl md:text-5xl' /> },
            { name: 'MongoDB', icon: <DiMongodb className='text-green-600 text-4xl md:text-5xl' /> },
            { name: 'Git', icon: <DiGit className='text-orange-700 text-4xl md:text-5xl' /> },
            { name: 'Socket.io', icon: <SiSocketdotio className='text-gray-500 text-4xl md:text-5xl' /> },
            { name: 'Postman', icon: <SiPostman className="text-orange-600 text-4xl md:text-5xl" /> },
            { name: 'JWT', icon: <SiJsonwebtokens className="text-pink-700 text-4xl md:text-5xl" /> },
            { name: 'MQTT', icon: <SiMqtt className="text-purple-700/50 text-4xl md:text-5xl" /> },
        ]
    },
    //  {
    //     category: 'other technologies',
    //     technologies: [
    //         { name: 'Altium', icon: <SiAltiumdesigner className='text-yellow-700' /> },
    //         { name: 'Python', icon: <DiPython className='text-yellow-400' /> }
    //     ]
    // }
]


const Skillss = () => {
    return (
        <div className='flex flex-col justify-cente w-full  items-center px-2 rounded-xl text-gray-200  md:py-8 ' id='skills'>
                <motion.h2 initial={{ scale: 0.5,opacity:0 }} whileInView={{ scale: 1,opacity:1}} transition={{smooth: true, duration: 1,delay:0.5 }} viewport={{ once: false }} className='font-bold text-5xl mb-8 text-gradient text-center font-sans'>My Skills Set</motion.h2>
                <p className='text-center mb-6 text-lg font-semibold text-gray-200 ml-2'>From frontend polish to backend logic — here’s what powers my development process. <a className=' 
              cursor-pointer ' href=""><span className='font-semibold text-gradient'>view my projects →</span></a></p>
                <div className='flex flex-col items-center justify-center gap-5 p-4 rounded-lg w-full mb-4 h-[100%]'>
                    {skills.map((skill) => (
                        <div key={skill.category} className='flex flex-col relative h-[450px] w-[90%] md:w-[80%] max-w-[1000px]  md:h-[500px] items-center justify-center backdrop-blur-3xl border border-slate-500  p-2 rounded-lg '>
                            <div className="flex w-full">
                                <motion.div 
                                    initial={{ x: '-100%',opacity:0 }}
                                    whileInView={{ x: 0,opacity:1}}
                                    transition={{ smooth: true, duration: 1,delay:0.5 }}
                                    viewport={{ once: true }}
                                    className='flex flex-col items-center justify-center w-full h-full gap-4 md:w-[50%]'>
                                    <h2 className='text-3xl text-gradient md:text-4xl font-bold'>{skill.category}</h2>
                                    <div className="grid grid-cols-2 gap-3">
                                        {skill.technologies.map((tech) => (
                                            <div key={tech.name} className='flex  items-center justify-start gap-3 mx-2'>
                                                {tech.icon}
                                                <p className='text-sm font-semibold'>{tech.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                                <motion.img
                                    initial={{ x: '100%',opacity:0 }}
                                    whileInView={{ x: 0,opacity:1}}
                                    transition={{smooth: true, duration: 1,delay:0.5 }}
                                    viewport={{ once: true }}
                                 src={skill.image} alt={skill.category} className='absolute right-2 top-2 hidden md:block md:w-[45%] h-[95%] object-cover' />
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Skillss