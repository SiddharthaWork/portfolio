"use client"
import { title } from 'process'
import React from 'react'
import project1 from "../assets/able.png"
import project2 from "../assets/sneaker.jpg"
import project3 from "../assets/1x.jpg"
import { motion } from "framer-motion"
import Image from 'next/image'
import { AiOutlineGithub } from 'react-icons/ai'
const data = [
    {
        title: "Able-Elearning Platform",
        desc: `Developed a LMS with course creation, user management, secure
 authentication, and payment processing, featuring a responsive UI
 and integrated file and video uploads.`,
        devstack: `Nextjs, TypeScript, React, MySql, Prisma, Stripe,
 Tailwind CSS, Shadcn UI, UploadThing`,
        link: "#",
        git: "https://github.com/SiddharthaWork/able-elearning-platform",
        src: project1,

    },
    {
        title: "Sneakerhead E-commerce Platform",
        desc: ` Designed and built a sneaker-focused e-commerce platform
 featuring a robust backend for efficiently managing products, user
 accounts, and orders, with an intuitive frontend for a seamless
 shopping experience and enhanced user engagement.`,
        devstack: "HTML, CSS, JavaScript, PHP, MySql",
        link: "#",
        git: "https://github.com/SiddharthaWork/Sneakerhead-Ecommerce-Website-",
        src: project2,

    },
    {
        title: "1xSpeed Typing Speed Test",
        desc: ` Crafted a typing speed test website reminiscent of platforms such
 as Monkeytype with real-time typing tests, accuracy tracking, and
 performance metrics.`,
        devstack: "Html, CSS, JavaScript",
        link: "#",
        git: "https://github.com/SiddharthaWork/1xSpeed-Test-Your-Speed",
        src: project3,

    },
]
const Portfolio = () => {
    return (
        <div className='text-white bg-gradient-to-b from-black via-[#11081d] to-black  py-18 mt-52 mb-48' id="projects">
            <h1 className="text-white text-6xl font-semibold max-w-[320px] mx-auto p-4 my-12 ">
                My
                <span className='text-orange-400 pl-2'>
                    Projects
                </span>
            </h1>

            <div className="px-6 md:px-0 max-w-[1000px] mx-auto space-y-24 mt-32 ">
                {
                    data.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 75 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className={`mt-12 flex flex-col  ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row gap-12 "}`}
                        >

                            <div className='space-y-2 max-w-[550px]'>
                                <h2 className='text-7xl my-4 text-white/70  '>{`0${index + 1}`}</h2>
                                <h2 className='text-4xl'>{project.title}</h2>
                                <p className='text-lg break-words p-4 text-white/70'>{project.desc}</p>
                                <p className='text-xl text-orange-500 font-semibold'>{project.devstack}</p>
                                <div className='w-64 h-[1px] bg-gray-400 my-4 '>
                                    {/* <a href="{project.link}" className='mr-6'>Link</a> */}

                                    <a href={project.git} target="_blank" rel="noopener noreferrer">
                                        <div className="flex items-center">
                                            <AiOutlineGithub className="mr-2" />
                                            <span className='hover:text-orange-400'>GitHub</span>
                                        </div>
                                    </a>

                                </div>

                            </div>

                            <div className='flex justify-center items-center'>
                                <Image
                                    src={project.src}
                                    alt={project.title}
                                    className='h-[350px] w-[500px] object-cover
                        rounded border border-gray-700 
                        '


                                />

                            </div>


                        </motion.div>
                    ))
                }

            </div>

        </div>
    )
}

export default Portfolio