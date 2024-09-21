import Link from 'components/Link';
import { FC } from 'react';
import { services } from 'components/const';
import Text from 'components/Text';
import Card from 'components/Card';
import Icon from 'components/Icon';

const OurServices: FC = () => (
  <section>
    <div className="container">
      <div className="mb-6 lg:mb-10">
        <Text separator="wide" tag="h2">
          Our Services
        </Text>
      </div>
      <div className="grid gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, shortDescription, icon }) => (
          <Card key={title}>
            <div className="grid justify-start grid-flow-col gap-3">
              <Icon size={8} type={icon} />
              <Text className="mb-4" styling="h4" tag="h3">
                {title}
              </Text>
            </div>
            <Text className="max-w-5xl mb-4">{shortDescription}</Text>
            <Link href={`/services-and-technologies#${icon}`} variant="arrow">
              <Text>Learn more</Text>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default OurServices;
