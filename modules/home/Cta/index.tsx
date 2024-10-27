import Text from 'components/Text';
import React from 'react';

const Cta = () => (
  <section>
    <div className="container">
      <div className="flex flex-col items-center justify-between p-10 lg:py-14 lg:px-20 rounded-2xl gap-x-8 bg-gradient-to-r from-primary-dark to-primary lg:flex-row">
        <div className="block mb-5 text-center lg:text-left lg:mb-0">
          <Text className="mb-5 text-black lg:mb-2" tag="h2">
            Imate bilo kakvo pitanje?
          </Text>
          <p className="max-w-2xl text-lg ">
            Kontaktirajte nas brzo i lako i odmah ćemo pronaći rešenje zajedno.
          </p>
        </div>
        <a
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-white rounded-lg text-primary-700 hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          href="/kontakt"
        >
          Kontaktirajte nas
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              fillRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default Cta;
