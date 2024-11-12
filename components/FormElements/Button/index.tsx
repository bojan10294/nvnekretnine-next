import { buttonClasses } from 'components/const';
import Icon from 'components/Icon';
import { FC, HTMLProps } from 'react';

type Props = Omit<HTMLProps<HTMLButtonElement>, 'type'> & {
  type?: 'button' | 'submit' | 'reset';
  isSubmitting?: boolean;
};

const Button: FC<Props> = ({
  className,
  children,
  isSubmitting = false,
  ...rest
}) => (
  <button
    className={`${buttonClasses} ${className || ''}`.trim()}
    disabled={isSubmitting}
    {...rest}
  >
    {isSubmitting ? (
      <Icon className="-mb-2" color="white" size={7} type="spinner" />
    ) : (
      <>{children}</>
    )}
  </button>
);

export default Button;
