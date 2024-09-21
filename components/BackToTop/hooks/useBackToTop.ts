import { useEffect, useRef, useState } from 'react';

const useBackToTop = () => {
  const [isShown, setIsShown] = useState(false);
  const ref = useRef<SVGCircleElement>(null);

  const toggleBackToTop = () =>
    window.scrollY > 100 ? setIsShown(true) : setIsShown(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleBackToTop);
    return () => window.removeEventListener('scroll', toggleBackToTop);
  }, []);

  useEffect(() => {
    const drawSvg = () => {
      const length = ref.current?.getTotalLength();

      const scrollpercent =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      if (ref.current && length) {
        const draw = length * scrollpercent;

        ref.current.style.strokeDashoffset = `${length - draw}`;
        ref.current.style.strokeDasharray = `${length}`;
      }
    };

    window.addEventListener('scroll', drawSvg);

    return () => window.removeEventListener('scroll', drawSvg);
  }, []);

  return { isShown, ref };
};

export default useBackToTop;
