import HtmlHead from 'components/HtmlHead';
import MiniHero from 'components/MiniHero';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import TextImage, { ListItem } from 'modules/product-development/text-image';
// import GalleryWithText from 'modules/GalleryWithText';

export const listItems: ListItem[] = [
  {
    description:
      'Stanovi i kuće za izdavanje i prodaju - Pregledajte najnovije oglase i pronađite savršen dom ili investiciju.<br>Poslovni prostori - Idealni prostori za vašu firmu ili radno mesto.<br>Jednostavna pretraga - Naš pretraživač omogućava vam da pronađete nekretnine po željenoj lokaciji, broju soba, kvadraturi i ceni.<br>Proveren kvalitet - Svaka nekretnina u našoj ponudi je proverena i detaljno opisana, kako biste dobili sve informacije koje su vam potrebne za donošenje odluke.',
    img: '/img/stan-1.jpeg',
    title: 'Šta nudimo?'
  },
  {
    description:
      'Pretražite - Unesite željene kriterijume u formu za pretragu i pronađite nekretnine koje vam odgovaraju.<br>Kontaktirajte nas - Direktno stupite u kontakt sa našim agentom koji će Vam dodatno pružiti podršku u izboru Vašeg doma.<br>Oglasite svoju nekretninu - Ako imate nekretninu za izdavanje ili prodaju, lako je možete oglasiti na NV Nekretnine.',
    img: '/img/stan-2.jpg',
    title: 'Kako funkcioniše?'
  }
];

export default function Home() {
  return (
    <>
      <HtmlHead title="Sedmi kontinent | Građevinsko preduzeće" />

      <Navigation />
      <MiniHero alt="O nama" bgImageSrc="/img/team-image.jpeg" title="O nama" />
      <TextImage listItems={listItems} />
      {/* <GalleryWithText /> */}
      <Footer />
    </>
  );
}
