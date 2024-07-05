import { Link } from 'react-router-dom';
import pro1 from '../assets/project1.png';
import pro2 from '../assets/project2.png';
import pro3 from '../assets/project3.png';

const ProjectDemo = () => {
    return (
        <div className='roboto max-w-[1270px] mx-auto py-10'>
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4 relative inline-block">
                    My Projects
                    <span className="block w-52 h-1 bg-black mt-2 mx-auto"></span>
                </h2>
            </div>
            <div className='my-10 grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='flex flex-col items-center'>
                    <Link to='https://learningplatform-a19d4.web.app' className='w-full flex flex-col h-full'>
                        <div className='bg-[#052949] flex flex-col justify-center items-center h-full p-4'>
                            <div className='border-2 border-[#052949] w-full flex-grow'>
                                <img src={pro1} alt="project-1" className='w-full h-full'/>
                            </div>
                            <div>
                                <h2 className='text-teal-100 my-5 text-lg text-center'>EduQuest Learning Platform</h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='flex flex-col items-center'>
                    <Link to='https://jobvoyage-47a0e.web.app' className='w-full flex flex-col h-full'>
                        <div className='bg-[#052949] flex flex-col justify-center items-center h-full p-4'>
                            <div className='border-2 border-[#052949] w-full flex-grow'>
                                <img src={pro2} alt="project-2" className='w-full h-full'/>
                            </div>
                            <div>
                                <h2 className='text-teal-100 my-5 text-lg text-center'>JobVoyage Job Portal</h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className='flex flex-col items-center'>
                    <Link to='https://neffroxxcrafts.web.app' className='w-full flex flex-col h-full'>
                        <div className='bg-[#052949] flex flex-col justify-center items-center h-full p-4'>
                            <div className='border-2 border-[#052949] w-full flex-grow'>
                                <img src={pro3} alt="project-3" className='w-full h-full'/>
                            </div>
                            <div>
                                <h2 className='text-teal-100 my-5 text-lg text-center'>NeffRoxx Crafts Selling Website</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDemo;
