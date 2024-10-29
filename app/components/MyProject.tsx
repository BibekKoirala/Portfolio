import React from "react";

import Project from '@/app/components/Project';

import INFO from "../MyInfo";


const MyProjects = () => {
    return (
        <section id="projects" className="bg-color6 py-10">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-color3">Projects</h2>
            </div>
            <hr />
            <div className=" mt-[60px] grid gap-20 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 px-[40px]">

                {INFO.projects.map((project, index) => (
                    project.pinned &&
                    <div className="all-projects-project" key={index}>
                        <Project
                            poster={project.poster}
                            logo={project.logo}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            demo={project.demo}
                            badges={project.badges}
                        />
                    </div>
                ))}
            </div>

        </section>

    );
};

export default MyProjects;
