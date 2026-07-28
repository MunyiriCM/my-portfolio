import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getAllPosts } from "@/sanity/queries";
import { Post } from "@/sanity/types";

export const metadata = {
  title: "Blog",
  description: "Articles and write-ups by Mark Ciira on cybersecurity, software development, and IT.",
};

export const revalidate = 60;

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts: Post[] = await getAllPosts();

  return (
    <div style={{ maxWidth: "896px", margin: "0 auto", padding: "120px 24px 80px" }}>

      <Reveal>
        <section style={{ marginBottom: "64px" }}>
          <h1 style={{ color: "#F9FAFB", fontSize: "2.5rem", fontWeight: "700", marginBottom: "16px" }}>Blog</h1>
          <p style={{ color: "#9CA3AF", fontSize: "16px", lineHeight: "1.8", maxWidth: "600px" }}>
            I write about cybersecurity, software development, and things I learn on the job. Practical articles from real experience.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["All", "Cybersecurity", "SOC", "Django", "Python", "Certifications"].map((tag) => (
              <span key={tag} className="hover-tag" style={{ fontSize: "12px", backgroundColor: "#1F2937", color: "#9CA3AF", padding: "6px 14px", borderRadius: "20px", cursor: "pointer", border: "1px solid #374151" }}>
                {tag}
              </span>
            ))}
          </div>
        </section>
      </Reveal>

      <section>
        {posts.length === 0 ? (
          <Reveal>
            <div style={{ border: "1px solid #374151", borderRadius: "12px", padding: "24px", backgroundColor: "#1F2937" }}>
              <p style={{ color: "#6B7280", fontSize: "14px" }}>No posts yet. Check back soon.</p>
            </div>
          </Reveal>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {posts.map((post, i) => (
              <Reveal key={post._id} delay={i * 80}>
                <Link href={`/blog/${post.slug.current}`} style={{ textDecoration: "none" }}>
                  <div className="hover-card" style={{ border: "1px solid #374151", borderRadius: "12px", padding: "24px", backgroundColor: "#1F2937" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <span style={{ color: "#6B7280", fontSize: "13px" }}>{formatDate(post.publishedAt)}</span>
                      {post.readTime && (
                        <>
                          <span style={{ color: "#374151" }}>·</span>
                          <span style={{ color: "#6B7280", fontSize: "13px" }}>{post.readTime}</span>
                        </>
                      )}
                    </div>
                    <h2 style={{ color: "#F9FAFB", fontSize: "1.1rem", fontWeight: "600", marginBottom: "8px", lineHeight: "1.5" }}>{post.title}</h2>
                    {post.excerpt && (
                      <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>{post.excerpt}</p>
                    )}
                    {post.tags && post.tags.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {post.tags.map((tag) => (
                          <span key={tag} className="hover-tag" style={{ fontSize: "12px", backgroundColor: "#374151", color: "#2DD4BF", padding: "4px 12px", borderRadius: "20px" }}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}