import React, { useEffect, useState } from 'react'
import { useUser } from '../contexts/users/userContext'
import {useNavigate,Link} from 'react-router'
import ProfileCard from '../components/ProfileCard';
import { MdOutlineViewSidebar, MdPersonSearch } from "react-icons/md";
import UserProfile from '../components/user/UserProfile';
import Sidebar from '../components/Sidebar';
import { IoHome } from "react-icons/io5";

function Dashboard() {
  const navigate = useNavigate();
  const {c_user} = useUser();

  const [user,setUser] = useState([])

  if(!user) {
    navigate('/login')
  }
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("LoggedUser")))
  },[])
  return (
   <>
   <header className='sticky top-0 z-10'>
    <nav className='flex justify-between items-center py-3 px-6 bg-black/30'>
      <span className='cursor-pointer'><IoHome className='text-3xl'/></span>
      <ProfileCard username={user.username} classNames='cursor-pointer' />
    </nav>
   </header>
   <section className='bg-gray-200'>
      <Sidebar />
      <div className='ms-16 px-5 bg-gray-200 py-10'>
        <div className=''>
          <div className='grid grid-cols-2 pb-5'>
          <div className='pb-3'>
          <h1 className='text-3xl font-semibold'>Welcome,</h1>
          <p className='font-serif font-bold inline-block bg-transparent'>{user.username}</p>
          </div>
          {/* Search Box */}
          <div className='relative inline-block'>
            <input type="text"  className='px-8 py-2 rounded-lg' placeholder='search...'/>
            <MdPersonSearch className='absolute top-2 left-2 text-2xl text-gray-500'/>
          </div>
          </div>
          <div class="bg-gradient-to-r from-pink-500 via-purple-500 to-gray-200 py-8 rounded-lg"></div>
        </div>

        {/* Actual display appears here */}
        <div className='mt-10'>
          <UserProfile user={user} />
        </div>
      </div>
   </section>
    </>
  )
}

export default Dashboard