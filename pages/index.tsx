import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useQuery } from "@apollo/client";
import { GET_ISSUES_QUERY } from "@/utils/queries";

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(GET_ISSUES_QUERY, {
    variables: { owner: "reactjs", name: "reactjs.org" },
  });

  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  
  return (
    <div className={styles.container}>
      <h2>Hello World</h2>
    </div>
  );
};

export default Home;
