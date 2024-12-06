import React, {useEffect, useRef, useState } from 'react'
import {Menu,X} from 'lucide-react'
import Logo from '../assets/logos/trustbuddy-high-resolution-logo-transparent.png'
import {Link} from 'react-router'
import { useUser } from '../contexts/users/userContext'
import ProfileCard from './ProfileCard'
import UserModal from './user/UserModal'
function Nav({active}) {
    const [menuToggle,setMenuToggle] = useState(false)
    const toggle = ()=>{
        setMenuToggle(!menuToggle)
    }
    const[showProfileCard,setShowProfileCard] = useState(false);
    const [c_user,setC_user] = useState([]) 
    const home = useRef(null);
    const review = useRef(null);
    const pricing = useRef(null);
    const contact = useRef(null);
    const writeRev = useRef(null)

    useEffect(()=>{
        
        if(active==='home'){
            home.current.className += ' bg-gray-600'
        }
        if(active === 'review') 
            {
               review.current.className += ' bg-gray-600'
            }
    if(active === 'pricing') 
            {
                pricing.current.className += ' bg-gray-600'
            }
        if(active === 'contact') 
            {
                contact.current.className += ' bg-gray-600'
            }
        if(active == 'writerev'){
            writeRev.current.className += ' bg-gray-600'
        }
        setC_user(JSON.parse(localStorage.getItem("LoggedUser")))
    },[home,review,pricing,contact])
  return (
    <>
    <nav className='py-5 px-6 bg-gray-500 flex justify-between items-center'>
        <img src={Logo} alt="Logo" className='w-10 h-10' />
        <div className='gap-8 justify-end hidden md:flex'>
           
            <ul className='p-0 m-0 flex items-center gap-3'>
                <Link ref={home} to={'/'} className='px-3 py-2  hover:text-white cursor-pointer  hover:ring-teal-200 hover:bg-gray-700 rounded text-neutral-100'>Home</Link>
                <Link ref={review} to= {'/review'} className='px-3 py-2  hover:text-white cursor-pointer  hover:ring-teal-200 hover:bg-gray-700 rounded text-neutral-100'>Reviews</Link>
                <Link ref={pricing} to={'/pricing'} className='px-3 py-2  hover:text-white cursor-pointer  hover:ring-teal-200 hover:bg-gray-700 rounded text-neutral-100'>Subscription</Link>
                <Link ref={contact} to = {'/contact'} className='px-3 py-2  hover:text-white cursor-pointer  hover:ring-teal-200 hover:bg-gray-700 rounded text-neutral-100'>Contact Us</Link>
                {c_user? 
                <Link ref={writeRev} to = {'/writeRev'} className='px-3 py-2  hover:text-white cursor-pointer  hover:ring-teal-200 hover:bg-gray-700 rounded text-neutral-100'>Wrtie Review</Link>
                    : null
            }
            </ul>
            {
                c_user? <ProfileCard username={c_user.username} onClick={()=>setShowProfileCard(!showProfileCard)}/>:
                <div>
                <Link to={'/login'} className='px-6 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg text-neutral-100 font-serif me-3'>Sin In</Link>
                <Link to={'/register'} className='px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg text-neutral-100 font-serif'>Register</Link>
            </div>
            }
        </div>
        <div className='block md:hidden'>
            { !menuToggle?
                <Menu className='text-neutral-100 cursor-pointer hover:text-neutral-300' onClick={()=>{setMenuToggle(!menuToggle)}}/>
                :
                <X onClick={()=>{setMenuToggle(!menuToggle)}} className='text-red-950 hover:text-red-900 cursor-pointer'/>
            }
            </div>
    </nav>
    {
        menuToggle && <div className='flex flex-col py-8  items-center gap-4 bg-gray-500 border-t'>
            <Link to ={'/'}className='px-3 py-2   hover:text-green-600 cursor-pointer  text-neutral-100'>Home</Link>
                <Link to ={'/reviews'}className='px-3 py-2   hover:text-green-600 cursor-pointer text-neutral-100'>Reviews</Link>
                <Link to ={'/pricing'}className='px-3 py-2  hover:text-green-600 cursor-pointer text-neutral-100'>Subscription</Link>
                <Link to ={'/contact'}className='px-3 py-2   hover:text-green-600 cursor-pointer text-neutral-100'>Contact</Link>
                <div>
                <Link to={'/login'} className='px-6 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg text-neutral-100 font-serif me-3'>Sin In</Link>
                <Link to={'/register'} className='px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg text-neutral-100 font-serif'>Register</Link>
                {c_user? 
                <Link ref={writeRev} to = {'/writeRev'} className='px-3 py-2  hover:text-white cursor-pointer  hover:ring-teal-200 hover:bg-gray-700 rounded text-neutral-100'>Wrtie Review</Link>
                    : null
            }
            </div>
        </div>
    }
  {
    // showProfileCard && <div className='w-60 absolute top-5 z-10 right-4 px-3 py-3 bg-gray-700 rounded-lg '>
    //      <X onClick={()=>{setShowProfileCard(!showProfileCard)}} className='text-red-950 hover:text-red-900 cursor-pointer'/>
    //     <h1>
    //         {user?.username}
    //     </h1>
    // </div>
    showProfileCard && <UserModal user={c_user}/>
  }
    </>
  )
}

export default Nav