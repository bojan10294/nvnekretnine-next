import {
  FC,
  ReactElement,
  Children,
  PropsWithChildren,
  HTMLProps
} from 'react';
import useDropdownMenu from 'components/DropdownMenu/hooks/useDropdownMenu';
import InteractiveElement from 'components/InteractiveElement';

interface Props extends HTMLProps<HTMLUListElement> {
  trigger: ReactElement<HTMLElement>;
}

const DropdownMenu: FC<PropsWithChildren<Props>> = ({
  trigger,
  children,
  ...rest
}) => {
  const { isOpen, ref, triggerElement, toggleDropdownMenu } =
    useDropdownMenu(trigger);

  return (
    <div ref={ref} className="relative flex">
      {triggerElement}

      {isOpen && (
        <ul {...rest}>
          {Children.map(children, (child, index) => (
            <InteractiveElement
              key={index}
              aria-label=""
              // className="w-fit"
              onClick={toggleDropdownMenu}
              role={undefined}
              tabIndex={undefined}
              tag={<li />}
            >
              {child}
            </InteractiveElement>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
