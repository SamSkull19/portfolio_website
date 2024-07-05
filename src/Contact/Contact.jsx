import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="py-8">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
                <div className="grid grid-cols-1 gap-8">
                    {/* Contact Information */}
                    <div className='bg-[#052949] text-teal-100 p-10 rounded-2xl'>
                        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                        <p className="mb-4 flex items-center"><FaPhone className="mr-2"/> <span>01703101786</span></p>
                        <p className="mb-4 flex items-center"><FaEnvelope className="mr-2"/> <span>sifatsamin666@gmail.com</span></p>
                        <p className="mb-4">
                            <strong className='text-xl'>Present Address:</strong> <br />
                            Maleka Mahal, 3rd Floor, Sylhet Agricultural University near 2nd gate, Baluchor, Tilagor, Sylhet
                        </p>
                        <p className="mb-4">
                            <strong className='text-xl'>Permanent Address:</strong> <br />
                            471/520, Snehaloy, Thakurpara Baganbari, Cumilla, Bangladesh
                        </p>
                    </div>
                    
                    {/* Social Links */}
                    <div className='bg-teal-100 text-[#052949] p-10 rounded-2xl'>
                        <h2 className="text-2xl font-bold mb-4">Social Links</h2>
                        <div className="flex flex-col space-y-4">
                            <a href="https://www.facebook.com/sifatsamin19ss" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600">
                                <FaFacebook className="mr-2" size={24}/> Facebook
                            </a>
                            <a href="https://www.youtube.com/channel/UC38dD5BSpBO_mGZm4jsjPjw" target="_blank" rel="noopener noreferrer" className="flex items-center text-red-600">
                                <FaYoutube className="mr-2" size={24}/> YouTube
                            </a>
                            <a href="https://twitter.com/SifatSamin19" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400">
                                <FaTwitter className="mr-2" size={24}/> Twitter
                            </a>
                            <a href="https://www.linkedin.com/in/sifat-samin-792969289/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-700">
                                <FaLinkedin className="mr-2" size={24}/> LinkedIn
                            </a>
                            <a href="https://github.com/SamSkull19" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700">
                                <FaGithub className="mr-2" size={24}/> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
