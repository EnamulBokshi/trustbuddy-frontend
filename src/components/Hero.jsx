import React, { useRef } from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper, useSwiper } from '@welcome-ui/swiper'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Star } from "lucide-react";
import Card from "./Card";
import SearchBox from "./SearchBox";
import { motion } from 'framer-motion'
function Hero({ items }) {
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
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
          playOnMouseLeave: true
        }}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        modules={[Autoplay, Pagination, Navigation]}
        className="bg-blue-500"

      >
        {items.map((item, index) => (
          <SwiperSlide className={` px-4 py-12  `} key={item.id}>
            <div className="flex justify-between  px-10 items-center py-5 md:gap-48 gap-10">
              <motion.div 
              initial={{
                opacity:0
              }}
              whileInView={{
                opacity:1,
                scale:1,
                transition:{
                  duration:.5,
                  
                }
              }}
              viewport={{
                once:false,
                amount:"all",
                

              }}
              className="flex flex-col gap-4 items-center justify-center">
                <div className="text-4xl text-neutral-100 text-center">{item.slogan}</div>
                <div className="flex justify-center py-3">
                  <SearchBox />
                </div>
              </motion.div>

              <motion.div
              initial={{
                opacity:0
              }}
              whileInView={{
                opacity:1,
                scale:1,
                transition:{
                  duration:.5,
                  
                }
              }}
              viewport={{
                once:true,
                amount:"all",
              }}
              >
              <Card data={item.card} key={index} />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Hero;
