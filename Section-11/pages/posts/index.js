import AllPosts from "../../components/posts/all-posts";

import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  const { posts } = props;
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
