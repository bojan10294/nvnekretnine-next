import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import HtmlHead from 'components/HtmlHead';
import MiniHero from 'components/MiniHero';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import SingleApartment from 'modules/prodaja-stanova/SingleApartment';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import { getSingleApartment, getAllApartments } from 'lib/fetchService';

export default function Home() {
  const {
    query: { apartment }
  } = useRouter();
  const { data } = useQuery(['apartment', apartment], () =>
    getSingleApartment(apartment as string)
  );
  const apartmentData = data.data[0];

  return (
    <>
      <HtmlHead title={`Stanovi | ${apartment}`} />

      <Navigation />
      <MiniHero
        alt="Prodaja stanova"
        bgImageSrc="/img/real-estate-2.jpg"
        title={apartment as string}
      />
      <SingleApartment apartmentData={apartmentData} />
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apartments = await getAllApartments();

  const paths = apartments.data.map((apartment: any) => ({
    params: { apartment: apartment.attributes.Naziv }
  }));

  return { fallback: false, paths };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const apartment = params?.apartment as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['apartment', apartment], () =>
    getSingleApartment(apartment)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};
