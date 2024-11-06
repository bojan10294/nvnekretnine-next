import HtmlHead from 'components/HtmlHead';
import MiniHero from 'components/MiniHero';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import TextImage, { ListItem } from 'modules/product-development/text-image';
import Text from 'components/Text';
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
      'Pretražite - Unesite željene kriterijume u formu za pretragu i pronađite nekretnine koje vam odgovaraju.<br>Kontaktirajte nas - Direktno stupite u kontakt sa našim agentom koji će Vam dodatno pružiti podršku u izboru Vašeg doma.',
    img: '/img/stan-2.jpg',
    title: 'Kako funkcioniše?'
  }
];

export default function Home() {
  return (
    <>
      <HtmlHead title="Sedmi kontinent | Građevinsko preduzeće" />

      <Navigation />
      <MiniHero alt="O nama" bgImageSrc="/img/o-nama.jpg" title="O nama" />
      <div className="container py-10">
        <div className="max-w-5xl">
          <Text className="mb-8" tag="h2">
            Dobrodošli na nvnekretnine.rs!
          </Text>
          <Text className="mb-3" tag="p">
            Naša misija je da pružimo sveobuhvatnu uslugu u oblasti nekretnina,
            specijalizovani za izdavanje i prodaju nekretnina u Srbiji. Osnovao
            nas je Nikola Vojvodić, sa sedištem u Beogradu, na adresi Rajka
            Mitica 32a, Savski venac, u cilju postizanja najboljeg kupoprodajnog
            iskustva u svetu nekretnina. Zašto baš mi? U NV nekretninama
            verujemo da je proces kupoprodaje nekretnina više od same
            transakcije - to je putovanje koje zaslužuje pažnju i podršku na
            svakom koraku. Naš pristup je ličan i posvećen, i zato nudimo:
          </Text>
          <ul className="grid max-w-3xl gap-2 list-disc list-inside">
            <li>
              Sigurno vođenje kroz postupak kupoprodaje: Naš tim stručnjaka
              osiguraće da svaki korak bude jasan i bez stresa.
            </li>
            <li>
              Postprodajna podrška: Pomažemo vam da se snalazite u procedurama
              sa katastrom nepokretnosti, Poreskom upravom i lokalnom poreskom
              administracijom.
            </li>
            <li>
              Sačinjavanje ugovora: Brinemo se da svi vaši dokumenti budu
              pravilno sastavljeni i da vaša prava budu zaštićena.
            </li>
            <li>
              Podrška u bankama: Naša ekspertiza će vam olakšati proces
              dobijanja kredita za kupce. Svaka nekretnina nosi svoje emocije i
              uspomene, i naš cilj je da vas vodimo kroz svaki korak ovog
              posebnog putovanja. Kontaktirajte nas već danas, i otkrijte
              mogućnosti koje vam pružamo
            </li>
          </ul>
        </div>
      </div>
      <TextImage listItems={listItems} />
      {/* <GalleryWithText /> */}
      <Footer />
    </>
  );
}
