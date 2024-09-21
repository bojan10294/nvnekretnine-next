/* eslint-disable no-console */
import { useQuery } from '@tanstack/react-query';
import Text from 'components/Text';
import { getSingleLocation } from 'lib/fetchService';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  location: string;
}

const SingleLocation: FC<Props> = ({ location }) => {
  const { data } = useQuery(['location', location], () =>
    getSingleLocation(location)
  );
  const locationData = data.data[0];

  return (
    <section className="pb-0">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-2">
          <Image
            alt="content"
            className="object-cover object-center w-full mb-6 rounded h-52 md:h-96"
            height={400}
            src={
              locationData.attributes.Slike.data
                ? locationData.attributes.Slike.data?.attributes.url
                : '/img/construction-1.jpg'
            }
            width={720}
          />
          <div>
            {locationData.attributes.OpremljenostObjekta && (
              <div className="mb-8">
                <Text className="mb-3 font-normal" tag="h3">
                  Opremljenost objekta:
                </Text>
                <div>{locationData.attributes.OpremljenostObjekta}</div>
              </div>
            )}
            {locationData.attributes.opremljenost_stanova && (
              <div>
                <Text className="mb-3 font-normal" tag="h3">
                  Opremljenost stanova:
                </Text>
                <div>{locationData.attributes.opremljenost_stanova}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleLocation;
