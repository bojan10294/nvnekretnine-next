import Link from 'components/Link';
import Image from 'next/image';
import React, { FC } from 'react';

const SingleListing: FC<any> = ({ listing }) => (
  <Link
    className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-400"
    href={`/prodaja-stanova/nekretnina/${listing.attributes.Naziv}`}
  >
    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
      <div className="shrink-0 md:order-1">
        <Image
          alt="imac image"
          className="w-20 h-20"
          height={400}
          src={listing.attributes.Slike.data.attributes.url}
          width={400}
        />
      </div>
      <div className="flex items-center justify-between md:order-3 md:justify-end">
        <div className="text-end md:order-4 md:w-32">
          <p className="text-base font-bold text-gray-900">
            {listing.attributes.Grad.data.attributes.Naziv}
          </p>
        </div>
      </div>

      <div className="flex-1 w-full min-w-0 space-y-4 md:order-2 md:max-w-md">
        <div className="text-base font-medium text-gray-900">
          {listing.attributes.Naziv}
        </div>
      </div>
    </div>
  </Link>
);

export default SingleListing;
