import { TextField } from '../../../component/FormInput/TextField'
import { GradientButton, RoundedButton } from '../../../component/Buttons/RoundedButton'
import { GoogleIcon } from '../../../assets/icons/google-icon'
import { FacebookIcon } from '../../../assets/icons/facebook-icon'

export const Signup = () => {
  return (
    <div className='max-w-[502px] mx-auto'>
      <div className='text-[18px] text-[#5E5E5E] mb-[63px] text-center'>
        Welcome to our Nchoro Spin Wheel platform! Register now for an exhilarating wealth distribution experience like no other.
      </div>
      <div>
        <RoundedButton label={'SignUp with Google'} icon={<GoogleIcon />} action={() => null} />
        <RoundedButton label={'SignUp with Facebook'} icon={<FacebookIcon />} action={() => null} />
      </div>

      <div className='flex text-black justify-between my-8'>
        <div className='h-[0.1px] w-5/12 my-auto bg-slate-400'></div>
        Or<div className='h-[0.1px] w-5/12 my-auto bg-slate-400' />
      </div>
      <TextField
        label={'User ID/Email Address'}
        placeholder=''
        required={true}
        onChange={() => null}
      />
      <TextField
        label={'Email Address'}
        required={true}
        onChange={() => null} />
      <TextField
        label={'Phone Number'}
        required={true}
        onChange={() => null}
      />
      <TextField
        label={'Password'}
        type='password'
        required={true}
        onChange={() => null}
      />

      <div className='mt-6 '>
        <GradientButton label={'Create Account'} action={() => null} />
        <div className='flex text-[#868686] mt-[1rem]'>
          <input type='checkbox' className='h-[2.5rem] w-[2.5rem] bg-red-900 accent-white mr-4' />
          <div>
            By creating an account, you agree to our
            Terms & Conditions and confirm
            that you are at least 18 years old or over
            and all information provided are true.
          </div>
        </div>
      </div>

    </div>

  )
}
