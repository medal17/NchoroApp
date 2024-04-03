import React from 'react'
import { GradientButton, OutlinedGradientButton } from '../../../component/Buttons/RoundedButton'
import { useNavigate } from 'react-router-dom'
import { SuccessIcon } from '../../../assets/icons/success-icon'
import AuthIcon from '../../../assets/images/auth-art.png'

export const PasswordResetSuccess = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-white lg:px-28 pt-20 rounded-lg'>
            <div className='max-w-[502px] mx-auto '>
                <div className='mx-auto w-fit'>
                    <SuccessIcon/>
                </div>
                <h2 className='text-[2.4rem] font-600 mb-3'>Reset Password Successful</h2>
                <div className='text-[18px] text-[#5E5E5E] mb-[40px] text-center'>
                    Hi John Doe, your account password has been reset successfully
                </div>

                <div className='mt-10'>
                    <GradientButton label={'Proceed to Login'} action={() => navigate('/auth/forgot-password-otp')} />       
                </div>
            </div>
            <img src={AuthIcon} className='-ml-28 h-36 -mt-10' />
        </div>
    )
}
