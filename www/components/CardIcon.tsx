import React, { useContext } from 'react';
import Icon from './Icon';
import Link from './Link';
import { ThemeContext } from './Theme';
import { css } from '../lib/styled-components';

type CardIconProps = {
  icon?: string;
  link: string;
};

const CardIcon: React.FC<CardIconProps> = ({ icon, link, ...props }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <Link
      color={darkMode ? 'gray25' : 'gray'}
      css={css<{ darkMode?: boolean }>`
        align-items: center;
        display: flex;
        justify-content: center;

        &:hover {
          color: ${props =>
            props.theme.colors[props.darkMode ? 'gray' : 'darkGray']};
        }
      `}
      darkMode={darkMode}
      href={link}
      ml={1}
      target="_blank"
    >
      <Icon as={icon} color="currentColor" {...props} />
    </Link>
  );
};

export default CardIcon;
