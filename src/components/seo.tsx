/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SeoQuery } from '../types/generated/graphql';

const defaultProps = {
  description: '',
  lang: 'en',
  meta: [],
};

type SEOProps = typeof defaultProps & {
  meta: [{ content: string; name?: string; property?: string }];
  title?: string;
};

const SEO = ({ description, lang, meta, title }: SEOProps) => {
  const { site }: SeoQuery = useStaticQuery(
    graphql`
      query Seo {
        site {
          siteMetadata {
            author
            description
            title
          }
        }
      }
    `,
  );

  const metaDescription =
    description ||
    (site && site.siteMetadata && site.siteMetadata.description) ||
    '';

  const author =
    (site && site.siteMetadata && site.siteMetadata.author) || 'Glenn Reyes';
  const metaTitle =
    (site && site.siteMetadata && site.siteMetadata.title) || author;

  const siteTitle =
    title === 'Home'
      ? metaTitle
      : title
      ? `${title} | ${metaTitle}`
      : metaTitle;

  const ogTitle = title === 'Home' ? metaTitle : title;
  const metas = [
    {
      content: metaDescription,
      name: 'description',
    },
    {
      content: ogTitle,
      property: 'og:title',
    },
    {
      content: metaDescription,
      property: 'og:description',
    },
    {
      content: 'website',
      property: 'og:type',
    },
    {
      content: 'summary',
      name: 'twitter:card',
    },
    {
      content: author,
      name: 'twitter:creator',
    },
    {
      content: siteTitle,
      name: 'twitter:title',
    },
    {
      content: metaDescription,
      name: 'twitter:description',
    },
    ...meta,
  ];

  return (
    <Helmet>
      <html lang={lang} />
      <title>{siteTitle}</title>
      {metas.map((props, index) => (
        <meta key={index} {...props} />
      ))}
    </Helmet>
  );
};

SEO.defaultProps = defaultProps;

export default SEO;
