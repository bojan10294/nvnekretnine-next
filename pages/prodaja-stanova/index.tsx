import { dehydrate, QueryClient } from '@tanstack/react-query';
import HtmlHead from 'components/HtmlHead';
import MiniHero from 'components/MiniHero';
import Locations from 'modules/prodaja-stanova/Locations';
import CityList from 'modules/prodaja-stanova/CitiesList';
import { GetStaticProps } from 'next';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import { getCities, getLocations } from 'lib/fetchService';

export default function Home() {
  return (
    <>
      <HtmlHead title="Sedmi kontinent | Prodaja stanova" />

      <Navigation />
      <MiniHero
        alt="Prodaja stanova"
        bgImageSrc="/img/real-estate-2.jpg"
        title="Prodaja stanova"
      />
      <CityList />
      <Locations />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(['cities'], getCities),
    queryClient.prefetchQuery(['locations'], getLocations)
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};
