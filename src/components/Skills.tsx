// import React from 'react'
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub } from 'react-icons/fa'


// const skills = [
//     {
//         name: "HTML",
//         icon: <FaHtml5 size={140} />
//     },
//     {
//         name: "CSS",
//         icon: <FaCss3Alt size={140}/>
//     },
//     {
//         name: "Javascript",
//         icon: <FaJsSquare size={140}/>
//     },
//     {
//         name: "React",
//         icon: <FaReact size={140}/>
//     },
//     {
//         name: "Github",
//         icon: <FaGithub size={140} />
//     },
// ]
// const Skills = () => {

//   return (
//     <div className='bg-[linear-gradient(to_top,#000,#381a5F_80%)] py-32'>
//         <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>   
//         <h2 className='text-6xl font-bold mb-4'>Skills</h2>
//         <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
//             {skills.map((skill, index) => (
//                 <div key={index} className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl '>
//                 {skill.icon}
//                     <p className='mt-2 '>{skill.name}</p>
//                 </div>  
//             ))}
//         </div>
//     </div>
//     </div> 
//   )
// }

// export default Skills