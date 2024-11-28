import { Star } from 'lucide-react'
import React from 'react'

function Card({
    data = [],

    style = ''
}) {
  return (
    <div className = {`bg-neutral-200 rounded-lg p-4 flex flex-col gap-3`}>
        <div className='flex flex-wrap gap-2'>
           {
             data.stars.map((i) => (
                <Star  key={i} className='text-yellow-500'/>
             ))
           }

        </div>
        <h2>
            {
                data.review
            }
        </h2>
        <div className='flex flex-col py-1 gap-4'>
            <div className='flex justify-between'>
                <div className='flex gap-1'>
                <span>
                    {
                        data.avg
                    }
                </span>
                <h2 className='font-bold font-serif'>{data.user}</h2>
                <span>
                    {
                        data.badge
                    }
                </span>
                </div>
                <p>{data.time}</p>
            </div>
            
            <div>
                <h1 className='font-bold font-serif'>{data.response.type}</h1>
                <h2>
                    {
                        data.response.text
                    }
                </h2>
                <p>
                    {
                        data.response.date
                    }
                </p>
            </div>
        
        </div>
    </div>
  )
}

export default Card