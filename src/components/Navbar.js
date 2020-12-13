import React from 'react'
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function Navbar() {
    return (
        <header className="bg-red-600">
                    <div className="container mx-auto flex justify-between">
                        <nav className="flex ">
                            <NavLink to="/" exact activeClassName = "text-white" className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-3xl font-bold cursive tracking-widest">
                                Baysah Korti
                            </NavLink>
                            <NavLink to="/about" activeClassName = "text-red-100 bg-red-700" className="inline-flex items-center py-3 px-3 my-6 text-red-200 hover:text-green-800 font-bold cursive tracking-widest">
                                About Me!
                            </NavLink>
                            <NavLink to="/post" activeClassName = "text-red-100 bg-red-700" className="inline-flex items-center py-3 px-3 my-6 text-red-200 hover:text-green-800 font-bold cursive tracking-widest">
                                Blog Posts
                            </NavLink>
                            <NavLink to="/project" activeClassName = "text-red-100 bg-red-700" className="inline-flex items-center py-3 px-3 my-6 text-red-200 hover:text-green-800 font-bold cursive tracking-widest">
                                Projects
                            </NavLink>
                        </nav>
                        <div className="inline-flex py-3 px-3 my-6">
                            <SocialIcon url="https://www.facebook.com/GreaterHeightsWebDev" className="mr-4 inline-flex items-center" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                            <SocialIcon url="https://www.linkedin.com/in/baysah-korti-b3a24580/" className="mr-4 inline-flex items-center" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                            <SocialIcon url="https://twitter.com/k_baysah" className="mr-4 inline-flex items-center" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                        </div>
                    </div>
                </header>
    )
}