import Image from 'next/image';
import { FC } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

interface Props {
  swiperItems?: string[];
}

const SwiperComponent: FC<Props> = ({ swiperItems }) => (
  <div>
    <Swiper
      breakpoints={{
        1024: {
          slidesPerView: 4,
          spaceBetween: 32
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 24
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 24
        }
      }}
      lazyPreloadPrevNext={3}
      modules={[Navigation, Pagination, A11y, Thumbs]}
      navigation
      pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
    >
      {swiperItems?.map((item) => (
        <SwiperSlide key={item}>
          <Image
            alt="slider image"
            className="object-contain w-full aspect-video min-h-[21rem]"
            height={800}
            src={item}
            width={1200}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="flex justify-center mt-3 swiper-custom-pagination" />
  </div>
);

export default SwiperComponent;
