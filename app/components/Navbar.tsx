"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-color3 text-color2 px-4 py-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-3xl font-semibold hover:text-accent transition-colors">
                    Bibek Koirala
                </Link>

                {/* Menu for Desktop */}
                <div className="hidden md:flex space-x-8">
                    <Link href="#about" className="hover:text-accent text-xl transition-colors">
                        About
                    </Link>
                    <Link href="#projects" className="hover:text-accent text-xl transition-colors">
                        Projects
                    </Link>
                    <Link href="#education" className="hover:text-accent text-xl transition-colors">
                        Education
                    </Link>

                </div>

                {/* Call-to-Action Button */}
                <Link href="#contact" className="hidden md:inline-block bg-color4 text-color6 hover:bg-color5 px-4 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                    Get in Touch
                </Link>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none text-color2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-4 mt-4 text-center">
                    <Link href="#about" className="hover:text-accent text-xl transition-colors">
                        About
                    </Link>
                    <Link href="#projects" className="hover:text-accent text-xl transition-colors">
                        Projects
                    </Link>
                    <Link href="#skills" className="hover:text-accent text-xl transition-colors">
                        Skills
                    </Link>
                    <Link href="#contact" className="hover:text-accent text-xl transition-colors">
                        Contact
                    </Link>
                    <Link href="#contact" className="bg-color4 text-color6 px-4 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                        Get in Touch

                    </Link>
                </div>
            )}
        </nav>
    );
}
