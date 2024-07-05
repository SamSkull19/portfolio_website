
const AboutMe = () => {
    return (
        <div className="py-8">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-6">Sifat Samin Sarker</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                        <p>
                            <strong>Address:</strong> 471/520, Snehaloy, Thkurpara Baganbari, Cumilla, Bangladesh<br />
                            <strong>Phone:</strong> 01703101786<br />
                            <strong>Email:</strong> sifatsamin666@gmail.com<br />
                            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sifat-samin-792969289/" target="_blank" rel="noopener noreferrer" className="underline">Sifat Samin on LinkedIn</a><br />
                            <strong>GitHub:</strong> <a href="https://github.com/SamSkull19" target="_blank" rel="noopener noreferrer" className="underline">SamSkull19 on GitHub</a><br />
                        </p>
                        <h3 className="text-lg font-semibold mt-6 mb-2">Objective</h3>
                        <p className="text-justify">
                            Enthusiastic and dedicated Bachelor of Science in Computer Science and Engineering (CSE) student at Sylhet Engineering College, Sylhet, seeking an entry-level position to apply my skills in React, HTML, CSS, Tailwind, C, C++, and Python. Eager to contribute to a dynamic team and gain hands-on experience in the tech industry.
                        </p>
                        <h3 className="text-lg font-semibold mt-6 mb-2">Education</h3>
                        <p className="text-justify">
                            Bachelor of Science in Computer Science and Engineering (CSE)<br />
                            Sylhet Engineering College, Sylhet<br />
                            Expected Graduation: 2025
                        </p>
                        <h3 className="text-lg font-semibold mt-6 mb-2">Skills</h3>
                        <ul className="list-disc pl-6">
                            <li>Web Development: React, HTML, CSS, Tailwind</li>
                            <li>Programming Languages: C, C++, Python</li>
                            <li>Other Skills: Basic understanding of software development principles, problem-solving, and debugging</li>
                        </ul>

                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Projects</h3>
                        <div className="mb-4">
                            <h4 className="text-md font-semibold">EduQuest Learning Platform</h4>
                            <ul className="list-disc pl-6">
                                <li>Developed a learning platform using React, HTML, CSS, and Tailwind</li>
                                <li>Implemented responsive design to ensure usability across different devices</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-md font-semibold">JobVoyage Job Portal</h4>
                            <ul className="list-disc pl-6">
                                <li>Created a job portal application using React</li>
                                <li>Focused on user-friendly interface and functionality</li>
                            </ul>
                        </div>
                        <h3 className="text-lg font-semibold mt-6 mb-2">Academic Projects</h3>
                        <div className="mb-4">
                            <h4 className="text-md font-semibold">Inward Chat Bot for Admission Helpline</h4>
                            <p className="text-justify">Description of the project<br />Technologies used: Python, rasa</p>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-md font-semibold">Benchmarking Software</h4>
                            <p className="text-justify">Description of the project<br />Technologies used: C#</p>
                        </div>
                        <h3 className="text-lg font-semibold mt-6 mb-2">Personal Projects</h3>
                        <p className="text-justify">Simple ATM Project Using C++</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AboutMe;
