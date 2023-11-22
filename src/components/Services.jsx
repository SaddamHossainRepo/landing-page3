import pic1 from '../../public/static-files/top-banner/pic-1.png'
import pic2 from '../../public/static-files/top-banner/pic-2.png'
import pic3 from '../../public/static-files/top-banner/pic-3.png'
const Services = () => {
    return (
        <div className='p-0  bg-black border-gray-600 '>
            <div className="mt-0">
                <div className="flex justify-center items-center ">

                    <div className='w-1/2 mt-10'>
                        <h1 className="text-start text-3xl font-semibold 
                        bg-gradient-to-r from-teal-500 via-cyan-400 to-green-500 text-transparent bg-clip-text">SECURITY EXPERTS</h1>
                        <p className='text-start w-80 text-white text-sm mt-5'>
                            Knowing the state of your current cybersecurity posture as well as executing on continued cybersecurity initiatives is critical to staying ahead of the constantly evolving risks that are out there. With Audits, Penetration Testing & Security System Architecture and Implementation, Ethical Den can help you better understand where you are now and where you need to be tomorrow.
                        </p>
                    </div>
                    <div className='mt-10'>
                        <img src={pic1} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>

                {/* ROW 2 */}
                <div className=" flex justify-between ">

                    <div className='mt-20 ml-32 '>
                        <img src={pic2} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>

                    <div className='w-1/2 mt-32 pl-28'>
                        <h1 className="text-start text-3xl font-semibold 
                        bg-gradient-to-r from-teal-500 via-cyan-400 to-green-500 text-transparent bg-clip-text">SECURITY EXPERTS</h1>
                        <p className='text-start w-80 text-white text-sm mt-5'>
                            Knowing the state of your current cybersecurity posture as well as executing on continued cybersecurity initiatives is critical to staying ahead of the constantly evolving risks that are out there. With Audits, Penetration Testing & Security System Architecture and Implementation, Ethical Den can help you better understand where you are now and where you need to be tomorrow.
                        </p>
                    </div>

                </div>
                {/*     row-3 */}
                <div className="flex justify-center items-center mt-20">

                    <div className='w-1/2 '>
                        <h1 className="text-start text-3xl font-semibold 
                        bg-gradient-to-r from-teal-500 via-cyan-400 to-green-500 text-transparent bg-clip-text">SECURITY EXPERTS</h1>
                        <p className='text-start w-80 text-white text-sm mt-5'>
                            Knowing the state of your current cybersecurity posture as well as executing on continued cybersecurity initiatives is critical to staying ahead of the constantly evolving risks that are out there. With Audits, Penetration Testing & Security System Architecture and Implementation, Ethical Den can help you better understand where you are now and where you need to be tomorrow.
                        </p>
                    </div>
                    <div className=''>
                        <img src={pic3} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;