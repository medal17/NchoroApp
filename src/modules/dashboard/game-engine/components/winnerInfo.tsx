import React from 'react'
import UserWrapper from '../../../../assets/images/userImage.png'
import UserName from '../../../../assets/images/title.png';
import Avatar from '../../../../assets/images/avatar.png';
import Icon from '../../../../assets/images/icon.png'
import { GradientButton } from '../../../../component/Buttons/RoundedButton';
import { GameId } from '../../../../assets/icons/game-id';
import { GameTeam } from '../../../../assets/icons/game-team';
import { GameCash } from '../../../../assets/icons/game-cash';

export const WinnerInfo = () => {


    return (
        <div className='h-[87.5vh] absolute flex -mt-2 w-9/12 bg-[#000000ac]'>
            <div className='m-auto'>
                <div className='flex align-middle'>
                    <div className='my-auto'>
                        <img src={Avatar} className='mx-auto -mb-60 h-52 bg-pink-300 rounded-full' />

                        <img src={UserWrapper} className='' />
                    </div>
                    <div className='text-white font-[300]'>
                        <div className='mb-4'>
                            <img src={UserName} className='h-24 w-[320px]' />
                            <p className=' -mt-[70px] text-[2.25rem]'>
                                WISDOM JOY
                            </p>
                        </div>
                        {dataList.map((item: any) =>
                            <div className='px-2 py-1 flex'>
                                <div className=''>
                                    <img src={Icon} className='h-12 my-auto mt-1' />
                                    <div className='-mt-[50px] mx-auto'>{item.icon}</div>
                                </div>
                                <div>
                                    <img src={UserName} className='h-16 -mt-2 w-full' />
                                    <p className='-mt-12 pt-1 text-left px-5 khand text-[22px]'>{item?.value}</p>

                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className='mt-16 w-[430px] mx-auto'>
                    <GradientButton
                        label={'Start New Game'}
                        bgNew='bg-[#9307E9]'
                        action={() => null}
                    />
                </div>


            </div>
        </div>
    )
}

const dataList = [
    { icon: <div className=''><GameId /></div>, value: 'NCRW-12000-11' },
    { icon: <div className='px-1'><GameTeam /></div>, value: 'NCRW-12000-11' },
    { icon: <div className='px-2'><GameCash /></div>, value: 'NCRW-12000-11' },
]
