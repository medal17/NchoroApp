import './home.css'
import { TextField } from '../../component/FormInput/TextField'
import { RoundedButton } from '../../component/Buttons/RoundedButton'
import { useNavigate } from 'react-router-dom'

export const SetupGame = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='scroll-wrapper mx-auto flex align-middle w-[80vw] h-[80vh]'>
                <div className='lg:w-4/12 w-10/12 h-fit m-auto'>
                    <p className='text-[60px] font-[600] licorice'>Set Up Game</p>
                    <p className='pb-2.5'>Enter all the required Game Information</p>
                    <TextField 
                        label={'Single Wager'} 
                        placeholder='Enter the Single Wager'
                        required={true} 
                        className='bg-[#F6E1B8] border-[#834327] text-[#834327] border-2'
                        onChange={() => null} 
                    />
                    <div className='py-2.5 mb-4'>
                    <TextField 
                        label={'Total Number of participants'} 
                        placeholder='Enter Number of participants'
                        required={true} 
                        className='bg-[#F6E1B8] border-[#834327] text-[#834327] border-2'
                        onChange={() => null} 
                    />
                    </div>

                    <RoundedButton 
                        border='border border-[#6D4222] bg-[#B97E41]' 
                        bg='#B97E41' label={'Set Up Game'}  
                        action={()=>navigate('/dashboard/game-code')}
                    />
                </div>
            </div>
        </div>
    )
}
