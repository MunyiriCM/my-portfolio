"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

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
          ctx.fillStyle = `rgba(20,184,166,${s.opacity * fade})`;
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
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const eyebrowStyle = {
  color: "#2DD4BF",
  fontSize: "12px",
  fontWeight: "600" as const,
  textTransform: "uppercase" as const,
  letterSpacing: "0.08em",
  marginBottom: "12px",
};

const steps = [
  { n: "01", title: "Monitor and detect", desc: "Watch 1,500+ endpoints across the network for anomalies, alerts, and threat signatures in real time." },
  { n: "02", title: "Investigate and triage", desc: "Pull logs, correlate events, and determine whether an alert is noise or a genuine incident that needs escalation." },
  { n: "03", title: "Contain and respond", desc: "Isolate affected systems, apply fixes, and coordinate with the wider team to stop an incident from spreading." },
  { n: "04", title: "Document and improve", desc: "Write up the incident, update detection rules, and feed lessons back into the security posture." },
];

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 3)))
      .catch(() => setPosts([]));
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>

      <div style={{ position: "relative", overflow: "hidden", minHeight: "560px", display: "flex", alignItems: "center" }}>
        <BinaryBackground />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "896px", margin: "0 auto", padding: "160px 24px 100px", width: "100%", boxSizing: "border-box" }}>
          <p style={eyebrowStyle}>Based in Nairobi, Kenya</p>
          <h1 style={{ color: "#F9FAFB", fontSize: "3rem", fontWeight: "700", marginBottom: "24px", lineHeight: "1.15", maxWidth: "700px" }}>
            Hi, I'm Mark Ciira
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: "1.15rem", marginBottom: "36px", maxWidth: "560px", lineHeight: "1.8" }}>
            Cybersecurity engineer and software developer. I protect systems, build web applications, and write about what I learn along the way.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            <Link href="/projects" style={{ backgroundColor: "#14B8A6", color: "#042C24", padding: "13px 26px", borderRadius: "8px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
              View my work
            </Link>
            <Link href="/contact" style={{ border: "1px solid #14B8A6", color: "#2DD4BF", padding: "13px 26px", borderRadius: "8px", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "896px", margin: "0 auto", padding: "0 24px 100px" }}>

        <Reveal>
          <section style={{ marginBottom: "120px", paddingTop: "100px" }}>
            <p style={eyebrowStyle}>What I do</p>
            <h2 style={{ color: "#F9FAFB", fontSize: "2rem", fontWeight: "600", marginBottom: "48px", maxWidth: "600px", lineHeight: "1.3" }}>
              Three areas I work across, every single week
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "28px" }}>
              <Reveal delay={0}>
                <div className="hover-card" style={{ border: "1px solid #374151", borderRadius: "12px", padding: "28px", backgroundColor: "rgba(31,41,55,0.85)" }}>
                  <h3 style={{ color: "#2DD4BF", fontWeight: "600", marginBottom: "10px", fontSize: "16px" }}>Cybersecurity</h3>
                  <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.8" }}>SOC monitoring, endpoint protection, network security, and incident response. Currently securing 1,500+ endpoints at Family Bank.</p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="hover-card" style={{ border: "1px solid #374151", borderRadius: "12px", padding: "28px", backgroundColor: "rgba(31,41,55,0.85)" }}>
                  <h3 style={{ color: "#2DD4BF", fontWeight: "600", marginBottom: "10px", fontSize: "16px" }}>Software development</h3>
                  <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.8" }}>Full-stack web development using Python, Django, React, and Next.js. I build secure, practical applications.</p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="hover-card" style={{ border: "1px solid #374151", borderRadius: "12px", padding: "28px", backgroundColor: "rgba(31,41,55,0.85)" }}>
                  <h3 style={{ color: "#2DD4BF", fontWeight: "600", marginBottom: "10px", fontSize: "16px" }}>IT support</h3>
                  <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.8" }}>Technical support, infrastructure management, and system administration in enterprise banking environments.</p>
                </div>
              </Reveal>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section style={{ marginBottom: "120px" }}>
            <p style={eyebrowStyle}>How I work</p>
            <h2 style={{ color: "#F9FAFB", fontSize: "2rem", fontWeight: "600", marginBottom: "48px", maxWidth: "600px", lineHeight: "1.3" }}>
              A typical incident, start to finish
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 100}>
                  <div style={{ display: "flex", gap: "24px", padding: "28px 0", borderTop: i === 0 ? "1px solid #374151" : "none", borderBottom: "1px solid #374151" }}>
                    <span style={{ color: "#374151", fontSize: "1.8rem", fontWeight: "700", minWidth: "56px" }}>{step.n}</span>
                    <div>
                      <h3 style={{ color: "#F9FAFB", fontSize: "17px", fontWeight: "600", marginBottom: "8px" }}>{step.title}</h3>
                      <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.8", maxWidth: "520px" }}>{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section style={{ marginBottom: "120px" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px" }}>
              <div>
                <p style={eyebrowStyle}>Writing</p>
                <h2 style={{ color: "#F9FAFB", fontSize: "2rem", fontWeight: "600", lineHeight: "1.3" }}>Recent posts</h2>
              </div>
              <Link href="/blog" className="hover-link" style={{ color: "#9CA3AF", fontSize: "14px", textDecoration: "none" }}>View all →</Link>
            </div>
            {posts.length === 0 ? (
              <div style={{ border: "1px solid #374151", borderRadius: "12px", padding: "28px", backgroundColor: "rgba(31,41,55,0.85)" }}>
                <p style={{ color: "#6B7280", fontSize: "14px" }}>No posts yet. Check back soon.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {posts.map((post, i) => (
                  <Reveal key={post._id} delay={i * 100}>
                    <Link href={`/blog/${post.slug.current}`} style={{ textDecoration: "none" }}>
                      <div className="hover-card" style={{ border: "1px solid #374151", borderRadius: "12px", padding: "28px", backgroundColor: "rgba(31,41,55,0.85)" }}>
                        <p style={{ color: "#6B7280", fontSize: "12px", marginBottom: "10px" }}>{formatDate(post.publishedAt)}</p>
                        <h3 style={{ color: "#F9FAFB", fontWeight: "600", fontSize: "16px", marginBottom: "8px" }}>{post.title}</h3>
                        {post.excerpt && <p style={{ color: "#9CA3AF", fontSize: "13px", lineHeight: "1.7" }}>{post.excerpt}</p>}
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            )}
          </section>
        </Reveal>

        <Reveal>
          <section style={{ backgroundColor: "rgba(31,41,55,0.85)", border: "1px solid #374151", borderRadius: "16px", padding: "56px 48px", textAlign: "center" }}>
            <h2 style={{ color: "#F9FAFB", fontSize: "1.8rem", fontWeight: "600", marginBottom: "14px" }}>Let's work together</h2>
            <p style={{ color: "#9CA3AF", maxWidth: "420px", margin: "0 auto 28px", lineHeight: "1.7" }}>
              Open to cybersecurity roles, freelance web development projects, and technical collaborations.
            </p>
            <Link href="/contact" style={{ backgroundColor: "#14B8A6", color: "#042C24", padding: "13px 26px", borderRadius: "8px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
              Contact me
            </Link>
          </section>
        </Reveal>

      </div>
    </div>
  );
}