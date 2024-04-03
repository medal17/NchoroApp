import React from 'react'
import { LockIcon } from '../../assets/icons/lock-icon'
import { SettingsIcon } from '../../assets/icons/settings-icon';
import './home.css'
import { useNavigate } from 'react-router-dom';
import { RoundedButton } from '../../component/Buttons/RoundedButton';
import { TextField } from '../../component/FormInput/TextField';
import { AddPeopleItem } from './components/AddPeopleItem';
import { people } from '../../core/utils/dummyData';

export const AddPeople = () => {
    const cardStyle = 'card bg-white flex justify-center align-middle rounded-xl bg-opacity-10 border cursor-pointer w-[267px] h-[202px] hover:bg-[#9307E9]';
    const navigate = useNavigate()
    return (
        <div>
            <div className='scroll-wrapper mx-auto flex align-middle w-[80vw] h-[88vh]'>
                <div className='lg:w-4/12 w-10/12 h-fit m-auto'>
                    <p className='text-[60px] font-[600] licorice'>Add Others</p>
                    <p className='pb-2.5'>Add others with their email address</p>
                    <TextField
                        label={'UserID/Email address'}
                        required={true}
                        onChange={() => null}
                        className='bg-[#F6E1B8] border-[#030303]'
                    />
                    <div className='bg-[#B39E7BB2] overflow-y-scroll outline-1 h-52 mb-3 rounded-2xl border-[#030303]'>
                        <p className='text-white text-left p-2 text-[20px]'>Recent</p>
                        {people.map((item)=>
                            <AddPeopleItem data={item}/>
                            )
                        }
                    </div>
                 

                    <RoundedButton
                        border='border border-[#6D4222] bg-[#B97E41]'
                        bg='#B97E41' label={'Set Up Game'}
                        action={() => navigate('/dashboard/game-code')}
                    />
                </div>
            </div>
        </div>
    )
}
