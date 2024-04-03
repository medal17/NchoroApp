import React, { useState } from 'react'
import { TabbbedButton } from '../../component/Buttons/TabbbedButton'
import { Signup } from './components/signup'
import { Signin } from './components/signin'
import AuthIcon from '../../assets/images/auth-art.png'

export const Authentication = () => {
    const [pickedTab, setPickedTab] = useState('Register')
    console.log(pickedTab)
  return (
    <div className='bg-white pt-10 h-4/6 md:w-[979px] w-[90vw] text-left rounded-xl'>
        <div className='mx-auto w-fit mb-5'>
        <TabbbedButton 
            list={['Register', 'Login']} 
            setPicked={setPickedTab} 
            picked={pickedTab}
        />
        </div>
        {pickedTab==='Register'?
        <Signup/>:
        <Signin/>}
        <img src={AuthIcon} className='-mt-10'/>

    </div>
  )
}
