import { FC } from 'react';
import Text from 'components/Text';
import BackgroundImage from 'components/BackgroundImage';
import GridWithLines, { gridItem } from 'modules/home/GridWithLines';

const aboutUs: gridItem[] = [
  {
    description:
      'Our story began with a passion for technology and a vision to revolutionize the IT industry. Today, we are a team of experts committed to delivering cutting-edge solutions and exceptional service to businesses of all sizes.',
    title: 'Our Story'
  },
  {
    description:
      'We help businesses of all sizes across a range of industries, providing customized IT solutions to meet their unique needs. Our services are designed to streamline operations, increase productivity, and drive growth for our clients.',
    title: 'Who do we help?'
  },
  {
    description:
      'Our philosophy is rooted in innovation, collaboration, and customer-centricity. We believe in staying ahead of the curve, working together to find creative solutions, and always putting our clients first.',
    title: 'Our philosophy'
  }
];

const AboutUs: FC = () => (
  <section className="bg-white">
    <div className="grid items-center mb-10 md:grid-cols-2 md:mb-18 gap-y-8">
      <div className="px-4 md:half-container justify-self-end md:pr-12">
        <Text separator="wide" tag="h2">
          About us
        </Text>
        <Text>
          We are an innovative IT company that specializes in providing
          cutting-edge solutions to businesses of all sizes. Our team of
          experienced professionals is dedicated to delivering high-quality
          services and support to help our clients achieve their goals. With a
          focus on collaboration, creativity, and customer satisfaction, we are
          committed to driving success for our clients and partners.
        </Text>
      </div>
      <div className="relative min-h-[18rem] md:min-h-[24rem] md:rounded-l-lg shadow-02 overflow-hidden">
        <BackgroundImage alt="office" loading="lazy" src="/img/team.jpg" />
      </div>
    </div>
    <GridWithLines gridItems={aboutUs} />
  </section>
);

export default AboutUs;
