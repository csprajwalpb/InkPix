import React from 'react'
import { assets } from '../assets/assets'
import {motion} from "framer-motion"


const Description = () => {
  return (
    <motion.div  
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8 '>Your words. Our AI. Endless creativity.</p>
      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg'/>
        <div>
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing AI-Powered Text to Image Generator</h2>
            <p className='text-gray-600 mb-4'>Say hello to effortless creativity. Our AI-powered text-to-image generator
            turns your words into eye-catching visuals in just seconds. 
            Whether you're a designer, content creator, or just someone with an idea, bring your imagination to life 
            with zero effort and zero limits. Just type what you see in your mind and watch it become reality.</p>

            <p className='text-gray-600'>Unleash your ideas like never before. With our AI-powered text-to-image generator, your words 
            become visuals in an instant. Whether it's a bold concept or a random thought, 
            just type it out and let the power of AI turn it into stunning, share-worthy art. 
            No skills needed, just imagination.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
