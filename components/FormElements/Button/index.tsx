import { buttonClasses } from 'components/const';
import { FC, HTMLProps } from 'react';

type Props = Omit<HTMLProps<HTMLButtonElement>, 'type'> & {
  type?: 'button' | 'submit' | 'reset';
};

const Button: FC<Props> = ({ className, children, ...rest }) => (
  <button className={`${buttonClasses} ${className || ''}`.trim()} {...rest}>
    {children}
  </button>
);

export default Button;
