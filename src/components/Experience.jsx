import { motion } from 'framer-motion'
import React from 'react'
import Reveal from './Reveal'

const experiences = [
    {
        institution: 'JHSS Thandekkad',
        Period: '2016-17',
        description: 'Passed SSLC with a mark of 96%'
    },
    {
        institution: 'JHSS Thandekkad',
        Period: '2017-19',
        description: 'Passed +2 Biomaths'
    },
    {
        institution: 'Govt.Polytechnic college Perumbavoor',
        Period: '2019-22',
        description: 'Passed Diploma in Electronics and Communication with a cgpa of 8.31 '
    },
    {
        institution: 'Mar Athanasius college of Engineering Kothamangalam',
        Period: '2022-present',
        description: 'Currently pursuing Btech in electronics and Communication'
    },
]

const Experience = () => {
    return (
        <div className='p-8 max-w-[600px] mx-auto '>
            <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Education</h1>
            <motion.div
                className='grid gap-6 grid-cols-1 place-items-center'
                initial="hidden"
                animate="visible"
            >
                {experiences.map((experience, index) => (
                    <Reveal>
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1 }}
                            className='w-full max-w-[400px] min-w-[400px] border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10 '
                        >
                            <h2 className='text-gray-100 text-2xl font-semibold'>{experience.institution}</h2>
                            <p className='text-gray-300'>{experience.period}</p>
                            <p className='text-gray-400 mt-4'>{experience.description}</p>


                        </motion.div>
                    </Reveal>
                ))}

            </motion.div>


        </div>
    )
}

export default Experience