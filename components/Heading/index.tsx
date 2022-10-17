import React from "react";
import styles from "./Heading.module.scss";

interface Props {
  title: string;
  testId?: string;
}
export const Heading: React.FC<Props> = ({ title, testId = "title" }) => {
  return (
    <h2 data-testid={testId} className={styles.Heading}>
      {title}
    </h2>
  );
};

export default Heading;
