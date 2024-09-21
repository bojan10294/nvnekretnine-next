/* eslint-disable no-console */
import { useQuery } from '@tanstack/react-query';
import DropdownMenu from 'components/DropdownMenu';
import InteractiveElement from 'components/InteractiveElement';
import Link from 'components/Link';
import { getCities } from 'lib/fetchService';
import { FC } from 'react';

interface Props {
  city?: string;
}

const CityList: FC<Props> = ({ city }) => {
  const {
    data: { data: cities }
  } = useQuery(['cities'], getCities);

  return (
    <section className="pb-0">
      <div className="container">
        <div className="flex justify-center">
          <div className="md:hidden ">
            <DropdownMenu
              className="absolute py-4 rounded px-4 lg:-translate-x-full bg-gray-light left-1/2 -translate-x-1/2 top-[130%] border-b-2 border-primary gap-2 inline-grid z-10 w-max max-w-sm"
              trigger={
                <InteractiveElement
                  aria-label="Language picker"
                  className="grid items-center grid-flow-col gap-1 px-6 py-1 border-2 rounded w-fit border-primary-light"
                >
                  {city || 'Sve lokacije'}
                </InteractiveElement>
              }
            >
              <Link
                key={0}
                className={`px-4 py-1 !block focus:outline-none ${
                    !city &&
                    'text-white bg-primary-light'
                  }`}
                href="/prodaja-stanova"
              >
                Sve lokacije
              </Link>
              {cities.map((data: any, index: number) => (
                <Link
                  key={index + 1}
                  className={`px-4 py-1 !block focus:outline-none ${
                    city === data.attributes.Naziv &&
                    'text-white bg-primary-light'
                  }`}
                  href={`/prodaja-stanova/${data.attributes.Naziv}`}
                >
                  {data.attributes.Naziv}
                </Link>
              ))}
            </DropdownMenu>
          </div>
          <div className="hidden border-2 rounded md:flex border-primary-light">
            <Link
              className={`px-4 py-1 focus:outline-none ${
                !city && 'text-white bg-primary-light'
              }`}
              href="/prodaja-stanova"
            >
              Sve lokacije
            </Link>
            {cities.map((data: any, index: number) => (
              <Link
                key={index}
                className={`px-4 py-1 focus:outline-none ${
                  city === data.attributes.Naziv &&
                  'text-white bg-primary-light'
                }`}
                href={`/prodaja-stanova/${data.attributes.Naziv}`}
              >
                {data.attributes.Naziv}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityList;
