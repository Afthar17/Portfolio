import React, { useState } from 'react'
import { FaBars, FaWindowClose } from 'react-icons/fa'
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
        {!animationComplete && (
            <motion.div
                className="fixed inset-0 bg-transparent backdrop-blur-sm rounded-lg z-[9999] flex gap-2 items-center justify-center"
                initial={{ scale: 1 }}
                animate={{ scale: 0.2, x: '-45vw', y: '-43vh' }}
                transition={{ duration: 2, delay: 1, ease: 'easeInOut' }}
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
                {/* <motion.p
                className="text-white text-3xl md:text-[250px] font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                >
                Afthar
                </motion.p> */}
            </motion.div>
        )}
        <div className='fixed top-0 left-2 right-2 w-[95%] overflow-hidden bg-opacity-70 backdrop-blur-md z-50'>
            {animationComplete && (<motion.div  className=' flex justify-between text-gray-200
            text-xl items-center px-5 mx-4 overflow-hidden h-20 '>
                <motion.div  className='flex items-center gap-2'>
                    <img src={logo} alt="" className='w-10 rounded-full'/>
                    <a href="#" className='font-semibold text-2xl'>Afthar</a>
                </motion.div>

                <ul className='hidden text-lg md:flex gap-8 z-10 cursor-pointer'>
                    <li>
                        <Link to='skills' smooth={true} offset={50} duration={100}>About</Link>
                    </li>
                    <li>
                        <Link to='skills' smooth={true} offset={50} duration={100}>Services</Link>
                    </li>
                    <li>
                        <Link to='portfolio' smooth={true} offset={50} duration={100}>Projects</Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} offset={50} duration={100}>Contact</Link>
                    </li>
                </ul>

                <div onClick={toggleNav} className='md:hidden z-50 text-gray-200'>
                    {nav ? <AiOutlineClose size={30} /> : < AiOutlineMenu size={30} />}
                </div>
                <motion.div
                    initial={false}
                    animate={nav ? 'open' : 'close'}
                    variants={menuVariants}
                    className='fixed left-0 top-0 w-full min-h-screen bg-gray-900 text-white z-40 flex items-center justify-center'
                >
                    <ul className='flex flex-col gap-6 font-semibold text-2xl text-gradient cursor-pointer'>
                        <li >
                            <Link onClick={closeNav} to='skills' smooth={true} offset={50} duration={500}>Skills</Link>
                        </li>
                        <li >
                            <Link onClick={closeNav} to='portfolio' smooth={true} offset={50} duration={500}>Portfolio</Link>
                        </li>
                        <li >
                            <Link onClick={closeNav} to='contact' smooth={true} offset={50} duration={500}>Contact</Link>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>)}
        </div>
        </>
    )
}

export default Navbar