import Page from "../layouts/page";
import PostList from "../components/postList";
import withApollo from "../lib/withApollo";

export default withApollo(({ url: { query: { category } } }) =>
  <Page title={`writing about ${category}`}>
    <h2>Posts in {category}</h2>
    <PostList category={category} />
  </Page>
);
