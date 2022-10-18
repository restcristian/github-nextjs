import React from "react";
import classnames from "classnames";
import styles from "./Badge.module.scss";
import { IssueState } from "@/__generated__/globalTypes";

export interface Props {
  status: IssueState;
  testId?: string;
}
export const Badge: React.FC<Props> = ({ status, testId = "badge" }) => {
  return (
    <span
      data-testid={testId}
      data-is-open={status === IssueState.OPEN ? "true": "false"}
      className={classnames(styles.Badge, {
        [styles.closed]: status === IssueState.CLOSED,
      })}
    >
      {status}
    </span>
  );
};

export default Badge;
