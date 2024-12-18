import React from 'react'
import Resume from '../assets/Resume.pdf'
import { TypeAnimation } from 'react-type-animation'
import ShinyEffect from './ShinyEffect'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, } from 'react-icons/ai'
import { DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiReact } from 'react-icons/di'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='mt-24 max-w-[1200px] mx-auto relative'>
            <div className=" place-items-start px-4 gap-8 grid md:grid-cols-1 ">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}//inital state start with transparent and 50px away from ins final position 
                    whileInView={{ opacity: 1, y: 0 }}// it becomes viewable
                    viewport={{ once: true }} //Animation only works when the page is loaded
                    transition={{ duration: 1 }}//transition over 1 sec
                >

                    <TypeAnimation
                        sequence={["Fullstack Dev",
                            1000,
                            "EC Engineer",
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
                        <span >AFTHAR</span>
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
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}//inital state start with transparent and 50px away from ins final position 
                        whileInView={{ opacity: 1, y: 0 }}// it becomes viewable
                        viewport={{ once: true }} //Animation only works when the page is loaded
                        transition={{ duration: 1, delay: 1.5 }}//transition over 1 sec
                        className='flex flex-row items-center gap-6 my-4 md:mb-0'
                    >
                        <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0,0,0,0.3" }} className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                         border-purple-400 rounded-xl'><a href={Resume} download="Resume.pdf">
                                Download CV
                            </a>

                        </motion.button>
                        <div className=' flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20'>
                            <motion.a whileHover={{ scale: 1.2 }} href='https://github.com/Afthar17'>
                                <AiOutlineGithub />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href='https://www.linkedin.com/in/afthar-n-n-665a29314/'>
                                <AiOutlineLinkedin />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href='https://www.instagram.com/_a_f_t_h_a_r_17/?hl=en'>
                                <AiOutlineInstagram />
                            </motion.a>
                        </div>
                    </motion.div>

                </motion.div>

                {/* <motion.img
                    src={meonly}
                    className='w-[200px] md:w-[250px] ml-4'
                    initial={{ opacity: 0, scale: .8 }}//inital state start with transparent  
                    whileInView={{ opacity: 1, scale: 1 }}// it becomes viewable
                    viewport={{ once: true }} //Animation only works when the page is loaded
                    transition={{ duration: 1 }}//transition over 1 sec
                /> */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 2 }}
                    className='flex flex-wrap justify-center items-center gap-4 mt-8 mb-3'
                >
                    <p className='text-gray-400 text-lg md:text-2xl'>My Tech Stack</p>
                    <DiHtml5 className='text-orange-600 text-4xl md:text-6xl' />
                    <DiCss3 className='text-blue-600 text-4xl md:text-6xl' />
                    <DiJavascript1 className='text-yellow-600 text-4xl md:text-6xl' />
                    <DiReact className='text-blue-500 text-4xl md:text-6xl' />
                    <DiNodejsSmall className='text-green-500 text-4xl md:text-6xl' />
                </motion.div>
                <div className='absolute inset-0 hidden md:block'>
                    <ShinyEffect left={0} top={0} size={3000} />
                </div>

            </div>
        </div>
    )
}

export default Hero