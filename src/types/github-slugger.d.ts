declare module 'github-slugger' {
  interface Slugger {
    reset: () => void;
    slug: (text: string) => string;
  }
  const GitHubSlugger: () => Slugger;

  export default GitHubSlugger;
}
