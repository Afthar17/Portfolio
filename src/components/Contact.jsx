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
    const onSubmit = async (event) => {
        event.preventDefault();
        handleSubmit()
        const formData = new FormData(event.target);

        formData.append("access_key", "8c6e7c75-8582-4ea9-a54a-588c79f8acb8");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };
    return (
        <div className='px-6 max-w-[1000px] mx-auto mt-20 md:mt-6' id='contact'>
            <Reveal>
                <div className="grid md:grid-cols-2 place-items-center">
                    <div>
                        <div className='text-gray-300 my-3'>
                            <h3 className='text-4xl font-semibold mb-5 text-gradient'>About <span>Me</span></h3>
                            <p className='text-justify  w-11/12 mx-auto text-lg'>
                                I'm a skilled software developer with experience in JavaScript, 
                                and expertise in frameworks like React, Node.js, Express.js and MongoDB.
                                I'm a quick learner and collaborate closely with clients to create efficient,
                                scalable, and user-friendly solutions that solve real-world problems.
                                Let's work together to bring your ideas to life!
                            </p>
                        </div>
                        <div className='flex mt-10 items-center gap-7'>
                            <div className=' bg-gray-800/40 p-4 rounded-lg'>
                                <h3 className='md:text-4xl text-2xl font-semibold text-white'>5<span>+</span></h3>
                                <p className='text-xs text-purple-400'><span>Projects</span></p>
                            </div>
                            <div className=' bg-gray-800/40 p-5 rounded-lg'>
                                <h3 className='md:text-4xl text-2xl font-semibold text-white'>1<span>+</span></h3>
                                <p className='text-xs text-purple-400'><span>Experience</span></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {submitted ? (<div className='flex flex-col items-center space-y-3 space-x-3 mx-auto'
                        ><h2 className='font-semibold text-gray-300'>
                                Successfully  <span>Contacted</span>
                            </h2><MdDone className='text-green-600 font-bold text-5xl item-center' />
                        </div>) : (<form onSubmit={onSubmit}
                            className=' max-w-6xl p-5 md:p-11'
                            id='form'>
                            <p className='text-gray-100 font-bold text-xl mb-2'>Let's <span>Connect</span></p>
                            <input type="text" id='name' placeholder='Your name..' name='name' className='mb-2 w-full rounded-md border border-purple-600
                                py-2 pl-2 pr-4' />
                            <input type="email" id='email' placeholder='Your email..' name='email' className='mb-2 w-full rounded-md border border-purple-600
                                 py-2 pl-2 pr-4' />
                            <textarea type="textarea" id='textarea' name='message' placeholder='Your message..' cols='30' rows='4' className='mb-2 w-full rounded-md border border-purple-600
                                 py-2 pl-2 pr-4' />
                            <motion.button whileHover={{ scale: 1.05 }} type='submit'
                                className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>Submit</motion.button>
                        </form>)}
                    </div>

                </div>
            </Reveal >
        </div >
    )
}

export default Contact