"use client"
import React from 'react'
import Image from 'next/image'
import aboutImg from '../assets/profilepic.png'
import book from '../assets/book.png'
import pc from '../assets/pc.png'
import card from '../assets/resumeimage-removebg-preview.png'
import finance from '../assets/finance.png'
import Link from 'next/link'
import { AiOutlineDownload } from 'react-icons/ai'


const About = () => {
    return (
        <div className='max-w-[1200px] mx-auto  mb-10' id="about">

            <h1 className="text-white text-6xl font-semibold max-w-[320px] mx-auto p-4 mb-4">
                About
                <span className='text-orange-400 pl-2'>
                    Me
                </span>

            </h1>

            <div className='px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center'>


                <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-black/20 rounded-xl overflow-hidden '>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xyz '> </div>
                    <div className='flex flex-row p-6'>
                        <Image
                            src={book}
                            alt='book'
                            className='w-auto h-[130px]'
                        />
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-bold text-white/80 '>Education
                            </h2>
                            <p className='text-lg text-white/70 mt-2'>
                                I am a final-year BCA student, currently focusing on technologies such as React, Next.js, and Tailwind CSS.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-black/20 rounded-xl overflow-hidden '>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xyz '> </div>
                    <div className='flex flex-row p-6'>
                        <Image
                            src={finance}
                            alt='book'
                            className='w-auto h-[130px]'
                        />
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-bold text-white/80 '>Problem Solving
                            </h2>
                            <p className='text-lg text-white/70 mt-2'>
                                I tackle challenges with a logical / systematic approach.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-black/20 rounded-xl overflow-hidden '>
                    {/* <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xyz '> </div> */}
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xyz pointer-events-none'> </div>
                    <div className='flex flex-row p-6'>
                        <Image
                            src={card}
                            alt='book'
                            className='w-auto h-[130px]'
                        />
                        <div className='flex flex-col mt-4'>
                            <h2 className='text-2xl font-bold text-white/80 '>Resume
                            </h2>
                            <a className='pt-2'

                            >
                                <button
                                    className="bg-white/10 px-4 py-2 rounded-lg cursor-pointer"
                                    onClick={() => window.open("https://drive.google.com/file/d/1xNsVzZo5aKQ0liIvln5igkrxI9TRE-9Q/view?usp=sharing", "_blank")}
                                >
                                    <div className="flex items-center">
                                        <AiOutlineDownload className="mr-2" />
                                        <span>Download</span>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-black/20 rounded-xl overflow-hidden '>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xyz '> </div>
                    <div className='flex flex-row p-6'>
                        <Image
                            src={pc}
                            alt='book'
                            className='w-auto h-[130px]'
                        />
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-bold text-white/80 '>Technical Skills
                            </h2>
                            <p className='text-lg text-white/70 mt-2'>
                                As a Fullstack Web Devlopment Enthusiastic, I have experience with React, Next.js, PHP, MySql and Tailwind CSS.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About