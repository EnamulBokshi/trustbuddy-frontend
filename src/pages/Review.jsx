import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import { useRev } from '../contexts/reviews/UseRev';
import CommentCard from '../components/CommentCard';
import CustomRevCard from '../components/CustomRevCard';
import SearchBox from '../components/SearchBox';
import { useCategory } from '../contexts/catrgory/CategoryContext';
import { useUser } from '../contexts/users/userContext';
import { FaClockRotateLeft } from 'react-icons/fa6';

function Review() {
  const {c_user} = useUser();
  console.log("Current User: ",c_user)
  const{categories} = useCategory();
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
const [reviewsShow,setReviewShow] = useState([]);
const [currentCategory,setCurrentCategory] = useState('all');
const [searchValue,setSearchValue] = useState('')
const [displayReview,setDisplayReview] = useState(false)
const [reviewID,setReviewId] = useState('')

const [newComment,setNewComment] = useState('');
// addReview(review);
const addNewComment = (reviewId)=>{
}
const showComment = (comment)=>{
  console.log(comment)
}

// Stars Counter
const createStars = (stars)=>{
  const arr = [...Array(stars).keys()];
  return arr
}

// Searching Reviews
const handleSearch = (e)=>{
  const value = e.target.value
  setSearchValue(value)
  setReviewShow(reviews.filter(rev => rev.title.toLowerCase().includes(searchValue.toLowerCase())))
}

// handleReviewDisplay
const handleReviewDisplay =(id)=>{
  console.log("id",id)
  setDisplayReview(!displayReview);
  setReviewId(id)
}

useEffect(()=>{
  if(currentCategory == 'all'){
    setReviewShow(reviews)
  }
  else{
    setReviewShow(reviews.filter(rev => rev.category == currentCategory))
  }
},[currentCategory,setCurrentCategory])
  return (
    <>
      <Nav active='review'/>
        <section className='md:px-16 px-5 bg-gray-200 relative' onClick={()=>setDisplayReview(!displayReview)}>
          {/* <h1 className=''>Recent</h1> */}
        <section className='flex justify-between items-center px-5 py-10 '>
            <div className='w-1/2 '>
              <select name="category" id="category" className='px-3 py-2 rounded-lg bg-violet-700 text-white' onChange={(e)=>setCurrentCategory(e.target.value)} >
                <option value="all">All</option>
                {categories.map((item,index)=>(
                  <option value={item.name} key={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
            <SearchBox value={searchValue} onChange={(e)=>handleSearch(e)}/>
            {/* <input type="text" placeholder='Search...' className='text-gray-300 bg-gray-200 ring-2 px-3 py-2 duration-300 focus:bg-gray-600 rounded-lg'/> */}
            
        </section>
        <section className='pb-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-3 '>
          {
              reviewsShow.length >0 ?reviewsShow.map((rev)=>(
                <CustomRevCard rev={rev} key={rev.id} onClick={(e) => handleReviewDisplay(e.target.id)}/>
              ))
              :
              <p className='text-center text-2xl text-teal-400'>No Reviews ... </p>
            }
          </div>
        </section>
        {/* {
          displayReview && <aside className='fixed top-0 w-[500px] right-0 z-10 bg-gray-900 p-5 h-lvh' >
          <h1>Hello world</h1>
          <FaWindowClose onClick={()=>setDisplayReview(false)} className='absolute right-5 top-5 text-4xl text-white hover:text-red-600'/>
          <h1>{reviewID}</h1>
      </aside>
        } */}
        </section>
        
      <Footer />
    </ >
  )
}

export default Review