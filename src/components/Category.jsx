import { ChevronRight, Plane, Star, StarHalfIcon, StarOff } from 'lucide-react'
import React,{useState} from 'react'
import category from '../utils/constants.jsx'
import CategoryCard from './CategoryCard.jsx';
import { useCategory } from '../contexts/catrgory/CategoryContext.jsx';
function Category() {
    const {categories} = useCategory();
    // const [categories,setCategories] = useState([])
  return (
    <>
        <section className='py-10 px-5 bg-gray-300'>
            <div className='flex justify-between'>
            <h2 className='font-serif text-xl '>Explore Category</h2>
            <button className='px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-800 text-neutral-200 hover:ring-2'>View All <ChevronRight className='inline rounded-full bg-gray-200 hover:ring-2 text-violet-600 ms-3'/></button>
            </div>
            <div className='grid py-5  grid-cols-4 md:grid-cols-5 gap-3'>
               
  
                {
                    categories.map((c) =>
                        <CategoryCard category = {c} key ={c.id}/>
                    )
                }
            </div>

            <div className='mt-10 py-24'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-6xl py-2 font-serif'>Recent Reviews</h1>
                    <div className='flex gap-2'>
                       <span className='bg-red-600 p-1 rounded-md'>
                       <Star className='text-neutral-200  '/>
                       </span>
                       <span className='bg-red-600 p-1 rounded-md'>
                       <Star className='text-neutral-200  '/>
                       </span>
                       <span className='bg-sky-600 p-1 rounded-md'>
                       <Star className='text-neutral-200  '/>
                       </span>
                       <span className='bg-violet-600 p-1 rounded-md'>
                       <Star className='text-neutral-200  '/>
                       </span>
                       <span className='bg-yellow-600 p-1 rounded-md'>
                       <StarHalfIcon className='text-neutral-200'/>
                       </span>
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default Category