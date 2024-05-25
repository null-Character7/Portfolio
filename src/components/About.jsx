import React from 'react'
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"

function About() {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-4 text-center text-4xl'>
                About <span className='text-neutral-500'>Me</span>
            </h1>
            <div className='flex felx-wrap'>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-2xl' src={aboutImg} alt="about" />
                    </div>
                </motion.div>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{x:100,opacity:0}}
                transition={{duration:0.5}}
                
                className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About