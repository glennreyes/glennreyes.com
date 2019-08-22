import dayjs from 'dayjs';
import { PageRendererProps, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { orderBy } from 'lodash';
import React from 'react';
import styled from 'styled-components';
import Content from '../components/content';
import Layout from '../components/layout';
import Link from '../components/link';
import { H1, H2 } from '../components/mdx/headings';
import SEO from '../components/seo';
import { ReactComponent as CalendarSvg } from '../icons/calendar.svg';
import { ReactComponent as Film } from '../icons/film.svg';
import { ReactComponent as FlashSvg } from '../icons/flash.svg';
import { ReactComponent as PinSvg } from '../icons/pin.svg';
import { ReactComponent as Play } from '../icons/play.svg';
import { TalkQuery } from '../types/generated/graphql';

type TalkProps = PageRendererProps & {
  data: TalkQuery;
};

const Card = styled.div`
  background: ${p => p.theme.colors.invertedCardBg};
  border-radius: ${p => p.theme.radii[2]}px;
  margin: ${p => p.theme.space[2]}px 0;
  overflow: hidden;
  padding: ${p => p.theme.space[2]}px;

  ${p => p.theme.media.tablet`
    padding: ${p.theme.space[3]}px;
  `}
`;

const Title = styled.h3`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  margin: 0;
`;

const EventLink = styled(Link)`
  align-items: center;
  color: ${p => p.theme.colors.invertedText};
  display: inline-flex;

  &:hover {
    color: ${p => p.theme.colors.invertedTextSecondary};
  }
`;

const Text = styled.p`
  align-items: center;
  color: ${p => p.theme.colors.invertedTextSecondary};
  display: flex;
  font-size: ${p => p.theme.fontSizes[1]}px;
  line-height: ${p => p.theme.lineHeights.body};
  margin: 0;
`;

const Footer = styled.footer`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-top: ${p => p.theme.space[4]}px;
`;

const Date = styled.p`
  align-items: center;
  color: ${p => p.theme.colors.invertedTextSecondary};
  display: inline-flex;
  flex: 0 1 auto;
  font-size: ${p => p.theme.fontSizes[1]}px;
  line-height: ${p => p.theme.lineHeights.body};
  margin: 0 ${p => p.theme.space[1]}px 0 0;
`;

const MapLink = styled(Link)`
  align-items: center;
  color: ${p => p.theme.colors.invertedTextSecondary};
  display: flex;

  &:hover {
    color: ${p => p.theme.colors.invertedText};
  }
`;

const Pin = styled(PinSvg)`
  margin-right: ${p => p.theme.space[0]}px;
`;

const Calendar = styled(CalendarSvg)`
  flex: 0 0 auto;
  margin-right: ${p => p.theme.space[0]}px;
`;

const Flash = styled(FlashSvg)`
  color: ${p => p.theme.colors.invertedTextSecondary};
  margin-left: ${p => p.theme.space[0]}px;
`;

const Media = styled.div`
  display: grid;
  flex: 0 0 auto;
  gap: ${p => p.theme.space[2]}px;
  grid-template-columns: repeat(2, ${p => p.theme.space[5]}px);
  justify-content: end;
  margin-left: auto;
`;

const IconLink = styled(Link)`
  align-items: center;
  background: ${p => p.theme.colors.bg};
  border-radius: 50%;
  color: ${p => p.theme.colors.invertedCardBg};
  display: flex;
  height: ${p => p.theme.space[5]}px;
  justify-content: center;
  width: ${p => p.theme.space[5]}px;

  &:hover {
    color: ${p => p.theme.colors.textSecondary};
  }
`;

const IconWrapper = styled.div`
  align-items: center;
  background: ${p => p.theme.colors.bg};
  border-radius: 50%;
  color: ${p => p.theme.colors.invertedCardBg};
  display: flex;
  height: ${p => p.theme.space[5]}px;
  justify-content: center;
  opacity: 0.1;
  width: ${p => p.theme.space[5]}px;
`;

const Talk = ({ data }: TalkProps) => {
  if (!data.talk) return null;

  const { body, events, title } = data.talk;

  const upcomingEvents = Array.isArray(events)
    ? orderBy(
        events.filter(event =>
          dayjs(event.date || event.startDate).isAfter(dayjs()),
        ),
        [({ date, startDate }) => dayjs(date).unix() || dayjs(startDate)],
      )
    : [];

  const pastEvents = Array.isArray(events)
    ? orderBy(
        events.filter(event =>
          dayjs(event.date || event.startDate).isBefore(dayjs()),
        ),
        [
          ({ date, startDate }) =>
            dayjs(date).unix() || dayjs(startDate).unix(),
        ],
        ['desc'],
      )
    : [];

  const renderEvent = ({ location, ...event }: typeof events[0]) => {
    const startDate = dayjs(event.startDate);
    const endDate = dayjs(event.endDate);
    const date = startDate.isSame(endDate, 'day') ? (
      <time dateTime={event.date}>{event.dateFormatted}</time>
    ) : (
      <>
        <time dateTime={event.startDate}>{event.startDateFormatted}</time>
        {Math.abs(startDate.diff(endDate, 'day')) === 1 ? '/' : '-'}
        <time dateTime={event.endDate}>{event.endDateFormatted}</time>
      </>
    );

    const query = [
      location.name,
      location.address,
      location.zip,
      location.city,
      location.country,
    ]
      .filter(Boolean)
      .join(', ');

    return (
      <Card key={event.id}>
        {event.url ? (
          <Title>
            <EventLink target="_blank" to={event.url}>
              {event.title} {event.isLightning && <Flash />}
            </EventLink>
          </Title>
        ) : (
          <Title>{event.title}</Title>
        )}
        <Text>
          {location.name || location.address ? (
            <MapLink
              target="_blank"
              title="Venue location on Google Maps"
              to={`https://maps.google.com?q=${encodeURI(query)}`}
            >
              <Pin />
              {location.city}, {location.country}
            </MapLink>
          ) : (
            <>
              {location.city}, {location.country}
            </>
          )}
        </Text>
        <Footer>
          {date && (
            <Date>
              <Calendar />
              {date}
            </Date>
          )}
          <Media>
            {event.slidesUrl ? (
              <IconLink target="_blank" title="Slides" to={event.slidesUrl}>
                <Film />
              </IconLink>
            ) : (
              <IconWrapper>
                <Film />
              </IconWrapper>
            )}
            {event.videoUrl ? (
              <IconLink target="_blank" title="Video" to={event.videoUrl}>
                <Play />
              </IconLink>
            ) : (
              <IconWrapper>
                <Play />
              </IconWrapper>
            )}
          </Media>
        </Footer>
      </Card>
    );
  };

  return (
    <Layout>
      <SEO title={title} />
      {(title || body) && (
        <Content>
          {title && <H1>{title}</H1>}
          {body && <MDXRenderer>{body}</MDXRenderer>}
          {upcomingEvents.length > 0 && (
            <>
              <H2>Upcoming Events</H2>
              {upcomingEvents.map(renderEvent)}
            </>
          )}
          {pastEvents.length > 0 && (
            <>
              <H2>Past Events</H2>
              {pastEvents.map(renderEvent)}
            </>
          )}
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
