import { useQuery } from '@tanstack/react-query';
import BackgroundImage from 'components/BackgroundImage';
import Link from 'components/Link';
import Text from 'components/Text';
import { getTopCities } from 'lib/fetchService';
import React from 'react';

const CardImage = () => {
  const { data: topCities } = useQuery(['topCities'], getTopCities);

  return (
    <section className="pt-48 bg-primary">
      <div className="container">
        <Text className="mb-10 text-center" styling="h1" tag="h2">
          Koji grad za život je vaš izbor? Pretraži sada.
        </Text>
        <div className="grid gap-6 md:grid-cols-3">
          {topCities?.data?.map((city: any) => (
            <Link
              key={city.id}
              className="relative px-8 pt-40 pb-12 overflow-hidden text-white bg-black shadow-md rounded-2xl"
              href={`/search?grad=${encodeURIComponent(city.naziv)}`}
            >
              <BackgroundImage
                alt={city.naziv}
                opacity="50"
                src={city?.slika?.url || '/img/placeholder.jpg'}
              />
              <Text className="relative" tag="h3">
                {city.naziv}
              </Text>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardImage;
