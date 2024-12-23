import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Reveal from './Reveal'
import { MdDone } from 'react-icons/md'

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = () => {
        setSubmitted(true)
    }
    return (
        <div className='px-6 max-w-[1000px] mx-auto md:my-12' id='contact'>
            <Reveal>
                <div className="grid md:grid-cols-2 place-items-center">
                    <div>
                        <div className='text-gray-300 my-3'>
                            <h3 className='text-4xl font-semibold mb-5 '>About <span>Me</span></h3>
                            <p className='text-justify tracking-tighter leading-7 w-11/12 mx-auto sm:text-2xl'>Meet Afthar, a passionate and driven Electronics and Communication Engineering student from Perumbavoor, Ernakulam. I'm currently pursuing my BTech at Mar Athanasius College of Engineering (MACE) and have a strong foundation in web development, particularly with the MERN stack. As a quick learner and problem-solver, I love exploring innovative ideas
                                . My journey is all about growth, creativity, and making an impact in the tech world.
                            </p>
                        </div>
                        <div className='flex mt-10 items-center gap-7'>
                            <div className=' bg-gray-800/40 p-4 rounded-lg'>
                                <h3 className='md:text-4xl text-2xl font-semibold text-white'>5<span>+</span></h3>
                                <p className='text-xs md:text-base'><span>Projects</span></p>
                            </div>
                            <div className=' bg-gray-800/40 p-5 rounded-lg'>
                                <h3 className='md:text-4xl text-2xl font-semibold text-white'>1<span>+</span></h3>
                                <p className='text-xs md:text-base'><span>Experience</span></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {submitted ? (<div className='flex flex-col items-center space-y-3 space-x-3 mx-auto'
                        ><h2 className='font-semibold text-gray-300'>
                                Successfully  <span>Contacted</span>
                            </h2><MdDone className='text-green-600 font-bold text-5xl item-center' />
                        </div>) : (<form action="https://formsubmit.co/el/ditiku" method="POST"
                            className=' max-w-6xl p-5 md:p-11'
                            id='form'>
                            <p className='text-gray-100 font-bold text-xl mb-2'>Let's <span>Connect</span></p>
                            <input type="text" id='name' placeholder='Your name..' name='name' className='mb-2 w-full rounded-md border border-purple-600
                    py-2 pl-2 pr-4' />
                            <input type="email" id='email' placeholder='Your email..' name='email' className='mb-2 w-full rounded-md border border-purple-600
                    py-2 pl-2 pr-4' />
                            <textarea type="textarea" id='textarea' name='textarea' placeholder='Your message..' cols='30' rows='4' className='mb-2 w-full rounded-md border border-purple-600
                    py-2 pl-2 pr-4' />
                            <button type='submit' onClick={handleSubmit}
                                className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>Submit</button>
                        </form>)}
                    </div>

                </div>
            </Reveal >
        </div >
    )
}

export default Contact