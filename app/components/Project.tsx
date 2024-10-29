"use client"
import React, { useState } from "react";
import { FaLaptopCode, FaLink, FaRobot } from "react-icons/fa";
import { badgesComponents } from "../badges";

interface ProjectProps {
	logo: string; // Poster image of the project
	poster: string;
	title: string;
	description: string;
	badges: string[];
	link: string;
	demo?: string; // Optional, so the "Demo" link appears conditionally
}

const Project = (props: ProjectProps) => {
	const { title, description, badges, link, demo, poster } = props;
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return (
		<>
			{/* Poster Image */}
			<div className="project-poster cursor-pointer transform transition duration-300 hover:-translate-y-2 rounded-lg shadow-2xl" onClick={openModal}>
				<img src={poster} alt="project poster" className="w-100 rounded-lg shadow-md" />
			</div>

			{/* Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
						<button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
							&times;
						</button>

						{/* Modal Content */}
						<div className="space-y-4">
							{/* Title */}
							<h2 className="text-xl font-bold text-center text-blue-900">{title}</h2>

							{/* Badges */}
							<div className="flex flex-wrap justify-center space-x-2 mb-4">
								{badges.map((skill, index) => (
									<span key={index} className="flex px-4 py-2 text-sm font-medium bg-gray-200 rounded-full my-2">
										{badgesComponents[skill as keyof typeof badgesComponents] ? badgesComponents[skill as keyof typeof badgesComponents] : <FaRobot />} &nbsp;	{skill}
									</span>


								))}
							</div>

							{/* Description */}
							<p className="text-gray-700 text-justify">{description}</p>

							{/* Links */}
							<div className="flex justify-center space-x-8 mt-4">
								{/* Repo Link */}
								<a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700 space-x-2">
									<FaLink />
									<span>Repo</span>
								</a>

								{/* Demo Link */}
								{demo && (
									<a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700 space-x-2">
										<FaLaptopCode />
										<span>Demo</span>
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Project;
