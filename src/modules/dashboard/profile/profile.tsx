import React from 'react'
import { TextField } from '../../../component/FormInput/TextField'
import { GradientButton, RoundedButton } from '../../../component/Buttons/RoundedButton'
import Avatar from '../../../assets/images/avatar-1.png'
import { MdEdit } from 'react-icons/md'

export const Profile = () => {
    return (
        <div className='lg:w-[500px]'>
            <div className=' border-b-4 border-[#9307E9] text-[18px] w-fit mb-6'>
                Bio Information
            </div>
            <div className='flex'>
                <div className="bg-[#DBACF8] rounded-md w-fit p-3 mb-4">
                    <img className="h-20" src={Avatar} />
                </div>
                <div className='bg-purple-800 p-2.5 -mt-3 -ml-5 text-white w-fit h-fit rounded-full'>
                    <MdEdit className=''/>
                </div>
            </div>
            <TextField label={'FullName'} required={false} onChange={() => null} />
            <TextField label={'Email Address'} required={false} onChange={() => null} />
            <TextField label={'User ID'} required={false} onChange={() => null} />
            <TextField label={'Date  of Birth'} required={false} onChange={() => null} />
            <div className='flex align-middle justify-between mt-6 space-x-3'>
                <div className='w-5/12 text-center'><RoundedButton label={'Male'} action={() => null} /></div>
                <div className='w-5/12 text-center'><RoundedButton label={'Female'} action={() => null} /></div>
            </div>
            <div className='w-[200px]'>
                <GradientButton label={'Save Details'} action={() => null} />
            </div>
        </div>
    )
}
