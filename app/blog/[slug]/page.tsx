import Link from "next/link";
import { notFound } from "next/navigation";

const posts = [
  {
    slug: "getting-started-with-isc2-cc",
    title: "How I prepared for the ISC2 Certified in Cybersecurity exam",
    date: "2024-03-01",
    tags: ["Cybersecurity", "Certifications", "ISC2"],
    readTime: "5 min read",
    content: `This is a placeholder for the full blog post content. Once Sanity CMS is connected, the real content will load here automatically.

      The ISC2 CC exam covers five domains: Security Principles, Business Continuity and Disaster Recovery, Access Controls, Network Security, and Security Operations. I spent about six weeks preparing using the official ISC2 study materials and practice questions.`,
  },
  {
    slug: "kaspersky-edr-deployment",
    title: "Deploying Kaspersky EDR in a banking environment",
    date: "2024-02-15",
    tags: ["SOC", "Endpoint Security", "Kaspersky"],
    readTime: "7 min read",
    content: `This is a placeholder for the full blog post content. Once Sanity CMS is connected, the real content will load here automatically.

      Managing endpoint protection at scale in a banking environment comes with unique challenges — performance impact on production servers, exclusion policies, and balancing security with operational needs.`,
  },
  {
    slug: "django-secure-apps",
    title: "Building secure web applications with Django",
    date: "2024-01-20",
    tags: ["Django", "Python", "Security"],
    readTime: "6 min read",
    content: `This is a placeholder for the full blog post content. Once Sanity CMS is connected, the real content will load here automatically.

      Django comes with a lot of security built in — CSRF protection, SQL injection prevention, and XSS protection. But there are still important practices you need to apply yourself.`,
  },
];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div style={{ maxWidth: "672px", margin: "0 auto", padding: "80px 24px" }}>

      <Link href="/blog" style={{ color: "#6B7280", fontSize: "14px", textDecoration: "none", display: "inline-block", marginBottom: "40px" }}>
        ← Back to blog
      </Link>

      <header style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <span style={{ color: "#6B7280", fontSize: "13px" }}>{formatDate(post.date)}</span>
          <span style={{ color: "#374151" }}>·</span>
          <span style={{ color: "#6B7280", fontSize: "13px" }}>{post.readTime}</span>
        </div>
        <h1 style={{ color: "#F9FAFB", fontSize: "2rem", fontWeight: "700", marginBottom: "16px", lineHeight: "1.4" }}>{post.title}</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {post.tags.map((tag) => (
            <span key={tag} style={{ fontSize: "12px", backgroundColor: "#374151", color: "#2DD4BF", padding: "4px 12px", borderRadius: "20px" }}>{tag}</span>
          ))}
        </div>
      </header>

      <article>
        {post.content.split("\n").filter((line) => line.trim()).map((paragraph, i) => (
          <p key={i} style={{ color: "#9CA3AF", fontSize: "16px", lineHeight: "1.8", marginBottom: "16px" }}>
            {paragraph.trim()}
          </p>
        ))}
      </article>

      <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #374151" }}>
        <Link href="/blog" style={{ color: "#6B7280", fontSize: "14px", textDecoration: "none" }}>
          ← Back to all posts
        </Link>
      </div>

    </div>
  );
}