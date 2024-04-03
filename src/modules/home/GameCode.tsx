import React from 'react'
import { TextField } from '../../component/FormInput/TextField'
import { RoundedButton } from '../../component/Buttons/RoundedButton'
import { MdPersonAddAlt1 } from 'react-icons/md'
import ShareIcon from '../../assets/images/share-icon.png'
import { CopyIcons } from '../../assets/icons/copy-icons'
import { useNavigate } from 'react-router-dom'

export const GameCode = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='scroll-wrapper mx-auto flex align-middle w-[80vw] h-[80vh]'>
        <div className='lg:w-4/12 w-10/12 h-fit m-auto'>
          <p className='pb-6 text-[18px] font-[500] khand-subtitle'>
            Your Game is Now Set
          </p>

          <RoundedButton
            border=' text-white bg-[#000]'
            bg='#B97E41 text-white'
            color='text-white'
            icon={<MdPersonAddAlt1 className='text-2xl' />}
            label={'Add others'}
            action={() => navigate('/dashboard/add-people')}
          />

          <p className='pt-20'>Click on copy to share link with others</p>
          <div className='py-2.5 flex align-middle mb-4'>
            <div className='w-11/12 mt-3 flex align-middle'>
              <TextField
                disabled
                label={''}
                required={false}
                onChange={() => null}
                defaultValue='Nchoro/private/CR-112332'
                className='bg-[#F6E1B8] border-[#030303] w-[335px] mr-8'
              />
              
            </div>
            <div className='-ml-16 cursor-pointer my-auto'>
                <CopyIcons />
              </div>
            <div className='my-auto cursor-pointer mx-4'>
              <img src={ShareIcon} className='my-auto' width={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}