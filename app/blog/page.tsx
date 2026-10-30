import type { Metadata } from "next";
import BlogIndex from "../../components/BlogIndex";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="site-main">
      <h1 className="page-title">Blog Posts</h1>
      <BlogIndex />
    </div>
  );
}
