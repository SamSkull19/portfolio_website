import myProfilePic from '../assets/PortfolioDP.png'
const Banner = () => {
    return (
        <div className='roboto max-w-[1270px] mx-auto pt-10'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='text-teal-100 px-10 md:px-3 lg:px-0'>
                    <h1 className='text-5xl md:text-5xl lg:text-7xl mb-3 lg:mb-8'>Sifat Samin</h1>

                    <h3 className='text-xl lg:text-4xl mb-3 lg:mb-8'>Frontend Developer and CSE Student</h3>

                    <p className='w-9/12 md:w-1/2 lg:w-[700px] text-base lg:text-xl'>Welcome to my portfolio! I am Sifat Samin, a passionate frontend developer and a dedicated Computer Science and Engineering student. Here, you will find a showcase of my projects, skills, and experiences that highlight my journey in the tech world. Explore my work and see how I bring ideas to life through code. Feel free to reach out if you have any questions or would like to collaborate. Enjoy your stay!</p>
                </div>
                <div>
                    <img src={myProfilePic} alt="Profile Pic" className='w-[400px] md:w-[1200px] lg:w-[400px]' />
                </div>
            </div>
        </div>
    );
};

export default Banner;