import InteractiveDiv from 'components/InteractiveDiv';
import { FC } from 'react';
import useBackToTop from 'components/BackToTop/hooks/useBackToTop';
import Icon from 'components/Icon';
import styles from './index.module.css';

const BackToTop: FC = () => {
  const { isShown, ref } = useBackToTop();

  return (
    <InteractiveDiv
      aria-label="Back to top"
      className={`${styles.progress} transition-[0.4s] ${
        isShown ? 'opacity-100 -translate-y-6' : 'opacity-0 '
      }`}
      onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
    >
      <div className="relative">
        <Icon
          className="absolute rotate-90 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          color="primary-dark"
          size={6}
          type="arrow"
        />
        <svg className={styles.svg}>
          <circle className={styles.circle} cx="31" cy="31" r="30" />
          <circle
            ref={ref}
            className={styles.indicator}
            cx="31"
            cy="31"
            r="30"
          />
          Sorry, your browser does not support inline SVG.
        </svg>
      </div>
    </InteractiveDiv>
  );
};

export default BackToTop;
