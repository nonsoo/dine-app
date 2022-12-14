import { FC } from "react";
import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

const HeadMeta: FC<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadMeta;
