import Head from "next/head";
import ContentWrapper from "../components/ContentWrapper";
import Layout from "../components/Layout";
import LineupIntroMdx from "../content/lineup-intro.mdx";

export default function Lineup() {
  return (
    <Layout>
      <Head>
        <title>Multiverse 2025 | Lineup</title>
      </Head>
      <ContentWrapper>
        <LineupIntroMdx />
      </ContentWrapper>
    </Layout>
  );
}
