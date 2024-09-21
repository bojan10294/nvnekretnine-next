import { dehydrate, QueryClient } from '@tanstack/react-query';
import HtmlHead from 'components/HtmlHead';
import MiniHero from 'components/MiniHero';
import Locations from 'modules/prodaja-stanova/Locations';
import { getCities, getCityLocations, getLocations } from 'lib/fetchService';
import CityList from 'modules/prodaja-stanova/CitiesList';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

export default function Home() {
  const {
    query: { city }
  } = useRouter();
  return (
    <>
      <HtmlHead title={`Stanovi | ${city}`} />
      <Navigation />

      <MiniHero
        alt="Prodaja stanova"
        bgImageSrc="/img/real-estate-2.jpg"
        title="Prodaja stanova"
      />
      <CityList city={city as string} />
      <Locations city={city as string} />
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const cities = await getCities();

  const paths = cities.data.map((city: any) => ({
    params: { city: city.attributes.Naziv }
  }));

  return { fallback: false, paths };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const city = params?.city as string;
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(['cities'], getCities),
    queryClient.prefetchQuery(['location', city], () => getCityLocations(city)),
    queryClient.prefetchQuery(['locations'], getLocations)
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};
