import { Link } from "react-router-dom";
import myLogo from '../assets/logoMyName.png';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="roboto max-w-[1270px] mx-auto">
            <div className="navbar bg-[#052949] pt-5 pb-5">
                <div className="navbar-start">
                    <a className="text-2xl font-bold flex items-center justify-center animate__animated animate__rubberBand text-teal-100"> <img src={myLogo} alt="Sifat Samin" className="w-[180px] ml-10 md:ml-0" /></a>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-teal-100 text-lg font-normal">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/aboutMe'>About Me</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/skills'>Skills</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>

                <div className="dropdown navbar-end absolute translate-x-96 md:translate-x-[700px]">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-teal-300 text-2xl">
                        <FaBars />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-7 z-20 p-2 shadow rounded-box w-52 bg-[#052949] bg-opacity-80 text-teal-200 -translate-x-40">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/aboutMe'>About Me</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/skills'>Skills</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;