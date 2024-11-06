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
    <section className="bg-secondary-blue">
      <div className="container">
        <Text className="mb-10 text-center text-white" styling="h1" tag="h2">
          Istaknuti oglasi
        </Text>
        <div className="grid gap-6 md:grid-cols-3">
          {highlighted?.data?.map((apartment: any) => (
            <Link
              key={apartment.id}
              href={`/prodaja-stanova/nekretnina/${apartment.Naziv}`}
            >
              <div className="relative overflow-hidden bg-gray-100 border-b-[5px] h-full hover:border-primary-dark/70 rounded-lg shadow-md border-primary-dark">
                <div className="relative">
                  <Image
                    alt={apartment.title}
                    className="object-cover object-center w-full mb-6 h-60"
                    height={400}
                    src={apartment?.image?.url || '/img/placeholder.jpg'}
                    width={720}
                  />
                  <div className="absolute p-4 border-b-4 rounded-md shadow bg-primary -bottom-6 right-6 border-primary-dark">
                    <span className="text-xl font-bold">
                      {apartment.Cena ? `${apartment.Cena} €` : 'Na upit'}
                    </span>
                  </div>
                  {apartment.Namena && (
                    <div className="absolute px-4 py-2 text-white shadow rounded-3xl bg-secondary-blue top-4 left-4">
                      <span className="text-base font-medium">
                        {apartment.Namena}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xs font-medium tracking-widest uppercase text-secondary-blue title-font">
                    {apartment.Grad}
                  </h3>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900 title-font">
                    {apartment.Naziv}
                  </h2>
                  <div className="flex justify-between">
                    <h2 className="text-sm font-medium text-gray-900 title-font">
                      Površina: {apartment.PovrsinaKvM} m<sup>2</sup>
                    </h2>
                  </div>
                  <div className="mt-2 text-sm font-semibold text-gray-600">
                    {apartment.Tip}
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    {apartment.Uknjizen ? 'Uknjižen' : 'Neuknjižen'},{' '}
                    {apartment.Parking && 'Parking'}
                  </div>
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
