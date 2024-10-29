/* eslint-disable no-console */
import Image from 'next/image';
import { FC } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';
import Text from 'components/Text';
import Cta from 'modules/home/Cta';

interface Props {
  apartmentData: any;
}

const SingleApartment: FC<Props> = ({ apartmentData }) => {
  const lng = apartmentData.attributes.Lokacija.data.attributes.Longitude;
  const lat = apartmentData.attributes.Lokacija.data.attributes.Latitude;

  return (
    <section>
      <div className="container">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative">
            {apartmentData.attributes.Prodato && (
              <span className="text-xs absolute top-6 right-4 capitalize font-medium mr-2 px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800">
                Prodato
              </span>
            )}
            <Image
              alt="content"
              className="object-cover object-center w-full rounded h-52 md:h-96"
              height={400}
              src={
                apartmentData.attributes.Slike.data
                  ? apartmentData.attributes.Slike.data.attributes.url
                  : '/img/construction-1.jpg'
              }
              width={720}
            />
          </div>
          <div className="p-5">
            {apartmentData.attributes.Detalji.VrstaNekretnine && (
              <Text styling="h5">
                Vrsta nekretnine:{' '}
                {apartmentData.attributes.Detalji.VrstaNekretnine}
              </Text>
            )}
            <Text styling="h5">
              Adresa: {apartmentData.attributes.Lokacija.data.attributes.Adresa}
            </Text>
            {apartmentData.attributes.Detalji.PovrsinaKvM && (
              <Text styling="h5">
                Površina: {apartmentData.attributes.Detalji.PovrsinaKvM} m
                <sup>2</sup>
              </Text>
            )}
            {apartmentData.attributes.Detalji.Sprat && (
              <Text styling="h5">
                Sprat: {apartmentData.attributes.Detalji.Sprat}
              </Text>
            )}
            {apartmentData.attributes.Detalji.Useljiv && (
              <Text styling="h5">
                Useljiv: {apartmentData.attributes.Detalji.Useljiv}
              </Text>
            )}
            {apartmentData.attributes.Detalji.Lift && (
              <Text styling="h5">
                Lift: {apartmentData.attributes.Detalji.Lift ? 'Da' : 'Ne'}
              </Text>
            )}
          </div>
        </div>
        <Cta />
        <Map
          initialViewState={{
            latitude: lat,
            longitude: lng,
            zoom: 13
          }}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          style={{ height: 400, width: '100%' }}
        >
          <Marker latitude={lat} longitude={lng}>
            <div className="marker" />
          </Marker>
        </Map>
      </div>
    </section>
  );
};

export default SingleApartment;
