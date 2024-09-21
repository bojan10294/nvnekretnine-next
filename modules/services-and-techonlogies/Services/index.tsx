import Text from 'components/Text';
import { services } from 'components/const';
import Card from 'components/Card';
import Icon from 'components/Icon';
import Image from 'next/image';
import styles from './index.module.css';

const Services = () => (
  <section>
    <div className="container">
      <div className="lg:grid lg:gap-10 xl:gap-12 lg:grid-cols-sidebar">
        <div>
          <Card className="sticky hidden top-24 lg:block">
            <ul className="grid gap-7">
              {services.map(({ title, icon }) => (
                <li key={title}>
                  <a
                    className="grid items-center gap-3 text-sm font-bold uppercase grid-cols-icon-text"
                    href={`#${icon}`}
                  >
                    <Icon className="rotate-180" size={3.5} type="arrow" />
                    <Text styling="sm" tag="span">
                      {title}
                    </Text>
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="grid gap-10 md:gap-12">
          {services.map(({ title, description, img, icon }) => (
            <Card key={title} className="scroll-mt-24" id={icon} padding="none">
              <div className="grid md:grid-flow-col md:gap-x-10 xl:gap-x-16">
                <div className="p-6 md:p-8">
                  <Text separator="wide" styling="h3" tag="h2">
                    {title}
                  </Text>
                  <Text>{description}</Text>
                </div>
                <Image
                  alt=""
                  className={`rounded-sm md:max-w-xs xl:max-w-sm h-full object-cover ${styles['grid-image']}`}
                  height={980}
                  src={img}
                  width={1300}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
