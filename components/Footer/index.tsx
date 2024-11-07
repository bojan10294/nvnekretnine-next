import Link from 'components/Link';
import Text from 'components/Text';
import Image from 'next/image';
// import Icon, { IconType } from 'components/Icon';

// interface ContactLinks {
//   title: string;
//   href: string;
//   icon: IconType;
// }

// const contactLinks: ContactLinks[] = [
//   {
//     href: 'mailto:office@sirius.com',
//     icon: 'mail',
//     title: 'office@sirius.com'
//   },
//   {
//     href: 'tel:+381605381714',
//     icon: 'whatsapp',
//     title: '+38160 53 81 714'
//   },
//   {
//     href: 'https://goo.gl/maps/drr64qoqBzWjAymDA',
//     icon: 'map',
//     title: 'Belgrade, Serbia'
//   }
// ];

const Footer = () => {
  const date = new Date();

  return (
    <footer className="py-4 mt-auto text-white bg-gray-dark">
      <div className="container">
        <div className="flex items-center justify-center md:justify-between">
          <Link className="hidden text-3xl text-white md:inline-flex" href="/">
            <Image
              alt="Logo"
              className="w-28 md:w-72"
              height={90}
              src="/img/logo-horizontal.svg"
              width={545}
            />
          </Link>
          <Text className="!text-xs md:!text-sm" tag="span">
            &#169; NVNEKRETNINE {date.getFullYear()} All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
