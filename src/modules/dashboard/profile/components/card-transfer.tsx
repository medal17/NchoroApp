import React from 'react'
import { Visa } from '../../../../assets/icons/visa'
import { MasterCard } from '../../../../assets/icons/master-card'
import { TextField } from '../../../../component/FormInput/TextField'
import { GradientButton } from '../../../../component/Buttons/RoundedButton'

export const CardTransfer = () => {
    return (
        <div>
            <div className='flex align-middle space-x-5 mb-10'>
                <div className='my-auto'>
                    <Visa />
                </div>
                <MasterCard />
            </div>
            <div className='w-6/12'>
                <TextField label={'Card Number'} required={false} onChange={() => null} />
                <div className='flex space-x-3 my-5'>

                    <TextField label={''} placeholder='Expiry Date' required={false} onChange={() => null} />
                    <TextField label={''} placeholder='CVV2' required={false} onChange={() => null} />
                </div>
                <TextField label={'Amount NGN'} placeholder='Minimum of N100 ' required={false} onChange={() => null} />
                <div className='w-[200px] mt-8'>
                    <GradientButton label={'Make Payment'} action={() => null} />
                </div>
            </div>
        </div>
    )
}
