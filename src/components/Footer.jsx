import React from 'react'
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { LiaLinkedin } from 'react-icons/lia'


const Footer = () => {
    return (
        <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
            <div className='space-y-3'>
                <h3 className='text-xl text-gray-200 font-semibold'>Afthar</h3>

                <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                    <a href="https://github.com/Afthar17" rel='noreferrer' target='_blank'>
                        <FaGithub className='text-purple-500 text-4xl hover:scale-110  ' />
                    </a>
                    <a href="https://www.instagram.com/_a_f_t_h_a_r_17/?hl=en" rel='noreferrer' target='_blank'>
                        <FaInstagram className='text-purple-500 text-4xl hover:scale-110 ' />
                    </a>
                    <a href="https://www.linkedin.com/in/afthar-n-n-665a29314/" rel='noopener noreferrer' target="_blank">
                        <LiaLinkedin className='text-purple-500 text-4xl hover:scale-110 '  />
                    </a>
                    <a href="https://wa.me/qr/6LT37NVOZDCVG1" rel='noreferrer' target='_blank'>
                        <FaWhatsapp className='text-purple-500 text-4xl hover:scale-110 ' />
                    </a>
                </div>
            </div>
            <p className='text-gray-400 text-sm md:text-lg font-semibold'>@2024 Afhar N N</p>
        </div>
    )
}

export default Footer