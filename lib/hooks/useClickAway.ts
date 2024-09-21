import { RefObject, useEffect } from 'react';

interface Arguments {
  ref: RefObject<any>;
  handleClick: (event: Event) => void;
}

const useClickAway = ({ ref, handleClick }: Arguments) => {
  useEffect(() => {
    const handleDocumentClick = (event: Event) => {
      const node = ref.current;
      const doc = (node && node.ownerDocument) || document;

      if (
        doc.documentElement?.contains?.(event.target) &&
        !node.contains(event.target)
      ) {
        handleClick(event);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [ref, handleClick]);
};

export default useClickAway;
