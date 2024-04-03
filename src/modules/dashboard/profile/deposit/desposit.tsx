import React, { useState } from 'react'
import { TabbbedButton } from '../../../../component/Buttons/TabbbedButton'
import { CardTransfer } from '../components/card-transfer';
import { BankTransfer } from '../components/bank-transfer';

export const Desposit = () => {
    const [picked, setPicked] = useState('Card');

  return (
    <div>
         <TabbbedButton 
            list={['Card', 'Bank Transfer']} 
            setPicked={setPicked} 
            picked={picked}
        />   
        <br/> 
        {picked==='Card'?
        <CardTransfer/>:
        <BankTransfer/>}
    </div>
  )
}
