import Resume from '../assets/Resume.pdf'
import { TypeAnimation } from 'react-type-animation'
import ShinyEffect from './ShinyEffect'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, } from 'react-icons/ai'
import { DiCss3, DiHtml5, DiJavascript1, DiMaterializecss, DiMongodb, DiNodejsSmall, DiReact } from 'react-icons/di'
import { motion } from 'framer-motion'
import { SiMui, SiPostman, SiRedux, SiSocketdotio, SiTailwindcss } from 'react-icons/si'
import zustand from '../assets/logo512.png'
import me from '../assets/me.png'

const Hero = () => {
    return (
        <div className='mt-24 mb-16 max-w-[1200px] mx-auto relative'>
            <div className=" place-items-start px-4 gap-3 grid grid-cols-1 md:grid-cols-2 ">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}//inital state start with transparent and 50px away from ins final position 
                    whileInView={{ opacity: 1, y: 0 }}// it becomes viewable
                    viewport={{ once: true }} //Animation only works when the page is loaded
                    transition={{ duration: 1 }}//transition over 1 sec
                    className='flex flex-col gap-4'
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
                        <span className='text-gradient font-semibold'>AFTHAR</span>
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}//inital state start with transparent and 50px away from ins final position 
                        whileInView={{ opacity: 1 }}// it becomes viewable
                        viewport={{ once: true }} //Animation only works when the page is loaded
                        transition={{ duration: 1, delay: 1 }}//transition over 1 sec
                        className='text-gray-200 text-sm leading-7 md:text-lg  mb-4 max-w-[300px] md:max-w-[600px]'
                    >
                        I'm an ECE graduate from MACE with a strong passion for web development. 
                        I build responsive web apps using the MERN stack, with a focus on React.js.
                        I enjoy creating clean, user-friendly interfaces and learning new technologies to improve my skills.
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
                <div className='relative'>
                    <motion.img
                        src={me}
                        className='z-10  mb-2'
                        initial={{ opacity: 0, scale: .8 }}//inital state start with transparent  
                        whileInView={{ opacity: 1, scale: 1 }}// it becomes viewable
                        viewport={{ once: true }} //Animation only works when the page is loaded
                        transition={{ duration: 1 }}//transition over 1 sec
                    />
                    <div className='absolute inset-0 hidden md:block'>
                        <ShinyEffect left={0} top={0} size={3000} />
                    </div>
                </div>
                <div className='absolute inset-0 hidden md:block'>
                    <ShinyEffect left={10} top={0} size={1000} />
                </div>

            </div>
            <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 2 }}
                    className='flex flex-col flex-wrap justify-center items-center gap-4 mt-8 mb-3'
                >
                    <p className='text-gray-400 text-lg md:text-2xl'>My Tech Stack</p>
                    <div className="overflow-hidden relative flex items-center justify-center w-[80%] md:w-[50%] py-4 bg-transparent">
                        <div className="animate-scroll flex gap-8 items-center whitespace-nowrap">
                            {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="flex flex-row gap-8 items-center justify-center"
                            >
                                <DiHtml5 className="text-orange-600 text-4xl md:text-6xl" />
                                <DiCss3 className="text-blue-600 text-4xl md:text-6xl" />
                                <DiJavascript1 className="text-yellow-600 text-4xl md:text-6xl" />
                                <DiReact className="text-blue-500 text-4xl md:text-6xl" />
                                <DiNodejsSmall className="text-green-500 text-4xl md:text-6xl" />
                                <DiMongodb className="text-green-500 text-4xl md:text-6xl" />
                                <SiSocketdotio className="text-gray-600 text-4xl md:text-6xl" />
                                <SiRedux className="text-purple-600 text-4xl md:text-6xl" />
                                <SiTailwindcss className="text-cyan-400 text-4xl md:text-6xl" />
                                <SiPostman className="text-orange-600 text-4xl md:text-6xl" />
                                <img src={zustand} className="text-gray-600 w-10 h-10 md:w-14 md:h-14 " />
                                <SiMui className="text-blue-600 text-4xl md:text-6xl" />
                                <AiOutlineGithub className="text-gray-600 text-4xl md:text-6xl" />
                            </div>
                            ))}
                        </div>
                        </div>
                </motion.div>
        </div>
    )
}

export default Hero