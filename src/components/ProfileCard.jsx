import React, { useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { useNotif } from '../contexts/notification/NotificationContext';
import Notification from './Notification'
function ProfileCard({ username, classNames = '', onClick }) {
  const { count } = useNotif();
  const [showNotifCard, setShowNotifCard] = useState(false);
  return (
    <>
      <div className='flex items-center gap-x-5'>
        <span className='relative cursor-pointer' onClick={()=>setShowNotifCard(!showNotifCard)}>
          <IoNotificationsOutline className='text-3xl ' />
          {
            count > 0 &&
            <span className='absolute -top-1 cursor-pointer -right-1  h-5 w-5 text-center  rounded-full bg-red-500 text-white'>{count}</span>
          }
        </span>
        <div onClick={onClick} className={` ${classNames} flex items-center cursor-pointer gap-4 px-6 py-3 rounded-lg ring-2 ring-yellow-500 ring-offset-1 ring-offset-sky-800`}>
          <FaRegCircleUser className='ring-2 ring-yellow-400 rounded-full text-3xl text-violet-600 bg-black' />
          <span className='text-gray-300 font-bold'>{username}</span>
        </div>
      </div>
          {
            showNotifCard&& <Notification />
          }

    </>
  )
}

export default ProfileCard