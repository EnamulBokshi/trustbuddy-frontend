import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SearchBox from '../components/SearchBox'
import { useRev } from '../contexts/reviews/UseRev'
import CustomRevCard from '../components/CustomRevCard'
import { useParams } from 'react-router'

function CategoryView() {
    const {category} = useParams()
    const {reviews} = useRev();
    const [categoryReviews,setCategoryReviews] = useState([]);
    useEffect(()=>{
        setCategoryReviews(reviews.filter(rev=>rev.category==category))
    },[])
  return (
    <>
        <Nav />
            <section className='p-5 bg-gray-300'>
                <div className='flex justify-center items-center my-10'>
                <SearchBox />
                </div>
                <div className='p-5 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-3'>
                        {
                            categoryReviews.length >0?  categoryReviews.map((rev)=>(
                            <CustomRevCard rev={rev}/>
                            ))
                            :
                            <p>No Review</p>
                        }
                </div>
            </section>
        <Footer />
    </>
  )
}

export default CategoryView