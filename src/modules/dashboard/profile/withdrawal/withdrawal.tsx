import React, { useState } from 'react'
import { TabbbedButton } from '../../../../component/Buttons/TabbbedButton'
import { Visa } from '../../../../assets/icons/visa';
import { MasterCard } from '../../../../assets/icons/master-card';
import { TextField } from '../../../../component/FormInput/TextField';
import { GradientButton } from '../../../../component/Buttons/RoundedButton';

export const Withdrawal = () => {
    const [picked, setPicked] = useState('Bank Transfer');
    return (
        <div className='w-6/12'>
            <TabbbedButton
                list={['Bank Transfer']}
                setPicked={setPicked}
                picked={picked}
            />
            <br />
            <div className='flex align-middle space-x-5 mb-10'>
                <div className='my-auto'>
                    <Visa />
                </div>
                <MasterCard />
            </div>

            <TextField label={'Bank Name'} required={false} onChange={() => null} />
            <TextField label={'Account Number'} required={false} onChange={() => null} />
            <TextField label={'Account Name'} required={false} onChange={() => null} />
            <TextField label={'Amount (NGN)'} required={false} onChange={() => null} />
            <div className='w-[200px] my-10'>
                <GradientButton label={'Make Payment'} action={() => null} />
            </div>
        </div>
    )
}
