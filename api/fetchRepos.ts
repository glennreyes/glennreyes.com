import axios from 'axios';

const githubToken = process.env.GITHUB_TOKEN;

const fetchRepos = async ({ first = 4 } = {}) => {
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
            query getPinnedRepositories($first: Int!) {
              repositoryOwner(login:"glennreyes") {
                repositories(
                  first: $first, isFork: false
                  orderBy: { field: STARGAZERS, direction: DESC }
                  ownerAffiliations: [OWNER]
                ) {
                  nodes{
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
        variables: { first },
      },
    });

    if (
      res &&
      res.data &&
      res.data.data &&
      res.data.data.repositoryOwner &&
      res.data.data.repositoryOwner.repositories &&
      res.data.data.repositoryOwner.repositories.nodes
    ) {
      return res.data.data.repositoryOwner.repositories.nodes.map(
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
