import React from 'react'
import { FaComment, FaEye, FaThumbsUp } from 'react-icons/fa6'

function ReviewCard() {
  return (
    <div className='p-2  rounded-lg bg-gray-300 flex justify-start items-center gap-x-4'>
        <img className='w-20 rounded-lg' src="https://cdn.pixabay.com/photo/2022/12/11/13/21/baby-7648901_960_720.jpg" alt="" />
        <div className=''>
            <h1 className='font-bold'>Title of the product</h1>
            <p className='text-sm  text-gray-700'>dec, wed, 2024</p>
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ...</p>
            <div className='flex gap-5 text-gray-700'>
            <p>
              <FaThumbsUp className='inline'/>
              <span className='ms-1'>50</span>
            </p>
            <p>
              <FaEye className='inline'/>
              <span className='ms-1'>50</span>
            </p>
            <p>
              <FaComment className='inline'/>
              <span className='ms-1'>3</span>
            </p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard