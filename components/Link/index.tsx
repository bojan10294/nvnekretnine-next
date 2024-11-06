import { buttonClasses } from 'components/const';
import Icon from 'components/Icon';
import NextLink, { LinkProps } from 'next/link';
import { FC, ReactNode, useState } from 'react';

interface Props extends LinkProps {
  children: ReactNode;
  variant?: 'button' | 'link' | 'arrow' | 'text';
  color?: 'white' | 'black';
  className?: string;
}
const variantClasses = {
  arrow:
    'inline-flex items-center font-medium gap-1 text-lg text-primary relative',
  button: buttonClasses,
  link: 'inline-block hover:text-primary relative',
  text: 'inline-block'
};

const Link: FC<Props> = ({
  children,
  variant = 'text',
  className,
  ...rest
}) => {
  const [isArrowMoved, setIsArrowMoved] = useState(false);

  return (
    <NextLink
      className={`${variantClasses[variant]} ${className || ''}`}
      onMouseEnter={() => setIsArrowMoved(true)}
      onMouseLeave={() => setIsArrowMoved(false)}
      {...rest}
    >
      {children}
      {variant === 'arrow' && (
        <Icon
          className={`rotate-180 duration-150 ${
            isArrowMoved ? 'translate-x-1.5' : ''
          }`}
          color="primary-dark"
          size={5}
          type="arrow"
        />
      )}
    </NextLink>
  );
};

export default Link;
