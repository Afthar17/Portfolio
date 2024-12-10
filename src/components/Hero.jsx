import React from 'react'
import meonly from '../assets/meonly.png'
import { TypeAnimation } from 'react-type-animation'
import ShinyEffect from './shinyEffect'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, } from 'react-icons/ai'
import { DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiReact } from 'react-icons/di'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='mt-24 max-w-[1200px] mx-auto relative'>
            <div className=" place-items-center gap-8 grid md:grid-cols-2">
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
                         border-purple-400 rounded-xl'  >
                            Download CV
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

                <motion.img
                    src={meonly}
                    className='w-[200px] md:w-[350px] '
                    initial={{ opacity: 0, scale: .8 }}//inital state start with transparent  
                    whileInView={{ opacity: 1, scale: 1 }}// it becomes viewable
                    viewport={{ once: true }} //Animation only works when the page is loaded
                    transition={{ duration: 1 }}//transition over 1 sec
                />
                <motion.div
                    initial={{ opacity: 0, }}//inital state start with transparent  
                    whileInView={{ opacity: 1 }}// it becomes viewable
                    viewport={{ once: true }} //Animation only works when the page is loaded
                    transition={{ duration: 1, delay: 2 }}//transition over 1 sec
                    className='flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center  py-24 '
                >
                    <p className='text-gray-400 mr-6'>My Tech stack</p>
                    <DiHtml5 className='text-orange-600 mx-2' />
                    <DiCss3 className='text-blue-600 mx-2' />
                    <DiJavascript1 className='text-yellow-600 mx-2' />
                    <DiReact className='text-blue-500 mx-2' />
                    <DiNodejsSmall className='text-green-500 mx-2' />

                </motion.div>
                <div className='absolute inset-0 hidden md:block'>
                    <ShinyEffect left={0} top={0} size={1400} />
                </div>

            </div>
        </div>
    )
}

export default Hero