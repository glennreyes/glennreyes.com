import React from 'react';
import { ButtonProps } from 'rebass';
import Icon from '../Icon';
import Button from '../Button';
import { css } from '../../lib/styled-components';
import { ReactComponent as ChevronDown } from '../../icons/chevron-down.svg';

type ScrollDownProps = {
  container: React.MutableRefObject<HTMLDivElement | null>;
};

const ScrollDown: React.FC<ButtonProps & ScrollDownProps> = ({
  container,
  ...props
}) => {
  const handleClick = () => {
    if (container.current && typeof window !== 'undefined') {
      window.scrollTo({
        behavior: 'smooth',
        top: container.current.getBoundingClientRect().height,
      });
    }
  };

  return (
    <Button
      css={css`
        bottom: ${props => props.theme.space[7]}px;
        cursor: pointer;
        display: flex;
        opacity: ${props => props.theme.opacity[1]};
        outline: none;
        position: absolute;
        transition: ${props => props.theme.transitions[0]};

        &:hover {
          opacity: ${props => props.theme.opacity[2]};
        }

        @media (min-width: ${props => props.theme.breakpoints[0]}) {
          display: none;
        }
      `}
      onClick={handleClick}
      {...props}
    >
      <Icon as={ChevronDown} />
    </Button>
  );
};

export default ScrollDown;
