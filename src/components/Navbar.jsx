import  { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [animationComplete, setAnimationComplete] = useState(false);

    const toggleNav = () => {
        setNav(!nav)
    }
    const closeNav = () => {
        setNav(false)
    }
    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        close: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    }
    return (
        <>
            {/* Splash Animation */}
            {!animationComplete && (
                <motion.div
                className="fixed inset-0  bg-transparent backdrop-blur-sm rounded-lg z-[9999] flex gap-2 items-center justify-center"
                initial={{ scale: 1 }}
                animate={{ scale: 0.2, x: "calc(-48vw + 3rem)",y: "calc(-47vh + 1.5rem)" }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                onAnimationComplete={() => setAnimationComplete(true)}
                >
                <motion.img
                    src={logo}
                    alt="Afthar Logo"
                    className="w-[200px] md:w-[450px] md:h-[450px] h-[200px] rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
                </motion.div>
            )}

            {/* Navbar */}
            <div className="fixed top-0 left-2 right-2 w-[95%] bg-opacity-70 backdrop-blur-md z-50">
                {animationComplete && (
                <motion.div className="flex justify-between text-gray-200 text-xl items-center px-5 mx-4 h-20">
                    <div className="flex items-center gap-2">
                    <img src={logo} alt="" className="w-10 rounded-full" />
                    <a href="#" className="font-semibold text-2xl">
                        Afthar
                    </a>
                    </div>

                    {/* Desktop Links */}
                    <ul className="hidden text-lg md:flex gap-8 cursor-pointer">
                    <li>
                        <Link to="skills" smooth={true} offset={20} duration={100}>
                        About
                        </Link>
                    </li>
                    <li>
                        <Link to="services" smooth={true} offset={50} duration={100}>
                        Services
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} offset={50} duration={100}>
                        Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} offset={50} duration={100}>
                        Contact
                        </Link>
                    </li>
                    </ul>

                    {/* Hamburger Toggle */}
                    <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                    </div>
                </motion.div>
                )}
            </div>

            {/* Mobile Menu - Always Mounted */}
            <motion.div
                initial="close"
                animate={nav ? "open" : "close"}
                variants={{
                open: { x: 0, opacity: 1, transition: { duration: 0.3 } },
                close: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
                }}
                className={`fixed top-0 left-0 w-full h-screen bg-gray-900 text-white z-40 md:hidden flex items-center justify-center transition-all duration-300 ${
                nav ? "" : "pointer-events-none"
                }`}
            >
                <ul className="flex flex-col gap-6 font-semibold text-2xl text-gradient text-center">
                <li>
                    <Link onClick={closeNav} to="skills" smooth={true} offset={50} duration={500}>
                    Skills
                    </Link>
                </li>
                <li>
                    <Link to="services" onClick={closeNav} smooth={true} offset={50} duration={100}>
                        Services
                    </Link>
                </li>
                <li>
                    <Link onClick={closeNav} to="projects" smooth={true} offset={50} duration={500}>
                    Projects
                    </Link>
                </li>
                <li>
                    <Link onClick={closeNav} to="contact" smooth={true} offset={50} duration={500}>
                    Contact
                    </Link>
                </li>
                </ul>
            </motion.div>
</>
    )
}

export default Navbar