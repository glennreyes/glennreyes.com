import { GetTypeByName } from '@content-collections/core';

import configuration from '../../content-collections.ts';

export type Post = GetTypeByName<typeof configuration, 'posts'>;

export declare const allPosts: Post[];

export type Page = GetTypeByName<typeof configuration, 'pages'>;

export declare const allPages: Page[];

export {};
