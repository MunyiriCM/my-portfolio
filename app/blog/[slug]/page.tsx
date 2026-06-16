import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/sanity/queries";
import { Post } from "@/sanity/types";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts: Post[] = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug.current }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: Post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title };
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
      if (block.style === "h2") return <h2 key={i} style={{ color: "#F9FAFB", fontSize: "1.5rem", fontWeight: "600", margin: "32px 0 12px" }}>{text}</h2>;
      if (block.style === "h3") return <h3 key={i} style={{ color: "#F9FAFB", fontSize: "1.2rem", fontWeight: "600", margin: "24px 0 8px" }}>{text}</h3>;
      if (!text) return <br key={i} />;
      return <p key={i} style={{ color: "#9CA3AF", fontSize: "16px", lineHeight: "1.9", marginBottom: "16px" }}>{text}</p>;
    }
    return null;
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post: Post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div style={{ maxWidth: "672px", margin: "0 auto", padding: "80px 24px" }}>

      <Link href="/blog" style={{ color: "#6B7280", fontSize: "14px", textDecoration: "none", display: "inline-block", marginBottom: "40px" }}>
        ← Back to blog
      </Link>

      <header style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <span style={{ color: "#6B7280", fontSize: "13px" }}>{formatDate(post.publishedAt)}</span>
          {post.readTime && (
            <>
              <span style={{ color: "#374151" }}>·</span>
              <span style={{ color: "#6B7280", fontSize: "13px" }}>{post.readTime}</span>
            </>
          )}
        </div>
        <h1 style={{ color: "#F9FAFB", fontSize: "2rem", fontWeight: "700", marginBottom: "16px", lineHeight: "1.4" }}>{post.title}</h1>
        {post.excerpt && (
          <p style={{ color: "#6B7280", fontSize: "16px", lineHeight: "1.7", marginBottom: "16px", fontStyle: "italic" }}>{post.excerpt}</p>
        )}
        {post.tags && post.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {post.tags.map((tag) => (
              <span key={tag} style={{ fontSize: "12px", backgroundColor: "#374151", color: "#2DD4BF", padding: "4px 12px", borderRadius: "20px" }}>{tag}</span>
            ))}
          </div>
        )}
      </header>

      <article>
        {post.body ? renderBody(post.body) : (
          <p style={{ color: "#9CA3AF", fontSize: "16px", lineHeight: "1.9" }}>No content yet.</p>
        )}
      </article>

      <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #374151" }}>
        <Link href="/blog" style={{ color: "#6B7280", fontSize: "14px", textDecoration: "none" }}>
          ← Back to all posts
        </Link>
      </div>

    </div>
  );
}