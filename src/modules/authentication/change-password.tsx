import { TextField } from '../../component/FormInput/TextField'
import { GradientButton } from '../../component/Buttons/RoundedButton'
import { useNavigate } from 'react-router-dom'
import AuthIcon from '../../assets/images/auth-art.png'

export const ChangePassword = () => {
    const navigate = useNavigate()
 
    return (
        <div className='bg-white lg:px-28 pt-10 rounded-lg'>
            <div className='max-w-[502px] mx-auto '>
                <h4 className='text-[1.4rem] font-600 mb-3'>Reset Password</h4>
                <div className='text-[18px] text-[#5E5E5E] mb-[40px] text-center'>
                    Enter a New Password that only you will always remember and you are good to go.
                </div>
                <div className='W-fit justify-center'>
                    <TextField
                        label={'New Password'}
                        type='password'
                        required={true}
                        onChange={() => null}
                    />

                    <TextField
                        label={'Confirm Password'}
                        type='password'
                        required={true}
                        onChange={() => null}
                    />
                </div>
                <div className='mt-10'>
                    <GradientButton label={'Reset Password'} action={() => navigate('/auth/password-success')} />
                </div>
            </div>
            <img src={AuthIcon} className='-mt-5 h-40 -ml-28'/>
        </div>
    )
}
