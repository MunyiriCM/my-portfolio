import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      <section className="mb-20">
        <p style={{ color: "#2DD4BF", fontSize: "14px", marginBottom: "12px" }}>Based in Nairobi, Kenya</p>
        <h1 style={{ color: "#F9FAFB", fontSize: "2.5rem", fontWeight: "700", marginBottom: "24px" }}>
          Hi, I'm Mark Ciira
        </h1>
        <p style={{ color: "#9CA3AF", fontSize: "1.2rem", marginBottom: "32px", maxWidth: "600px", lineHeight: "1.7" }}>
          Cybersecurity engineer and software developer. I protect systems,
          build web applications, and write about what I learn along the way.
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

      <section className="mb-20">
        <h2 style={{ color: "#F9FAFB", fontSize: "1.8rem", fontWeight: "600", marginBottom: "32px" }}>What I do</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
          <div style={{ border: "1px solid #374151", borderRadius: "12px", padding: "24px", backgroundColor: "#1F2937" }}>
            <h3 style={{ color: "#2DD4BF", fontWeight: "600", marginBottom: "8px" }}>Cybersecurity</h3>
            <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.6" }}>
              SOC monitoring, endpoint protection, network security, and incident response. Currently securing 1,500+ endpoints at Family Bank.
            </p>
          </div>
          <div style={{ border: "1px solid #374151", borderRadius: "12px", padding: "24px", backgroundColor: "#1F2937" }}>
            <h3 style={{ color: "#2DD4BF", fontWeight: "600", marginBottom: "8px" }}>Software Development</h3>
            <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.6" }}>
              Full-stack web development using Python, Django, React, and Next.js. I build secure, practical applications.
            </p>
          </div>
          <div style={{ border: "1px solid #374151", borderRadius: "12px", padding: "24px", backgroundColor: "#1F2937" }}>
            <h3 style={{ color: "#2DD4BF", fontWeight: "600", marginBottom: "8px" }}>IT Support</h3>
            <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.6" }}>
              Technical support, infrastructure management, and system administration in enterprise banking environments.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px" }}>
          <h2 style={{ color: "#F9FAFB", fontSize: "1.8rem", fontWeight: "600" }}>Recent posts</h2>
          <Link href="/blog" style={{ color: "#9CA3AF", fontSize: "14px", textDecoration: "none" }}>View all →</Link>
        </div>
        <div style={{ border: "1px solid #374151", borderRadius: "12px", padding: "24px", backgroundColor: "#1F2937" }}>
          <p style={{ color: "#6B7280", fontSize: "12px", marginBottom: "8px" }}>Coming soon</p>
          <h3 style={{ color: "#6B7280", fontWeight: "500" }}>Blog posts will appear here once connected to Sanity CMS</h3>
        </div>
      </section>

      <section style={{ backgroundColor: "#1F2937", border: "1px solid #374151", borderRadius: "16px", padding: "48px", textAlign: "center" }}>
        <h2 style={{ color: "#F9FAFB", fontSize: "1.8rem", fontWeight: "600", marginBottom: "12px" }}>Let's work together</h2>
        <p style={{ color: "#9CA3AF", marginBottom: "24px", maxWidth: "400px", margin: "0 auto 24px" }}>
          Open to cybersecurity roles, freelance web development projects, and technical collaborations.
        </p>
        <Link href="/contact" style={{ backgroundColor: "#0F766E", color: "#F9FAFB", padding: "12px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>
          Contact me
        </Link>
      </section>

    </div>
  );
}