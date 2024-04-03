import React from 'react'
import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci'
import { IoLogoTwitter } from 'react-icons/io5'
import {BiLogoFacebook} from 'react-icons/bi'

export const Footer = () => {
  return (
    <div className='bg-[#AB3C40CC] text-white'>
    <div className=' flex font-[400] text-[14px] justify-between px-14 py-10 text-left'>
        <div className='w-3/12'>
            <h3 className='khand text-[33px] font-[700]'>NCHORO WEALTH</h3>
            <p>Nchoro Wealth is the ultimate gaming platform where 
                you can play, place a wager, and win real money. Enjoy 
                thrilling games, stake your money, and get a shot at 
                lucrative rewards.
            </p>
        </div>
        <div className='space-y-8'>
            <p>Community</p>
            <p>FAQs</p>
            <p>About</p>
        </div>
        <div className='space-y-8'>
            <p className=''>Terms of Use</p>
            <p>Privacy Statement</p>
            <p>Contact</p>
        </div>
        <div className='space-y-4'>
            <p>Get in Touch</p>
            <div className='flex space-x-3 justify-between'>
                <span className='border h-8 w-8 flex align-middle rounded-full'>
                    <IoLogoTwitter className='m-2 text-[18px]'/>
                </span>
                <span className='border h-8 w-8 flex align-middle rounded-full'>
                    <BiLogoFacebook className='m-auto text-[23px]'/>
                </span>
                <span className='border h-8 flex align-middle w-8 rounded-full'>
                    <CiInstagram className='m-auto text-[23px]'/>
                </span>
            </div>
        </div>
    </div>
    <p> &copy; Eduverse. 2023</p>
</div>
  )
}
