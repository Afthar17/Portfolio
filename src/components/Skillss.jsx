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
        position: 300,
        info_position: -100,
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
        position: -300,
        info_position: 100,
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
            <Reveal>
                <h2 className='font-bold text-5xl mb-8 text-gradient text-center font-sans'>My Skills Set</h2>
                <p className='text-center mb-6 text-lg font-semibold text-gray-200 ml-2'>From frontend polish to backend logic — here’s what powers my development process. <a className=' 
              cursor-pointer ' href=""><span className='font-semibold text-gradient'>view my projects →</span></a></p>
                <div className='flex flex-col items-center justify-center gap-5 p-4 rounded-lg w-full mb-4 h-[100%]'>
                    {skills.map((skill) => (
                        <div key={skill.category} className='flex flex-col h-[450px] w-[90%] md:ml-10 ml-0 lg:ml-0 lg:w-[80%] md:h-[500px] relative  backdrop-blur-3xl border border-slate-500  p-2 rounded-lg '>
                            <div className="flex w-full">
                                <motion.div 
                                    initial={{ opacity: 0, x: skill.info_position }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1,delay:.5 }}
                                    className={`${skill.category === 'Backend' ? 'hidden' : 'flex'}  flex-col items-center justify-center text-center mt-4`}>
                                    <h1 className='font-bold text-2xl text-center'>{skill.category}</h1>
                                    <div className="grid grid-cols-2 gap-2  mt-6">
                                        {skill.technologies.map((tech, index) => (
                                            <div key={index} className="flex items-center ">
                                                {tech.icon}
                                                <p className="ml-1 font-bold text-base text-gradient text-wrap md:whitespace-nowrap">{tech.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                                <motion.img
                                    initial={{ opacity: 0, x: skill.position }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1,delay:.5 }}
                                    src={skill.image} alt={skill.category} className={`hidden md:flex w-[46%] absolute ${skill.category === 'Frontend' ? 'right-3' : 'left-3'} object-cover h-[95%] `}/>
                                <motion.div 
                                    initial={{ opacity: 0, x: skill.info_position }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1,delay:.5 }}
                                    className={`${skill.category === 'Backend' ? 'flex' : 'hidden'} absolute right-1 md:right-12 flex-col items-end justify-end text-center mt-4`}>
                                    <h1 className='font-bold text-2xl absolute right-20 top-0'>{skill.category}</h1>
                                    <div className="grid grid-cols-2 gap-4  mt-12">
                                        {skill.technologies.map((tech, index) => (
                                            <div key={index} className="flex items-center ">
                                                {tech.icon}
                                                <p className="ml-2 font-bold text-base text-gradient whitespace-nowrap">{tech.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </Reveal>
        </div>
    )
}

export default Skillss