import { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const ContactMeEmail = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            name,
            email,
            message
        };

        console.log(templateParams);

        emailjs.send('service_mlz4soe', 'template_xnys5cl', templateParams, '2O2gNH7luVlJHFwiJ')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to send the message, please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });

        e.target.reset();
    };

    return (
        <div className="max-w-md mx-auto p-10 pb-20 rounded-md shadow-sm bg-[#052949] mb-20">
            <h2 className="text-2xl font-bold text-center mb-4 text-teal-100">Contact Me</h2>
            <form onSubmit={sendEmail}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-teal-100">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-teal-100">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-teal-100">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-teal-100 text-[#052949] py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactMeEmail;
