import { motion } from 'framer-motion'
import education from '../assets/education.jpg'
import Experiences from '../assets/experience.jpg'

const experiences = [
    {
        institution: 'JHSS Thandekkad',
        Period: '2016-17',
        description: 'Passed SSLC with a mark of 96%'
    },
    {
        institution: 'JHSS Thandekkad',
        Period: '2017-19',
        description: 'Passed +2 Biomaths'
    },
    {
        institution: 'Govt.Polytechnic college Perumbavoor',
        Period: '2019-22',
        description: 'Passed Diploma in Electronics and Communication with a cgpa of 8.31 '
    },
    {
        institution: 'Mar Athanasius college of Engineering Kothamangalam',
        Period: '2022-25',
        description: 'Btech graduate in electronics and communication'
    },
]

const workExperience = [
    {
        institution: 'Talks and Talks',
        Period: 'Feb 25 - current',
        Role: 'Frontend developer Intern',
        description: 'During my 6-month internship, I worked on developing and optimizing responsive, user-friendly web interfaces using ReactJS.I also learned about component-based architecture, state management using tools like Redux or Zustand, API integration, and debugging. '
    }
]

const Experience = () => {
    return (
<div className="flex flex-col items-center justify-center w-full my-10 px-4 md:px-10">
  <motion.h1 className="text-4xl md:text-5xl font-bold text-gradient text-center mt-16">
    Academics and Experience
  </motion.h1>

  <div className="flex flex-col md:flex-row text-[#252627] w-full max-w-6xl mt-10 ">
    
    {/* Left side image (hidden on mobile) */}
    <div className="hidden md:flex w-1/2 items-center justify-center">
      <img
        src={education}
        alt="Education"
        className="w-full h-full object-cover rounded-l-xl"
      />
    </div>

    {/* Right side content */}
    <div className="flex flex-col w-full md:w-1/2 bg-[#BFB48F] p-4 rounded-xl md:rounded-l-none md:rounded-r-xl">
      <h3 className="text-2xl md:text-4xl font-bold text-center mb-6">Academics</h3>

      {experiences.map((experience, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-center  gap-2">
            <h2 className="text-lg font-bold">{experience.institution}</h2>
            <p className="text-sm font-semibold whitespace-nowrap text-right">{experience.Period}</p>
          </div>
          <p className="text-sm font-medium mt-1">{experience.description}</p>
        </div>
      ))}
    </div>
  </div>
  <div className="flex flex-col md:flex-row text-[#F2EFE9] w-full max-w-6xl mt-10 ">

    {/* left side content */}
    <div className="flex flex-col w-full md:w-1/2 bg-[#252627] p-4 rounded-xl md:rounded-l-xl md:rounded-r-none">
      <h3 className="text-2xl md:text-4xl font-bold text-center mb-6">Experience</h3>

      {workExperience.map((experience, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-center  gap-2">
            <h2 className="text-lg font-bold">{experience.institution}</h2>
            <p className="text-sm font-semibold whitespace-nowrap text-right">{experience.Period}</p>
          </div>
          <p className="text-sm font-medium mt-1"><span className='font-semibold'>Role:</span> {experience.Role}</p>
          <p className="text-sm font-medium mt-1">{experience.description}</p>
        </div>
      ))}
    </div>
    {/* right side image (hidden on mobile) */}
    <div className="hidden md:flex w-1/2 items-center justify-center">
      <img
        src={Experiences}
        alt="Experiences"
        className="w-full h-full object-cover rounded-r-xl"
      />
    </div>
  </div>
</div>

    )
}

export default Experience