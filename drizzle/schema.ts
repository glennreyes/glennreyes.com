import { relations } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

// Enums
export const appearanceLengthEnum = ['SHORT', 'MEDIUM', 'LONG'] as const;

export const eventTypeEnum = ['CLASS', 'CONFERENCE', 'MEETUP'] as const;

export const locationTypeEnum = [
  'CAFE',
  'COWORKING_SPACE',
  'COMPANY_OFFICE',
  'EVENT_HALL',
  'THEATER',
  'UNIVERSITY',
] as const;

export const statusEnum = ['ACTIVE', 'INACTIVE'] as const;

// Enum constants for components
export type AppearanceLengthType = (typeof appearanceLengthEnum)[number];

export const AppearanceLength: Record<
  AppearanceLengthType,
  AppearanceLengthType
> = {
  SHORT: 'SHORT',
  MEDIUM: 'MEDIUM',
  LONG: 'LONG',
} as const;

export type StatusType = (typeof statusEnum)[number];

export const Status: Record<StatusType, StatusType> = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
} as const;

// Tables
export const locations = sqliteTable('Location', {
  id: text('id').primaryKey(),
  createdAt: integer('createdAt', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updatedAt', { mode: 'timestamp' }).notNull(),
  name: text('name').notNull(),
  address: text('address').notNull(),
  city: text('city').notNull(),
  state: text('state'),
  country: text('country').notNull(),
  zip: text('zip').notNull(),
  type: text('type', { enum: locationTypeEnum })
    .notNull()
    .default('EVENT_HALL'),
});

export const events = sqliteTable('Event', {
  id: text('id').primaryKey(),
  createdAt: integer('createdAt', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updatedAt', { mode: 'timestamp' }).notNull(),
  startDate: integer('startDate', { mode: 'timestamp' }).notNull(),
  endDate: integer('endDate', { mode: 'timestamp' }).notNull(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  type: text('type', { enum: eventTypeEnum }).notNull().default('CONFERENCE'),
  url: text('url').notNull(),
  locationId: text('locationId')
    .notNull()
    .references(() => locations.id, { onDelete: 'cascade' }),
});

export const talks = sqliteTable('Talk', {
  id: text('id').primaryKey(),
  createdAt: integer('createdAt', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updatedAt', { mode: 'timestamp' }).notNull(),
  title: text('title').notNull(),
  abstract: text('abstract').notNull(),
  slides: text('slides'),
  slug: text('slug').notNull().unique(),
  status: text('status', { enum: statusEnum }).notNull().default('ACTIVE'),
  tags: text('tags', { mode: 'json' }).$type<string[]>().notNull(),
});

export const workshops = sqliteTable('Workshop', {
  id: text('id').primaryKey(),
  createdAt: integer('createdAt', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updatedAt', { mode: 'timestamp' }).notNull(),
  title: text('title').notNull(),
  summary: text('summary').notNull(),
  description: text('description').notNull(),
  curriculum: text('curriculum'),
  repository: text('repository'),
  slides: text('slides'),
  slug: text('slug').notNull().unique(),
  status: text('status', { enum: statusEnum }).notNull().default('ACTIVE'),
  tags: text('tags', { mode: 'json' }).$type<string[]>().notNull(),
});

export const appearances = sqliteTable('Appearance', {
  id: text('id').primaryKey(),
  createdAt: integer('createdAt', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updatedAt', { mode: 'timestamp' }).notNull(),
  date: integer('date', { mode: 'timestamp' }).notNull(),
  length: text('length', { enum: appearanceLengthEnum })
    .notNull()
    .default('MEDIUM'),
  recording: text('recording'),
  slug: text('slug').notNull().unique(),
  eventId: text('eventId')
    .notNull()
    .references(() => events.id, { onDelete: 'cascade' }),
  talkId: text('talkId').references(() => talks.id),
  workshopId: text('workshopId').references(() => workshops.id),
});

export const posts = sqliteTable('Post', {
  id: text('id').primaryKey(),
  createdAt: integer('createdAt', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updatedAt', { mode: 'timestamp' }).notNull(),
  slug: text('slug').notNull().unique(),
});

export const reactions = sqliteTable('Reaction', {
  id: text('id').primaryKey(),
  createdAt: integer('createdAt', { mode: 'timestamp' }).notNull(),
  appearanceId: text('appearanceId').references(() => appearances.id),
  postId: text('postId').references(() => posts.id),
});

export const views = sqliteTable('View', {
  id: text('id').primaryKey(),
  createdAt: integer('createdAt', { mode: 'timestamp' }).notNull(),
  appearanceId: text('appearanceId').references(() => appearances.id),
  postId: text('postId').references(() => posts.id),
});

// Relations
export const locationsRelations = relations(locations, ({ many }) => ({
  events: many(events),
}));

export const eventsRelations = relations(events, ({ one, many }) => ({
  location: one(locations, {
    fields: [events.locationId],
    references: [locations.id],
  }),
  appearances: many(appearances),
}));

export const talksRelations = relations(talks, ({ many }) => ({
  appearances: many(appearances),
}));

export const workshopsRelations = relations(workshops, ({ many }) => ({
  appearances: many(appearances),
}));

export const appearancesRelations = relations(appearances, ({ one, many }) => ({
  event: one(events, {
    fields: [appearances.eventId],
    references: [events.id],
  }),
  talk: one(talks, {
    fields: [appearances.talkId],
    references: [talks.id],
  }),
  workshop: one(workshops, {
    fields: [appearances.workshopId],
    references: [workshops.id],
  }),
  reactions: many(reactions),
  views: many(views),
}));

export const postsRelations = relations(posts, ({ many }) => ({
  reactions: many(reactions),
  views: many(views),
}));

export const reactionsRelations = relations(reactions, ({ one }) => ({
  appearance: one(appearances, {
    fields: [reactions.appearanceId],
    references: [appearances.id],
  }),
  post: one(posts, {
    fields: [reactions.postId],
    references: [posts.id],
  }),
}));

export const viewsRelations = relations(views, ({ one }) => ({
  appearance: one(appearances, {
    fields: [views.appearanceId],
    references: [appearances.id],
  }),
  post: one(posts, {
    fields: [views.postId],
    references: [posts.id],
  }),
}));

// Type exports for components
export type Talk = typeof talks.$inferSelect;

export type Workshop = typeof workshops.$inferSelect;

export type Event = typeof events.$inferSelect;

export type Location = typeof locations.$inferSelect;
