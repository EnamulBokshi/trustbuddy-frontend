import Nav from '../components/Nav'
import { Badge, BadgeCheck, Smile,ThumbsUp} from 'lucide-react'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Reviews from '../components/Reviews'
import Widgets from '../components/Widgets.jsx'
import Footer from '../components/Footer'
import HandsOn from '../components/HandsOn'
import { FaStar } from "react-icons/fa";
import React from 'react'

function Index() {
    const sliderItems = [
        {
          
          bg: "bg-sky-600",
          slogan: "Red review. Write review. Find company. You can trust.",
    
          card : {
            revID : '1213434',
            stars: [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>],
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
          }
        },
        {
          
          bg: "bg-violet-600",
          slogan: "Red review. Write review. Find company. You can trust.",
    
          card : {
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
          }
        }
      ]
  return (
   <>
   <Nav active={'home'}/>
      <header className=''>
        <Hero items = {sliderItems}/>
      </header>
      <Category />
      <Reviews />
      <Widgets />
      <HandsOn />
      <Footer />
   </>
  )
}

export default Index