import { PageRendererProps, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Content from '../components/content';
import Events from '../components/events';
import Layout from '../components/layout';
import TalkUpsell from '../components/talk-upsell';
import { H1 } from '../components/mdx/headings';
import SEO from '../components/seo';
import { TalkQuery } from '../types/generated/graphql';

type TalkProps = PageRendererProps & {
  data: TalkQuery;
};

const Talk = ({ data }: TalkProps) => {
  if (!data.talk) return null;

  const { body, events, title } = data.talk;

  return (
    <Layout>
      <SEO title={title} />
      {(title || body) && (
        <Content>
          {title && <H1>{title}</H1>}
          {body && <MDXRenderer>{body}</MDXRenderer>}
          <Events events={events} />
          <TalkUpsell />
        </Content>
      )}
    </Layout>
  );
};

export default Talk;

export const pageQuery = graphql`
  query Talk($id: String!) {
    talk(id: { eq: $id }) {
      body
      title
      events {
        date: date(formatString: "YYYY-MM-DD")
        dateFormatted: date(formatString: "MMMM DD, YYYY")
        endDate: endDate(formatString: "YYYY-MM-DD")
        endDateFormatted: endDate(formatString: "DD, YYYY")
        id
        isLightning
        location {
          address
          city
          country
          name
          zip
        }
        slidesUrl
        startDate: startDate(formatString: "YYYY-MM-DD")
        startDateFormatted: startDate(formatString: "MMMM DD")
        title
        url
        videoUrl
      }
    }
  }
`;
