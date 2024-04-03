import { TextField } from '../../component/FormInput/TextField'
import { GradientButton } from '../../component/Buttons/RoundedButton'
import { useNavigate } from 'react-router-dom'
import AuthIcon from '../../assets/images/auth-art.png'

export const ForgotPassword = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-white lg:px-28 pt-10 rounded-lg'>
            <div className='max-w-[502px] mx-auto '>
                <h4 className='text-[1.4rem] font-600 mb-3'>Forgot Password</h4>
                <div className='text-[18px] text-[#5E5E5E] mb-[40px] text-center'>
                    A verification code will be sent to the Email provided.
                </div>
              
                <TextField
                    label={'User ID/Email Address/ Phone Number'}
                    required={true}
                    onChange={() => null} />

                <div>
                    <GradientButton label={'Continue'} action={() => navigate('/auth/forgot-password-otp')} />
                </div>
            </div>
            <img src={AuthIcon} className='-mt-5 h-40 -ml-28'/>
        </div>
    )
}
