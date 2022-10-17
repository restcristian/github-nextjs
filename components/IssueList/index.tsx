import React from "react";
import { GET_ISSUES_QUERY } from "@/graphql/queries";
import { getRepositoriesIssues } from "@/graphql/__generated__/getRepositoriesIssues";
import { useQuery } from "@apollo/client";
import IssueListItem from "./IssueListItem";
import styles from './IssueList.module.scss';

interface Props {
  testId?: string;
  repositoryOwner: string;
  repositoryName: string;
}

export const IssueList: React.FC<Props> = ({
  testId = "issue-list",
  repositoryName,
  repositoryOwner,
}) => {
  const { data, loading, error } = useQuery<getRepositoriesIssues>(
    GET_ISSUES_QUERY,
    {
      variables: { owner: repositoryOwner, name: repositoryName },
    }
  );

  if (loading) {
    return <div data-testid="loading">loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <ul data-testid={testId} className = {styles.IssueList}>
      {data?.repository?.issues.edges?.map((edge) => (
        <IssueListItem key={edge?.node?.title} node={edge?.node as any} />
      ))}
    </ul>
  );
};

export default IssueList;
