import { FC, HTMLProps } from 'react';

export type IconType =
  | 'arrow'
  | 'backend'
  | 'chevron-down'
  | 'cloud'
  | 'cms'
  | 'frontend'
  | 'globe'
  | 'logo'
  | 'mail'
  | 'map'
  | 'seo'
  | 'building'
  | 'house-building'
  | 'calendar-check'
  | 'ruler'
  | 'elevator'
  | 'bed'
  | 'people'
  | 'book'
  | 'internet'
  | 'car'
  | 'money'
  | 'tv'
  | 'yard'
  | 'dog'
  | 'radiator'
  | 'apartment'
  | 'web-app'
  | 'spinner'
  | 'close'
  | 'whatsapp';

interface Props extends HTMLProps<HTMLDivElement> {
  type: IconType;
  size: number;
  color?: string;
}

const Icon: FC<Props> = ({ type, size, color = 'primary', ...rest }) => (
  <i
    className={`icon icon-${type} w-${size} h-${size} bg-${color} ${
      rest.className || ''
    }`}
  />
);

export default Icon;
