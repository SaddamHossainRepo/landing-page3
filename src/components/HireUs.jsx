import { Link } from 'react-router-dom';
import './TopBanner.css'
import fb from '../../public/static-files/top-hero/icons/fb.svg'
import insta from '../../public/static-files/top-hero/icons/insta.svg'
import be from '../../public/static-files/top-hero/icons/be.svg'
import web from '../../public/static-files/top-hero/icons/web.svg'

const HireUs = () => {
    return (
        <div id='hire-us' className="flex bg-black text-white pt-52 pl-32 ">
            <div className="w-1/2 ">
                <h1>HIRE US</h1>
                <h2 className="mt-5 mb-5 rota-bold text-start text-3xl font-semibold 
                        bg-gradient-to-r from-green-400 via-cyan-500 to-green-600 text-transparent bg-clip-text">WORK WITH ETHICAL DEN</h2>
                <p className="mb-3 rota-font text-xl">SERVICES</p>
                <div className="grid grid-cols-4 gap-4 text-sm">
                    <button className="pl-3 pr-3 pt-3 pb-3  rounded-full border-2 border-white">
                        digital marketing
                    </button>
                    <button className="pl-3 pr-3 pt-3 pb-3  rounded-full border-2 border-white">
                        cyber security
                    </button>
                    <button className="pl-3 pr-3 pt-3 pb-3 rounded-full border-2 border-white">
                        seo
                    </button>
                    <button className="pl-3 pr-3 pt-3 pb-3 rounded-full border-2 border-white">
                        branding
                    </button>
                    <button className="pl-3 pr-3 pt-3 pb-3 rounded-full border-2 border-white">
                        ui/ux
                    </button>
                    <button className="pl-3 pr-3 pt-3 pb-3 rounded-full border-2 border-white">
                        Web development
                    </button>
                    <button className=" pl-3 pr-3 pt-3 pb-3 rounded-full border-2 border-white">
                        social media marketing
                    </button>

                </div>

                <div className='mt-5 text-white'>
                    <input className='bg-black w-1/2 mb-4' type="text" placeholder='NAME' />
                    <input className='bg-black w-1/2 mt-3' type="text" placeholder='EMAIL' />
                    <input className='bg-black w-full' type="text" placeholder='PROJECT DETAILS (OPTIONAL)' />
                </div>
                <button className="mt-10 pl-14 pr-14 pt-3 pb-3 rounded-full border-2  text-start text-xs 
                        border-gradient-to-r from-green-400 via-cyan-500 to-green-600 ">
                    SUBMIT
                </button>
            </div>
            <div className='pl-36'>
                <div className='rota-font'>
                    <h1 className='text-2xl mb-3'>CONTACTS</h1>
                    <p className='text-xs mb-1'>hello@ethicalden.com</p>
                    <p className='text-xs mb-1'>+91 9547578920</p>
                    <h1 className='mt-4 mb-4'>FOLLOW</h1>
                    <div className='flex  gap-5 '>
                        <Link><img className='w-[30px] h-[30px]' src={insta} alt="" /></Link>
                        <Link><img className='w-[30px] h-[30px]' src={fb} alt="" /></Link>
                        <Link><img className='w-[30px] h-[30px]' src={be} alt="" /></Link>
                        <Link><img className='w-[30px] h-[30px]' src={web} alt="" /></Link>
                    </div>
                    <div>
                        <h1 className='text-2xl mt-6 mb-6'>ADDRESS</h1>
                        <p className='text-xl'>Kolkata Office:</p>
                        <p className='text-sm mb-5'>ANO-312, Astra Towers, New Town, Kolkata</p>
                    </div>
                    <div>
                        
                        <p className='text-xl'>Siliguri Office:</p>
                        <p className='text-sm mb-5'>Opposite of State Bank ATM, Pradhan Nagar, Siliguri</p>
                    </div>
                    <div>
                        
                        <p className='text-xl'>Bangalore Office:</p>
                        <p className='text-sm mb-5'>Gulab Plaza, Mahakavi Kuvempu Rd, Rajajinagar, Bengaluru</p>
                    </div>
                    <div>
                        
                        <p className='text-xl'>Bangladesh Office:</p>
                        <p className='text-sm mb-5'>Nabi Nagar, Muhammadpur, Dhaka</p>
                    </div>

                    <p>© 2023, Ethical Den, all rights reserved</p>

                </div>
            </div>
        </div>
    );
};

export default HireUs;