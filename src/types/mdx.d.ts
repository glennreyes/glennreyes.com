declare module '@mdx-js/react' {
  type MDXProps = {
    children: React.ReactNode;
    components: { wrapper: React.ReactNode };
  };

  export const MDXProvider: React.FC<MDXProps>;
}

// Open issue for typings https://github.com/gatsbyjs/gatsby/issues/15924
declare module 'gatsby-plugin-mdx' {
  export const MDXRenderer: React.FC;
}
