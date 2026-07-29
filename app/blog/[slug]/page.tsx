import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/sanity/queries";
import { Post } from "@/sanity/types";
import ShareButtons from "@/components/ShareButtons";
import Reveal from "@/components/Reveal";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts: Post[] = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug.current }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: Post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt ?? "",
    openGraph: {
      title: post.title,
      description: post.excerpt ?? "",
      url: `https://markciira.com/blog/${post.slug.current}`,
      type: "article",
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderBody(body: any[]) {
  return body.map((block, i) => {
    if (block._type === "block") {
      const text = block.children?.map((child: any) => child.text).join("") ?? "";
      if (block.style === "h2") return <h2 key={i} style={{ color: "#1C1917", fontSize: "1.6rem", fontWeight: "600", margin: "34px 0 14px" }}>{text}</h2>;
      if (block.style === "h3") return <h3 key={i} style={{ color: "#1C1917", fontSize: "1.3rem", fontWeight: "600", margin: "26px 0 10px" }}>{text}</h3>;
      if (!text) return <br key={i} />;
      return <p key={i} style={{ color: "#2D2A26", fontSize: "18px", lineHeight: "1.95", marginBottom: "18px" }}>{text}</p>;
    }
    return null;
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: Post = await getPostBySlug(slug);
  if (!post) notFound();

  const postUrl = `https://markciira.com/blog/${post.slug.current}`;

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "120px 24px 80px" }}>

      <Link href="/blog" style={{ color: "#78716C", fontSize: "15px", textDecoration: "none", display: "inline-block", marginBottom: "40px" }}>
        ← Back to blog
      </Link>

      <Reveal>
        <header style={{ marginBottom: "44px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
            <span style={{ color: "#78716C", fontSize: "14px" }}>{formatDate(post.publishedAt)}</span>
            {post.readTime && (
              <>
                <span style={{ color: "#D6D2CA" }}>·</span>
                <span style={{ color: "#78716C", fontSize: "14px" }}>{post.readTime}</span>
              </>
            )}
          </div>
          <h1 style={{ color: "#1C1917", fontSize: "2.3rem", fontWeight: "700", marginBottom: "18px", lineHeight: "1.35" }}>{post.title}</h1>
          {post.excerpt && (
            <p style={{ color: "#78716C", fontSize: "18px", lineHeight: "1.75", marginBottom: "18px", fontStyle: "italic" }}>{post.excerpt}</p>
          )}
          {post.tags && post.tags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {post.tags.map((tag) => (
                <span key={tag} style={{ fontSize: "13px", backgroundColor: "#F7F5F2", color: "#0F766E", padding: "4px 13px", borderRadius: "20px", border: "1px solid #E8E4DD" }}>{tag}</span>
              ))}
            </div>
          )}
        </header>
      </Reveal>

      <Reveal>
        <article>
          {post.body ? renderBody(post.body) : (
            <p style={{ color: "#2D2A26", fontSize: "18px", lineHeight: "1.95" }}>No content yet.</p>
          )}
        </article>
      </Reveal>

      <ShareButtons url={postUrl} title={post.title} slug={post.slug.current} />

      <div style={{ paddingTop: "32px" }}>
        <Link href="/blog" style={{ color: "#78716C", fontSize: "15px", textDecoration: "none" }}>
          ← Back to all posts
        </Link>
      </div>

    </div>
  );
}