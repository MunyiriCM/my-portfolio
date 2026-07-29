import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About",
  description: "Learn more about Mark Ciira — cybersecurity engineer and software developer based in Nairobi, Kenya.",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "896px", margin: "0 auto", padding: "120px 24px 80px" }}>

      <Reveal>
        <section style={{ marginBottom: "80px" }}>
          <h1 style={{ color: "#1C1917", fontSize: "2.6rem", fontWeight: "700", marginBottom: "26px" }}>About me</h1>
          <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "18px" }}>
            <p style={{ color: "#44403C", fontSize: "18px", lineHeight: "1.85" }}>
              I'm Mark Ciira Munyiri, an IT Technical Support Engineer based in Nairobi, Kenya. I'm currently deployed at Family Bank through Ariel Technology Limited, where I work in network security and SOC operations — monitoring over 1,500 endpoints and servers daily.
            </p>
            <p style={{ color: "#44403C", fontSize: "18px", lineHeight: "1.85" }}>
              I'm completing a BSc in Telecommunication and Information Technology at Kenyatta University, and I hold an ISC2 Certified in Cybersecurity (CC) credential alongside a CyberShujaa/Cisco Ethical Hacker certification. I'm currently working toward CompTIA Security+.
            </p>
            <p style={{ color: "#44403C", fontSize: "18px", lineHeight: "1.85" }}>
              Outside of security, I build web applications using Python, Django, React, and Next.js. My personal project Xtracker is a secure full-stack expense tracking app that I use as a portfolio piece to demonstrate my development skills.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "64px" }}>
          <h2 style={{ color: "#1C1917", fontSize: "1.9rem", fontWeight: "600", marginBottom: "32px" }}>Experience</h2>
          <div style={{ borderLeft: "2px solid #E8E4DD", paddingLeft: "24px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "4px" }}>
              <h3 style={{ color: "#1C1917", fontWeight: "600", fontSize: "17px" }}>IT Technical Support Engineer</h3>
              <span style={{ color: "#78716C", fontSize: "14px" }}>2023 — Present</span>
            </div>
            <p style={{ color: "#78716C", fontSize: "14px", marginBottom: "12px" }}>Ariel Technology Limited · Deployed at Family Bank, Nairobi</p>
            <ul style={{ color: "#44403C", fontSize: "15px", lineHeight: "2", paddingLeft: "20px" }}>
              <li>SOC monitoring across 1,500+ endpoints and servers</li>
              <li>Endpoint protection using Kaspersky Security Center EDR</li>
              <li>CrowdStrike deployment and mutual exclusion configuration</li>
              <li>Network security, firewall rule documentation</li>
              <li>Incident response and technical troubleshooting</li>
            </ul>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "64px" }}>
          <h2 style={{ color: "#1C1917", fontSize: "1.9rem", fontWeight: "600", marginBottom: "32px" }}>Skills</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <Reveal delay={0}>
              <div style={{ border: "1px solid #E8E4DD", borderRadius: "12px", padding: "24px", backgroundColor: "#FFFFFF" }}>
                <h3 style={{ color: "#1C1917", fontWeight: "600", marginBottom: "16px", fontSize: "16px" }}>Cybersecurity</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["SOC Operations", "Endpoint Protection", "Network Security", "Kaspersky EDR", "CrowdStrike", "Splunk", "Incident Response", "Ethical Hacking"].map((skill) => (
                    <span key={skill} className="hover-tag" style={{ fontSize: "13px", backgroundColor: "#F7F5F2", color: "#0F766E", padding: "5px 13px", borderRadius: "20px", border: "1px solid #E8E4DD" }}>{skill}</span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div style={{ border: "1px solid #E8E4DD", borderRadius: "12px", padding: "24px", backgroundColor: "#FFFFFF" }}>
                <h3 style={{ color: "#1C1917", fontWeight: "600", marginBottom: "16px", fontSize: "16px" }}>Development</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["Python", "Django", "Django REST Framework", "React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"].map((skill) => (
                    <span key={skill} className="hover-tag" style={{ fontSize: "13px", backgroundColor: "#F7F5F2", color: "#0F766E", padding: "5px 13px", borderRadius: "20px", border: "1px solid #E8E4DD" }}>{skill}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "64px" }}>
          <h2 style={{ color: "#1C1917", fontSize: "1.9rem", fontWeight: "600", marginBottom: "32px" }}>Certifications</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { name: "ISC2 Certified in Cybersecurity (CC)", org: "ISC2", status: "Active" },
              { name: "CyberShujaa / Cisco Ethical Hacker", org: "CyberShujaa · Cisco", status: "Active" },
              { name: "CompTIA Security+", org: "CompTIA", status: "In Progress" },
              { name: "ALX Back-End Web Development", org: "ALX Africa", status: "Completed" },
            ].map((cert, i) => (
              <Reveal key={cert.name} delay={i * 80}>
                <div style={{ border: "1px solid #E8E4DD", borderRadius: "12px", padding: "20px 24px", backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <h3 style={{ color: "#1C1917", fontWeight: "500", fontSize: "16px", marginBottom: "4px" }}>{cert.name}</h3>
                    <p style={{ color: "#78716C", fontSize: "14px" }}>{cert.org}</p>
                  </div>
                  <span style={{ fontSize: "13px", padding: "4px 12px", borderRadius: "20px", backgroundColor: cert.status === "In Progress" ? "#FEF3C7" : "#D1FAE5", color: cert.status === "In Progress" ? "#92400E" : "#065F46", whiteSpace: "nowrap" }}>
                    {cert.status}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E4DD", borderRadius: "16px", padding: "48px", textAlign: "center" }}>
          <h2 style={{ color: "#1C1917", fontSize: "1.9rem", fontWeight: "600", marginBottom: "12px" }}>Want to work together?</h2>
          <p style={{ color: "#44403C", marginBottom: "24px", fontSize: "16px" }}>I'm open to cybersecurity roles, freelance web projects, and technical collaborations.</p>
          <Link href="/contact" style={{ backgroundColor: "#0F766E", color: "#FFFFFF", padding: "13px 26px", borderRadius: "8px", fontSize: "15px", fontWeight: "600", textDecoration: "none" }}>Get in touch</Link>
        </section>
      </Reveal>

    </div>
  );
}