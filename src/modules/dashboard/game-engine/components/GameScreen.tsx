import React from 'react'
import { Link } from 'react-router-dom'
import { PlayIcon } from '../../../../assets/icons/play-icon'
import { CongratsComponent } from './congrats'
import { WinnerInfo } from './winnerInfo'

export const GameScreen = () => {
    return (
        <div className='w-9/12 h-full flex align-middle' >
            <Link className='cursor-pointer text-white m-auto' to={'/dashboard-create-game'}>
                <PlayIcon />
                <div className='text-[80px] create-game'>Click to Play</div>
            </Link>
            {/* <CongratsComponent/> */}
            <WinnerInfo/>
        </div >
    )
}
