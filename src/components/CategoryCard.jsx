import React from 'react'
import {Link} from 'react-router'
function CategoryCard({category}) {
  return (
    <Link to={`/review/${category.name}`}  className='px-5 py-3 items-center gap-3 bg-neutral-100 flex justify-center hover:ring-2 rounded-lg cursor-pointer'>
        <span>
            {
                category.icon
            }
        </span>
        <span>
            {
              category.name  
            }
        </span>
    </Link>
  )
}

export default CategoryCard