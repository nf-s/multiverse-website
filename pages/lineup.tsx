import ContentWrapper from "../components/ContentWrapper";
import Layout from "../components/Layout";
import LineupIntroMdx from "../content/lineup-intro.mdx";

export default function Lineup() {
  return (
    <Layout>
      <ContentWrapper>
        <LineupIntroMdx />
      </ContentWrapper>
    </Layout>
  );
}
