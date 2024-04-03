import React from 'react'
import { currencyFormat } from '../../core/utils/currencyFormat'
import { PiUserBold, PiUsersBold } from 'react-icons/pi'
import { AiOutlineUser } from 'react-icons/ai'
import { MoneyBag } from '../icons/money-bag'
import { GradientButton } from '../../component/Buttons/RoundedButton'

interface communityCardProps {
    time: string,
    name: string,
    participants: number,
    slots: number,
    stake: number,
    totalStake: number
}

export const CommunityBg = (props: communityCardProps) => {
    return (
        <div className='h-[190px]'>
            <div className='flex align-middle'>
                <div className='h-[180px] flex align-middle'>
                    <div className='rounded-full h-20 w-20 bg-purple-50 my-auto'>

                    </div></div>
                <div className=' '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="331" height="181" viewBox="0 0 431 221" fill="none">
                        <path d="M34.1613 96.5138L2.08947 1.5H361C377.542 1.5 389.797 1.50319 399.205 2.76803C408.569 4.02708 414.888 6.51145 419.688 11.3119C424.489 16.1124 426.973 22.4307 428.232 31.7954C429.497 41.2032 429.5 53.4584 429.5 70V151C429.5 167.542 429.497 179.797 428.232 189.205C426.973 198.569 424.489 204.888 419.688 209.688C414.888 214.489 408.569 216.973 399.205 218.232C389.797 219.497 377.542 219.5 361 219.5H2.24747L32.4452 146.812L32.5827 146.481C37.4451 134.778 40.0397 128.533 40.266 121.901C40.4922 115.268 38.3293 108.861 34.2759 96.8532L34.1613 96.5138Z" fill="#42F2F7" fill-opacity="0.1" stroke="url(#paint0_linear_269_3618)" stroke-width="3" />
                        <defs>
                            <linearGradient id="paint0_linear_269_3618" x1="215.5" y1="0" x2="215.5" y2="221" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#C356A7" />
                                <stop offset="0.380208" stop-color="#FFE553" />
                                <stop offset="0.682292" stop-color="#7371E5" />
                                <stop offset="1" stop-color="#B40EFA" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className='relative -top-[50%] text-left px-14 text-white'>
                        <div className='flex justify-between text-yellow-300 pb-3'>
                            <span className='text-[23px]'>{props.name}</span>
                            <span className='my-auto -mr-5'>{props.time}</span>
                        </div>
                        <div className='flex'>
                            <span className='my-auto mr-2'><PiUsersBold /></span>
                            <span>{props.participants} Participants</span>
                        </div>
                        <div className='flex'>
                            <span className='my-auto mr-2'><PiUserBold /></span>
                            <span>{props.slots} Slots Left</span>
                        </div>
                        <div className='flex align-middle justify-between'>
                            <div>
                                <div className='flex'>
                                    <span className='my-auto mr-2'><MoneyBag /></span>
                                    <span>{currencyFormat(props.stake)}</span>
                                </div>
                                <div className='flex'>
                                    <span className='my-auto mr-2'><MoneyBag /></span>
                                    <span>{currencyFormat(props.totalStake)} </span>
                                </div>
                            </div>
                            <div className='my-auto w-6/12 -m-10'>
                                <GradientButton
                                    type='go'
                                    bgNew='bg-purple-600'
                                    label={'JOIN'}
                                    action={() => null} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
