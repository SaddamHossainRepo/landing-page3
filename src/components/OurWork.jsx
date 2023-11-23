import './OurWork.css'
import './TopBanner.css'
import { motion } from "framer-motion"


const OurWork = () => {
    return (
        <div id='our-work' className="rota bg-black text-white pb-24">
            <h1 className="text-start pl-32">OUR WORK</h1>

            <div className='grid grid-cols-2 pl-32 mt-10'>
                <motion.div
                    whileHover={{
                        scale: 1.05 
                        
                    }}
                    className="first-work w-[480px] h-[625px]">
                    <div className='p-6'>
                        <h1>E-laj</h1>
                        <p>Branding , App Design, UI UX</p>
                    </div>
                </motion.div>
                <motion.div
                whileHover={{
                    scale: 1.05 
                    
                }}
                className="second-work w-[480px] h-[625px] mt-16">
                    <div className="p-6">
                        <h1>E-laj</h1>
                        <p>Branding , App Design, UI UX</p>
                    </div>
                </motion.div>
                <motion.div
                whileHover={{
                    scale: 1.05 
                    
                }}
                className="third-work w-[480px] h-[625px] mt-36">
                    <div className="p-6">
                        <h1>E-laj</h1>
                        <p>Branding , App Design, UI UX</p>
                    </div>
                </motion.div>
                <motion.div
                whileHover={{
                    scale: 1.05,
                    
                }}
                className="fourth-work w-[480px] h-[625px] mt-56">
                    <div className="p-6 ">
                        <h1>E-laj</h1>
                        <p>Branding , App Design, UI UX</p>
                    </div>
                </motion.div>
            </div>
            <div className='rota-font flex justify-end pr-32 mt-7'>
                <a href="">see all our work </a>
            </div>
        </div>
    );
};

export default OurWork;