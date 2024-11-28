import React, { useState } from 'react'
import {Menu,X} from 'lucide-react'
import Logo from '../assets/logos/trustbuddy-high-resolution-logo-transparent.png'
import {Link} from 'react-router'
function Nav() {
    const [menuToggle,setMenuToggle] = useState(false)
    const toggle = ()=>{
        setMenuToggle(!menuToggle)
    }
  return (
    <>
    <nav className='py-5 px-6 bg-gray-500 flex justify-between items-center'>
        <img src={Logo} alt="Logo" className='w-10 h-10' />
        <div className='gap-8 justify-end hidden md:flex'>
           
            <ul className='p-0 m-0 flex  gap-3'>
                <Link to={'/'} className='px-3 py-2  hover:text-sky-600 cursor-pointer  hover:ring-teal-200 hover:bg-gray-700 rounded text-neutral-100'>Home</Link>
                <Link to= {'/review'}className='px-3 py-2  hover:text-sky-600 cursor-pointer hover:ring-teal-200 hover:bg-gray-700 rounded text-neutral-100'>Reviews</Link>
                <Link to={'/pricing'} className='px-3 py-2  hover:text-sky-600 cursor-pointer hover:ring-teal-200 hover:bg-gray-700 rounded text-neutral-100'>Subscription</Link>
                <Link to = {'/contact'}className='px-3 py-2   hover:text-sky-600 cursor-pointer hover:ring-teal-200 hover:bg-gray-700 rounded text-neutral-100'>Contact</Link>
            </ul>
            <div>
                <Link to={'/login'} className='px-6 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg text-neutral-100 font-serif me-3'>Sin In</Link>
                <Link to={'/register'} className='px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg text-neutral-100 font-serif'>Register</Link>
            </div>
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
            <li className='px-3 py-2  list-none hover:text-green-600 cursor-pointer  text-neutral-100'>Home</li>
                <li className='px-3 py-2 list-none  hover:text-green-600 cursor-pointer text-neutral-100'>Reviews</li>
                <li className='px-3 py-2 list-none hover:text-green-600 cursor-pointer text-neutral-100'>Subscription</li>
                <li className='px-3 py-2 list-none  hover:text-green-600 cursor-pointer text-neutral-100'>Contact</li>
        
                <div>
                <button className='px-6 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg text-neutral-100 font-serif me-3'>Sin In</button>
                <button className='px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg text-neutral-100 font-serif'>Register</button>
            </div>
        </div>
    }
    </>
  )
}

export default Nav