import React from 'react';
import { Query } from 'react-apollo';
import { Flex, FlexProps } from 'rebass';
import Icon from './Icon';
import { getMe } from '../graphql';
import { ReactComponent as GitHub } from '../icons/github.svg';
import { ReactComponent as Instagram } from '../icons/instagram.svg';
import { ReactComponent as Mail } from '../icons/mail.svg';
import { ReactComponent as Twitter } from '../icons/twitter.svg';
import { css } from '../lib/styled-components';
import { GetMeQuery } from '../typings/__generated__/graphql';

const SocialLinks: React.FC<FlexProps> = props => (
  <Query<GetMeQuery> query={getMe}>
    {({ data, loading }) => {
      if (loading || !data) return null;

      const socialItems = [
        {
          component: Twitter,
          href: `https://twitter.com/${data.me.twitter}`,
          id: 'twitter',
        },
        {
          component: GitHub,
          href: `https://github.com/${data.me.github}`,
          id: 'github',
        },
        {
          component: Instagram,
          href: `https://instagram.com/${data.me.instagram}`,
          id: 'instagram',
        },
        {
          component: Mail,
          href: `mailto:${data.me.email}`,
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
                transition: ${props => props.theme.transitions[0]};

                &:hover {
                  opacity: ${props => props.theme.opacity[2]};
                }
              `}
              key={id}
              {...rest}
            >
              <Icon as={component} />
            </Flex>
          ))}
        </Flex>
      );
    }}
  </Query>
);

export default SocialLinks;
