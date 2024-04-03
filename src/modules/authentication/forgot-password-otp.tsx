import { TextField } from '../../component/FormInput/TextField'
import { GradientButton } from '../../component/Buttons/RoundedButton'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import AuthIcon from '../../assets/images/auth-art.png'
import OtpInput from 'react18-input-otp'

export const ForgotPasswordOTP = () => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate()
    const handleChange = (enteredOtp: string) => {
        setOtp(enteredOtp);
    };
    return (
        <div className='bg-white lg:px-28 pt-10 rounded-lg'>
            <div className='max-w-[502px] mx-auto '>
                <h4 className='text-[1.4rem] font-600 mb-3'>Enter OTP</h4>
                <div className='text-[18px] text-[#5E5E5E] mb-[40px] text-center'>
                    We sent a verification code to JohnDoe 11@gmail.com
                    Enter the 4-digit code to verify your email address
                </div>
                <div className='W-fit flex justify-center'>
                <OtpInput
                    isInputNum 
                    inputStyle={` text-2xl focus:outline-0 text-center font-[900] bg-[#DDD] w-[120px] mx-2`}
                    className={`w-[4.06rem] rounded-lg h-[4.06rem] flex justify-center bg-[#DDD] text-center text-4xl font-[800] mx-2`}
                    value={otp}
                    onChange={handleChange}
                    numInputs={4}
                />
                </div>


                <div className='mt-12'>
                    <GradientButton label={'Reset Password'} action={() => navigate('/auth/change-password')} />
                    <p className='mt-3'>Didn’t get verification code?<span className='text-purple-800 pl-2'>Resend Otp</span></p>
                </div>
            </div>
            <img src={AuthIcon} className='-mt-5 h-40 -ml-28'/>
        </div>
    )
}
