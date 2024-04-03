import { TextField } from '../../../component/FormInput/TextField'
import { GradientButton, RoundedButton } from '../../../component/Buttons/RoundedButton'
import { GoogleIcon } from '../../../assets/icons/google-icon'
import { FacebookIcon } from '../../../assets/icons/facebook-icon'
import { Link } from 'react-router-dom'
import AuthIcon from '../../../assets/images/auth-art.png'

export const Signin = () => {
    return (
        <div className='max-w-[502px] mx-auto'>
            <div className='text-[18px] text-[#5E5E5E] mb-[40px] text-center'>
                Login to our Nchoro Spin Wheel account to keep enjoying an exhilarating
                 wealth distribution experience like no other.
            </div>
            <div>
                <RoundedButton label={'Login with Google'} icon={<GoogleIcon />} action={() => null} />
                <RoundedButton label={'Login with Facebook'} icon={<FacebookIcon />} action={() => null} />
            </div>

            <div className='flex text-black justify-between my-8'>
                <div className='h-[0.1px] w-5/12 my-auto bg-slate-400'></div>
                Or<div className='h-[0.1px] w-5/12 my-auto bg-slate-400' />
            </div>
            <TextField
                label={'User ID/Email Address'}
                required={true}
                onChange={() => null} />

            <TextField
                label={'Password'}
                type='password'
                required={true}
                onChange={() => null}
            />

            <div className='mt-10'>
                <GradientButton label={'Create Account'} action={() => null} />
                <div className='flex justify-between'>
                    <div className='flex text-[#868686] mt-[1rem]'>
                        <input type='checkbox' className='h-[1.5rem] w-[1.5rem] bg-red-900 accent-white mr-4' />
                        <div>
                            Keep me logged in
                        </div>
                    </div>
                    <Link className='my-auto' to={'forgot-password'}>Forgot Password</Link>
                </div>
            </div>
        </div>
    )
}
