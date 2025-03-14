"use client"
import Image from "next/image"
import cursor from "../assets/icon1.png"
import message from "../assets/icon2.png"
import { motion } from "framer-motion"
import profilepic from "../assets/white-man-typing-on-apple-computer-wearing-black-hoodie.png"


const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#87CEEB_80%)]">
        <div className="absolute rounded-[50%] w-[3000px] h-[1300px]
            top-[550px] left-[50%] -translate-x-1/2
            bg-[radial-gradient(closest-side,#000_80%,#2B1942)]
        
        
        "></div>
        <div className="relative">
            <div className="text-7xl font-bold text-center">
                <h1 className="text-white">Hi, I am</h1>
                <h1 className="text-[#E48A57]">Siddhartha Shrestha</h1>
            </div>

            <motion.div className="hidden md:block cursor-pointer absolute left-[280px] top-[160px]"
            drag
            animate={{
              x: 10,
              transition: {
                duration: 2,
                ease: 'easeInOut',
              },}}
            >
              <Image
              src={cursor}
              height="170"
              width="170"
              alt="cursor"
              draggable='false'
              className=""
              />
            </motion.div>

            <motion.div className="hidden md:block cursor-pointer absolute right-[220px] top-[20px]"
            drag
            animate={{
              y: 10,
              transition: {
                duration: 3,
                ease: 'easeInOut',
              },}}
            >
              <Image
              src={message}
              height="120"
              width='120'
              alt="cursor"
              draggable='false' 
              className=""
              />
            </motion.div>

            <p className="text-xl max-w-[500px] text-center mx-auto mt-8 text-white/80">
                I am a full-stack developer focused on creating websites that provide the best experience for users.
            </p>
            <Image
            src={profilepic}
            alt="profile"
            className="w-[600px] pt-20 h-auto mx-auto"
            
            />
        </div>
            
        </div>

  )
}

export default Hero