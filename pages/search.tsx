import HtmlHead from 'components/HtmlHead';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import MiniHero from 'components/MiniHero';
import Listing from 'modules/search/Listing';

const Search = () => (
  <>
    <HtmlHead title="NV Nekretnine | Kontakt" />

    <Navigation />
    <MiniHero
      alt="Građevinsko preduzeće"
      bgImageSrc="/img/sales.jpg"
      title="Nekretnine u ponudi"
    />
    <Listing />
    <Footer />
  </>
);

export default Search;
