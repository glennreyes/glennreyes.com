import axios from 'axios';

const githubToken = process.env.GITHUB_TOKEN;

const fetchRepos = async () => {
  if (!githubToken) return [];

  try {
    const res = await axios({
      method: 'post',
      url: 'https://api.github.com/graphql',
      headers: {
        authorization: `bearer ${githubToken}`,
      },
      data: {
        query: `
          {
            repositoryOwner(login:"glennreyes") {
              pinnedRepositories(first: 6, orderBy:{field:STARGAZERS, direction:DESC}) {
                nodes {
                  id
                  name
                  description
                  stargazers {
                    totalCount
                  }
                  url
                }
              }
            }
          }
      `,
      },
    });

    if (
      res &&
      res.data &&
      res.data.data &&
      res.data.data.repositoryOwner &&
      res.data.data.repositoryOwner.pinnedRepositories &&
      res.data.data.repositoryOwner.pinnedRepositories.nodes
    ) {
      return res.data.data.repositoryOwner.pinnedRepositories.nodes.map(
        ({
          stargazers,
          ...repo
        }: Repository & {
          name: string;
          stargazers: { totalCount: number };
        }) => ({ ...repo, stars: stargazers.totalCount }),
      );
    }
  } catch (error) {
    throw new Error(error);
  }

  return [];
};

export default fetchRepos;
