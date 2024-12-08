import React from 'react'
import meonly from '../assets/meonly.png'
import { TypeAnimation } from 'react-type-animation'
import ShinyEffect from './shinyEffect'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiReact } from 'react-icons/di'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='mt-24 max-w-[1200px] mx-auto relative'>
            <div className="grid md-grid-cols-2 place-items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}//inital state start with transparent and 50px away from ins final position 
                    whileInView={{ opacity: 1, y: 0 }}// it becomes viewable
                    viewport={{ once: true }} //Animation only works when the page is loaded
                    transition={{ duration: 1 }}//transition over 1 sec
                >

                    <TypeAnimation
                        sequence={["Fullstack Dev",
                            1000,
                            "ECE Engineer",
                            1000
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className='font-bold text-gray-400 text-xl md:text-5xl italic mb-4 '
                    />

                    <motion.p
                        initial={{ opacity: 0 }}//inital state start with transparent and 50px away from ins final position 
                        whileInView={{ opacity: 1 }}// it becomes viewable
                        viewport={{ once: true }} //Animation only works when the page is loaded
                        transition={{ duration: 1, delay: .5 }}//transition over 1 sec
                        className='text-gray-200 md-text-7xl text-5xl tracking-tight mb-4'
                    >
                        HEY, I AM <br />
                        <span className="text-purple-500">AFTHAR</span>
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}//inital state start with transparent and 50px away from ins final position 
                        whileInView={{ opacity: 1 }}// it becomes viewable
                        viewport={{ once: true }} //Animation only works when the page is loaded
                        transition={{ duration: 1, delay: 1 }}//transition over 1 sec
                        className='text-gray-200 md-text-2xl text-1g  mb-4 max-w-[300px] md:max-w-[500px]'
                    >
                        I am a passionate fullstack Developer and a student of MACE
                    </motion.p>

                </motion.div>
            </div>
        </div>
    )
}

export default Hero