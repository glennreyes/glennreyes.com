import React from 'react';
import { useMedia } from 'use-media';
import { breakpoints } from '../theme';

type BreakpointContextProps = {
  current: string | null;
  isDesktop: boolean | null;
  isMobile: boolean | null;
  isTablet: boolean | null;
};

const BreakpointContext = React.createContext<BreakpointContextProps>({
  current: null,
  isDesktop: null,
  isMobile: null,
  isTablet: null,
});

type BreakpointProps = {
  children: React.ReactNode;
};

export const BreakpointProvider = ({ children }: BreakpointProps) => {
  const isDesktop = useMedia({ minWidth: breakpoints.desktop });
  const isTablet = useMedia({ minWidth: breakpoints.tablet });
  const isMobile = !isTablet && !isDesktop;
  const current = isDesktop
    ? 'desktop'
    : isTablet
    ? 'tablet'
    : isMobile
    ? 'mobile'
    : null;

  return (
    <BreakpointContext.Provider
      value={{ current, isDesktop, isMobile, isTablet }}
    >
      {children}
    </BreakpointContext.Provider>
  );
};

export default BreakpointContext;
