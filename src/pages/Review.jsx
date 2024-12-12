import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import { useRev } from '../contexts/reviews/UseRev';
import CommentCard from '../components/CommentCard';
// import {useRev,RevProvider,RevContext} from '../contexts/reviews/UseRev'
import category from '../utils/constants';

import CustomRevCard from '../components/CustomRevCard';
import SearchBox from '../components/SearchBox';


function Review() {
  const {reviews,demoReviews,addReview,addComment} = useRev();
  const review = {
    id:1,
    img:'',
    review:'New review added!',
    rating:5.0,
    date:'12-10-24',
    likes:0,
    comments: [
        {
            id:4,
            userId:1,
            comment:'Thanks for such a good review!!',
            replys: [
                {
                    id:1,
                    userId:2,
                    reply:'Thans for your comment'
                }
            ]

        }
    ,]
}
const [newComment,setNewComment] = useState('');
// addReview(review);
const addNewComment = (reviewId)=>{
}
const showComment = (comment)=>{
  console.log(comment)
}
const createStars = (stars)=>{
  const arr = [...Array(stars).keys()];
console.log(arr)
  return arr
}
useEffect(()=>{
  
},[])
  return (
    <>
      <Nav active='review'/>
        <section className='md:px-16 px-5 bg-gray-200'>
          {/* <h1 className=''>Recent</h1> */}
        <section className='flex justify-between items-center px-5 py-10 '>
            <div className='w-1/2 '>
              <select name="category" id="category" className='px-3 py-2 rounded-lg bg-violet-700 text-white' >
                <option value="all">Select Category</option>
                <option value="all">All</option>
                {category.map((item,index)=>(
                  <option value={item.name} key={item.id}>{item.name} {item.icon} </option>
                ))}
              </select>
            </div>
            <SearchBox />
            {/* <input type="text" placeholder='Search...' className='text-gray-300 bg-gray-200 ring-2 px-3 py-2 duration-300 focus:bg-gray-600 rounded-lg'/> */}
            
        </section>
        <section className='pb-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-3 '>
          {
              reviews.map((rev)=>(
                <CustomRevCard rev={rev}/>
              ))
            }
          </div>
        </section>
        </section>
      <Footer />
    </ >
  )
}

export default Review