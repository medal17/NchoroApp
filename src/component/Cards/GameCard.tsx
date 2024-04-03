import moment from 'moment'
import { currencyFormat } from '../../core/utils/currencyFormat'

export const GameCard = (props: { item: any, isLive?: boolean }) => {
    const { item, isLive } = props
    return (
        <div>
            <div className={`${item?.type !== 'lose' ? 'bg-[#E9CDFB]' : 'bg-gray-300'} flex justify-between p-2 m-3`}>
                <span>Game ID: {item?.gameId}</span>
                <span>{item?.type.toUpperCase()}</span>
            </div>
            <div className='flex justify-between px-5'>
                <div>
                    <p>{moment(item?.date).format('DD/MM/YY') || ''}</p>
                    <p className='text-[#5E5E5E]'>{moment(item?.date).format('hh:MM a') || ''}</p>
                </div>
                <div>
                    <p>Single Wager</p>
                    <p className='text-[#5E5E5E]'>{currencyFormat(item?.singleWager || 0)}</p>
                </div>
                <div>
                    <p>Total Wager:</p>
                    <p className='text-[#5E5E5E]'>{currencyFormat(item?.totalWager || 0)}</p>
                </div>
                {!isLive ?
                    <div>
                        <p>Total Return</p>
                        <p className={item?.type === 'lose' ? `text-red-600` : 'text-green-700'}>
                            {item?.type === 'win' ? '+' : '-'}
                            {currencyFormat(item?.totalReturn || 0)}
                        </p>
                    </div> :
                    <div>
                        <p>Total Players</p>
                        <p className={item?.type === 'lose' ? `text-red-600` : 'text-green-700'}>
                          {item?.totalPlayers ||0}
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}
