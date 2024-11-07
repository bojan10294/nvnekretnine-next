import Text from 'components/Text';
import ContactForm from 'modules/contact/ContactForm/index';
import GridWithLines, { gridItem } from 'modules/home/GridWithLines';
import 'mapbox-gl/dist/mapbox-gl.css';
// import Map, { Marker } from 'react-map-gl';

const aboutUs: gridItem[] = [
  {
    description: 'nvnekretnine@gmail.com',
    linkText: 'Pošaljite mejl',
    linkUrl: 'mailto:nvnekretnine@gmail.com',
    title: 'E-mail'
  },
  {
    description: '+381 64 12 19 821',
    linkText: 'Pozovite nas',
    linkUrl: 'tel:+381641219821',
    title: 'Telefon'
  }
];

const Contact = () => (
  // const lat = 44.81255643371841;
  // const lng = 21.461273407824144;
  <>
    <section>
      <div className="container">
        <div className="grid gap-10 lg:gap-20 lg:grid-cols-2">
          <ContactForm />
          {/* <Map
              initialViewState={{
                latitude: lat,
                longitude: lng,
                zoom: 13
              }}
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              style={{ borderRadius: '10px', height: 400, width: '100%' }}
            >
              <Marker latitude={lat} longitude={lng}>
                <div className="marker" />
              </Marker>
            </Map> */}
          <section>
            <div className="container">
              <div className="mb-6 text-center lg:mb-14">
                <Text className="mb-3" styling="h2" tag="h1">
                  Da li imate dodatna pitanja?
                </Text>
                <Text className="max-w-4xl mx-auto lg:text-lg">
                  Pozovite nas ili nam pošaljite e-mail
                </Text>
              </div>
              <GridWithLines gridItems={aboutUs} />
            </div>
          </section>
        </div>
      </div>
    </section>
  </>
);
export default Contact;
