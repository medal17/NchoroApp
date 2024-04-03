import React from 'react'
import {CiSearch} from 'react-icons/ci'

interface InputProps {
    label:string,
    placeholder?:string,
    required: boolean,
    type?:string,
    onChange: Function,
    disabled?: boolean,
    defaultValue?:string,
    className?:string
}
export const TextField = (props:InputProps) => {
    const {label, required,placeholder, type ,onChange, disabled, defaultValue, className} = props
  return (
    <div>
        <label className='text-black mb-1 px-2 flex align-middle text-[0.875rem]'>
            {label} {required&&<b className='text-red-700 text-lg my-auto mx-1'> *</b>}
        </label>
        <input
            placeholder={placeholder} 
            onChange={()=>onChange} 
            className={`h-[50px] w-full border border-[#CFCFCF] mb-[12px] rounded-full text-gray-600 px-3 ${className?className: 'bg-white'}`}
            type={type}
            required={required}
            disabled={disabled}
            defaultValue = {defaultValue}
        />
    </div>
  )
}

export const SearchField = (props:InputProps) => {
    const {label, required,placeholder ,onChange} = props
  return (
    <div>
        <label className='text-black mb-1 flex align-middle text-[0.875rem]'>
            {label} {required&&<b className='text-red-700 text-lg my-auto mx-1'> *</b>}
        </label>
        <div className='flex align-middle'>
        <input
            placeholder={placeholder} 
            onChange={()=>onChange} 
            className='h-[50px] w-full border pr-10 border-[#CFCFCF] rounded-full text-white px-3 bg-transparent' 
            type={''}
            required={required}
        />
        <CiSearch className='my-auto text-[24px] -ml-10'/>
        </div>
    </div>
  )
}
