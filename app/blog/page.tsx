import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Articles and write-ups by Mark Ciira on cybersecurity, software development, and IT.",
};

const posts = [
  {
    slug: "getting-started-with-isc2-cc",
    title: "How I prepared for the ISC2 Certified in Cybersecurity exam",
    description: "A breakdown of my study approach, resources I used, and tips for anyone preparing for the ISC2 CC certification.",
    date: "2024-03-01",
    tags: ["Cybersecurity", "Certifications", "ISC2"],
    readTime: "5 min read",
  },
  {
    slug: "kaspersky-edr-deployment",
    title: "Deploying Kaspersky EDR in a banking environment",
    description: "Lessons learned from managing endpoint protection across 1,500+ devices in a live banking environment.",
    date: "2024-02-15",
    tags: ["SOC", "Endpoint Security", "Kaspersky"],
    readTime: "7 min read",
  },
  {
    slug: "django-secure-apps",
    title: "Building secure web applications with Django",
    description: "Key security practices I apply when building Django applications — from authentication to input validation.",
    date: "2024-01-20",
    tags: ["Django", "Python", "Security"],
    readTime: "6 min read",
  },
];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div style={{ maxWidth: "896px", margin: "0 auto", padding: "80px 24px" }}>

      <section style={{ marginBottom: "64px" }}>
        <h1 style={{ color: "#F9FAFB", fontSize: "2.5rem", fontWeight: "700", marginBottom: "16px" }}>Blog</h1>
        <p style={{ color: "#9CA3AF", fontSize: "16px", lineHeight: "1.8", maxWidth: "600px" }}>
          I write about cybersecurity, software development, and things I learn on the job. Practical articles from real experience.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["All", "Cybersecurity", "SOC", "Django", "Python", "Certifications"].map((tag) => (
            <span key={tag} style={{ fontSize: "12px", backgroundColor: "#1F2937", color: "#9CA3AF", padding: "6px 14px", borderRadius: "20px", cursor: "pointer", border: "1px solid #374151" }}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ border: "1px solid #374151", borderRadius: "12px", padding: "24px", backgroundColor: "#1F2937", cursor: "pointer" }}>

                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <span style={{ color: "#6B7280", fontSize: "13px" }}>{formatDate(post.date)}</span>
                  <span style={{ color: "#374151" }}>·</span>
                  <span style={{ color: "#6B7280", fontSize: "13px" }}>{post.readTime}</span>
                </div>

                <h2 style={{ color: "#F9FAFB", fontSize: "1.1rem", fontWeight: "600", marginBottom: "8px", lineHeight: "1.5" }}>{post.title}</h2>

                <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>{post.description}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {post.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: "12px", backgroundColor: "#374151", color: "#2DD4BF", padding: "4px 12px", borderRadius: "20px" }}>{tag}</span>
                  ))}
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}