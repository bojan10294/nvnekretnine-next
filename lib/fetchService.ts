import { RequestInit } from 'next/dist/server/web/spec-extension/request';

export const fetchService = (url: string, options: RequestInit = {}) =>
  fetch(url, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers }
  });

export default async function tryCatch(url: string, param?: string) {
  try {
    const res = await fetch(url + (param || ''));
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

// export const url = 'http://127.0.0.1:1337/api'
export const url = 'https://hammerhead-app-ko42k.ondigitalocean.app/api';

export const getAllApartments = () => tryCatch(`${url}/apartments?pagination[pageSize]=1000`);

export const getApartmentContentType = () =>
  tryCatch(
    `${url}/content-type-builder/content-types/api::apartment.apartment`
  );

export const getApartments = (location: string) =>
  tryCatch(
    `${url}/apartments?populate=*&filters[Lokacija][Adresa][$eq]=`,
    location
  );

export const getSingleApartment = (apartment: string) =>
  tryCatch(`${url}/apartments?populate=*&filters[Naziv][$eq]=`, apartment);

export const getLocations = () => tryCatch(`${url}/locations?populate=*`);

export const getCityLocations = (city?: any) =>
  tryCatch(`${url}/locations?populate=*&filters[Grad][Naziv][$eq]=`, city);

export const getSingleLocation = (location: string) =>
  tryCatch(`${url}/locations?populate=*&filters[Adresa][$eq]=`, location);

export const getCities = () => tryCatch(`${url}/cities`);

export const getTopCities = () => tryCatch(`${url}/top-cities?populate=*`);

export const getHighlightedApartments = () =>
  tryCatch(`${url}/apartments/highlighted`);

export const getListings = (
  grad?: string,
  tip?: string,
  namena?: string,
  PovrsinaKvM?: string
) => {
  let queryString = `${url}/apartments?populate=*`;

  if (grad) {
    queryString += `&filters[Grad][Naziv][$eq]=${encodeURIComponent(grad)}`;
  }

  if (tip) {
    queryString += `&filters[Tip][$eq]=${encodeURIComponent(tip)}`;
  }

  if (namena) {
    queryString += `&filters[Detalji][Namena][$eq]=${encodeURIComponent(
      namena
    )}`;
  }

  if (PovrsinaKvM) {
    queryString += `&filters[Detalji][PovrsinaKvM][$gte]=${encodeURIComponent(
      PovrsinaKvM
    )}`;
  }

  return tryCatch(queryString);
};
