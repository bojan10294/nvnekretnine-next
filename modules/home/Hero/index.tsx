import Link from 'components/Link';
import { m } from 'framer-motion';
import { FC } from 'react';
import Text from 'components/Text';
import Image from 'next/image';
import BackgroundImage from 'components/BackgroundImage';

const Hero: FC = () => (
  <section className="relative flex lg:min-h-screen lg:h-fit">
    <BackgroundImage
      alt="hero background"
      loading="eager"
      src="/img/sales.jpg"
    />
    <div className="grid items-center w-full overflow-hidden md:grid-cols-2 gap-y-8">
      <div className="px-4 md:half-container justify-self-end md:pr-12">
        <m.div
          animate={{ opacity: 1 }}
          className="mb-10 text-black lg:mb-0"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.6, duration: 1.05, ease: 'easeOut' }}
        >
          <Text
            className="inline-block mb-2 text-xl uppercase lg:mb-4 lg:text-3xl text-primary"
            tag="span"
          >
            Digital agency
          </Text>
          <Text className="mb-6 font-normal lg:mb-8 lg:!text-6xl" tag="h1">
            Web. Mobile. Dedicated Teams. Custom Software.
          </Text>
          <Text className="mb-6 text-xl lg:mb-9 lg:text-3xl">
            We got it all.
          </Text>
          <Link color="white" href="/contact" variant="button">
            Schedule time to talk
          </Link>
        </m.div>
      </div>
      <div className="-mr-[15%] relative">
        <Image
          alt="Hero Image"
          className=""
          height={2662}
          loading="eager"
          src="/img/hero-9.png"
          width={4136}
        />
      </div>
    </div>
  </section>
);

export default Hero;
