import { m } from 'framer-motion';
import Image from 'next/image';

const HeroGallery = () => (
  <div className="flex justify-center">
    <div className="grid max-w-xs grid-cols-2 gap-4 pb-16 pr-6 lg:gap-5 lg:pr-12 lg:max-w-md">
      <m.div
        animate={{ opacity: 1, translateY: 0 }}
        className="relative z-10 after:rounded-xl after:top-2 after:left-12 after:-z-10 after:w-full after:h-full after:bg-secondary-purple after:absolute before:absolute before:w-9 before:h-9 lg:before:w-14 lg:before:h-14 before:bg-secondary-purple before:rounded-br-xl before:z-10 before:bottom-0 before:right-0 before:rounded-tl-[100%]"
        initial={{ opacity: 0, translateY: -50 }}
        transition={{ delay: 0.6, duration: 1.05, ease: 'easeOut' }}
      >
        <Image
          alt="Hero Image"
          className="relative shadow-01 rounded-xl"
          height={839}
          loading="lazy"
          src="/img/hero5.jpg"
          width={640}
        />
      </m.div>
      <m.div
        animate={{ opacity: 1, translateX: 0 }}
        className="relative z-10 self-end w-10/12 after:rounded-xl after:top-8 after:left-8 lg:after:left-20 after:-z-10 after:w-full after:h-full after:bg-primary after:absolute before:absolute before:w-9 before:h-9 lg:before:w-14 lg:before:h-14 before:bg-primary before:rounded-bl-xl before:z-10 before:bottom-0 before:left-0 before:rounded-tr-[100%]"
        initial={{ opacity: 0, translateX: 50 }}
        transition={{ delay: 0.75, duration: 0.9, ease: 'easeOut' }}
      >
        <Image
          alt="Hero Image"
          className="shadow-01 rounded-xl"
          height={427}
          loading="lazy"
          src="/img/hero6.jpg"
          width={640}
        />
      </m.div>
      <m.div
        animate={{ opacity: 1, translateX: 0 }}
        className="relative z-10 self-start w-11/12 after:rounded-xl justify-self-end after:top-10 after:left-2 after:-z-10 after:w-full after:h-full after:bg-secondary-purple-dark after:absolute before:absolute before:w-9 before:h-9 lg:before:w-14 lg:before:h-14 before:bg-secondary-purple-dark before:rounded-tr-xl before:z-10 before:top-0 before:right-0 before:rounded-bl-[100%]"
        initial={{ opacity: 0, translateX: -50 }}
        transition={{ delay: 0.9, duration: 0.75, ease: 'easeOut' }}
      >
        <Image
          alt="Hero Image"
          className="shadow-01 rounded-xl"
          height={419}
          loading="lazy"
          src="/img/hero4.jpg"
          width={640}
        />
      </m.div>
      <m.div
        animate={{ opacity: 1, translateY: 0 }}
        className="relative z-10 after:rounded-xl after:top-16 after:left-6 after:-z-10 after:w-full after:h-full after:bg-secondary-purple-light after:absolute before:absolute before:w-9 before:h-9 lg:before:w-14 lg:before:h-14 before:bg-secondary-purple-light before:rounded-tl-xl before:z-10 before:top-0 before:left-0 before:rounded-br-[100%]"
        initial={{ opacity: 0, translateY: 50 }}
        transition={{ delay: 1.05, duration: 0.6, ease: 'easeOut' }}
      >
        <Image
          alt="Hero Image"
          className="shadow-01 rounded-xl"
          height={640}
          loading="lazy"
          src="/img/hero2.jpg"
          width={640}
        />
      </m.div>
    </div>
  </div>
);

export default HeroGallery;
