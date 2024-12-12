import React from 'react'
import { useNotif } from '../contexts/notification/NotificationContext'
import { IoNotifications } from 'react-icons/io5';

function Notification() {
  const {count} = useNotif();
  return (
    <div className='w-[400px] rounded-lg p-5 gap-5 flex justify-between bg-black/90 fixed top-16 z-10 right-3'>
        <div className='pe-3 w-1/2'>
        <h1 className='mb-2 rounded-lg text-gray-800 text-center py-3'>Notification</h1>
        <hr className='mb-2'/>
        {
          count>0 ? 
          (
            <>
            <li className='text-blue-300 bg-gray-600 py-3 rounded-lg px-2 mb-3'>Items i</li>
        <li className='text-blue-300 bg-gray-600 py-3 rounded-lg px-2 mb-3'>Items i</li>
        <li className='text-blue-300 bg-gray-600 py-3 rounded-lg px-2 '>Items i</li></>
          )
          : 
          <div className='flex justify-center items-center py-5'> 
            <div className='flex flex-col items-center '>
            <IoNotifications className='text-5xl text-gray-400'/>
            <h1 className='text-xl text-gray-400 text-center'>No Notifications</h1>
            </div>
            </div>
        }
        

        </div>
        <div className='border-s border-gray-500 p-3 w-1/2'>
        <h1 className='mb-2 rounded-lg text-gray-800 text-center py-3'>Calender</h1>
          <div>
            
          </div>
        </div>

    </div>
  )
}

export default Notification