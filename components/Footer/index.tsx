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
    <footer className="py-10 mt-auto text-white bg-gray-dark">
      <div className="container">
        <div className="flex flex-col items-center gap-6 md:gap-4">
          <Link className="text-3xl text-white" href="/">
            <Image
              alt="Logo"
              className="w-48 md:w-72"
              height={90}
              src="/img/logo-horizontal.svg"
              width={545}
            />
          </Link>
          <div className="h-[3px] bg-primary-dark rounded-[2px] w-14 md:w-24 my-3" />
          <div className="grid text-xl text-center md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
            <Link href="/search?namena=Izdavanje&tip=Stan">
              Izdavanje stanova
            </Link>
            <Link href="/search?namena=Izdavanje&tip=Kuca">Izdavanje kuća</Link>
            <Link href="/search?namena=Prodaja&tip=Stan">Prodaja stanova</Link>
            <Link href="/search?namena=Prodaja&tip=Kuca">Prodaja kuća</Link>
          </div>
          <div className="h-[3px] bg-primary-dark rounded-[2px] w-14 md:w-24 my-3" />
          <div className="grid gap-4 text-center md:grid-cols-2">
            <div>
              <Text className="!text-xl mb-1.5" tag="h4">
                Pozovite nas
              </Text>
              <Link
                className="text-lg text-primary-dark"
                href="tel:+381641219821"
              >
                +381 64 12 19 821
              </Link>
            </div>
            <div>
              <Text className="!text-xl mb-1.5" tag="h4">
                Pošaljite mejl
              </Text>
              <Link
                className="text-lg text-primary-dark"
                href="mailto:nvnekretnine@gmail.com"
              >
                nvnekretnine@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6 lg:flex-row">
            <Text className="!text-xs md:!text-sm text-center" tag="span">
              Broj upisa u Registar posrednika: 1902
            </Text>
            <Text className="!text-xs md:!text-sm text-center" tag="span">
              &#169; NVNEKRETNINE {date.getFullYear()} Sva prava zadržana.
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
