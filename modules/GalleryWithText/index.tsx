import SwiperComponent from 'components/Swiper';
import Text from 'components/Text';
import { FC } from 'react';

export interface ListItem {
  description: string;
  img: string;
  title: string;
}

const swiperItems = [
  '/img/reference/ref1.jpg',
  '/img/reference/ref2.jpg',
  '/img/reference/ref3.jpg',
  '/img/reference/ref4.jpg',
  '/img/reference/ref5.jpg',
  '/img/reference/ref6.jpg',
  '/img/reference/ref7.jpg',
  '/img/reference/ref8.jpg',
  '/img/reference/ref9.jpg',
  '/img/reference/ref10.jpg',
  '/img/reference/ref11.jpg',
  '/img/reference/ref12.jpg',
  '/img/reference/ref13.jpg',
  '/img/reference/ref14.jpg',
  '/img/reference/ref15.jpg',
  '/img/reference/ref16.jpg'
];

const GalleryWithText: FC = () => (
  <section id="reference">
    <div className="container">
      <div className="flex flex-col items-center mb-6">
        <Text className="uppercase" separator="wide" tag="h2">
          Reference
        </Text>
      </div>
      <div className="w-full">
        <SwiperComponent swiperItems={swiperItems} />
      </div>
    </div>
  </section>
);

export default GalleryWithText;
