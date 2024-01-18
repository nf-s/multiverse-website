import Head from "next/head";
import ContentWrapper from "../components/ContentWrapper";
import Layout from "../components/Layout";
import SetTimesMdx from "../content/set-times-intro.mdx";

export default function Lineup() {
  return (
    <Layout>
      <Head>
        <title>Multiverse 2024 | Set Times</title>
      </Head>
      <ContentWrapper>
        <SetTimesMdx />

        <div className="flex flex-wrap">
          <div>
            <h2>Main Stage</h2>
            <iframe
              width="404px"
              height="3446px"
              style={{
                margin: "32px 32px 0 0",
                overflow: "hidden",
                background: "none !important",
                maxWidth: "404px",
                display: "inline",
              }}
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRW18YlU8ZiYNnZ2TvyxOCVJO5cX1o-FhvcHkrW6NT70Y3zSNfVT6bsN-Q-wpV_XQq-PamhR7_K_bry/pubhtml?gid=1552241499&amp;single=true&amp;widget=true&amp;headers=false"
            ></iframe>
          </div>
          <div>
            <h2>Chillout Stage</h2>
            <iframe
              width="404px"
              height="3446px"
              style={{
                margin: "32px 0 0 0",
                overflow: "hidden",
                background: "none !important",
                maxWidth: "404px",
                display: "inline",
              }}
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRW18YlU8ZiYNnZ2TvyxOCVJO5cX1o-FhvcHkrW6NT70Y3zSNfVT6bsN-Q-wpV_XQq-PamhR7_K_bry/pubhtml?gid=2006719255&amp;single=true&amp;widget=true&amp;headers=false"
            ></iframe>
          </div>
        </div>
      </ContentWrapper>
    </Layout>
  );
}
