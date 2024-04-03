import React from 'react'
import './button.css'

interface ButtonProps {
    icon?:JSX.Element,
    label:string,
    border?: string,
    action:Function,
    bg?:string,
    color?:string,
    type?: string,
    bgNew?: string
    
}
export const RoundedButton = (props:ButtonProps) => {
    const {icon, label, border,color ,action} = props
  return (
    <div 
      onClick={()=>action()} 
      className={`h-[50px] rounded-full mb-5 align-middle cursor-pointer 
      justify-center flex ${border||'border border-[#cfcfcf]'}`}
    >
        <span className='my-auto mr-3'>{icon}</span>
        <span className={`${color?'text-white':'text-black'} font-900 my-auto`}>{label}</span>
    </div>
  )
}



export const GradientButton =(props:ButtonProps)=>{
    const {icon, label, border, action, bg} = props
    return (
      <div 
        onClick={()=>action()} 
        className={`${!props.type?'h-[3.5rem]':'h-[2.9rem]'} w-full ${props.type?'rounded-[15px]':'rounded-full'} cursor-pointer
          bg-gradient-to-r from-[#c35ca7] via-[#ffe553] 
          bg-[#7371e5] to-[#b40e4a] p-[2.5px]`}
        >
            <div className={`h-full w-full text-center text-white
              cursor-pointer flex align-middle justify-center 
              ${props.type?'rounded-[15px]':'rounded-full'} my-auto ${ bg?'bg-[#521e72]':
              (props.bgNew?props.bgNew:"bg-[#DBACF8]")} p-1`}>
                <div className='my-auto'>{label}</div>
            </div>
      </div>
    )
}

export const OutlinedGradientButton =(props:ButtonProps)=>{
    const {icon, label, border, action} = props
    return (
      <div 
        onClick={()=>action()} 
        className={`h-[3.5rem] w-full mt-[0.5rem] cursor-pointer 
          rounded-full bg-gradient-to-r from-[#c35ca7] via-[#ffe553] 
          bg-[#7371e5] to-[#b40e4a] p-[2.5px]`}
        >
            <div className="h-full w-full text-center flex align-middle justify-center rounded-full my-auto bg-white p-1">
            <div className='my-auto'>{icon}</div>
                <div className='my-auto'>{label}</div>
            </div>
      </div>
    )
}