import React, { useState } from 'react'
import { TabbbedButton } from '../../../../component/Buttons/TabbbedButton'
import { TransactionTable } from '../components/transaction-table';
import { dummyDepositTransactions, dummyTransactions, dummyWithdrawalTransactions } from '../../../../core/utils/dummyData';

export const TransactionHistory = () => {
    const [picked, setPicked] = useState('All Categories');
  return (
    <div>
        <TabbbedButton 
            list={['All Categories', 'Deposit', 'Withdrawal']} 
            setPicked={setPicked} 
            picked={picked}
        />   
        <br/> 
      <TransactionTable 
        items={picked==='All Categories'? dummyTransactions:(picked==='Withdrawal'? dummyWithdrawalTransactions:dummyDepositTransactions)}
      /> 

    </div>
  )
}
