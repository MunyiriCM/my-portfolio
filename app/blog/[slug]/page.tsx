"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import { getPostBySlug } from "@/sanity/queries";
import { Post } from "@/sanity/types";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post: Post = use(getPostBySlug(slug));
  const [copied, setCopied] = useState(false);

  if (!post) notFound();

  const postUrl = `https://markciira.com/blog/${post.slug.current}`;
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(post.title);

  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function handleCopy() {
    navigator.clipboard.writeText(postUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

  return (
    <div style={{ maxWidth: "672px", margin: "0 auto", padding: "120px 24px 80px" }}>

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

      {/* Share section */}
      <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #374151" }}>
        <p style={{ color: "#F9FAFB", fontSize: "15px", fontWeight: "600", marginBottom: "6px" }}>Share this post</p>
        <p style={{ color: "#6B7280", fontSize: "13px", marginBottom: "20px" }}>
          Found this useful? Share it with your network.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#0A66C2", color: "#fff", padding: "10px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            LinkedIn ↗
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#000000", color: "#fff", padding: "10px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            X / Twitter ↗
          </a>
          <a href={`https://wa.me/?text=${encodeURIComponent(post.title + " — " + postUrl)}`} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#25D366", color: "#fff", padding: "10px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            WhatsApp ↗
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#1877F2", color: "#fff", padding: "10px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            Facebook ↗
          </a>
          <button onClick={handleCopy} style={{ backgroundColor: copied ? "#0F766E" : "#374151", color: "#F9FAFB", padding: "10px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", border: "none", cursor: "pointer", transition: "background-color 0.2s" }}>
            {copied ? "Copied! ✓" : "Copy link"}
          </button>
        </div>

        {/* Link preview box */}
        <div style={{ backgroundColor: "#1F2937", border: "1px solid #374151", borderRadius: "10px", padding: "14px 16px", marginBottom: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <span style={{ color: "#6B7280", fontSize: "12px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{postUrl}</span>
          <button onClick={handleCopy} style={{ backgroundColor: "#374151", color: "#2DD4BF", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "500", border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <Link href="/blog" style={{ color: "#6B7280", fontSize: "14px", textDecoration: "none" }}>
          ← Back to all posts
        </Link>
      </div>

    </div>
  );
}