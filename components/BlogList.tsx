"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  readTime?: string;
  tags?: string[];
  excerpt?: string;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function label(tag: string): string {
  const t = tag.trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState("All");

  const tagMap = new Map<string, string>();
  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      const key = tag.trim().toLowerCase();
      if (key && !tagMap.has(key)) tagMap.set(key, label(tag));
    });
  });
  const tags = ["All", ...Array.from(tagMap.values())];

  const visible =
    active === "All"
      ? posts
      : posts.filter((post) =>
          post.tags?.some((tag) => tag.trim().toLowerCase() === active.toLowerCase())
        );

  return (
    <>
      {tags.length > 1 && (
        <section style={{ marginBottom: "44px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {tags.map((tag) => {
              const isActive = tag === active;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActive(tag)}
                  style={{
                    fontSize: "13px",
                    backgroundColor: isActive ? "#0F766E" : "#FFFFFF",
                    color: isActive ? "#FFFFFF" : "#44403C",
                    padding: "7px 15px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    border: "1px solid " + (isActive ? "#0F766E" : "#E8E4DD"),
                  }}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </section>
      )}

      <section>
        {visible.length === 0 ? (
          <div style={{ border: "1px solid #E8E4DD", borderRadius: "12px", padding: "26px", backgroundColor: "#FFFFFF" }}>
            <p style={{ color: "#78716C", fontSize: "15px" }}>No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {visible.map((post, i) => (
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
                          <span key={tag} style={{ fontSize: "13px", backgroundColor: "#F7F5F2", color: "#0F766E", padding: "4px 13px", borderRadius: "20px", border: "1px solid #E8E4DD" }}>{label(tag)}</span>
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
    </>
  );
}