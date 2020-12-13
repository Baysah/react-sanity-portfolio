import React, {useEffect, useState} from 'react';
import sanityClient from '../client';

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date, 
            place,
            description,
            projectType,
            link,
            tags,
            mainImage{
                asset->{
                    _id, 
                    url
                },
                alt
            }
        }`).then((data) => setProjectData(data)).catch(console.error);
    }, [])
    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">
                    My Recent Work
                </h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    Welcome to my projects page. 
                </h2>
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white ">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700 px-5">
                            <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">{project.title}</a>
                        </h3>
                        <img 
                            src={project.mainImage.asset.url}
                            alt={project.mainImage.alt}
                        />
                        <div className="text-gray-500 text-xs space-x-4 p-5">
                            <span>
                                <strong className="font-bold">
                                    Finished on
                                </strong>: {" "} {new Date(project.date).toLocaleTimeString()}
                            </span>
                            <span>
                                <strong className="font-bold">Company</strong>: { " " } {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "} {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {project.description}
                            </p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                            View The Project{" "}
                                <span role="img" aria-label="right pointer"></span>
                            </a>
                            
                        </div>
                        
                    </article>
                    ))}
                </section>
                
            </section>
        </main>
    )
}

