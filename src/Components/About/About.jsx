import React from 'react';
import Profile_icon from '../../assets/profile1.jpg';
import { IoArrowForward } from 'react-icons/io5';

const About = () => {
    return (
        <div
            id="About"
            className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 md:mb-4 md:mt-28"
        >
            <div>
                <h2 className="text-2xl md:text-4xl font-bold">About me</h2>
                <div className="md:flex flex-wrap flex-col md:flex-row justify-center items-center md:items-center">
                    <img
                        className="rounded-lg mt-5 md:h-80"
                        src={Profile_icon}
                        alt="profile icon"
                    />
                    <ul>
                        <div className="flex gap-3 py-4 md:ml-20 mt-8 md:mt-0">
                            <IoArrowForward size={30} className="mt-1" />
                            <span className="w-96">
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Full Stack Web Developer
                                </h1>
                                <p
                                    className="text-sm md:text-md leading-tight mt-1"
                                    style={{ textAlign: 'justify' }} // Inline style for justification
                                >
I'm Reshmi H L, a Full Stack Web Developer with over five years of experience building scalable, high-performance web applications. I specialize in technologies such as React, Angular, Node.js, Python, C#, JavaScript (ES6+), HTML5, and CSS3. I also have strong experience with WordPress (Gutenberg, ACF, WPML), RESTful APIs, and performance optimization.

<br /><br />

I'm passionate about creating responsive, accessible (WCAG 2.1), and multilingual web solutions. My development approach focuses on clean code, usability, and scalability. I’m currently deepening my expertise in headless CMS, cloud-based deployments (AWS, Azure), and Agile workflows to build future-proof and user-friendly applications.
                                </p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
