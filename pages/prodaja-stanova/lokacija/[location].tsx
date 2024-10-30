import HtmlHead from 'components/HtmlHead';
import MiniHero from 'components/MiniHero';
import Apartments from 'modules/prodaja-stanova/Apartments';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import SingleLocation from 'modules/prodaja-stanova/SingleLocation';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import {
  getApartments,
  getLocations,
  getSingleLocation
} from 'lib/fetchService';

export default function Home() {
  const {
    query: { location }
  } = useRouter();
  return (
    <>
      <HtmlHead title={`Stanovi | ${location}`} />
      <Navigation />
      <MiniHero
        alt="Prodaja stanova"
        bgImageSrc="/img/real-estate.jpg"
        location={location as string}
        title="Prodaja stanova"
      />
      <SingleLocation location={location as string} />
      <Apartments location={location as string} title="Stanovi u ponudi" />
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const locations = await getLocations();

  const paths = locations.data.map((location: any) => ({
    params: { location: location.attributes.Adresa }
  }));

  return { fallback: false, paths };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const location = params?.location as string;
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(['apartments', location], () => getApartments(location)),
    queryClient.prefetchQuery(['location', location], () => getSingleLocation(location))
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};
