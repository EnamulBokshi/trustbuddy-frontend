import { MoveRight, Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router'
import { useUser } from '../contexts/users/userContext'

function Widgets() {
    const {user} = useUser();
    const [c_user,setC_user] = useState([])
    // const redirect = ()=>{
    //     if()
    // }
useEffect(()=>{
    setC_user(JSON.parse(localStorage.getItem('LoggedUser')))
},[])
  return (
    <section className='py-5 h-auto bg-neutral-600 px-5 gap-4 flex  mt-28 justify-between'>
        <div  className='w-1/2 gap-4 flex flex-col items-start justify-center'>
            <h1 className='md:text-3xl text-2xl text-white'>Read reviews <Star className='inline -mt-10 text-violet-400'/></h1>
            <p className='text-white/50'>
                Read the review then take your decesion.
                Get product comparison
                features to make your decision faster
            </p>
            <button className='px-6 py-3 rounded-lg bg-yellow-600 text-gray-200 hover:bg-yellow-700'>
                See Reviews
                <MoveRight className='inline'/>
            </button>
        </div>
        <div  className='w-1/2 h-96 -mt-24  rounded-lg bg--600 bg-transparent shadow-xl backdrop-blur-md  ring-2 ring-violet-500  p-3 flex flex-col justify-center items-start gap-5'>
        <h1 className='text-white text-xl  md:text-3xl'>Be a Reviewer <Star className='inline -mt-10 text-yellow-400'/></h1>
        <p className='text-white/50'>
            Your Feedback can make a real difference. By sharing your Honest Opinions, You're helping others make informed decisions and encouraging companies to strive for excellence
            
        </p>
        <Link to= {c_user? '/writerev':'/login' }className='text-white bg-gray-500 px-6 py-3 rounded-lg hover:bg-gray-600 self-center'>
            Get started
            <MoveRight className='inline'/>
        </Link>
        </div>
    </section>
  )
}

export default Widgets