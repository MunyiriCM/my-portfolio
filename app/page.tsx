"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function BinaryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.parentElement?.offsetWidth ?? window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight ?? window.innerHeight;
    }
    resize();

    function buildStreams() {
      if (!canvas) return [];
      const colW = 20;
      const cols = Math.floor(canvas.width / colW);
      return Array.from({ length: cols }, (_, i) => ({
        x: i * colW + 4,
        y: Math.random() * canvas.height,
        speed: 0.3 + Math.random() * 0.5,
        opacity: 0.04 + Math.random() * 0.12,
        chars: Array.from({ length: Math.floor(4 + Math.random() * 10) }, () =>
          Math.random() > 0.5 ? "1" : "0"
        ),
      }));
    }

    let streams = buildStreams();

    function onResize() {
      resize();
      streams = buildStreams();
    }
    window.addEventListener("resize", onResize);

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "#111827";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "12px monospace";

      streams.forEach((s) => {
        s.y -= s.speed;
        if (s.y + s.chars.length * 16 < 0) {
          s.y = canvas.height + Math.random() * 200;
          s.opacity = 0.04 + Math.random() * 0.12;
          s.speed = 0.3 + Math.random() * 0.5;
          s.chars = Array.from(
            { length: Math.floor(4 + Math.random() * 10) },
            () => (Math.random() > 0.5 ? "1" : "0")
          );
        }
        s.chars.forEach((ch, ci) => {
          const fade = 1 - ci / s.chars.length;
          ctx.fillStyle = `rgba(45,212,191,${s.opacity * fade})`;
          ctx.fillText(ch, s.x, s.y + ci * 16);
        });
      });

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
    />
  );
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  tags?: string[];
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 3)))
      .catch(() => setPosts([]));
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <BinaryBackground />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "896px", margin: "0 auto", padding: "120px 24px 80px" }}>

        <section style={{ marginBottom: "80px" }}>
          <p style={{ color: "#2DD4BF", fontSize: "14px", marginBottom: "12px" }}>Based in Nairobi, Kenya</p>
          <h1 style={{ color: "#F9FAFB", fontSize: "2.5rem", fontWeight: "700", marginBottom: "24px", lineHeight: "1.2" }}>
            Hi, I'm Mark Ciira
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: "1.1rem", marginBottom: "32px", maxWidth: "600px", lineHeight: "1.8" }}>
            Cybersecurity engineer and software developer. I protect systems, build web applications, and write about what I learn along the way.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            <Link href="/projects" style={{ backgroundColor: "#0F766E", color: "#F9FAFB", padding: "12px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>
              View my work
            </Link>
            <Link href="/contact" style={{ border: "1px solid #0F766E", color: "#2DD4BF", padding: "12px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>
              Get in touch
            </Link>
          </div>
        </section>

        <section style={{ marginBottom: "80px" }}>
          <h2 style={{ color: "#F9FAFB", fontSize: "1.8rem", fontWeight: "600", marginBottom: "32px" }}>What I do</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            <div className="hover-card" style={{ border: "1px solid #374151", borderRadius: "12px", padding: "24px", backgroundColor: "rgba(31,41,55,0.85)" }}>
              <h3 style={{ color: "#2DD4BF", fontWeight: "600", marginBottom: "8px" }}>Cybersecurity</h3>
              <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.7" }}>SOC monitoring, endpoint protection, network security, and incident response. Currently securing 1,500+ endpoints at Family Bank.</p>
            </div>
            <div className="hover-card" style={{ border: "1px solid #374151", borderRadius: "12px", padding: "24px", backgroundColor: "rgba(31,41,55,0.85)" }}>
              <h3 style={{ color: "#2DD4BF", fontWeight: "600", marginBottom: "8px" }}>Software Development</h3>
              <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.7" }}>Full-stack web development using Python, Django, React, and Next.js. I build secure, practical applications.</p>
            </div>
            <div className="hover-card" style={{ border: "1px solid #374151", borderRadius: "12px", padding: "24px", backgroundColor: "rgba(31,41,55,0.85)" }}>
              <h3 style={{ color: "#2DD4BF", fontWeight: "600", marginBottom: "8px" }}>IT Support</h3>
              <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.7" }}>Technical support, infrastructure management, and system administration in enterprise banking environments.</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "80px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
            <h2 style={{ color: "#F9FAFB", fontSize: "1.8rem", fontWeight: "600" }}>Recent posts</h2>
            <Link href="/blog" className="hover-link" style={{ color: "#9CA3AF", fontSize: "14px", textDecoration: "none" }}>View all →</Link>
          </div>
          {posts.length === 0 ? (
            <div style={{ border: "1px solid #374151", borderRadius: "12px", padding: "24px", backgroundColor: "rgba(31,41,55,0.85)" }}>
              <p style={{ color: "#6B7280", fontSize: "14px" }}>No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {posts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`} style={{ textDecoration: "none" }}>
                  <div className="hover-card" style={{ border: "1px solid #374151", borderRadius: "12px", padding: "24px", backgroundColor: "rgba(31,41,55,0.85)" }}>
                    <p style={{ color: "#6B7280", fontSize: "12px", marginBottom: "8px" }}>{formatDate(post.publishedAt)}</p>
                    <h3 style={{ color: "#F9FAFB", fontWeight: "600", fontSize: "15px", marginBottom: "6px" }}>{post.title}</h3>
                    {post.excerpt && <p style={{ color: "#9CA3AF", fontSize: "13px", lineHeight: "1.6" }}>{post.excerpt}</p>}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        <section style={{ backgroundColor: "rgba(31,41,55,0.85)", border: "1px solid #374151", borderRadius: "16px", padding: "48px", textAlign: "center" }}>
          <h2 style={{ color: "#F9FAFB", fontSize: "1.8rem", fontWeight: "600", marginBottom: "12px" }}>Let's work together</h2>
          <p style={{ color: "#9CA3AF", maxWidth: "400px", margin: "0 auto 24px" }}>
            Open to cybersecurity roles, freelance web development projects, and technical collaborations.
          </p>
          <Link href="/contact" style={{ backgroundColor: "#0F766E", color: "#F9FAFB", padding: "12px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>
            Contact me
          </Link>
        </section>

      </div>
    </div>
  );
}