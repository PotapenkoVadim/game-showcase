import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SliderWrapper = styled.div`
  margin: 15px 0;
  height: 500px;
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Slider({ images }) {
  return (
    <>
      {images.length > 0 && (
        <SliderWrapper>
          <Swiper
            style={{ height: '100%' }}
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {images.map((item) => (
              <SwiperSlide key={item.id}>
                <SliderImage src={item.image} loading='lazy' />
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderWrapper>
      )}
    </>
  );
}
