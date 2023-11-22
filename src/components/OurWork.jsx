import './OurWork.css'

const OurWork = () => {
    return (
        <div className="bg-black text-white pb-24">
            <h1 className="text-start pl-32">OUR WORK</h1>

            <div className='grid grid-cols-2 pl-32 mt-10'>
                <div className="first-work w-[480px] h-[625px]">
                    <h1>E-laj</h1>
                    <p>Branding , App Design, UI UX</p>
                </div>
                <div className="first-work w-[480px] h-[625px] mt-16">
                    <h1>E-laj</h1>
                    <p>Branding , App Design, UI UX</p>
                </div>
                <div className="first-work w-[480px] h-[625px] mt-36">
                    <h1>E-laj</h1>
                    <p>Branding , App Design, UI UX</p>
                </div>
                <div className="first-work w-[480px] h-[625px] mt-56">
                    <h1>E-laj</h1>
                    <p>Branding , App Design, UI UX</p>
                </div>
            </div>
        </div>
    );
};

export default OurWork;