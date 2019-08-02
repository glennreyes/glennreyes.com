declare module '@mdx-js/react' {
  type MDXProps = {
    children: React.ReactNode;
    components: { wrapper: React.ReactNode };
  };

  export const MDXProvider: React.FC<MDXProps>;
}

declare module 'gatsby-plugin-mdx' {
  export const MDXRenderer: React.FC;
}
