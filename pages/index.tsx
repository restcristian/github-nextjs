import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Heading, IssueList } from "@/components";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Heading title = "ReactJS Issues"/>
      <IssueList repositoryName = "reactjs.org" repositoryOwner = "reactjs" />
    </div>
  );
};

export default Home;
