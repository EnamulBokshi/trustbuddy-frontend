import { useState } from 'react'
import Nav from './components/Nav'
import { Badge, BadgeCheck, Smile,ThumbsUp} from 'lucide-react'
import Hero from './components/Hero'
import Category from './components/Category'



function App() {
  const sliderItems = [
    {
      
      bg: "bg-sky-600",
      slogan: "Red review. Write review. Find company. You can trust.",

      card : {
        stars: [1,2,3,4,5],
        review: 'Component Collector has some free components. The rest can be purchased with credits. Claim your free credits when you sign up!',
        avg: <Smile />,
        badge: <BadgeCheck />,
        time: "1 Day ago",
        user: "Bob Ross",
        ownerResponse: "Thanks! We love your response",
        ownerReact: <ThumbsUp className = 'text-yellow-500'/>,
        ownerResponseDate: "6 days ago"
      }
    },
    {
      
      bg: "bg-violet-600",
      slogan: "Red review. Write review. Find company. You can trust.",

      card : {
        stars: [1,2,3,4,5],
        review: 'Component Collector has some free components. The rest can be purchased with credits. Claim your free credits when you sign up!',
        avg: <Smile />,
        badge: <BadgeCheck />,
        time: "1 Day ago",
        user: "Bob Ross",
        ownerResponse: "Thanks! We love your response",
        ownerReact: <ThumbsUp className = 'text-yellow-500'/>,
        ownerResponseDate: "6 days ago"
      }
    }
  ]


  return (
    <>
      <header className=''>
        <Nav />
        <Hero items = {sliderItems}/>
      </header>
      <Category />
    </>
  )
}

export default App
