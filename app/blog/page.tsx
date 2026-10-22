import Reveal from "@/components/Reveal";
import BlogList from "@/components/BlogList";
import { getAllPosts } from "@/sanity/queries";
import { Post } from "@/sanity/types";

export const metadata = {
  title: "Blog",
  description: "Articles and write-ups by Mark Ciira on cybersecurity, software development and training.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts: Post[] = await getAllPosts();

  return (
    <div style={{ maxWidth: "896px", margin: "0 auto", padding: "120px 24px 80px" }}>

      <Reveal>
        <section style={{ marginBottom: "64px" }}>
          <h1 style={{ color: "#1C1917", fontSize: "2.6rem", fontWeight: "700", marginBottom: "18px" }}>Blog</h1>
          <p style={{ color: "#44403C", fontSize: "18px", lineHeight: "1.8", maxWidth: "620px" }}>
            I write about cybersecurity, software development and teaching. Practical articles from real experience.
          </p>
        </section>
      </Reveal>

      <BlogList posts={posts} />

    </div>
  );
}