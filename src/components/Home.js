import React from 'react';
import bgImage from "../mt-bg-1.jpg";

export default function Home() {
    return (
        <main>
                <img src={bgImage} alt="Mountain View" className="absolute object-cover w-full h-full"/>
                <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                    <h1 className="text-6xl text-blue-500 cursive leading-none lg:leading-snug home-name ">Aloha, I'm Baysah Korti.</h1>
                </section>
            </main>
    )
}
