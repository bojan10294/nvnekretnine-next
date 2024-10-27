import { useQuery } from '@tanstack/react-query';
import Link from 'components/Link';
import Text from 'components/Text';
import { getHighlightedApartments } from 'lib/fetchService';
import Image from 'next/image';
import React from 'react';

const Popular = () => {
  const { data: highlighted } = useQuery(
    ['highlightedApartments'],
    getHighlightedApartments
  );

  return (
    <section>
      <div className="container">
        <Text className="mb-10 text-center" styling="h1" tag="h2">
          Istaknuti oglasi
        </Text>
        <div className="grid grid-cols-3 gap-6">
          {highlighted?.data?.map((apartment: any) => (
            <Link
              key={apartment.id}
              href={`/prodaja-stanova/nekretnina/${apartment.title}`}
            >
              <div className="relative p-4 bg-gray-100 rounded-lg shadow-md">
                <Image
                  alt={apartment.title}
                  className="object-cover object-center w-full mb-6 rounded h-60"
                  height={400}
                  src={apartment?.image?.url || '/img/placeholder.jpg'}
                  width={720}
                />
                <h3 className="text-xs font-medium tracking-widest uppercase text-primary title-font">
                  {apartment.city}
                </h3>
                <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                  {apartment.title}
                </h2>
                <div className="flex justify-between">
                  <h2 className="text-sm font-medium text-gray-900 title-font">
                    Površina: {apartment.area} m<sup>2</sup>
                  </h2>
                  <span className="text-sm font-medium text-primary">
                    {apartment.purpose}
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  {apartment.type}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
