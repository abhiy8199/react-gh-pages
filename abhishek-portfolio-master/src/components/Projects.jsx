import React from "react";
import contactManager from '../assets/contactManager.png';
import restaurant from '../assets/restaurant.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={git} target="_blank" rel="noopener noreferrer">
                <img
                    className="w-full rounded-t-lg h-auto object-cover"
                    src={image}
                    alt={title}
                />
            </a>
            <div className="p-4">
                <h5 className="text-2xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                    {title}
                </h5>
                <p className="font-normal text-gray-300 dark:text-gray-400 text-sm mt-2">
                    {description}
                </p>
            </div>
            <div className="m-4 flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className="text-[14px] text-blue-500"
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a
                    href={git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-300 border border-gray-200 rounded-lg shadow px-3 py-1 hover:text-green-500 duration-300"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 'E-Restaurant Website',
        description:
            'E-Restaurant is a vibrant online food ordering web application developed using HTML5, CSS3, JavaScript, Java Servlets, and MySQL. It offers smooth user experience, secure user authentication, and real-time order tracking to streamline restaurant operations and enhance customer satisfaction.',
        image: restaurant,
        git: 'https://github.com/abhiy8199/E-restaurant',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Java Servlets', 'MySQL']
    },
    {
        title: 'Advance Contact Manager',
        description:
            'Advance Contact Manager is a secure and efficient contact management system built using Java, Spring Boot, and Spring Data JPA. It features robust user authentication with Spring Security and a responsive UI developed with HTML5, CSS3, Bootstrap, and JavaScript for seamless user interaction.',
        image: contactManager,
        git: 'https://github.com/abhiy8199', // Update if you have a dedicated repo
        technologies: ['Java', 'Spring Boot', 'Spring Security', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript']
    }
];

export default Projects;
