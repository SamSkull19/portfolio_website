import resume from '../assets/MyResumeSifatSamin.pdf';
import resumeSS from '../assets/resumeSS.png';

const Resume = () => {
    return (
        <div className="py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className='flex flex-col items-center'>
                    <h3 className="text-3xl font-bold mt-10 mb-2">Resume</h3>
                    <img src={resumeSS} alt="" />
                    <a href={resume} download="MyResumeSifatSamin.pdf" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Resume;