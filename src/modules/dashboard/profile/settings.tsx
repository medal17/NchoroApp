import { IoNotifications } from 'react-icons/io5';
import { GradientButton } from '../../../component/Buttons/RoundedButton';
import { Switch } from '../../../component/Buttons/Switch';
import { TextField } from '../../../component/FormInput/TextField';
import { HiMiniSpeakerWave } from 'react-icons/hi2'


export const Settings = () => {
  return (
    <div>
      <div className='lg:w-[500px] mb-10'>
        <div className=' border-b-4 border-[#9307E9] khand-subtitle text-[20px] w-fit mb-6'>
          Settings
        </div>
        <div className='khand-subtitle text-[20px] mb-5'> Change Password </div>
        <TextField label={'Old Password'} required={false} onChange={() => null} />
        <TextField label={'New Password'} required={false} onChange={() => null} />
        <div className='flex align-middle mt-2 my-5'>
          <input type='checkbox' className='mr-3' />
          <div>Your password must be at least 8 character</div>
        </div>
        <div className='w-[200px]'>
          <GradientButton label={'Save Details'} action={() => null} />
        </div>

        {/* <TextField label={'User ID'} type='checkbox' required={false} onChange={()=>null}/> */}
      </div>
      
      <div className='my-3 flex align-middle justify-between mt-5'>
          <div className='flex align-middle '>
            <HiMiniSpeakerWave className='text-xl mr-3' /> Game Sound
          </div>
          <Switch />
        </div>
        <div className='my-3 flex align-middle justify-between'>
          <div className='flex align-middle'>
            <IoNotifications className='text-lg my-auto mr-3' />
            <div className='my-auto'>Get Notified when users want to join a game</div>
          </div>
          <Switch />
        </div>
    </div>
  )
}
