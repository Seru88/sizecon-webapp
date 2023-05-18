import { Guest } from 'pages/GuestsPage'
import { FC } from 'react'

type Props = {
  guest: Guest
}

const GuestCard: FC<Props> = ({ guest }) => {
  return (
    <div className='flex'>
      <figure className='w-28'>
        <img
          className='h-auto w-full rounded-full'
          src={guest.img}
          alt={guest.name}
        />
      </figure>
      <div className='flex-grow bg-neutral text-neutral-content'>hi</div>
    </div>
  )
}

export default GuestCard
