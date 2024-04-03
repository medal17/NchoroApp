import { useState } from 'react';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { profileMenuList } from '../../core/utils/list';
import { useNavigate } from 'react-router-dom';

export const ProfileList = () => {
    const [selected, setSelected] = useState('Bio Information');
    const navigate = useNavigate()
    const handleSelectOption=(value:any)=>{
        setSelected(value?.name)
        navigate(value.link)
    }
  return (
    <div>
        {
         profileMenuList.map((item)=>
         <div className={selected===item.name?`bg-gradient-to-r from-[#c35ca7] via-[#ffe553] 
         bg-[#7371e5] to-[#b40e4a] p-[2.5px]`:''}>
        <div onClick={()=>handleSelectOption(item)} 
            className={`h-[72px] khand-subtitle flex justify-between 
            ${selected===item.name?'bg-[#9307E9]':""} cursor-pointer
                align-middle text-white px-2`}
            >
            <div className='my-auto'>{item.name}</div>
            <MdOutlineKeyboardArrowRight className='my-auto text-xl'/>
        </div>
        </div>)
        }
    </div>
  )
}
