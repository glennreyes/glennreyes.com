import React, { useContext } from 'react';
import { Flex, FlexProps } from 'rebass';
import SocialLinks from './SocialLinks';
import { ThemeContext } from './Theme';
import { Me } from '../data/me';
import { css } from '../lib/styled-components';

type FooterProps = {
  me: Me;
};

const FooterContainer: React.FC<FlexProps & { darkMode?: boolean }> = Flex;

const Footer: React.FC<FooterProps> = ({ me }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <FooterContainer
      alignItems="center"
      css={css<{ darkMode?: boolean }>`
        position: relative;

        &::after,
        &::before {
          bottom: 0;
          content: '';
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          transition: ${props => props.theme.transitions[0]};
          z-index: -1;
        }

        &::after {
          background: linear-gradient(
            to right,
            ${props => props.theme.colors.darkBlue},
            ${props => props.theme.colors.blue}
          );
          opacity: ${props => props.theme.opacity[props.darkMode ? 4 : 0]};
        }

        &::before {
          background: linear-gradient(
            to right,
            ${props => props.theme.colors.white},
            ${props => props.theme.colors.lightGray}
          );
          opacity: ${props => props.theme.opacity[props.darkMode ? 0 : 4]};
        }

        @media (min-width: ${props => props.theme.breakpoints[0]}) {
          height: auto;
        }
      `}
      darkMode={darkMode}
      justifyContent="center"
      mt={8}
      py={5}
    >
      <SocialLinks me={me} />
    </FooterContainer>
  );
};

export default Footer;
