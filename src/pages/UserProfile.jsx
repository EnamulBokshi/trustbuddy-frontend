import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FaUser } from 'react-icons/fa6'
import { useParams } from 'react-router'
import { useUser } from '../contexts/users/userContext'

function UserProfile({}) {
    const {userID} = useParams();
    const {user,findUser} = useUser();
    const userToview = findUser(userID)
    const [userDetails,setUserDetails] = useState(...userToview)
    console.log(userDetails)
  return (
    <>
        <Nav />
            <section className='bg-gray-200 p-5 flex flex-col gap-y-5'>
                <section className='p-4 bg-gray-100 rounded-lg drop-shadow-lg '>
                    <div className='flex gap-3 items-center'>
                    <img src={userDetails?.image} alt="" className='w-32 h-32 ring-2 hover:scale-105 hover:ring-4 duration-300 ring-offset-2 rounded-lg' />
                    {/* <FaUser className='text-8xl justify-start rounded-full'/> */}
                    <div className='space-y-2'>
                        <p className='text-pretty font-mono font-bold'>Username: {userDetails?.username}</p>
                        <p className='text-pretty font-mono font-bold'>User ID: {userID}</p>
                        <p className='text-pretty font-mono font-bold'>Email: {userDetails?.email}</p>
                    </div>
                    </div>
                    <div className='mt-4 text-pretty font-mono font-bold'>
                        <h1 className='bg-lime-300 inline px-2 py-1 rounded-lg'>User Contribution</h1>
                        <div>
                           <p>Join Date: </p>
                           <p>Total Review given: 10</p>
                           <p>Total Like gotten: </p>
                           <p>Total Comment gotten: </p>
                        </div>
                    </div>
                </section>
                <section className='p-5 bg-gray-100 rounded-lg drop-shadow-lg '>
                        <h1 className='text-gray-600  text-center font-serif'>Reviews</h1>
                        <div className='py-10'>
                            <h1 className='underline text-blue-600 underline-offset-2'>Most viewd</h1>
                        </div>
                        <div>
                        <h1 className='underline text-blue-600 underline-offset-2'>Recent</h1>
                        </div>
                        <div className='py-10'>
                        <h1 className='underline text-blue-600 underline-offset-2'>All</h1>
                        </div>
                </section>
            </section>
        <Footer />
    </>
  )
}

export default UserProfile