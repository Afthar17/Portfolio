import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
            <div>
                <h3 className='text-2xl text-gray-200 font-semibold'>Afthar</h3>
                <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                    <a href="https://github.com/Afthar17"><FaGithub /></a>
                    <a href="https://www.instagram.com/_a_f_t_h_a_r_17/?hl=en"><FaInstagram /></a>
                </div>

            </div>
            <p className='text-gray-400'>@2024 Afhar N N</p>
        </div>
    )
}

export default Footer