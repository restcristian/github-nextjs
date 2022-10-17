/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { IssueState } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getRepositoriesIssues
// ====================================================

export interface getRepositoriesIssues_repository_issues_edges_node_author {
  __typename: "Bot" | "EnterpriseUserAccount" | "Mannequin" | "Organization" | "User";
  /**
   * The username of the actor.
   */
  login: string;
  /**
   * A URL pointing to the actor's public avatar.
   */
  avatarUrl: any;
}

export interface getRepositoriesIssues_repository_issues_edges_node {
  __typename: "Issue";
  /**
   * Identifies the issue title.
   */
  title: string;
  /**
   * The actor who authored the comment.
   */
  author: getRepositoriesIssues_repository_issues_edges_node_author | null;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * Identifies the state of the issue.
   */
  state: IssueState;
  /**
   * Identifies the date and time when the object was closed.
   */
  closedAt: any | null;
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
