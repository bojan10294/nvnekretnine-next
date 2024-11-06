import { FC } from 'react';
import Text from 'components/Text';
import BackgroundImage from 'components/BackgroundImage';
import { getSingleLocation } from 'lib/fetchService';
import { useQuery } from '@tanstack/react-query';

interface Props {
  title: string;
  bgImageSrc: string;
  alt: string;
  location?: string;
}

const MiniHero: FC<Props> = ({ title, alt, bgImageSrc, location }) => {
  const { data } = useQuery(
    ['location', location],
    () => getSingleLocation(location || ''),
    {
      enabled: !!location
    }
  );
  const locationData = data?.data[0];

  return (
    <section className="relative items-center pt-20 pb-10 overflow-hidden md:pt-72 bg-gray-dark">
      <BackgroundImage
        alt={alt}
        className="object-bottom"
        opacity="50"
        src={bgImageSrc}
      />
      <div className="container relative md:flex md:items-center md:flex-col md:justify-end">
        <Text
          bold={false}
          className={`text-white ${
            location ? 'lg:!text-5xl' : 'lg:!text-6xl'
          } uppercase`}
          styling="h1"
          tag="h1"
        >
          {title}
        </Text>
        {location && (
          <Text
            className="!font-medium text-primary mt-4"
            styling="h3"
            tag="h2"
          >
            {locationData.attributes.Adresa},{' '}
            {locationData.attributes.Grad.data.attributes.Naziv}
          </Text>
        )}
      </div>
    </section>
  );
};

export default MiniHero;
