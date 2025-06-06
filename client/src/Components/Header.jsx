import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {motion} from "framer-motion"
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const sampleImages = [
        assets.sample_img_1,
        assets.sample_img_2,
        assets.sample_img_3,
        assets.sample_img_4,
        assets.sample_img_5,
        assets.sample_img_6
    ];

   const {user, setShowLogin} = useContext(AppContext)
   const navigate = useNavigate() 
   const onClickHandler = ()=>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
   }

  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
    initial={{opacity:0.1, y:100}}
    transition={{duration:1.2}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}>

      <motion.div className='text-xl text-stone-600 inline-flex text-center gap-2 bg-white px-6 py-0 rounded-full border-neutral-500'
    initial={{opacity:0, y:-20}}
    transition={{delay: 0.1, duration:1.0}}
    animate={{opacity:1, y:0}}>
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>

      <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>
        Turn Text To <span className='text-purple-700'
    initial={{opacity:0}}
    transition={{delay: 0.4, duration:2}}
    animate={{opacity:1}}>Image</span> In Seconds.</motion.h1>

        <motion.p className='text-center max-w-xl mx-auto mt-5 text-xl'
    initial={{opacity:0, y:20}}
    transition={{delay: 0.6, duration:0.8}}
    animate={{opacity:1, y:0}}>Welcome to the future where your brain’s wildest 
        ideas get dragged into reality by raw AI power. 
        This isn’t just a text-to-image converter, it’s a chaos engine for your imagination.
        You think it, we ink it. 🎨⚡</motion.p>

        <motion.button onClick={onClickHandler} className='cursor-pointer sm:text-lg text-white bg-black w-auto mt-8 
        px-12 py-2.5 flex items-center rounded-full gap-2 hover:scale-105 transition-all 
        duration-500'
    initial={{opacity:0}}
    transition={{default:{duration:0.5}, opacity:{delay:0.8, duration:1}}}
    animate={{opacity:1}}
    whileHover={{scale:1.05}}
    whileTap={{scale:0.95}}>
    
        Generate Images 
        <img className='h-6' src={assets.star_group} alt="" /></motion.button>

        <motion.div className='flex flex-wrap justify-center mt-16 gap-3'
    initial={{opacity:0}}
    transition={{delay: 1, duration:1}}
    animate={{opacity:1}}>
            {sampleImages.map((item, index)=>(
                <motion.img className='rounded hover:scale-105 transition-all duration-300 
                cursor-pointer max-sm:w-10'
                whileHover={{scale:1.05, duration:0.1}}
                 src={item} 
                 alt="" key={index} width={70} />
            ))}
        </motion.div>
        <motion.p className='mt-2 text-neutral-600'
    initial={{opacity:0}}
    transition={{delay: 1.2, duration:0.8}}
    animate={{opacity:1}}>Generated Images From InkPix</motion.p>
    </motion.div>
  )
}

export default Header
