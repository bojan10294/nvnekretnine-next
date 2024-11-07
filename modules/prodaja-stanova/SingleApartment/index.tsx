/* eslint-disable no-console */
import Image from 'next/image';
import { FC } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';
import Text from 'components/Text';
import Cta from 'modules/home/Cta';
import Icon from 'components/Icon';
import Markdown from 'markdown-to-jsx';

interface Props {
  apartmentData: any;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

const SingleApartment: FC<Props> = ({ apartmentData }) => {
  const lng = apartmentData.attributes.Longitude;
  const lat = apartmentData.attributes.Latitude;

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
          <div className="px-5">
            <div className="grid gap-2 lg:grid-cols-2">
              {apartmentData.attributes.Tip && (
                <Text className="flex items-center" styling="h5">
                  <Icon
                    className="mr-2 shrink-0"
                    color="primary-dark"
                    size={7}
                    type="house-building"
                  />
                  Vrsta nekretnine:
                  <strong className="ml-1">
                    {apartmentData.attributes.Tip}
                  </strong>
                </Text>
              )}
              {apartmentData.attributes.Detalji.PovrsinaKvM && (
                <Text className="flex items-center" styling="h5">
                  <Icon
                    className="mr-2 shrink-0"
                    color="primary-dark"
                    size={7}
                    type="ruler"
                  />
                  Površina:
                  <strong className="ml-1">
                    {apartmentData.attributes.Detalji.PovrsinaKvM} m<sup>2</sup>
                  </strong>
                </Text>
              )}
              {apartmentData.attributes.Detalji.Namestenost && (
                <Text className="flex items-center" styling="h5">
                  <Icon
                    className="mr-2 shrink-0"
                    color="primary-dark"
                    size={7}
                    type="bed"
                  />
                  Nameštenost:
                  <strong className="ml-1 capitalize">
                    {apartmentData.attributes.Detalji.Namestenost}
                  </strong>
                </Text>
              )}
              {apartmentData.attributes.Detalji.Sprat && (
                <Text className="flex items-center" styling="h5">
                  <Icon
                    className="mr-2 shrink-0"
                    color="primary-dark"
                    size={7}
                    type="building"
                  />
                  Sprat:
                  <strong className="ml-1">
                    {apartmentData.attributes.Detalji.Sprat}
                  </strong>
                </Text>
              )}
              {apartmentData.attributes.Detalji.PogodnoZa && (
                <Text className="flex items-center ml-0.5" styling="h5">
                  <Icon
                    className="mr-2.5 shrink-0"
                    color="primary-dark"
                    size={6}
                    type="people"
                  />
                  Pogodno za:
                  <strong className="ml-1 capitalize">
                    {apartmentData.attributes.Detalji.PogodnoZa}
                  </strong>
                </Text>
              )}
              {apartmentData.attributes.Detalji.Depozit && (
                <Text className="flex items-center" styling="h5">
                  <Icon
                    className="mr-2 shrink-0"
                    color="primary-dark"
                    size={7}
                    type="money"
                  />
                  Depozit:
                  <strong className="ml-1 capitalize">
                    {apartmentData.attributes.Detalji.Depozit}
                  </strong>
                </Text>
              )}
              {apartmentData.attributes.Detalji.UseljivOd && (
                <Text className="flex items-center" styling="h5">
                  <Icon
                    className="mr-2 shrink-0"
                    color="primary-dark"
                    size={7}
                    type="calendar-check"
                  />
                  Useljiv od:
                  <strong className="ml-1">
                    {formatDate(apartmentData.attributes.Detalji.UseljivOd)}
                  </strong>
                </Text>
              )}
              <Text className="flex items-center ml-0.5" styling="h5">
                <Icon
                  className="mr-2.5 shrink-0"
                  color="primary-dark"
                  size={6}
                  type="elevator"
                />
                Lift:
                <strong className="ml-1">
                  {apartmentData.attributes.Detalji.Lift ? 'Da' : 'Ne'}
                </strong>
              </Text>
              <Text className="flex items-center ml-0.5" styling="h5">
                <Icon
                  className="mr-2.5 shrink-0"
                  color="primary-dark"
                  size={6}
                  type="book"
                />
                Uknjižen:
                <strong className="ml-1">
                  {apartmentData.attributes.Detalji.Uknjizen ? 'Da' : 'Ne'}
                </strong>
              </Text>
              <Text className="flex items-center ml-0.5" styling="h5">
                <Icon
                  className="mr-2.5 shrink-0"
                  color="primary-dark"
                  size={6}
                  type="yard"
                />
                Dvorište:
                <strong className="ml-1">
                  {apartmentData.attributes.Detalji.Dvoriste ? 'Da' : 'Ne'}
                </strong>
              </Text>
              <Text className="flex items-center ml-0.5" styling="h5">
                <Icon
                  className="mr-2.5 shrink-0"
                  color="primary-dark"
                  size={6}
                  type="internet"
                />
                Internet:
                <strong className="ml-1">
                  {apartmentData.attributes.Detalji.Internet ? 'Da' : 'Ne'}
                </strong>
              </Text>
              <Text className="flex items-center ml-0.5" styling="h5">
                <Icon
                  className="mr-2.5 shrink-0"
                  color="primary-dark"
                  size={6}
                  type="tv"
                />
                Televizija:
                <strong className="ml-1">
                  {apartmentData.attributes.Detalji.Televizija ? 'Da' : 'Ne'}
                </strong>
              </Text>
              {apartmentData.attributes.Detalji.Parking && (
                <Text className="flex items-center ml-0.5" styling="h5">
                  <Icon
                    className="mr-2.5 shrink-0"
                    color="primary-dark"
                    size={6}
                    type="car"
                  />
                  Parking:
                  <strong className="ml-1">
                    {apartmentData.attributes.Detalji.Parking ? 'Da' : 'Ne'}
                  </strong>
                </Text>
              )}
              {apartmentData.attributes.Detalji.KucniLjubimci && (
                <Text className="flex items-center ml-0.5" styling="h5">
                  <Icon
                    className="mr-2.5 shrink-0"
                    color="primary-dark"
                    size={6}
                    type="dog"
                  />
                  Kućni ljubimci:
                  <strong className="ml-1">
                    {apartmentData.attributes.Detalji.KucniLjubimci
                      ? 'Dozvoljeno'
                      : 'Nije dozvoljeno'}
                  </strong>
                </Text>
              )}
            </div>
            <div className="mt-6">
              <Text className="mb-3" tag="h4">
                Detaljan opis nekretnine:
              </Text>
              <Markdown>{apartmentData.attributes.Opis}</Markdown>
            </div>
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
