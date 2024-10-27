import HtmlHead from 'components/HtmlHead';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import FilterHero from 'modules/home/FilterHero';
import CardImage from 'modules/home/TopCities';
import Popular from 'modules/home/Popular';
import TextImage, { ListItem } from 'modules/product-development/text-image';
import Cta from 'modules/home/Cta';

const listItems: ListItem[] = [
  {
    description:
      '- Sigurno vođenje kroz postupak kupoprodaje<br>- Postprodajna podrška: katastar nepokretnosti, Poreska uprava, Lokalna poreska administracija<br>- Sačinjavanje ugovora<br>- Podrška u bankama ( kreditni kupci )',
    img: '/img/team-image.jpeg',
    title: 'Sta dobijate saradnjom sa NV nekretnine?'
  }
];

export default function Home() {
  return (
    <>
      <HtmlHead title="NV Nekretnine" />

      <Navigation />
      <FilterHero />
      <CardImage />
      <Popular />
      <div className="container">
        <TextImage listItems={listItems} />
      </div>
      <Cta />
      <Footer />
    </>
  );
}
