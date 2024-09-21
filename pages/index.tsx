import HtmlHead from 'components/HtmlHead';
import ServiceSelector from 'modules/home/ServiceSelector';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

export default function Home() {
  return (
    <>
      <HtmlHead title="Sedmi kontinent" />

      <Navigation />
      <ServiceSelector />
      <Footer />
    </>
  );
}
