// Next.js App Router type definitions
export interface PageProps<T extends string = string> {
  params: Promise<{ [K in keyof GetRouteParams<T>]: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

// Extract params from route string like '/posts/[slug]' -> { slug: string }
type GetRouteParams<T extends string> = T extends `${infer _Start}/[${infer Param}]${infer Rest}`
  ? { [K in Param]: string } & GetRouteParams<Rest>
  : T extends `${infer _Start}/[...${infer Param}]${infer Rest}`
  ? { [K in Param]: string[] } & GetRouteParams<Rest>
  : Record<string, never>;

// Route handler props
export interface RouteProps {
  params: Promise<Record<string, string | string[]>>;
}

// Route context for API routes
export interface RouteContext<T extends string = string> {
  params: Promise<{ [K in keyof GetRouteParams<T>]: string }>;
}