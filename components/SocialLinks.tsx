import React, { FunctionComponent } from 'react';
import { Box, Flex } from 'rebass';
import { Me } from '../data/me';
import GitHub from '../icons/github.svg';
import Instagram from '../icons/instagram.svg';
import Mail from '../icons/mail.svg';
import Twitter from '../icons/twitter.svg';
import { css } from '../lib/styled-components';

type SocialLinksProps = { me: Me };

const SocialLinks: FunctionComponent<SocialLinksProps> = ({ me, ...props }) => {
  const socialItems = [
    {
      component: Twitter,
      href: `https://twitter.com/${me.twitter}`,
      id: 'twitter',
    },
    {
      component: GitHub,
      href: `https://github.com/${me.github}`,
      id: 'github',
    },
    {
      component: Instagram,
      href: `https://instagram.com/${me.instagram}`,
      id: 'instagram',
    },
    {
      component: Mail,
      href: `mailto:glenn@glennreyes.com`,
      id: 'mail',
    },
  ];

  return (
    <Flex
      css={css`
        display: grid;
        grid-gap: ${props => props.theme.space[3]}px;
        grid-template-columns: repeat(${socialItems.length}, 1fr);
      `}
      {...props}
    >
      {socialItems.map(({ component, id, ...rest }) => (
        <Flex
          as="a"
          css={css`
            opacity: ${props => props.theme.opacity[1]};
            transition: ${props => props.theme.transition[0]};

            &:hover {
              opacity: ${props => props.theme.opacity[2]};
            }
          `}
          key={id}
          {...rest}
        >
          <Box color="blue" as={component} />
        </Flex>
      ))}
    </Flex>
  );
};

export default SocialLinks;
