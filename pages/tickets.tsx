import ContentWrapper from "../components/ContentWrapper";
import Layout from "../components/Layout";
import TicketsMdx from "../content/tickets.mdx";

export default function Tickets() {
  return (
    <Layout>
      <ContentWrapper>
        <TicketsMdx />
      </ContentWrapper>
    </Layout>
  );
}
