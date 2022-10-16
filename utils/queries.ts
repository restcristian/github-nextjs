import { gql } from "@apollo/client";

export const GET_ISSUES_QUERY = gql`
  query getRepositoriesIssues($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      issues(last: 20) {
        edges {
          node {
            title
          }
        }
      }
    }
  }
`;
