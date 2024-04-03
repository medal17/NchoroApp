import React from 'react'
import { CommunityBg } from '../../../assets/others/community-bg'
import { TitleHeader } from '../../../component/TitleHeader'

export const Community = () => {
    return (
        <div className='py-10  w-full'>
            <TitleHeader title={'COMMUNITY'} />
            <div className='grid grid-cols-2 mt-10'>

                {communityList.map((item: any) =>
                    <div className=''>
                        <CommunityBg
                            time={item.time}
                            name={item.name}
                            participants={item.participants}
                            slots={item.slots}
                            stake={item.stake}
                            totalStake={item.totalStake}
                        />
                    </div>)}
            </div>
        </div>
    )
}

const communityList = [
    { time: '10 min ago', name: 'Jame Janet', participants: 10, slots: 10, stake: 3440, totalStake: 43000 },
    { time: '10 min ago', name: 'Jame Janet', participants: 20, slots: 11, stake: 2310, totalStake: 4030 },
    { time: '10 min ago', name: 'Jame Janet', participants: 31, slots: 12, stake: 5440, totalStake: 51100 },
    { time: '10 min ago', name: 'Jame Janet', participants: 23, slots: 23, stake: 9500, totalStake: 23400 },
    { time: '10 min ago', name: 'Jame Janet', participants: 12, slots: 5, stake: 43000, totalStake: 32300 },
    { time: '10 min ago', name: 'Jame Janet', participants: 9, slots: 4, stake: 3200, totalStake: 34230 },
    { time: '10 min ago', name: 'Jame Janet', participants: 23, slots: 3, stake: 34300, totalStake: 123000 },
]
