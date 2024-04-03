import React, { useState } from 'react'
import { TabbbedButton } from '../../../component/Buttons/TabbbedButton'
import { AllGames } from './components/all-games'
import { LiveGames } from './components/live-games'

export const GameHistory = () => {
    const [pickedTitle, setPickedTitle] = useState('All Game')
  return (
    <div>
        <TabbbedButton 
            list={['All Game', 'Live Games']} 
            smallText setPicked={setPickedTitle} 
            picked={pickedTitle}
        />
        <br/>
        {pickedTitle ==='All Game'?
        <AllGames/>
        :
        <LiveGames/>}

    </div>
  )
}
