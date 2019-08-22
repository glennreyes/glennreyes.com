import { PageRendererProps, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Content from '../components/content';
import Events from '../components/events';
import Layout from '../components/layout';
import WorkshopUpsell from '../components/workshop-upsell';
import { H1 } from '../components/mdx/headings';
import SEO from '../components/seo';
import { WorkshopQuery } from '../types/generated/graphql';

type WorkshopProps = PageRendererProps & {
  data: WorkshopQuery;
};

const Workshop = ({ data }: WorkshopProps) => {
  if (!data.workshop) return null;

  const { body, events, title } = data.workshop;

  return (
    <Layout>
      <SEO title={title} />
      {(title || body) && (
        <Content>
          {title && <H1>{title}</H1>}
          {body && <MDXRenderer>{body}</MDXRenderer>}
          <Events events={events} />
          <WorkshopUpsell />
        </Content>
      )}
    </Layout>
  );
};

export default Workshop;

export const pageQuery = graphql`
  query Workshop($id: String!) {
    workshop(id: { eq: $id }) {
      body
      title
      events {
        date: date(formatString: "YYYY-MM-DD")
        dateFormatted: date(formatString: "MMMM DD, YYYY")
        endDate: endDate(formatString: "YYYY-MM-DD")
        endDateFormatted: endDate(formatString: "DD, YYYY")
        id
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
      }
    }
  }
`;
