import React from 'react'
import { Visa } from '../../../../assets/icons/visa'
import { MasterCard } from '../../../../assets/icons/master-card'
import { TextField } from '../../../../component/FormInput/TextField'
import { GradientButton } from '../../../../component/Buttons/RoundedButton'

export const BankTransfer = () => {
  return (
    <div className='w-6/12'>
      <div className='flex align-middle space-x-5 mb-10'>
        <div className='my-auto'>
          <Visa />
        </div>
        <MasterCard />
      </div>
      <TextField label={'Amount (NGN)'} required={false} onChange={() => null} />
      <div className='w-[200px] my-10'>
        <GradientButton label={'Make Payment'} action={() => null} />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}
