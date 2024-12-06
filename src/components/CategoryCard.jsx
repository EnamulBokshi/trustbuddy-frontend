import React from 'react'

function CategoryCard({category}) {
  return (
    <div className='px-5 py-3 items-center gap-3 bg-neutral-100 flex justify-center hover:ring-2 rounded-lg cursor-pointer'>
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
    </div>
  )
}

export default CategoryCard