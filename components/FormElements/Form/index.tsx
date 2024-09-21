import { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLFormElement> {}

const Form: FC<Props> = ({ children, ...rest }) => (
  <form {...rest} noValidate>
    {children}
  </form>
);

export default Form;
