import moment from 'moment'
import React from 'react'
import { currencyFormat } from '../../../../core/utils/currencyFormat'

export const TransactionTable = (props:{items:any}) => {
  const {items} = props
  return (
    <div>
      <div className='bg-[#E9CDFB] text-[#4A0475] p-2 mx-2 flex justify-between'>
        <span className='text-left w-[150px]'>Date</span>
        <span className='text-left w-[150px]'>Type</span>
        <span className='text-left w-[250px]'>Transaction ID</span>
        <div className='text-left w-[250px]'>Amount</div>
        <span className='text-left w-[100px]' >Status</span>
      </div>
      {items.map((item:any)=>
      <div className='border-b p-3 flex align-middle justify-between'>
        <span className='text-left my-auto w-[150px]'>
          {moment(item?.date).format('DD/MM/YY')}<br/>
          <p className='text-sm text-gray-500'>{moment(item?.date).format('hh:mm a')}</p>
        </span>
        <span className='text-left w-[150px] my-auto'>{item?.type}</span>
        <span className='text-left w-[250px] my-auto'>{item?.gameId}</span>
        <span className='text-left w-[250px] my-auto'>{currencyFormat(item.amount||0)}</span>
        <span className={`text-left w-[100px] my-auto
          ${item?.status==='Pending'?'text-yellow-500':(item?.status==='Success'?'text-green-600':'text-red-600')}`}
          >
          {item.status}</span>
      </div>)}
    </div>
  )
}
