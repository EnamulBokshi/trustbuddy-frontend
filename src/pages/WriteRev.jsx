import React, { useContext } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import UserContext from '../contexts/users/userContext'
import { Navigate } from 'react-router'
import Input from '../components/Forms/Input'
import { Star } from 'lucide-react'
function WriteRev() {
  // const {user} = useContext(UserContext);
 
  // console.log(user.username)
  // if(!user) return <Navigate to='/login'/>
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Review Submitted!!")
  }
  return (
  <>
    <Nav />
      <section className='bg-gray-300 py-10 px-5'>
          <div className='py-20'>
              <h1 className='font-extrabold font-serif sm:text-4xl text-2xl text-center'>Write a Review</h1>
              <h2 className='text-xl text-center font-serif
              font-semibold
              font text-gray-600'>Be honest, Be helpful, Be Kind</h2>
          </div>
          <div className='p-10 rounded-lg  bg-gray-200 container mx-auto'>
            <div>
              <form onSubmit={handleSubmit} >
                <div className=' grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2'>
                  <Input title={"PRODUCT TITLE"} pholder={"product title"} type={'text'}/>
                  <Input title={"PRODUCT ID"} pholder={"ID"} type={'text'}/>
                                    
                  <Input title={"SELECT CATEGORY"} pholder={"product title"} type='select' option={['Electonics','Airplane','Travel','Agency','Gadgests','Companies','Banks','Books','Cosmetics']}/>
                  <Input title={"PRODUCT LINK"} pholder={"link"} type={'text'}/>
                  
                  <Input title={"DESCRIPTION"} pholder={"description"} type='textarea'/>
                  <div className='py-2'>
                    <label className='text-gray-500 py-0 my-0 font-bold  hover:text-gray-700'>Rate It</label>
                    <div className='flex gap-2 py-1'>
                    <Star  className=' rounded-sm bg-violet-500 text-gray-200'/>
                    <Star  className='hover:text-red-400'/>
                    <Star  className='hover:text-red-400'/>
                    <Star  className='hover:text-red-400'/>
                    <Star  className='hover:text-red-400'/>
                </div>
                  </div>
                </div>
                
                <div className='flex justify-center py-5'>
                  <button className='rounded-lg px-10 py-3 bg-violet-800  text-white'>
                    Submit to Verify
                  </button>
                </div>

              </form> 
            </div>

          </div>
      </section>
    <Footer />
  </>
  )
}

export default WriteRev