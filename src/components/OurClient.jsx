import client1 from '../../public/static-files/our-clients/1.png'
import client2 from '../../public/static-files/our-clients/2.png'
import client3 from '../../public/static-files/our-clients/3.png'
import client4 from '../../public/static-files/our-clients/4.png'
import client5 from '../../public/static-files/our-clients/5.png'
import Marquee from "react-fast-marquee";



const OurClient = () => {
    return (
        <div className='bg-black text-white pl-32 pb-24'>
            <h1 className='font-rota '>OUR CLIENTS</h1>
            <Marquee speed={300} pauseOnHover>
                <div className="flex gap-5">
                    <div className=" w-[195px] h-[195px]">
                        <img src={client1} alt="" />
                    </div>
                    <div className="w-[195px] h-[195px]">
                        <img src={client2} alt="" />
                    </div>
                    <div className="w-[195px] h-[195px]">
                        <img src={client3} alt="" />
                    </div>
                    <div className="w-[195px] h-[195px]">
                        <img src={client4} alt="" />
                    </div>
                    <div className="w-[195px] h-[195px]">
                        <img src={client5} alt="" />
                    </div>

                </div>
            </Marquee>
        </div>
    );
};

export default OurClient;