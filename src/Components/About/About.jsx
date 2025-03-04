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
                                    Web Developer
                                </h1>
                                <p
                                    className="text-sm md:text-md leading-tight mt-1"
                                    style={{ textAlign: 'justify' }} // Inline style for justification
                                >
                                    I'm Reshmi H L, a Web Developer with over four years of experience in building scalable, high-performance websites. My expertise includes WordPress (Gutenberg, ACF, WPML), PHP, HTML, CSS, JavaScript (ES6+), and SEO optimization. I have a strong foundation in responsive web design, accessibility (WCAG 2.1), API integrations, and performance optimization.

<br /><br />

I am passionate about creating dynamic, multilingual, and user-friendly web solutions. My favorite technologies to work with include WordPress, PHP, JavaScript, and Vue.js, but I’m always eager to explore new tools and frameworks. Currently, I’m expanding my skills in headless WordPress, REST APIs, and Agile development to build more flexible and future-proof web applications.
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
