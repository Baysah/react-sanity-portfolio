import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import background from '../lt-bg.jpg';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source){
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0])).catch(console.error);
    }, [])

    if(!author) return <div>Loading...</div>

    return (
        <main className="relative">
            <img src={background} alt="Coding Laptop" className="absolute w-full"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-800 rounded-lg shadow-2xl lg:flex -20">
                    <img src={urlFor(author.authorImage).url()} alt={author.name} className="rounded w-32 h32 lg:w-64 lg:w-64 mr-8"/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-blue-600 mb-4">
                            Hey there. I'm{" "}
                            <span className="text-blue-100">
                                {author.name}
                            </span>
                        </h1>
                        <div className="prose lg:prose-lx text-white">
                        <BlockContent blocks={author.bio} 
                        projectID="dk3c5q24" 
                        dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

