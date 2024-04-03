import React from 'react'
import { GradientButton, OutlinedGradientButton } from '../../../component/Buttons/RoundedButton'
import { useNavigate } from 'react-router-dom'
import {TbArrowForwardUp} from 'react-icons/tb'
import { SuccessIcon } from '../../../assets/icons/success-icon'

export const SignupSuccess = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-white lg:px-28 py-10 rounded-lg'>
            <div className='max-w-[502px] mx-auto '>
                <div className='mx-auto w-fit'>
                    <SuccessIcon/>
                </div>
                <h2 className='text-[2.4rem] font-600 mb-3'>Congratulations</h2>
                <div className='text-[18px] text-[#5E5E5E] mb-[40px] text-center'>
                    Hi John Doe, your account has succesfully been created
                </div>

               <div className='flex align-middle justify-center mb-10'>
                    <span className='my-auto mr-3'>USER ID:</span><b className='text-[1.4rem] my-auto'>NCRW-0101-5673</b>
               </div>

                <div>
                    <GradientButton label={'Continue'} action={() => navigate('/auth/forgot-password-otp')} />
                    <OutlinedGradientButton 
                        icon={<TbArrowForwardUp className='text-2xl'/>} 
                        label={'Share User ID'} 
                        action={() => navigate('/auth/forgot-password-otp')} 
                    />
                    
                </div>
            </div>
        </div>
    )
}
