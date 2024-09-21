import { cloneElement, FC, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  'aria-label': string;
  tag?: any;
}

const InteractiveElement: FC<Props> = ({
  tag = <div />,
  onClick,
  children,
  ...rest
}) => (
  <>
    {cloneElement(
      tag,
      {
        onClick,
        onKeyUp: (event: any) => {
          if (event.code === 'Enter' || event.code === 'Space') {
            if (event.code === 'Space') event.preventDefault();
            onClick?.(event as any);
          }
        },
        role: 'button',
        tabIndex: 0,
        ...rest
      },
      <>{children}</>
    )}
  </>
);

export default InteractiveElement;
