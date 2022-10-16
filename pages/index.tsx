import type { NextPage } from "next";
import { useQuery } from "@apollo/client";
import styles from "../styles/Home.module.css";
import { GET_ISSUES_QUERY } from "@/graphql/queries";
import { getRepositoriesIssues } from "@/graphql/__generated__/getRepositoriesIssues";

const Home: NextPage = () => {
  const { data, loading, error } = useQuery<getRepositoriesIssues>(
    GET_ISSUES_QUERY,
    {
      variables: { owner: "reactjs", name: "reactjs.org" },
    }
  );

  if (loading) {
    return <div data-testid="loading">loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  return (
    <div className={styles.container}>
      <h2 data-testid="title">ReactJS Issues</h2>
      <ul data-testid="issue-list">
        {data?.repository?.issues.edges?.map((edge) => (
          <li key={edge?.node?.title}>{edge?.node?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
