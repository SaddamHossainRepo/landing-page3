/* eslint-disable react/no-unescaped-entities */
import './TopBanner.css'
import { Link } from "react-router-dom";

const ServiceType = () => {
    return (
        <div className="bg-black text-white text-start pl-32 pt-36">
            <h1 className="mb-8 rota-font">SERVICES</h1>
            <h4 className="rota-bold mb-8 bg-gradient-to-r from-green-500 via-cyan-400 to-green-800 text-transparent bg-clip-text text-4xl font-bold">Develop, Exhibit, Secure</h4>
            <p className="w-2/3 rota-font">Welcome to Ethical Den - The Strategic Digital Company. We are a brand and digital consultancy based in India, partnering globally with leaders across industries to build future products, services, and brands. Working for the unknown since 2021. Our services span a wide variety of audiences and capabilities, but all of them are rooted in inspiring ideas, human connection, and writing your brand's future. The world is changing fast. We help you keep up</p>

            <div className="rota-font w-[90%] mt-20 pb-28 grid grid-cols-4 gap-4 ">
                <div>
                    <Link><p className="font-fa">Cyber Security Services</p></Link>
                </div>
                <div>
                    <Link><p>Web Development</p></Link>
                </div>
                <div>
                    <Link><p>Digital Marketing</p></Link>
                </div>
                <div>
                    <Link><p>Search Engine Optimization</p></Link>
                </div>
                <div>
                    <Link><p>UI/UX Development</p></Link>
                </div>
                <div>
                    <Link><p>Branding</p></Link>
                </div>
                <div>
                    <Link><p>Artifical Intelligence</p></Link>
                </div>
                <div>
                    <Link><p>Mobile app Development</p></Link>
                </div>
                <div>
                    <Link><p>Film Production</p></Link>
                </div>
                <div>
                    <Link><p>Video Editing</p></Link>
                </div>
                <div>
                    <Link><p>Software Solutions</p></Link>
                </div>
                <div>
                    <Link><p>Engagement Campaigns</p></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceType;