import React from "react";
import Head from "next/head";

interface HeadProps {
  title?: string;
}

export const BrowserHead: React.FC<HeadProps> = ({ title }) => {
  return (
    <Head>
      {!title ? (
        <title>What to do?</title>
      ) : (
        <title>What to do? - {title}</title>
      )}
    </Head>
  );
};
