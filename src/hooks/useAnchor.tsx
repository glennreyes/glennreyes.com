import React from 'react';
import useSlug from './useSlug';

const useAnchor = (
  node: React.ReactNode,
  { offset = 0 }: { offset: number },
) => {
  const ref = React.createRef<HTMLHeadingElement>();
  const slug = useSlug(node);

  React.useEffect(() => {
    if (!(ref && ref.current)) return;

    const slug = decodeURI(window.location.hash.replace('#', ''));

    if (slug && ref.current === document.getElementById(slug)) {
      window.scrollTo(0, ref.current.offsetTop - offset);
    }
  }, [offset, ref]);

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const element = document.getElementById(slug);

    if (!element) return;

    window.scrollTo({
      behavior: 'smooth',
      top: element.offsetTop - offset,
    });

    window.history.pushState(null, '', `#${slug}`);
  };

  return { handleClick, ref, slug };
};

export default useAnchor;
