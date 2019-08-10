import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Link from './link';
import { ReactComponent as GitHub } from '../icons/github.svg';
import { ReactComponent as Instagram } from '../icons/instagram.svg';
import { ReactComponent as Twitter } from '../icons/twitter.svg';
import { FooterQuery } from '../types/generated/graphql';

const links = [
  {
    icon: Twitter,
    label: 'Visit @glnnrys on Twitter',
    title: 'Twitter',
    url: 'https://twitter.com/glnnrys',
  },
  {
    icon: GitHub,
    label: 'Visit glennreyes on GitHub',
    title: 'GitHub',
    url: 'https://github.com/glennreyes',
  },
  {
    icon: Instagram,
    label: 'Visit @glnnrys on Instagram',
    title: 'Instagram',
    url: 'https://instagram.com/glnnrys',
  },
];

const Wrapper = styled.footer`
  background: ${p => p.theme.bg};
  margin-top: auto;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;

  ${p => p.theme.media.tablet`
    padding: ${p.theme.space[4]}px;
  `}
`;

const Socials = styled.nav``;

const SocialLink = styled(Link)`
  &:hover {
    color: ${p => p.theme.textColor2};
  }

  & + & {
    margin-left: ${p => p.theme.space[4]}px;
  }
`;

const Text = styled.p`
  color: ${p => p.theme.textColor2};
  margin: ${p => p.theme.space[3]}px 0 0;

  ${p => p.theme.media.tablet`
    margin-top: ${p.theme.space[4]}px;
  `}
`;

const Footer = () => {
  const { site }: FooterQuery = useStaticQuery(
    graphql`
      query Footer {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );
  const title = (site && site.siteMetadata && site.siteMetadata.title) || '';

  return (
    <Wrapper>
      <Socials>
        {links.map(({ icon: Icon, label, title, url }) => (
          <SocialLink
            aria-label={label}
            key={title.toLowerCase()}
            target="_blank"
            to={url}
          >
            <Icon />
          </SocialLink>
        ))}
      </Socials>
      <Text>
        {`© ${new Date().getFullYear()} ${title}`.trim()}. View{' '}
        <Link target="_blank" to="https://github.com/glennreyes/glennreyes.com">
          source
        </Link>{' '}
        on GitHub.
      </Text>
    </Wrapper>
  );
};

export default Footer;
