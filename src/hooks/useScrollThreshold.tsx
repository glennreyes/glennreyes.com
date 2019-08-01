import React from 'react';

// Unlike useWindowScroll(), this will only update the state when it switches from
// inside and outside of the given threshold.
const useScrollThreshold = (threshold = 0, axis = 'y') => {
  const frame = React.useRef(0);
  const [isScrollThreshold, setScrollThreshold] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const offset = axis === 'y' ? window.pageYOffset : window.pageXOffset;
        setScrollThreshold(offset < threshold);
      });
    };

    window.addEventListener('scroll', handler, {
      capture: false,
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener('scroll', handler);
    };
  }, [axis, threshold]);

  return isScrollThreshold;
};

export default useScrollThreshold;
