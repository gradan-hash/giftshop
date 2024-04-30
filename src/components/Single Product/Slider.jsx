import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

SwiperCore.use([Navigation, Pagination])

const Slider = ({ images }) => {
  images = images.filter((i) => typeof i === 'string')
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image instanceof File ? '' : image}
            alt={`Slide ${index}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
