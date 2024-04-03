import React from 'react'
import { GameCard } from '../../../../component/Cards/GameCard'
import { dummyGames } from '../../../../core/utils/dummyData'

export const AllGames = () => {
  return (
    <div>
        {dummyGames.map(item=>
        <GameCard 
            item={item}/>)}
    </div>
  )
}
