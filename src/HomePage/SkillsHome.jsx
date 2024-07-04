import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaPython } from "react-icons/fa";


const SkillsHome = () => {
    return (
        <div className="roboto max-w-[1270px] mx-auto pt-10 my-20">
            <h2 className="text-4xl font-bold mb-6 text-center">
                Areas of Expertise
                <span className="block w-80 h-1 bg-black mt-2 mx-auto"></span>
            </h2>
            <p className="text-center mb-10">I specialize in creating responsive and visually appealing web applications using modern frontend technologies like HTML, CSS, JavaScript, and React. Additionally, I have a solid foundation in programming with C, C++, and Python Basics, enabling me to develop efficient and robust solutions.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 text-9xl gap-8 justify-between">
                <div className="flex flex-col items-center">
                    <FaHtml5 />
                    <p className="text-2xl mt-2 font-semibold">HTML</p>
                </div>

                <div className="flex flex-col items-center">
                    <FaCss3Alt />
                    <p className="text-2xl mt-2 font-semibold">CSS</p>
                </div>

                <div className="flex flex-col items-center">
                    <RiJavascriptFill />
                    <p className="text-2xl mt-2 font-semibold">JavaScript</p>
                </div>

                <div className="flex flex-col items-center">
                    <FaReact />
                    <p className="text-2xl mt-2 font-semibold">React</p>
                </div>

                <div className="flex flex-col items-center">
                    <FaCopyright />
                    <p className="text-2xl mt-2 font-semibold">C</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex items-center"><FaCopyright /><span className="text-5xl font-extrabold">++</span></div>
                    <p className="text-2xl mt-2 font-semibold">C++</p>
                </div>

                <div className="flex flex-col items-center">
                    <FaPython />
                    <p className="text-2xl mt-2 font-semibold">Python Basic</p>
                </div>
            </div>

        </div>
    );
};

export default SkillsHome;