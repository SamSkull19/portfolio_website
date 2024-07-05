import ProjectDemo from "../HomePage/ProjectDemo";
import { Link } from 'react-router-dom';
import pro1 from '../assets/ps1.png';
import pro2 from '../assets/ps2.png';
import pro3 from '../assets/ps3.png';

const Projects = () => {
    return (
        <div>
            <ProjectDemo></ProjectDemo>
            <div className='roboto max-w-[1270px] mx-auto'>

            <div className='mb-20 grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='flex flex-col items-center'>
                    <Link to='https://661f3908de4100afffe3144e--soft-cajeta-de7cf2.netlify.app' className='w-full flex flex-col h-full'>
                        <div className='bg-[#052949] flex flex-col justify-center items-center h-full p-4'>
                            <div className='border-2 border-[#052949] w-full flex-grow'>
                                <img src={pro1} alt="project-1" className='w-full h-full'/>
                            </div>
                            <div>
                                <h2 className='text-teal-100 my-5 text-lg text-center'>Crayon Builders RealEstate</h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='flex flex-col items-center'>
                    <Link to='https://6606d0ecb18ed80a9d608cac--jocular-licorice-fb0bd7.netlify.app' className='w-full flex flex-col h-full'>
                        <div className='bg-[#052949] flex flex-col justify-center items-center h-full p-4'>
                            <div className='border-2 border-[#052949] w-full flex-grow'>
                                <img src={pro2} alt="project-2" className='w-full h-full'/>
                            </div>
                            <div>
                                <h2 className='text-teal-100 my-5 text-lg text-center'>BookVibe Book Selling</h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='flex flex-col items-center'>
                    <Link to='https://glittery-sfogliatella-1ed8d6.netlify.app' className='w-full flex flex-col h-full'>
                        <div className='bg-[#052949] flex flex-col justify-center items-center h-full p-4'>
                            <div className='border-2 border-[#052949] w-full flex-grow'>
                                <img src={pro3} alt="project-3" className='w-full h-full'/>
                            </div>
                            <div>
                                <h2 className='text-teal-100 my-5 text-lg text-center'>TreatyBite Restaurant</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Projects;