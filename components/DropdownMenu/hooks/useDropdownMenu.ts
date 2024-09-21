import useClickAway from 'lib/hooks/useClickAway';
import {
  cloneElement,
  ReactElement,
  useCallback,
  useRef,
  useState
} from 'react';

const useDropdownMenu = (trigger: ReactElement<HTMLElement>) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdownMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  const handleClick = useCallback(() => isOpen && setIsOpen(false), [isOpen]);

  useClickAway({ handleClick, ref });

  const triggerElement = cloneElement(trigger, {
    // @ts-ignore
    'aria-expanded': isOpen,
    'aria-haspopup': true,
    className: `cursor-pointer ${trigger.props.className}`,
    onClick: toggleDropdownMenu,
    onKeyUp: (event: KeyboardEvent) => {
      if (event.code === 'Enter' || event.code === 'Space') {
        if (event.code === 'Space') event.preventDefault();
        toggleDropdownMenu();
      }
    },
    tabIndex: 0
  });

  return { isOpen, ref, toggleDropdownMenu, triggerElement };
};

export default useDropdownMenu;
