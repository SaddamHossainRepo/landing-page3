import { Link } from 'react-router-dom';
import icon from '../../public/static-files/top-hero/icon.png'
// import background from '../../public/static-files/top-hero/bg.png';
const TopBanner = () => {
    return (
        <div>

            <div className="navbar bg-base-100">
                <div className=" navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <img src={icon} alt="" />
                        </label>

                    </div>
                </div>
                <div className="navbar-center">
                    <div className='flex gap-10'>
                        <Link to='/'>about us</Link>
                        <Link to='/'>services</Link>
                        <Link to='/'>our work</Link>
                        <Link to='/'>education</Link>
                    </div>
                </div>
                <div className="navbar-end">
                    <button className="btn pl-10 pr-10 rounded-full border-white">
                        hire us
                    </button>

                </div>
            </div>
        </div>
    );
};

export default TopBanner;