import React from 'react'
import {Link} from 'react-router'
import { FaChevronRight } from "react-icons/fa";
function UserModal({user,classNames = '',onClick}) {
  const LogOut = ()=>{
    localStorage.removeItem("LoggedUser");
    window.location.reload()
  }
  return (
    <div  className={`${classNames}p-5 z-10 bg-slate-800 w-[200px] fixed top-16 rounded-lg drop-shadow-lg   right-4 max-w-96 `}>
      <hr />
      <h1 className='text-center py-3 bg-transparent text-neutral-200'>{user.username}</h1>
      <hr />
      <div className='flex flex-col gap-y-3'>
        <Link to={'/dashboard'} className='cursor-pointer hover:translate-x-2  duration-300 rounded-lg bg-gray-400 hover:text-white flex justify-between items-center hover:bg-sky-600 py-3 px-2 my-2'><span>Profile</span> <FaChevronRight/></Link>
        <button className='px-4 py-2 bg-neutral-400 hover:translate-x-2  duration-300'>Setting</button>
        <button className='px-3 py-2 bg-gray-300 hover:translate-x-2  duration-300' onClick={LogOut}>Logout</button>
        <button className='px-3 py-2  bg-gray-300 hover:translate-x-2  duration-300'>Dashboard</button>
        <button onClick={onClick} className='px-3 py-2 text-white bg-red-700 hover:translate-x-2  duration-300'>Close</button>
      </div>
    </div>
  )
}

export default UserModal