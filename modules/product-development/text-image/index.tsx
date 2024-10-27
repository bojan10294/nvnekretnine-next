import Text from 'components/Text';
import Image from 'next/image';
import { FC } from 'react';

export interface ListItem {
  description: string;
  img: string;
  title: string;
}

interface Props {
  listItems: ListItem[];
}

const TextImage: FC<Props> = ({ listItems }) => (
  <section>
    <div className="container">
      <div className="grid gap-16 md:gap-24">
        {listItems.map((item, index) => (
          <div
            key={index}
            className="grid items-center gap-6 md:grid-cols-2 md:gap-14"
          >
            <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
              <Text separator="wide" tag="h2">
                {item.title}
              </Text>
              <Text
                className="mb-6 !text-lg"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
            <Image
              alt="Company success"
              className="object-cover w-full rounded-lg h-60 shadow-02 lg:h-96"
              height={500}
              src={item.img}
              width={900}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TextImage;
