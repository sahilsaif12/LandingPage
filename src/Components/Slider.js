import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
function Slider() {
    return (
        <div className='w-80 md:w-3/5  text-white' >
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: -100,
                    stretch: 150,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={true}
                direction='horizontal'
                navigation={false}
                className='b-blue-500/25 rounded-2xl py-3 px-4   '
                pagination={{ clickable: true }}

                onSwiper={(swiper) => console.log(swiper)}

                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide  >
                    <img src={require('../Images/slide1.png')} style={{ height: "300px" }}  alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('../Images/slide2.png')} style={{ height: "300px" }} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('../Images/slide3.png')} style={{ height: "300px" }} alt="" />
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default Slider