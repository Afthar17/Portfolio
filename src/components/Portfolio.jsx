import { useEffect, useState } from 'react'
import todo from '../assets/todo.png'
import jobsearch from '../assets/jobsearch app.png'
import login from '../assets/loginpage.png'
import goalSetter from '../assets/goalSetter.png'
import chat from '../assets/chat.png'
import chatProfile from '../assets/chat_profile.png'
import chatLogin from '../assets/chat_login.png'
import ecommerceHome from '../assets/ecommerce-home.png'
import ecommerceFeatured from '../assets/ecommerce_featured.png'
import ecommerceAdmin from '../assets/ecommerce-admin.png'
import ecommerceLogin from '../assets/ecommerce_login.png'
import ecommerceCart from '../assets/ecommerce_cart.png'
import {motion} from 'framer-motion'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa6'
import { BiGlobe } from 'react-icons/bi'

const projects = [
    {
        img: {ecommerceHome,ecommerceFeatured,ecommerceAdmin,ecommerceLogin,ecommerceCart},
        title: 'Ecommerce website',
        description: 'Developed an ecommerce store with admin panel and jwt authentication using MERN stack',
        links: {
            site: 'https://ecommerce-store-pnkp.onrender.com/',
            github: 'https://github.com/Afthar17/Ecommerce-Store'
        }
    },
    {
        img: {chat,chatProfile,chatLogin},
        title: 'Real time chat app',
        description: 'Developed an real time chat app with socket.io and jwt authentication using MERN stack',
        links: {
            site: 'https://chat-app-uz18.onrender.com/login',
            github: 'https://github.com/Afthar17/Chat-app'
        }
    },
    {
        img: {todo},
        title: 'To-do app',
        description: 'UI for frontend development using react',
        links: {
            site: 'https://todos-app-react-js.netlify.app/',
            github: 'https://github.com/Afthar17/React-todo-app'
        }
    },{
        img: {goalSetter},
        title: 'Goal Setter',
        description: 'MERN stack application for goal setting',
        links: {
            site: '',
            github: 'https://github.com/Afthar17/MERN-App'
        }
    },
    {
        img: {jobsearch},
        title: 'Job search app',
        description: 'UI for frontend development using react ',
        links: {
            site: 'https://react-jobsearch.netlify.app',
            github: 'https://github.com/Afthar17/react-job-search-app'
        }
    },
    {
        img: {login},
        title: 'Login UI',
        description: 'UI for frontend development using HTML and CSS and JavaScript',
        links: {
            site: '',
            github: 'https://github.com/Afthar17/loginpage'
        }
    },
    
    
]
const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // Auto-rotate through images of the current project
    useEffect(() => {
        const currentProjectImages = Object.values(projects[selectedProject].img);
        if (currentProjectImages.length <= 1) return;
        
        const interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % currentProjectImages.length);
        }, 5000); // Change image every 5 seconds
            
        return () => clearInterval(interval);
    }, [selectedProject]);
    const nextProject = () => {
        setSelectedProject(prev => (prev + 1) % projects.length);
        setCurrentImageIndex(0); // Reset to first image when changing projects
    };

    const prevProject = () => {
        setSelectedProject(prev => (prev - 1 + projects.length) % projects.length);
        setCurrentImageIndex(0); // Reset to first image when changing projects
    };
    const currentProject = projects[selectedProject];
    const projectImages = Object.values(currentProject.img);
    const images = projects.map((project) => Object.values(project.img));

    return (
        <div className="flex flex-col items-center justify-center w-full my-2 md:my-10">
            <div className="flex flex-col w-full items-center justify-center">
                    <h2 className='text-5xl font-bold text-gradient text-center font-sans mb-0 md:mb-2'>Projects</h2>
                    <div className="flex justify-between w-[90%] md:w-[64%] ite">
                        <div className="flex flex-col">
                            <h3 className='text-2xl font-bold text-white text-start font-sans'>{currentProject.title}</h3>
                            <h5 className='text-sm font-semibold text-gray-400 text-start font-sans'>{currentProject.description}</h5>
                        </div>
                        <div className="flex gap-2 flex-col md:flex-row">
                            <motion.button className='text-purple-500 font-semibold p-2 w-24 md:w-28 flex items-center gap-2 border-2 border-purple-500 rounded-full' whileHover={{scale: 1.1}}
                                onClick={() => window.open(currentProject.links.github, '_blank')}>
                                <FaGithub className='' size={30} />
                                Github
                            </motion.button>
                            <motion.button className='text-purple-500 w-24 md:w-28 p-2 font-semibold flex items-center justify-center gap-2 border-2 border-purple-500 rounded-full' whileHover={{scale: 1.1}}
                                onClick={() => window.open(currentProject.links.site, '_blank')}>
                                <BiGlobe className='' size={30} />
                                Live
                            </motion.button>
                        </div>
                    </div>
                    <motion.div initial={{ opacity: 0 ,scale: 0.5 }} whileInView={{ opacity: 1,scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className='md:max-w-[1000px] max-w-[600px] h-[300px] md:h-[600px] w-full m-auto py-8 md:py-16 px-4 relative'>
                        <div className="relative w-full h-full overflow-hidden rounded-2xl">
                            {projectImages.map((img, index) => (
                            <div 
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <img 
                                src={img} 
                                alt={`${currentProject.title} screenshot ${index + 1}`}
                                className="w-full h-full object-cover"
                                />
                            </div>
                            ))}
                            <motion.button whileHover={{scale:1.2}} className='absolute top-[47%] border border-purple-800 right-1 text-3xl  bg-purple-700 p-2 rounded-full text-white ' onClick={nextProject}><BsArrowRight className='size-4 md:size-6 '/></motion.button>
                            <motion.button whileHover={{scale:1.2}} className='absolute top-[47%] border border-purple-800 left-1 text-3xl  bg-purple-700 p-2 rounded-full text-white ' onClick={prevProject}><BsArrowLeft className='size-4 md:size-6 '/></motion.button>
                        </div>
                        {projectImages.length > 1 && <div className="relative flex items-center justify-center">
                            {projectImages.map((img,index) => (
                                <motion.button key={index} whileHover={{scale:1.2}} className={`mt-2 mx-1 border-2 border-purple-800 text-3xl p-1 rounded-full text-white ${index === currentImageIndex ? 'bg-purple-700' : ''}`} onClick={()=> setCurrentImageIndex(index)}></motion.button>
                            ))}
                        </div>}
                        <div className="flex items-center justify-center mt-3 gap-2">
                            {images.map((img, index) => (
                            <motion.button
                                key={index}
                                whileHover={{scale:1.2}}
                                className={`border border-purple-700  p-1 rounded-xl text-white `}
                                onClick={() => setSelectedProject(index)}
                            >
                                <img src={img[0]} className={` object-cover ${index === selectedProject ? 'w-16 h-16 md:w-20 md:h-20' : 'w-10 h-10 md:w-12 md:h-12'}`} alt="" />
                            </motion.button>
                            ))}
                        </div>
                    </motion.div>
            </div>
        </div>
    )
}

export default Portfolio