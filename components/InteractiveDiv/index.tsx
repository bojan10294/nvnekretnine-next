import { FC, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  'aria-label': string;
}

const InteractiveDiv: FC<Props> = ({ onClick, children, ...rest }) => (
  <div
    className="text-white lg:hidden"
    onClick={onClick}
    onKeyUp={(event) => {
      if (event.code === 'Enter' || event.code === 'Space') {
        if (event.code === 'Space') event.preventDefault();
        onClick?.(event as any);
      }
    }}
    role="button"
    tabIndex={0}
    {...rest}
  >
    {children}
  </div>
);

export default InteractiveDiv;
