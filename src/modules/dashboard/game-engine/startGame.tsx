import React from 'react'
import { Footer } from '../../../component/Footer'
import { PlayIcon } from '../../../assets/icons/play-icon'
import { Link } from 'react-router-dom'
import { currencyFormat } from '../../../core/utils/currencyFormat'
import { TotalWager } from '../../../assets/icons/total-wager'
import { SingleWager } from '../../../assets/icons/single-wager'
import { Player } from '../../../assets/icons/player'
import './game.css'
import { GameScreen } from './components/GameScreen'

export const StartGame = () => {
    return (
        <div>
            <div className='h-[100vh] flex'>
              <GameScreen/>
                <div className='w-3/12 h-full bg-black p-2 -mt-2 ml-3'>
                    <div className='h-1/2 live-game px-3'>
                        <p className='text-[50px] text-left text-yellow-400 border-0 licorice'>
                            Game Info
                        </p>
                        {gameInfo.map((item: any) =>
                            <div className='bg-[#03030380] flex my-3 px-3 text-white w-[283px] h-[74px]'>
                                <div className='my-auto'>{item.icon}</div>
                                <div className='text-left ml-5 my-auto'>
                                    <p className='text-[23px]'>{currencyFormat(item.value)}</p>
                                    <p>{item.subtitle}</p>
                                </div>
                            </div>)}
                    </div>
                    <div className=' h-1/2 live-game-2 px-3 mt-2'>
                        <p className='text-[50px] text-left text-yellow-400 border-0 licorice'>
                        Live Games
                        </p>
                        {liveGames.map((item: any) =>
                            <div className='bg-[#03030380] border border-white rounded-lg flex my-1 px-3 text-white w-[283px] h-[74px]'>
                                <div className='my-auto rounded-full h-14 w-14 border-2'>
                                    <div className='bg-green-500 relative ml-10 h-4 w-4 rounded-full'></div>
                                    {/* {item.icon} */}
                                </div>
                                <div className='text-left ml-5 my-auto'>
                                    <p className='text-[20px] khand font-[400]'>Susan Johnson</p>
                                    <p className='text-[14px] khand font-[400]'>NCRW-1120-102</p>
                                </div>
                                <div className='my-auto ml-auto text-[#E3B505]'>View</div>
                            </div>)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const gameInfo = [
    { value: 20000, subtitle: '(Total Wager)', icon: <TotalWager /> },
    { value: 200, subtitle: '(Total Wager)', icon: <SingleWager /> },
    { value: 20, subtitle: '(Players)', icon: <Player /> },
]

const liveGames = [
    { value: 20000, subtitle: '(Total Wager)', icon: <TotalWager /> },
    { value: 200, subtitle: '(Total Wager)', icon: <SingleWager /> },
    { value: 20, subtitle: '(Players)', icon: <Player /> },
]