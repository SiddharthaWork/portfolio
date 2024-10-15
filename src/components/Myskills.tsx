"use client"
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { SiCss3,SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiPhp, SiGit, SiMysql,} from 'react-icons/si'
const skills = [
    {
        text: "HTML",
        Icon: SiHtml5,
    },
    {
        text: "CSS",
        Icon: SiCss3,
    },
    {
        text: "Javascript",
        Icon: SiJavascript,
    },
    {
        text: "React",
        Icon: SiReact,
    },
    {
        text: "Next.js",
        Icon: SiNextdotjs,
    },
    {
        text: "Tailwind",
        Icon: SiTailwindcss,
    },
    {
        text: "Php",
        Icon: SiPhp,
    },
    {
        text: "Mysql",
        Icon: SiMysql,
    },
    {
        text: "Git",
        Icon: SiGit,
    },
]
const Myskills = () => {
  return (
      <div className='max-w-4xl mx-auto px-8 pt-24'>
        <h1 className="text-orange-400 text-6xl font-semibold max-w-[400px] mx-auto p-6 px-24 mb-2">
            Skills
           
        </h1>
        <HoverEffect items={skills}/>
    </div>
  )
}

export default Myskills