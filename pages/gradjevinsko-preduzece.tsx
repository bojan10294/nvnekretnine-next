import HtmlHead from 'components/HtmlHead';
import MiniHero from 'components/MiniHero';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import TextImage, { ListItem } from 'modules/product-development/text-image';
import GalleryWithText from 'modules/GalleryWithText';

export const listItems: ListItem[] = [
  {
    description:
      'Primena znanja i tehnika u organizaciji i kontroli građevinskog procesa naš krajnji rezultat podiže na zavidan nivo. <br> Građevinsko preduzeće “Sedmi Kontinent” se profesionalno bavi investiranjem i izgradnjom stambenih i ventilisanih fasada. Dugogodišnje iskustvo i velika referenca stavljaju nas u red uspešnijih preduzeća iz oblasti građevine i arhitekture. Izgradnja novih poslovnih i stambenih objekata po svetskim standardima zagarantovana je našom poslovnom politikom. Samo proizvodi i materijali najkvalitetnijih svetskih proizvođača koriste se prilikom izgradnje objekata. Sistem „ključ u ruke“ obavezuje nas na odgovornost do poslednjeg trenutka. <br> Sedmi Kontinent doo je osnovan 2022. godine u Valjevu i posluje uglavnom na teritoriji Srbije. Od osnivanja firma ima umeren i konstantan rast u vidu radne snage I tehnologija. Tokom proteklih godina koristimo najsavremenije masine I materijale u realizaciji projekata.',
    img: '/img/helmet.jpg',
    title: 'Građevinsko preduzeće'
  },
  {
    description:
      'Početkom 2023. godine u poslovanje firme se uključuje mlađa generacija, koja doprinosi stvaranju novih ideja i daljem razvoju. Firma „Sedmi Kontinent” izvodi radove za privatne investitore, državu, kao i za strane investitore koji su odlučili da svoj kapital ulože u Srbiji, kao što su kompleks apartmana na Divčibarima, Stambeni kompleks Novi Dorćol faza 2 u Beogradu. Naš uspeh sa planiranjem I upravljanjem projektima je nešto čime se razlikujemo od ostalih firmi na tržištu. <br>Sedmi Kontinent zapošljava velikih broj kako mladih tako I iskusnih majstora I inženjera sa željom da spoji inovacije i energiju sa iskustvom i znanjem, i da na taj način doprinese daljem unapređenju poslovanja i kvalitetu krajnjeg rezultata.',
    img: '/img/team.jpg',
    title: 'Sedmi Kontinent kao tim'
  },
  {
    description:
      'Sedmi Kontinent je specijalizovan za izgradnju ventilisanih fasada, koje su naša posebna oblast stručnosti. Mi koristimo najnovije tehnologije i materijale kako bismo osigurali da naši projekti imaju vrhunski kvalitet i izdržljivost. Naš tim iskusnih stručnjaka je obučen da upravlja svim fazama projekta, od planiranja i projektovanja, do proizvodnje, montaže i održavanja ventilisane fasade. <br>Ukoliko planirate da renovirate ili gradite objekat, a želite da imate izdržljivu, energetski efikasnu i estetski privlačnu fasadu, razmislite o ventilisanoj fasadi. Naš tim je tu da vam pruži sve potrebne informacije i da vam pomogne da odaberete najbolju opciju za Vaš objekat.',
    img: '/img/fasade.jpg',
    title: 'Ventilisane fasade'
  },
  {
    description:
      'Ventilisana fasada je jedna od najefikasnijih metoda izolacije i oblaganja zidova zgrada. Ovaj tip fasade se sastoji od slojeva koji u kombinaciji omogućavaju prirodnu cirkulaciju vazduha kroz spoljnu stranu zida. Ovaj princip stvara termalni pojas između fasade i unutrašnjeg zida, koji značajno smanjuje gubitke toplote i hladnoće, štiti zidove od vlage, povećava energetsku efikasnost i doprinosi uštedi energije. <br>Ventilisana fasada ima i brojne druge prednosti u odnosu na tradicionalne fasade. Ovaj tip fasade se lako montira, održava i prilagođava potrebama objekta. Zahvaljujući različitim materijalima i bojama, ventilisana fasada može biti prilagođena svakom arhitektonskom stilu i estetici, i može se koristiti za različite namene, kao što su poslovni, stambeni ili industrijski objekti.',
    img: '/img/fasade-2.jpg',
    title: 'Zašto ventilisane fasade?'
  }
];

export default function Home() {
  return (
    <>
      <HtmlHead title="Sedmi kontinent | Građevinsko preduzeće" />

      <Navigation />
      <MiniHero
        alt="Građevinsko preduzeće"
        bgImageSrc="/img/sales.jpg"
        title="Građevinsko preduzeće"
      />
      <TextImage listItems={listItems} />
      <GalleryWithText />
      <Footer />
    </>
  );
}
