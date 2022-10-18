import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Heading, IssueList } from "@/components";

const Home: NextPage = () => {
  const repositoryInfo = {
    owner: "reactjs",
    name: "reactjs.org",
  };

  return (
    <div className={styles.container}>
      <Heading title="ReactJS Issues" />
      <IssueList
        repositoryName={repositoryInfo.name}
        repositoryOwner={repositoryInfo.owner}
        showFilter
      />
    </div>
  );
};

export default Home;
