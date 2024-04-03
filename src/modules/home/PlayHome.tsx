import { SettingsIcon } from '../../assets/icons/settings-icon';
import './home.css'
import { PlayIcon } from '../../assets/icons/play-icon';
import { WalletIcon } from '../../assets/icons/wallet-icon';
import { WheelIcon } from '../../assets/icons/wheel-icon';
import { SearchField } from '../../component/FormInput/TextField';
import { Link } from 'react-router-dom';

export const PlayHome = () => {
    const gradientStyle = "linear-gradient(180deg, #c35ca7, #ffe553, #b40e4a, #7371e5)";
    const cardStyle ="bg-[#000] bg-opacity-30 py-2 cursor-pointer rounded-[10px] h-[128px] w-full khand-subtitle  px-3"
    return (
        <div className=' flex w-[90vw] h-[90vh] mt-10 justify-between text-white'>
            <div className='flex flex-col'>
                <div style={{ backgroundImage: gradientStyle }} className='grad'>
                    <div className={cardStyle}>
                        <SettingsIcon color='#fff' h='23' className='mx-auto ' w='23' />
                        <p className='font-[600] text-[18px] mt-2'>Community</p>
                        <p className='font-[300] text-[14px]'>
                            All public games can be accessed in the community page.
                        </p>
                    </div>
                </div>

                <div style={{ backgroundImage: gradientStyle }} className='grad'>
                    <div className={cardStyle}>
                        <div className='mx-auto w-fit'>
                            <WalletIcon />
                        </div>
                        <p className='font-[500] text-[18px] mt-2'>Deposit</p>
                        <p className='font-[300] text-[14px]'>
                            Fund your wallet to be place a wager and play games.
                        </p>
                    </div>
                </div>

                <div style={{ backgroundImage: gradientStyle}} className='grad'>
                    <div className={cardStyle}>
                        <div className='mx-auto w-fit'>
                            <WheelIcon />
                        </div>
                        <p className='font-[500] text-[18px] mt-2'>Live Games</p>
                        <p className='font-[300] text-[14px]'>
                            Get access to all your live and ongoing games on the platform.
                        </p>
                    </div>
                </div>

            </div>

            <Link className='cursor-pointer text-white my-auto' to={'/dashboard-create-game'}>
                <PlayIcon />
                <div className='text-[80px]  create-game'>Click to Play</div>
            </Link>


            <div className='w-2/12 bg-[#0000009e] py-3 mt-10 rounded-[20px] h-[158px] khand-subtitle  px-3'>
                <p className='text-2xl'>Game History</p>
                <p className='mb-3 py-1'>Search for game with game ID</p>

                <SearchField
                    label={''}
                    type='password'
                    placeholder={'Enter Game Id'}
                    required={false}
                    onChange={() => null}
                />
            </div>


        </div>
    )
}
