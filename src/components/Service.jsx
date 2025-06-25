import { BiArrowToRight, BiUser, BiWorld } from "react-icons/bi"
import { motion } from "framer-motion"
import { FcElectricalSensor } from "react-icons/fc"



const services =[{
    id:1,
    icon:<BiWorld className="text-4xl md:text-5xl text-[#F2EFE9]"/>,
    title:"Web Development",
    description:"I offer a wide range of web development services, including custom web design and development, responsive web design, and fullstack solutions."
},
{
    id:2,
    icon:<FcElectricalSensor className="text-4xl md:text-5xl text-[#F2EFE9]"/>,
    title:"Iot Development",
    description:"I offer Iot development and services with MQTT,websockets,etc."
},
{
    id:3,
    icon:<BiUser className="text-4xl md:text-5xl text-[#F2EFE9]"/>,
    title:"Single page application",
    description:"I offer Static Single page application development using reactjs tailwindcss ."
}]
const Service = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-[#252627] p-1 md:p-4 "id="services">
        <div className="flex flex-col items-center justify-center mx-0 md:mx-20 mb-8 mt-5 p-0 md:p-2">
            <h1 className="text-4xl font-bold text-gradient mb-3">Services</h1>
            <h2 className="text-lg md:text-xl font-semibold text-[#F2EFE9]">What I offer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2">
                {services.map((service) => (
                    <motion.div
                        initial={{ opacity: 0,scale:0.5 }} 
                        whileInView={{ opacity: 1,scale:1 }}
                        transition={{ duration: 1 ,delay:0.5}}
                        viewport={{ once: true }}
                        key={service.id} 
                        className="flex flex-col items-center justify-center mx-2 my-3 p-2 bg-[#1B1B3A] rounded-xl shadow-lg shadow-gray-900 w-[350px]">
                        <div className="flex items-center justify-center mx-2  p-2 text-[#F2EFE9]">
                            {service.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-gradient">{service.title}</h2>
                        <p className="text-sm font-semibold text-[#F2EFE9] mx-5  text-center">{service.description}</p>
                        <button className="flex items-center justify-center mx-2 my-3 p-2 text-[#E4D9FF] text-sm font-semibold border border-purple-500 rounded-lg" onClick={() => {document.getElementById("contact").scrollIntoView({behavior:"smooth"})}}>Contact me <BiArrowToRight className="text-2xl"/></button>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Service