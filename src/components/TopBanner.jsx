/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import icon from '../../public/static-files/top-hero/icon.png'
import './TopBanner.css'
import fb from '../../public/static-files/top-hero/icons/fb.svg'
import insta from '../../public/static-files/top-hero/icons/insta.svg'
import be from '../../public/static-files/top-hero/icons/be.svg'


const TopBanner = () => {
    return (
        <div className='rota-font top-banner text-white '>


            <div className="navbar p-14">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <img src={icon} alt="" />
                        </label>

                    </div>
                </div>
                <div className=" navbar-center">
                    <div className='flex gap-10'>
                        <Link to='/'>about us</Link>
                        <Link to='/services'>services</Link>
                        <Link to='/ourwork'>our work</Link>
                        <Link to='/'>education</Link>
                    </div>
                </div>
                <div className="navbar-end">
                    <button className=" pl-10 pr-10 pt-3 pb-3 rounded-full border-2 border-white">
                        hire us
                    </button>

                </div>
            </div>

            <div className='mt-40 pl-14 '>
                <div className='text-start mb-32'>
                    <h1 className=' text-5xl mb-2 innovative-agency'>innovative Cyber Agency</h1>
                    <h1 className='font-serif font-bold mb-14 text-5xl bg-gradient-to-r from-teal-500 via-cyan-400 to-green-500 text-transparent bg-clip-text'>Artificial Intelligence</h1>
                    <div className='rota-font'>
                        <p className='text-sm '> We're the best digital marketing agency from West Bengal, curating experiences that users </p>
                        <p className='text-sm'>fall in love with.</p>
                    </div>
                </div>

                <div className='flex  gap-10 mt-[-50px]'>
                    <Link><img src={insta} alt="" /></Link>
                    <Link><img src={fb} alt="" /></Link>
                    <Link><img src={be} alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;