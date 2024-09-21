import Text from 'components/Text';
import Image from 'next/image';
import { FC } from 'react';

export interface ListItem {
  title: string;
  description: string;
  img?: string;
}

interface Props {
  listItems: ListItem[];
  type?: 'icon' | 'no-icon';
}

const List: FC<Props> = ({ listItems, type = 'no-icons' }) => (
  <>
    {listItems.map(({ title, description, img }, index) => (
      <div
        key={index}
        className={`${type === 'icon' ? 'gap-6 lg:gap-10' : ''} flex mx-auto`}
      >
        <div className="flex flex-col items-center gap-4">
          <Text
            bold
            className={
              type === 'icon'
                ? '!text-4xl mt-2'
                : '!text-xl flex items-center justify-center w-11 h-11 mr-5 bg-primary text-white rounded-full'
            }
          >
            {index + 1}
          </Text>
          {type === 'icon' && <div className="bg-gray-400 flex-1 w-[1px]" />}
        </div>
        <div className={type === 'icon' ? 'grid gap-10' : 'grid gap-3'}>
          <div className="flex items-center gap-6">
            {type === 'icon' && typeof img !== 'undefined' && (
              <Image
                alt={title}
                className="w-14 h-14"
                height={150}
                src={img}
                width={150}
              />
            )}
            <Text styling={type === 'icon' ? 'h3' : 'h4'} tag="h4">
              {title}
            </Text>
          </div>
          <Text
            className="mb-6"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    ))}
  </>
);

export default List;
