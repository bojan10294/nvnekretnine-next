import { FC, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingSizes = {
  lg: 'p-6 md:p-8 lg:p-10',
  md: 'p-5 md:p-6 lg:p-7',
  none: 'p-0',
  sm: 'p-4 md:p-5 lg:p-4'
};

const Card: FC<Props> = ({ children, padding = 'md', ...rest }) => (
  <div
    {...rest}
    className={`bg-gray-light/20 overflow-clip shadow-02 rounded-lg ${
      paddingSizes[padding]
    } ${rest.className || ''}`}
  >
    {children}
  </div>
);

export default Card;
