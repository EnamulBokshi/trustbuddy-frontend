import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FaUser } from 'react-icons/fa6'
import { useParams } from 'react-router'

function UserProfile({user=''}) {
    const {userID} = useParams();

  return (
    <>
        <Nav />
            <section className='bg-gray-200 p-5 flex flex-col gap-y-5'>
                <section className='p-4 bg-gray-100 rounded-lg drop-shadow-lg '>
                    <div className='flex gap-3 items-center'>
                    <FaUser className='text-8xl justify-start rounded-full'/>
                    <div className=''>
                        <p>Username</p>
                        <p>User ID: {userID}</p>
                        <p>Email@email.com</p>
                    </div>
                    </div>
                    <div>
                        <h1>User Contribution</h1>
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