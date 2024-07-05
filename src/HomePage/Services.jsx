import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { SiAffinitydesigner } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";
import { FaPython } from "react-icons/fa";


const Services = () => {
    return (
        <div className='roboto max-w-[1270px] mx-auto py-10'>
            <section className="text-center">
                <h2 className="text-4xl font-bold mb-4 relative inline-block">
                    Services
                    <span className="block w-40 h-1 bg-black mt-2 mx-auto"></span>
                </h2>
                <div className="flex flex-wrap justify-around">
                    <div className="max-w-xs m-4 text-center">
                        <div className="text-4xl flex justify-center mb-5"><FaReact /></div>
                        <h3 className="text-xl font-semibold mb-2">Frontend using React</h3>
                        <p className="text-gray-700">Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
                    </div>

                    <div className="max-w-xs m-4 text-center">
                        <div className="text-4xl flex justify-center mb-5"><FaProjectDiagram /></div>
                        <h3 className="text-xl font-semibold mb-2">Web Projects</h3>
                        <p className="text-gray-700">Transforming ideas into exceptional Web Projects experiences.</p>
                    </div>

                    <div className="max-w-xs m-4 text-center">
                        <div className="text-4xl flex justify-center mb-5"><SiAffinitydesigner /></div>
                        <h3 className="text-xl font-semibold mb-2">Design & Creative</h3>
                        <p className="text-gray-700">Crafting visually stunning designs that connect with your audience.</p>
                    </div>

                    <div className="max-w-xs m-4 text-center">
                        <div className="text-4xl flex justify-center mb-5"><MdOutlineDeveloperMode /></div>
                        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                        <p className="text-gray-700">Bringing your vision to life with the latest technology and design trends.</p>
                    </div>

                    <div className="max-w-xs m-4 text-center">
                        <div className="flex items-center justify-center mb-5"><FaRegCopyright className="text-4xl" /><span className="text-lg font-extrabold">++</span></div>
                        <h3 className="text-xl font-semibold mb-2">C++ Programming</h3>
                        <p className="text-gray-700">Creating robust and scalable applications with modern C++ practices.</p>
                    </div>

                    <div className="max-w-xs m-4 text-center">
                        <div className="text-4xl flex justify-center mb-5"><FaPython /></div>
                        <h3 className="text-xl font-semibold mb-2">Python Programming</h3>
                        <p className="text-gray-700">Building versatile and powerful applications with Python.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
