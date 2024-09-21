import ContactForm from 'modules/contact';
import HtmlHead from 'components/HtmlHead';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import MiniHero from 'components/MiniHero';

const Contact = () => (
  <>
    <HtmlHead title="Sedmi kontinent | Kontakt" />

    <Navigation />
    <MiniHero
      alt="Građevinsko preduzeće"
      bgImageSrc="/img/sales.jpg"
      title="Kontaktirajte nas"
    />
    <ContactForm />
    <Footer />
  </>
);

export default Contact;
