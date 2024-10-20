"use client"
import Link from "next/link"
import React, { use, useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { motion } from "framer-motion"

const navlink = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Projects",
        path: "#projects"
    },
    {
        text: "Contact",
        path: "#contact"
    }
]


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav)// here the !nav means the opposite of the boolean value if true then it will be false and vice versa.
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuevarients = {
        open: {
            x: 0,
            transition: {
                stiffness: 100,
                damping: 15,
                type: "spring",
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 100,
                damping: 15,
                type: "spring",
            }
        }
    }

    return (
        <div className="text-white/70 pt-6">
            <div className="hidden md:flex items-center px-4 py-4 mx-auto max-w-[400px] ">
                <ul className="flex flex-row p-4 space-x-8 font-semibold">
                    {navlink.filter((link) => link.name).
                    map((link, index) => (
                        <li key={index}>
                            <Link href={link.path}>
                                <p>{link.name}</p>
                            </Link>
                        </li>
                    ))}


                    <li>
                        <a href="#contact" className="group">
                            <h1 className="text-lg cursor-pointer font-bold text-white/70">Contact Me</h1>
                            <div className="relative">
                                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                                <div className="mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full"></div>
                            </div>
                        </a>
                    </li>
                </ul>

            </div> 
            <div onClick={toggleNav} className="md:hidden absolute top-5
                                                    right-5
                                                    border
                                                    rounded 
                                                    text-white/70
                                                    border-white/70
                                                    p-2
                                                    z-50
                                                    ">

                {
                    nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />
                }
            </div>

                <motion.div 
                initial={false}
                animate={nav ? "open" : "closed"}
                variants={menuevarients}
                className="fixed left-0 top-0 w-full z-40 bg-black/90"
                >

                    <ul className="text-4xl font-semibold my-24 text-center space-y-8">

                        {navlink.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path} onClick={closeNav}>
                                    {link.name}
                                    {link.text}
                                </Link>
                            </li>
                        ))}  
                    </ul>
                </motion.div>



        </div>
    )
}

export default Navbar