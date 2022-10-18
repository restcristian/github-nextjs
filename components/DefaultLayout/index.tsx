import React from "react";
import Head from "next/head";
interface Props {
  children: JSX.Element
}

export const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React GithubNextJS</title>
      </Head>
        <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
