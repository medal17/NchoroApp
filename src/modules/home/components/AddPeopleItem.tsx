import React from 'react'
import Avatar from '../../../assets/images/avatar.png'

export const AddPeopleItem = (props:{data:Record<string, string>}) => {
    const {data} = props
    return (
        <div className='flex hover:bg-[#DFAD6E] align-middle justify-between px-3 py-2'>
            <label htmlFor={data?.email} className='flex align-middle'>
                <img src={Avatar} className='w-6 mr-2' />
                <p>{data?.email}</p>
            </label>
            <input id={data?.email} className='accent-transparent bg-white' type='radio' />

        </div>
    )
}
