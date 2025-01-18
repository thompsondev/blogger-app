import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2  sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} alt='logo' loading='lazy' width={120}/>
        <p className='text-sm text-white'>All right reserved. Developered with ❤️ by THOMPSON </p>
        <div className='flex'>
            <Image src={assets.facebook_icon} alt='facebook' width={40} loading='lazy'/>
            <Image src={assets.twitter_icon} alt='facebook' width={40} loading='lazy'/>
            <Image src={assets.googleplus_icon} alt='facebook' width={40} loading='lazy'/>

        </div>
    </div>
  )
}

export default Footer