import React from 'react'
import { BackIcon } from '../../assets/icons/back-icon'

export const TitleHeader = (props:{title:string}) => {
    return (
    <div className="text-[1.75rem] text-white flex align-middle">
        <div className="my-auto mr-3"><BackIcon /></div>
        <div className="my-auto">{props.title}</div>
    </div>
    )
}
