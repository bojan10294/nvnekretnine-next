import Link from 'components/Link';
import Text from 'components/Text';
import { FC } from 'react';

interface Fact {
  title: string;
  description: string;
}

const facts: Fact[] = [
  { description: 'for an estimate', title: '48 hours' },
  { description: 'for the prototype', title: '2 weeks' },
  { description: 'for the mvp', title: '3 month' }
];

const Facts: FC = () => (
  <section className="relative bg-gradient-to-r from-primary-light to-secondary">
    <div className="container relative text-center text-white">
      <div className="grid gap-8 mb-8 text-left md:mb-12 sm:grid-cols-3 lg:grid-cols-5 sm:items-center">
        <Text
          bold={false}
          className="mb-6 font-medium sm:mb-2 sm:col-span-3 lg:col-span-2 lg:mb-0"
          tag="h2"
        >
          Tangible results, <br className="hidden lg:block" />
          right on shedule
        </Text>

        {facts.map(({ title, description }) => (
          <div key={title}>
            <Text
              bold={false}
              className="mb-2 text-white"
              styling="h2"
              tag="h3"
            >
              {title}
            </Text>
            <Text>{description}</Text>
          </div>
        ))}
      </div>

      <Link href="/contact" variant="button">
        Arrange a meeting
      </Link>
    </div>
  </section>
);

export default Facts;
