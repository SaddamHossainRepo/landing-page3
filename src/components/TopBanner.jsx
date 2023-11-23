/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import icon from '../../public/static-files/top-hero/icon.png'
import './TopBanner.css'
import fb from '../../public/static-files/top-hero/icons/fb.svg'
import insta from '../../public/static-files/top-hero/icons/insta.svg'
import be from '../../public/static-files/top-hero/icons/be.svg'
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const TopBanner = () => {
    return (
        <div className='rota-font top-banner text-white '>


            <div className="navbar p-14">
                <div className="navbar-start pl-24">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <img className='' src={icon} alt="" />
                        </label>

                    </div>
                </div>
                <div className=" navbar-center">
                    <div className='flex gap-10'>
                        <a href='#hire-us'>about us</a>
                        <a href='#services'>services</a>
                        <a href='#our-work'>our work</a>
                        <a href='#education'>education</a>
                    </div>
                </div>
                <div className="navbar-end">
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255, 255, 255)",
                            boxShadow: "0px 0px 8px rgb(255, 255, 255)"
                        }}
                        className=" pl-10 pr-10 pt-3 pb-3 rounded-full border-2 border-white">
                        hire us
                    </motion.button>

                </div>
            </div>

            <div className='mt-40 pl-36  '>
                <div className='cyber-agency text-start mb-32'>
                    <div
                        data-aos="fade-down"
                        data-aos-anchor-placement="bottom-center"
                        className='text-7xl mb-2 innovative-agency'><h1>innovative
                            Cyber Agency</h1></div>
                    <motion.div
                    // initial={{ y: 10 }}
                    // animate={{ y: [0, -90, 0] }}

                    // transition={{
                    //     duration: "3",
                    //     delay: "1"
                    // }}
                    >
                        <h2 className='font-serif font-bold mb-14 text-6xl bg-gradient-to-r from-green-400 via-cyan-500 to-green-600 text-transparent bg-clip-text'>Artificial Intelligence</h2>
                    </motion.div>
                    <div className='rota-font'>
                        <p className='text-lg '> We're the best digital marketing agency from West Bengal, curating experiences that users </p>
                        <p className='text-lg'>fall in love with.</p>
                    </div>
                </div>

                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    className='pb-36 flex  gap-10 mt-[-50px]'>
                    <Link><img src={insta} alt="" /></Link>
                    <Link><img src={fb} alt="" /></Link>
                    <Link><img src={be} alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;