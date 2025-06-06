import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      <img src={assets.footer_logo} alt="" width={150} />
      <p className='flex-1 border-l border-gray-400 pl-14 text-sm text-gray-500 max-sm:hidden'>Copyright @PrajwalPB | All Rights Reserved</p>
      <div className='flex gap-2.5 cursor-pointer'>
        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/prajwalpb/" target="_blank">
        <img src={assets.linkedin_icon} alt="" width={35} /></a>
       <a rel="noopener noreferrer" href='https://www.instagram.com/prajwallpb' target="_blank"> 
       <img src={assets.instagram_icon} alt="" width={35} /></a>
      </div>
    </div>
  )
}

export default Footer
