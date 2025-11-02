import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Post = GetTypeByName<typeof configuration, "posts">;
export declare const allPosts: Array<Post>;

export type Page = GetTypeByName<typeof configuration, "pages">;
export declare const allPages: Array<Page>;

export {};
