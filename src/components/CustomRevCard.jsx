import React from 'react'
import { FaStar,FaComment } from "react-icons/fa";
import { FaUser } from 'react-icons/fa6';
import { SlLike } from "react-icons/sl";
import { AiOutlineLike,AiFillLike} from "react-icons/ai";
import {Link} from 'react-router'
import category from '../utils/constants';
function CustomRevCard({rev}) {
    const createStars = (stars)=>{
        const arr = [...Array(stars).keys()];
        return arr
      }
  return (
    <div>
        <article className='p-4 flex flex-col hover:ring-1 gap-y-5 rounded-lg hover:scale-105 duration-300 bg-gray-700' key={rev.id}>
          <h1 className='flex gap-x-3 items-center'>
            {
              createStars(rev.rating).map(i=>(
              <FaStar className='text-yellow-400' key={i}/>
              ))
            }
            {
              createStars(5.0-rev.rating).map(i=>(
                <FaStar className='text-violet-400' key={i}/>
              ))
            }
            <span className='text-white'>{rev.rating}.0</span>
          </h1>
          <img src={rev.img} alt="" className='p-1 rounded-lg max-h-44 hover:scale-105 duration-300 bg-gray-200 w-full'/>
          <div className='flex gap-x-3 items-center cursor-pointer'>
            <FaUser className='text-2xl rounded-full'/>
            <div className=''>
              <Link to={`/user-details/${rev.id}`} className='font-bold'>{rev.user}</Link>
            </div>
          </div>
          <h3 className='text-gray-400 italic font-serif'><span>{rev.date}</span> <br /> Category:<Link to={`/review/${rev.category}`} className='text-blue-500 hover:cursor-pointer'> {rev.category}</Link></h3>
          <p className='text-yellow-200 text-xl'>{rev.title}</p>
          <p className='text-gray-300'>{
            rev.review.length>20? 
              `${rev.review}
                ... 
              
              `
            :rev.review
            } <button className='text-gray-500'>continue</button></p>
          <div className='flex justify-between'>
            <button className='px-3 py-2 text-2xl'>
              <AiFillLike className='inline me-1'/> <span className='text-gray-400'>{rev.likes}</span>
            </button>
            <button className='hover:text-gray-50 duration-300'>{rev.comments.length+' '}Comments <FaComment className='inline ms-1'/></button>
          </div>
        </article>  
    </div>
  )
}

export default CustomRevCard