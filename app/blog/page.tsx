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
          <h1 style={{ color: "#1C1917", fontSize: "2.6rem", fontWeight: "700", marginBottom: "18px" }}>Blog</h1>
          <p style={{ color: "#44403C", fontSize: "18px", lineHeight: "1.8", maxWidth: "620px" }}>
            I write about cybersecurity, software development, and things I learn on the job. Practical articles from real experience.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "44px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["All", "Cybersecurity", "SOC", "Django", "Python", "Certifications"].map((tag) => (
              <span key={tag} className="hover-tag" style={{ fontSize: "13px", backgroundColor: "#FFFFFF", color: "#44403C", padding: "7px 15px", borderRadius: "20px", cursor: "pointer", border: "1px solid #E8E4DD" }}>
                {tag}
              </span>
            ))}
          </div>
        </section>
      </Reveal>

      <section>
        {posts.length === 0 ? (
          <Reveal>
            <div style={{ border: "1px solid #E8E4DD", borderRadius: "12px", padding: "26px", backgroundColor: "#FFFFFF" }}>
              <p style={{ color: "#78716C", fontSize: "15px" }}>No posts yet. Check back soon.</p>
            </div>
          </Reveal>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {posts.map((post, i) => (
              <Reveal key={post._id} delay={i * 80}>
                <Link href={`/blog/${post.slug.current}`} style={{ textDecoration: "none" }}>
                  <div className="hover-card" style={{ border: "1px solid #E8E4DD", borderRadius: "12px", padding: "26px", backgroundColor: "#FFFFFF" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                      <span style={{ color: "#78716C", fontSize: "14px" }}>{formatDate(post.publishedAt)}</span>
                      {post.readTime && (
                        <>
                          <span style={{ color: "#D6D2CA" }}>·</span>
                          <span style={{ color: "#78716C", fontSize: "14px" }}>{post.readTime}</span>
                        </>
                      )}
                    </div>
                    <h2 style={{ color: "#1C1917", fontSize: "1.2rem", fontWeight: "600", marginBottom: "10px", lineHeight: "1.5" }}>{post.title}</h2>
                    {post.excerpt && (
                      <p style={{ color: "#44403C", fontSize: "15px", lineHeight: "1.75", marginBottom: "18px" }}>{post.excerpt}</p>
                    )}
                    {post.tags && post.tags.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {post.tags.map((tag) => (
                          <span key={tag} className="hover-tag" style={{ fontSize: "13px", backgroundColor: "#F7F5F2", color: "#0F766E", padding: "4px 13px", borderRadius: "20px", border: "1px solid #E8E4DD" }}>{tag}</span>
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