/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getRepositoriesIssues
// ====================================================

export interface getRepositoriesIssues_repository_issues_edges_node {
  __typename: "Issue";
  /**
   * Identifies the issue title.
   */
  title: string;
}

export interface getRepositoriesIssues_repository_issues_edges {
  __typename: "IssueEdge";
  /**
   * The item at the end of the edge.
   */
  node: getRepositoriesIssues_repository_issues_edges_node | null;
}

export interface getRepositoriesIssues_repository_issues {
  __typename: "IssueConnection";
  /**
   * A list of edges.
   */
  edges: (getRepositoriesIssues_repository_issues_edges | null)[] | null;
}

export interface getRepositoriesIssues_repository {
  __typename: "Repository";
  /**
   * A list of issues that have been opened in the repository.
   */
  issues: getRepositoriesIssues_repository_issues;
}

export interface getRepositoriesIssues {
  /**
   * Lookup a given repository by the owner and repository name.
   */
  repository: getRepositoriesIssues_repository | null;
}

export interface getRepositoriesIssuesVariables {
  owner: string;
  name: string;
}
