import React, { useState, useEffect } from "react";
import { GET_ISSUES_QUERY } from "@/graphql/queries";
import { getRepositoriesIssues } from "@/graphql/__generated__/getRepositoriesIssues";
import { useLazyQuery } from "@apollo/client";
import IssueListItem from "./IssueListItem";
import styles from "./IssueList.module.scss";
import FilterForm from "../FilterForm";
import { IssueState } from "@/__generated__/globalTypes";

interface Props {
  testId?: string;
  showFilter?: boolean;
  repositoryOwner: string;
  repositoryName: string;
}

export const IssueList: React.FC<Props> = ({
  testId = "issue-list",
  showFilter = false,
  repositoryName,
  repositoryOwner,
}) => {
  const [isShowOpenIssuesChecked, setIsShowOpenIssuesChecked] = useState(false);
  const [isShowClosedIssuesChecked, setIsClosedIssuesChecked] = useState(false);
  const status =
    isShowOpenIssuesChecked && !isShowClosedIssuesChecked
      ? IssueState.OPEN
      : !isShowOpenIssuesChecked && isShowClosedIssuesChecked
      ? IssueState.CLOSED
      : null;

  const [
    fetchIssues,
    { data, error, loading },
  ] = useLazyQuery<getRepositoriesIssues>(GET_ISSUES_QUERY);

  useEffect(() => {
    fetchIssues({
      variables: {
        owner: repositoryOwner,
        name: repositoryName,
        status,
      },
    });
  }, [status, fetchIssues, repositoryName, repositoryOwner]);

  const onShowOpenChange = () => {
    setIsShowOpenIssuesChecked((prevState) => !prevState);
  };

  const onClosedOpenChange = () => {
    setIsClosedIssuesChecked((prevState) => !prevState);
  };
  
  if (error) {
    return <div>error</div>;
  }

  return (
    <>
      {showFilter && (
        <FilterForm
          showOpenIssuesInputProps={{
            checked: isShowOpenIssuesChecked,
            onChange: onShowOpenChange,
            disabled: loading,
          }}
          closeOpenIssuesInputProps={{
            checked: isShowClosedIssuesChecked,
            onChange: onClosedOpenChange,
            disabled: loading,
          }}
        />
      )}
      {loading ? (
        <div data-testid="loading">loading</div>
      ) : (
        <ul data-testid={testId} className={styles.IssueList}>
          {data?.repository?.issues.edges?.map((edge) => (
            <IssueListItem key={edge?.node?.title} node={edge?.node as any} />
          ))}
        </ul>
      )}
    </>
  );
};

export default IssueList;
