import React from 'react'
import { Smile,BadgeCheck,ThumbsUp, LucideNavigation} from 'lucide-react'
import Card from './Card';
import {Link} from 'react-router'
import {easeInOut, motion} from 'framer-motion'
function Reviews() {
    const reviewData = [
       {
            revID : '1213434',
            stars: [1,2,3,4,5],
            review: 'Component Collector has some free components. The rest can be purchased with credits. Claim your free credits when you sign up!',
            avg: <Smile />,
            badge: <BadgeCheck />,
            time: "1 Day ago",
            user: "Bob Ross",
            response:{
                type :'',
                text:'',
                react:'',
                date:''
            }
        },
        {
            revID : '1111',
            stars: [1,2,3,4,5],
            review: 'Component Collector has some free components. The rest can be purchased with credits. Claim your free credits when you sign up!',
            avg: <Smile className='text-red-400'/>,
            badge: <BadgeCheck className='text-emerald-600'/>,
            time: "1 Day ago",
            user: "Bob Ross",
            response:{
                type :'Response From Owner',
                text:"Thanks! We love your response",
                react:<ThumbsUp className = 'text-yellow-500'/>,
                date:"6 days ago"
            }
        },
        {
            revID : '1111',
            stars: [1,2,3,4,5],
            review: 'Component Collector has some free components. The rest can be purchased with credits. Claim your free credits when you sign up!',
            avg: <Smile className='text-teal-500'/>,
            badge: <BadgeCheck className='text-emerald-600'/>,
            time: "1 Day ago",
            user: "Bob Ross",
            response:{
                type :'Response From Owner',
                text:"Thanks! We love your response",
                react:<ThumbsUp className = 'text-yellow-500'/>,
                date:"6 days ago"
            }
        },
        {
            revID : '1111',
            stars: [1,2,3,4,5],
            review: 'Component Collector has some free components. The rest can be purchased with credits. Claim your free credits when you sign up!',
            avg: <Smile className='text-emerald-700'/>,
            badge: <BadgeCheck className='text-emerald-600'/>,
            time: "1 Day ago",
            user: "Bob Ross",
            response:{
                type :'Response From Owner',
                text:"Thanks! We love your response",
                react:<ThumbsUp className = 'text-yellow-500'/>,
                date:"6 days ago"
            }
        },
        {
            revID : '1111',
            stars: [1,2,3,4,5],
            review: 'Component Collector has some free components. The rest can be purchased with credits. Claim your free credits when you sign up!',
            avg: <Smile className='text-violet-600'/>,
            badge: <BadgeCheck className='text-emerald-600'/>,
            time: "1 Day ago",
            user: "Bob Ross",
            response:{
                type :'Response From Owner',
                text:"Thanks! We love your response",
                react:<ThumbsUp className = 'text-yellow-500'/>,
                date:"6 days ago"
            }
        }
    ]
for(const rev in reviewData){
    if(rev.revID == '1111'){
        rev.response.type = 'Response From Owner';
        rev.response.text = "Thanks! We love your response"
        rev.response.react =  <ThumbsUp className = 'text-yellow-500'/>
        rev.response.date = "6 days ago"
    }
}
    const ownerResponse = [
        {
            ownerResponse: "Thanks! We love your response",
            ownerReact: <ThumbsUp className = 'text-yellow-500'/>,
            ownerResponseDate: "6 days ago"
        }
    ]
  return (
    
    <div className='md:px-36 px-5 -mt-28 py-10 bg-transparent'>
        <div 
       
        
        className='grid md:grid-cols-2 grid-cols-1 gap-3 backdrop-blur-md  ring-2 ring-slate-50 bg-transparent shadow-xl p-10 rounded-lg '>
            {
                reviewData.map((data,index) => (
                    <motion.div key={index}
                    
                    initial={{
                        opacity:0
                      }}
                      whileInView={{
                        opacity:1,
                        scale:1,
                        transition:{
                          duration:.4,
                          ease: 'all'
                        }
                      }}
                      viewport={{
                        once:true,
                        amount:"all",
                      }}
                    >
                        <Card data={data} key={index}/>
                     </motion.div>
                ))
            }
        </div>
        <div className='flex justify-center pt-10'>
            <button className='py-3 w-1/2 bg-slate-500 rounded-lg text-neutral-50 hover:bg-slate-700 hover:ring-2 ring-sky-200'>
               <Link to={'/review'}>
               Show all <LucideNavigation className='inline'/>
               </Link>
            </button>
        </div>
    </div>
  )
}

export default Reviews