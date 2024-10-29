import React from "react";
import { FaCode, FaCss3Alt, FaFacebook, FaGithub, FaHtml5, FaInstagram, FaJs, FaLinkedin, FaNodeJs, FaPython, FaReact, FaRobot } from "react-icons/fa";
import INFO from "../MyInfo";
import Works from "./Works";
import { RiNextjsFill } from "react-icons/ri";
import { SiLeetcode, SiMongodb } from "react-icons/si";


function About() {
  const skills = [
    { name: "JavaScript", icon: <FaJs size={20} /> },
    { name: "ReactJS", icon: <FaReact size={20} /> },
    { name: "NextJS", icon: <RiNextjsFill size={20} /> },
    { name: "Node.js", icon: <FaNodeJs size={20} /> },
    { name: "Express", icon: <FaCode size={20} /> },
    { name: "MongoDB", icon: <SiMongodb size={20} /> },
    { name: "Python", icon: <FaPython size={20} /> },
    { name: "Machine Learning", icon: <FaRobot size={20} /> },
    { name: "Hugging Face", icon: <FaRobot size={20} /> },
    { name: "LLMs", icon: <FaRobot size={20} /> },
    { name: "AI", icon: <FaRobot size={20} /> },
    { name: "CSS", icon: <FaCss3Alt size={20} /> },
    { name: "HTML", icon: <FaHtml5 size={20} /> }
  ];

  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-color3">About Me</h2>
      </div>
      <hr />

      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0">
        {/* Left Column - About Text */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left ">
          <h3 className="text-xl font-semibold mb-4 text-color7">{INFO.about.title}</h3>
          <p className="text-color8 mb-6 text-justify ">{INFO.about.description}</p>
          <Works />
          {/* Skills Section */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <span key={index} className="flex px-4 py-2 text-sm font-medium bg-gray-200 rounded-full">
                {skill.icon} &nbsp; {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column - Image and Socials */}
        <div className="md:w-1/2 d:pl-8 flex flex-col items-center p-7">
          <div className="bg-[#b4bec5] rounded-md shadow-lg flex flex-col items-center" style={{ width: '100%' }}>

            {/* Profile Image */}
            <div className="bg-[#b4bec5] flex items-center" >
              <img
                src="/images/profile_image.JPG"
                alt="Profile"
                className=" object-cover h-[450px] opacity-90 mix-blend-multiply"
              />
            </div>

            {/* Social Icons */}
            <div className="bg-gray-800 p-4 rounded-md flex space-x-4 justify-center " style={{ width: '100%' }}>
              <a href={INFO.socials.facebook} target="_blank" className="text-white hover:text-blue-600 hover:animate-bounce transition-all duration-150">
                <FaFacebook size={36} />
              </a>
              <a href={INFO.socials.github} target="_blank" className="text-white hover:text-gray-400 hover:animate-bounce transition-all duration-150">
                <FaGithub size={36} />
              </a>
              <a href={INFO.socials.instagram} target="_blank" className="text-white hover:text-pink-500 hover:animate-bounce transition-all duration-150">
                <FaInstagram size={36} />
              </a>
              <a href={INFO.socials.leetcode} target="_blank" className="text-white hover:text-orange-400 hover:animate-bounce transition-all duration-150">
                <SiLeetcode size={36} />
              </a>
              <a href={INFO.socials.linkedin} target="_blank" className="text-white hover:text-blue-700 hover:animate-bounce transition-all duration-150">
                <FaLinkedin size={36} />
              </a>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center w-full text-color4">
            <div>
              <h3 className="text-lg font-semibold text-color4">Phone</h3>
              <p>{INFO.main.phone}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-color4">Email</h3>
              <p>{INFO.main.email}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-color4">Website</h3>
              <p>{INFO.main.website}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
