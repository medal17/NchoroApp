import React from 'react'
import { LockIcon } from '../../assets/icons/lock-icon'
import { SettingsIcon } from '../../assets/icons/settings-icon';
import './home.css'
import { useNavigate } from 'react-router-dom';

export const GameType = () => {
    const cardStyle = 'card bg-white flex justify-center align-middle rounded-xl bg-opacity-10 border cursor-pointer w-[267px] h-[202px] hover:bg-[#9307E9]';
    const navigate = useNavigate()
    return (
        <div className=' m-auto text-white'>
            <div className='text-[80px] create-game'>Create a Game</div>
            <div className='khand-subtitle -mt-2 text-lg'>Choose a game mode to play</div>
            <div className='khand-subtitle md:space-x-10 mt-10 flex justify-center'>
                <div onClick={()=>navigate('/dashboard/game-setup')} className={cardStyle}>
                    <div className='m-auto w-fit'>
                        <div className='w-fit p-1.5 mx-auto rounded-lg bg-white'>
                            <LockIcon />
                        </div>
                        <p className='my-auto mt-2'>Private Game</p>
                        <p className='text-left mx-auto w-10/12 description-text'>
                            A link will be created for your private game and can be sent to your Family & Friends.
                        </p>
                    </div>
                </div>
                <div onClick={()=>navigate('/dashboard/game-setup')} className={cardStyle}>
                    <div  className='m-auto w-fit'>
                        <div className='w-fit p-1.5 mx-auto rounded-lg bg-white'>
                            <SettingsIcon />
                        </div>
                        <p className='my-auto mt-2'>Public Game</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
