/* eslint-disable no-console */
import { useQuery } from '@tanstack/react-query';
import Link from 'components/Link';
import { getCityLocations, getLocations } from 'lib/fetchService';
import Image from 'next/image';
import { FC } from 'react';

const status: any = {
  prodato: 'bg-red-100 text-red-800',
  'u izgradnji': 'bg-red-100 text-red-800',
  'u pripremi': 'bg-green-100 text-green-800',
  useljivo: 'bg-blue-100 text-blue-800'
};

interface Props {
  city?: string;
}

const Locations: FC<Props> = ({ city }) => {
  const queryLocations = useQuery(['locations'], getLocations);
  const queryCityLocations = useQuery(['location', city], () =>
    getCityLocations(city)
  );
  const locations = city
    ? queryCityLocations.data.data
    : queryLocations.data.data;

  return (
    <section>
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.length
            ? locations.map((data: any, index: number) => (
                <Link
                  key={index}
                  href={`/prodaja-stanova/lokacija/${data.attributes.Adresa}`}
                >
                  <div className="relative p-4 bg-gray-100 rounded-lg">
                    <span
                      className={`text-xs absolute top-6 right-4 capitalize font-medium mr-2 px-2.5 py-0.5 rounded-full ${
                        status[data.attributes.Status] as any
                      }`}
                    >
                      {data.attributes.Status}
                    </span>
                    <Image
                      alt="content"
                      className="object-cover object-center w-full h-40 mb-6 rounded"
                      height={400}
                      src={
                        data.attributes.Slike.data
                          ? data.attributes.Slike.data?.attributes.url
                          : '/img/construction-1.jpg'
                      }
                      width={720}
                    />
                    <h3 className="text-xs font-medium tracking-widest uppercase text-primary title-font">
                      {data.attributes.Grad.data?.attributes.Naziv}
                    </h3>
                    <h2 className="text-lg font-medium text-gray-900 title-font">
                      {data.attributes.Adresa}
                    </h2>
                  </div>
                </Link>
              ))
            : 'Nema nekretnina...'}
        </div>
      </div>
    </section>
  );
};

export default Locations;
