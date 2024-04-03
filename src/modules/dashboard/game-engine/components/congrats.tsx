import React from 'react'
import Congrats from '../../../../assets/images/tropy.png'

export const CongratsComponent = () => {
  return (
    <div className='h-screen absolute -mt-2 w-9/12 bg-[#000000ac]'>
        <img src={Congrats} className='mx-auto -mt-3'/>
    </div>
  )
}
