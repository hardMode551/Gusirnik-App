import React, { FC } from 'react';
import styles from '../stylessheet/Variants.module.scss';

type GusBlockProps = {
  title: string;
  children: React.ReactNode;
};

const GusBlock: FC<GusBlockProps> = ({ title, children }) => {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);

  const scrollToCenter = (element: { getBoundingClientRect: () => any }) => {
    const rect = element.getBoundingClientRect();
    const top = rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setInView(true);
          scrollToCenter(entry.target);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className={styles.gusBlock} ref={ref}>
      <h2>{title}</h2>
      {inView && children}
    </div>
  );
};

export default GusBlock;
