import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import INFO from "../MyInfo";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-color3 text-white py-6">
            <div className="container mx-auto text-center space-y-4">
                {/* Social Media Links */}
                <div className="bg-color4 p-4 rounded-md flex space-x-4 justify-center " style={{ width: '100%' }}>
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

                {/* Copyright */}
                <div className="text-color2 text-sm">
                    &copy; {new Date().getFullYear()} Bibek Koirala. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
