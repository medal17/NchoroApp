import React from 'react'
import { GameCard } from '../../../../component/Cards/GameCard'
import { dummyLiveGames } from '../../../../core/utils/dummyData'

export const LiveGames = () => {
  return (
    <div>
        {dummyLiveGames.map(item=><GameCard isLive item={item}/>)}
    </div>
  )
}
