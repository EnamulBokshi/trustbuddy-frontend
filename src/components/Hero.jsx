import React,{useRef} from 'react'
import {Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react';
// import { Swiper, useSwiper } from '@welcome-ui/swiper'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar';
import { Star } from 'lucide-react';


function Hero({items}) {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
    <>
      <Swiper
      // install Swiper modules
      spaceBetween={0}
      slidesPerView={1}
      
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      modules={[Autoplay, Pagination, Navigation]}
        className="w-100 px-8   py-10 mx-auto"
    >
      {
        items.map((item)=>(
          <SwiperSlide className={`${item.bg}  px-4  `} key={item.id}>
            <div className='flex justify-between px-10 items-center py-5 md:gap-48 gap-10' >
            <div className='flex flex-col gap-4'>
                <div className='text-4xl text-neutral-100'>
                    {
                        item.slogan
                    }
                </div>
                <div>
                    <input type="search" className='rounded-lg px-2 py-1 text-gray-400 bg-neutral-100' placeholder='search..' />
                </div>
            </div>
            <div className='bg-neutral-200 md:flex flex-col px-4 py-4 gap-4 rounded-lg max-w-96 hidden'>
                <div className='flex gap-2'>
                {
                    item.card.stars.map((i) => <Star className='text-yellow-500'/>)
                }
                </div>
                <h2>
                    {
                        item.card.review
                    }
                </h2>
                <div>
                    <div className='flex justify-between'>
                        <div className='flex justify-start'>
                            <div className='relative'>
                                <span>
                                {
                                    item.card.avg
                                }
                                </span>
                                <span className='ms-[-20px] bg-blue-600 text-neutral-50'>
                                    {
                                        item.card.badge
                                    }
                                </span>
                            </div>
                            <h2 className=' font-bold'>{item.card.user}</h2>
                        </div>
                        <h2 className='text-gray-300'>{item.card.time}</h2>
                    </div>
                    <div>
                        <div>
                            <span className='font-bold'> Response from the owner. </span>  <span className='text-gray-300 ms-10'>{item.card.ownerResponseDate}</span>
                        </div>
                        <h2>
                            {`${item.card.ownerResponse} ${item.card.ownerReact}`}
                        </h2>
                    </div>
                </div>
            </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>

    </>
  )
}

export default Hero;






