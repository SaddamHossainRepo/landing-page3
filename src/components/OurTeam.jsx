import teamplayer1 from '../../public/static-files/our-team/1.png'
import teamplayer2 from '../../public/static-files/our-team/2.png'
import teamplayer3 from '../../public/static-files/our-team/3.png'
import teamplayer4 from '../../public/static-files/our-team/4.png'
import teamplayer5 from '../../public/static-files/our-team/5.png'
import './TopBanner.css'
import Marquee from "react-fast-marquee";




const OurTeam = () => {
    return (
        <div className="pl-32 rota-font  bg-black text-white">
            <h1 className='font-bold'>OUR TEAM</h1>
            <Marquee pauseOnHover speed={80}>
                <div className="flex gap-5">
                    <div className='mt-8'>
                        <img src={teamplayer1} alt="" />
                        <h1 className='rota-font mt-3 bg-gradient-to-r from-green-500 via-cyan-400 to-green-800 text-transparent bg-clip-text'>Nataraj Sharma</h1>
                    </div>
                    <div className='mt-8'>
                        <img src={teamplayer2} alt="" />
                        <h1 className='rota-font mt-3 bg-gradient-to-r from-green-500 via-cyan-400 to-green-800 text-transparent bg-clip-text'>Nazmul Islam</h1>
                    </div>
                    <div className='mt-8'>
                        <img src={teamplayer3} alt="" />
                        <h1 className='rota-font mt-3 bg-gradient-to-r from-green-500 via-cyan-400 to-green-800 text-transparent bg-clip-text'>Shehnaz Sultana</h1>
                    </div>
                    <div className='mt-8'>
                        <img src={teamplayer4} alt="" />
                        <h1 className='rota-font mt-3 bg-gradient-to-r from-green-500 via-cyan-400 to-green-800 text-transparent bg-clip-text'>Sajal Ahmed</h1>
                    </div>
                    <div className='mt-8'>
                        <img src={teamplayer5} alt="" />
                        <h1 className='rota-font mt-3 bg-gradient-to-r from-green-500 via-cyan-400 to-green-800 text-transparent bg-clip-text'>Sanjana Akter</h1>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default OurTeam;