import React from 'react';
import { useRouter } from 'next/router';
import SingleListing from 'modules/search/Listing/SingleListing';
import { useQuery } from '@tanstack/react-query';
import { getListings } from 'lib/fetchService';
import FilterHero from 'modules/home/FilterHero';

const Listing = () => {
  const router = useRouter();
  const { grad, namena, tip, PovrsinaKvM } = router.query;

  const { data: listings } = useQuery(
    ['listings', grad, namena, tip, PovrsinaKvM],
    () =>
      getListings(
        grad as string,
        tip as string,
        namena as string,
        PovrsinaKvM as string
      ),
    {
      enabled: router.isReady
    }
  );

  return (
    <div className="container flex flex-col max-w-4xl gap-6 py-8 mx-auto">
      <FilterHero variant="small" />
      {listings && listings.data && listings.data.length > 0 ? (
        listings.data.map((listing: any) => (
          <SingleListing key={listing.id} listing={listing} />
        ))
      ) : (
        <div>Nema ponudjenih nekretnina.</div>
      )}
    </div>
  );
};

export default Listing;
