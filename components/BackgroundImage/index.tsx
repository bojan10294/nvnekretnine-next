import { FC } from 'react';
import Image, { ImageProps } from 'next/image';

interface Props extends ImageProps {
  opacity?: '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90';
}

const BackgroundImage: FC<Props> = ({ opacity, ...rest }) => (
  <Image
    {...rest}
    className={`object-cover ${opacity && `opacity-${opacity}`} ${
      rest.className || ''
    }`}
    fill
    loading="eager"
  />
);

export default BackgroundImage;
