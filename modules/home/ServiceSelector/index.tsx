import BackgroundImage from 'components/BackgroundImage';
import Link from 'components/Link';
import Text from 'components/Text';
import styles from './index.module.css';

interface Service {
  name: string;
  img: string;
  url: string;
}

const services: Service[] = [
  {
    img: '/img/construction-1.jpg',
    name: 'O nama',
    url: '/o-nama'
  },
  {
    img: '/img/sales.jpg',
    name: 'Prodaja stanova',
    url: '/prodaja-stanova'
  }
];
const ServiceSelector = () => (
  <div className="relative flex h-[calc(100vh_-_7rem)] md:h-screen">
    <div className="relative w-full h-full">
      <div className={`grid h-full md:grid-cols-2 bg-black ${styles.services}`}>
        {services.map(({ name, url, img }) => (
          <Link
            key={name}
            className="relative grid overflow-hidden text-center text-white place-items-center hover:text-primary"
            href={url}
          >
            <BackgroundImage
              alt="homepage service image"
              className="object-cover duration-200 brightness-75"
              opacity="70"
              src={img}
            />
            <Text
              className="relative uppercase duration-200"
              styling="h3"
              tag="h2"
            >
              {name}
            </Text>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default ServiceSelector;
