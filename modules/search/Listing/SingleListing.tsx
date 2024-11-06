import Link from 'components/Link';
import Image from 'next/image';
import React, { FC } from 'react';

const SingleListing: FC<any> = ({ listing }) => (
  <Link
    className="overflow-hidden bg-gray-100 border border-gray-200 rounded-lg shadow-sm hover:border-gray-400"
    href={`/prodaja-stanova/nekretnina/${listing.attributes.Naziv}`}
  >
    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-1 md:space-y-0">
      <div className="relative shrink-0 md:order-1">
        <Image
          alt="imac image"
          className="object-cover w-full h-56 md:h-44 md:w-60"
          height={400}
          src={listing.attributes.Slike.data.attributes.url}
          width={400}
        />
        <div className="absolute px-3 py-1 text-sm text-white shadow rounded-2xl bg-secondary-blue top-4 left-4">
          <span className="text-base font-medium">
            {listing.attributes.Detalji.Namena}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between md:order-3 md:justify-end">
        <div className="text-end md:order-4 md:w-32 md:pr-4">
          <span className="px-5 text-xl font-bold md:px-0">
            {listing.attributes.Cena
              ? `${listing.attributes.Cena} €`
              : 'Na upit'}
          </span>
        </div>
      </div>

      <div className="flex-1 w-full min-w-0 space-y-4 md:order-2 md:max-w-md">
        <div className="px-5 py-4 md:px-0">
          <h3 className="text-xs font-medium tracking-widest uppercase text-secondary-blue title-font">
            {listing.attributes.Grad.data.attributes.Naziv}
          </h3>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 title-font">
            {listing.attributes.Naziv}
          </h2>
          <div className="flex justify-between">
            <h2 className="text-sm font-medium text-gray-900 title-font">
              Površina: {listing.attributes.PovrsinaKvM} m<sup>2</sup>
            </h2>
          </div>
          <div className="mt-2 text-sm font-semibold text-gray-600">
            {listing.attributes.Tip}
          </div>
          <div className="mt-2 text-sm text-gray-600">
            {listing.attributes.Uknjizen ? 'Uknjižen' : 'Neuknjižen'},{' '}
            {listing.attributes.Detalji.Parking && 'Parking'}
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default SingleListing;
