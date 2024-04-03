import React from 'react'
import { TextField } from '../../../component/FormInput/TextField'

export const Profile = () => {
  return (
    <div className='lg:w-[500px]'>
        <TextField label={'FullName'} required={false} onChange={()=>null}/>
        <TextField label={'Email Address'} required={false} onChange={()=>null}/>
        <TextField label={'User ID'} required={false} onChange={()=>null}/>
        <TextField label={'Date  of Birth'} required={false} onChange={()=>null}/>
    </div>
  )
}
