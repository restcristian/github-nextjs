import React from "react";
import Image from "next/image";
import { getRepositoriesIssues_repository_issues_edges_node } from "@/graphql/__generated__/getRepositoriesIssues";
import styles from "./IssueListItem.module.scss";
import Badge from "../Badge";
import { IssueState } from "@/__generated__/globalTypes";

export interface Props {
  node?: getRepositoriesIssues_repository_issues_edges_node;
}

const IssueListItem: React.FC<Props> = ({ node }) => {
  return (
    <li className={styles.IssueListItem}>
      <div className={styles.Wrapper}>
        <Badge status={node?.state as IssueState} />
        <h3>{node?.title}</h3>
        <div className={styles.AuthorBox}>
          <span>
            Authored By <b>{node?.author?.login}</b> on <b>{node?.createdAt}</b>
          </span>
          <div className={styles.Avatar}>
            <Image
              alt={node?.author?.login}
              data-testid={`avatar-${node?.author?.avatarUrl}`}
              src={{ width: 50, height: 50, src: node?.author?.avatarUrl }}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default IssueListItem;
