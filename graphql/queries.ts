import { gql } from "@apollo/client";

// TODO: extend query to use offset for pagination
export const GET_ISSUES_QUERY = gql`
query getRepositoriesIssues($owner: String!, $name: String!, $status: [IssueState!]) {
  repository(owner: $owner, name: $name) {
    issues(last: 20, states: $status) {
      edges {
        node {
          title
          author {
            login
            avatarUrl
          }
          createdAt
          state
          closedAt
        }
      }
    }
  }
}
`;
