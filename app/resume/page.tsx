import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Resume",
  description: "Resume of Mark Ciira — cybersecurity engineer and software developer based in Nairobi, Kenya.",
};

const tagStyle = {
  fontSize: "12px",
  backgroundColor: "#F7F5F2",
  color: "#0F766E",
  padding: "4px 12px",
  borderRadius: "20px",
  border: "1px solid #E8E4DD",
};

export default function ResumePage() {
  return (
    <div style={{ maxWidth: "896px", margin: "0 auto", padding: "120px 24px 80px" }}>

      <Reveal>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "32px" }}>
          <div>
            <h1 style={{ color: "#1C1917", fontSize: "2.5rem", fontWeight: "700", marginBottom: "8px" }}>Mark Ciira Munyiri</h1>
            <p style={{ color: "#78716C", fontSize: "16px", marginBottom: "4px" }}>Cybersecurity Engineer · Software Developer</p>
            <p style={{ color: "#A8A29E", fontSize: "14px" }}>Nairobi, Kenya</p>
          </div>
          <a href="/mark-munyiri-cv.pdf" download style={{ backgroundColor: "#0F766E", color: "#FFFFFF", padding: "12px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>Download PDF</a>
        </div>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "40px", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
          <span style={{ color: "#78716C", fontSize: "14px" }}>mmunyiri12@gmail.com</span>
          <span style={{ color: "#78716C", fontSize: "14px" }}>markciira.com</span>
          <a href="https://linkedin.com/in/markmunyiri" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#0A66C2", color: "#ffffff", padding: "6px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: "500", textDecoration: "none" }}>LinkedIn ↗</a>
          <a href="https://github.com/MunyiriCM" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#1C1917", color: "#FFFFFF", padding: "6px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: "500", textDecoration: "none" }}>GitHub ↗</a>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ color: "#1C1917", fontSize: "1.4rem", fontWeight: "600", marginBottom: "16px", paddingBottom: "8px", borderBottom: "1px solid #E8E4DD" }}>Summary</h2>
          <p style={{ color: "#78716C", fontSize: "15px", lineHeight: "1.8" }}>
            IT Technical Support Engineer with hands-on experience in SOC operations, endpoint security, and network monitoring in a live banking environment. Currently securing 1,500+ endpoints at Family Bank through Ariel Technology Limited. Holds ISC2 CC and CyberShujaa/Cisco Ethical Hacker certifications, with CompTIA Security+ in progress. Also builds full-stack web applications using Python, Django, React, and Next.js.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ color: "#1C1917", fontSize: "1.4rem", fontWeight: "600", marginBottom: "24px", paddingBottom: "8px", borderBottom: "1px solid #E8E4DD" }}>Experience</h2>
          <div>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "4px" }}>
              <h3 style={{ color: "#1C1917", fontWeight: "600", fontSize: "16px" }}>IT Technical Support Engineer</h3>
              <span style={{ color: "#A8A29E", fontSize: "13px" }}>2023 — Present</span>
            </div>
            <p style={{ color: "#A8A29E", fontSize: "14px", marginBottom: "12px" }}>Ariel Technology Limited · Deployed at Family Bank, Nairobi</p>
            <ul style={{ color: "#78716C", fontSize: "14px", lineHeight: "2", paddingLeft: "20px" }}>
              <li>SOC monitoring across 1,500+ endpoints and servers daily</li>
              <li>Endpoint protection and threat management using Kaspersky Security Center EDR</li>
              <li>Deployed CrowdStrike alongside Kaspersky with mutual exclusion configuration</li>
              <li>Documented firewall rules for Postillion servers in formal reports</li>
              <li>Network security monitoring and incident response</li>
              <li>Technical troubleshooting and infrastructure support</li>
            </ul>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ color: "#1C1917", fontSize: "1.4rem", fontWeight: "600", marginBottom: "24px", paddingBottom: "8px", borderBottom: "1px solid #E8E4DD" }}>Education</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "4px" }}>
                <h3 style={{ color: "#1C1917", fontWeight: "600", fontSize: "15px" }}>BSc Telecommunication and Information Technology</h3>
                <span style={{ color: "#A8A29E", fontSize: "13px" }}>Expected 2026</span>
              </div>
              <p style={{ color: "#A8A29E", fontSize: "14px" }}>Kenyatta University, Nairobi</p>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "4px" }}>
                <h3 style={{ color: "#1C1917", fontWeight: "600", fontSize: "15px" }}>ALX Back-End Web Development</h3>
                <span style={{ color: "#A8A29E", fontSize: "13px" }}>Completed</span>
              </div>
              <p style={{ color: "#A8A29E", fontSize: "14px" }}>ALX Africa</p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ color: "#1C1917", fontSize: "1.4rem", fontWeight: "600", marginBottom: "24px", paddingBottom: "8px", borderBottom: "1px solid #E8E4DD" }}>Certifications</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { name: "ISC2 Certified in Cybersecurity (CC)", org: "ISC2", status: "Active" },
              { name: "CyberShujaa / Cisco Ethical Hacker", org: "CyberShujaa · Cisco", status: "Active" },
              { name: "CompTIA Security+", org: "CompTIA", status: "In Progress" },
            ].map((cert) => (
              <div key={cert.name} style={{ border: "1px solid #E8E4DD", borderRadius: "12px", padding: "16px 20px", backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{ color: "#1C1917", fontWeight: "500", fontSize: "15px", marginBottom: "4px" }}>{cert.name}</p>
                  <p style={{ color: "#A8A29E", fontSize: "13px" }}>{cert.org}</p>
                </div>
                <span style={{ fontSize: "12px", padding: "4px 12px", borderRadius: "20px", backgroundColor: cert.status === "In Progress" ? "#FEF3C7" : "#D1FAE5", color: cert.status === "In Progress" ? "#92400E" : "#065F46", whiteSpace: "nowrap" }}>
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 style={{ color: "#1C1917", fontSize: "1.4rem", fontWeight: "600", marginBottom: "24px", paddingBottom: "8px", borderBottom: "1px solid #E8E4DD" }}>Skills</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div>
              <h3 style={{ color: "#A8A29E", fontSize: "13px", fontWeight: "600", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Cybersecurity</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["SOC Operations", "Endpoint Protection", "Network Security", "Kaspersky EDR", "CrowdStrike", "Splunk", "Incident Response", "Ethical Hacking"].map((skill) => (
                  <span key={skill} style={tagStyle}>{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ color: "#A8A29E", fontSize: "13px", fontWeight: "600", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Development</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Python", "Django", "Django REST Framework", "React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"].map((skill) => (
                  <span key={skill} style={tagStyle}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

    </div>
  );
}