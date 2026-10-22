import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About",
  description: "Learn more about Mark Ciira — cyber security analyst, cybersecurity trainer and developer based in Nairobi, Kenya.",
};

const roles = [
  {
    title: "Cyber Security Analyst – Security Operations",
    org: "Ariel Technology Limited · Nairobi",
    period: "May 2025 — Present",
    bullets: [
      "Resolve 15+ security incidents a month end to end (triage, containment, root-cause analysis and recovery), with 98% closed within SLA",
      "Raised patch compliance from 60% to 85% by prioritising gaps and coordinating fixes with IT teams",
      "Track vulnerabilities across 2,000+ endpoints and servers through to closure",
      "Administer Kaspersky Security Center: agent connectivity, protection status and routine health checks",
      "Audit access-control settings to find inappropriate privileges and segregation-of-duties gaps, and drive fixes with system owners",
      "Keep audit-ready incident and compliance records supporting ISO 27001, PCI-DSS and the Kenya Data Protection Act",
      "Delivered security awareness sessions to 50+ staff across departments",
    ],
  },
  {
    title: "Lead Cybersecurity Trainer",
    org: "CyberBridge Programme",
    period: "April 2026 — Present",
    bullets: [
      "Design and deliver an 18-week, 160-hour Junior Cybersecurity Specialist curriculum covering networking, systems, cryptography, SOC operations and governance",
      "Teaching the first cohort of 25 learners, including people from disadvantaged backgrounds",
      "Building a capstone Capture-the-Flag on TryHackMe (5 categories, 16 challenges, 3,600 points), with Linux VM provisioning scripts for each challenge machine",
      "Authored an Ethics, Law and Governance module covering Kenya's Data Protection Act, the Computer Misuse and Cybercrimes Act and AI governance",
    ],
  },
  {
    title: "IT Support Intern",
    org: "Ariel Technology Limited · Nairobi",
    period: "January 2025 — May 2025",
    bullets: [
      "Ran endpoint security checks and vulnerability assessments across network devices, finding misconfigurations and patch gaps",
      "Supported incident investigations with log analysis, evidence preservation and compliance documentation",
      "Led a digital invoicing transition that cut processing errors by 25% and improved data accuracy by 15%",
    ],
  },
];

const skillGroups = [
  { title: "Security operations", skills: ["Kaspersky Security Center", "Incident triage and response", "Vulnerability and patch management", "Access-control review"] },
  { title: "Compliance and frameworks", skills: ["ISO 27001", "NIST", "OWASP Top 10", "PCI-DSS", "GDPR", "Kenya Data Protection Act"] },
  { title: "Offensive tools (lab and training use)", skills: ["Nmap", "Burp Suite", "Metasploit", "Wireshark"] },
  { title: "Networking", skills: ["TCP/IP", "DNS", "HTTP/HTTPS", "SSL/TLS", "VPNs", "Firewalls", "Subnetting", "Routing", "NAT"] },
  { title: "Systems", skills: ["Linux (Ubuntu, Kali)", "Windows Server"] },
  { title: "Development", skills: ["Python", "Django", "JavaScript", "TypeScript", "Next.js", "Bash"] },
  { title: "Cloud", skills: ["AWS (fundamentals)", "Azure (fundamentals)"] },
  { title: "Training and writing", skills: ["Curriculum design", "Workshops", "Technical documentation"] },
];

const certs = [
  { name: "ISC2 Certified in Cybersecurity (CC)", org: "ISC2", status: "Certified" },
  { name: "Cisco Ethical Hacker", org: "CyberShujaa · 2025 cohort", status: "Certified" },
  { name: "Fortinet NSE 1 and NSE 2 Certified in Cybersecurity", org: "Fortinet", status: "Certified" },
  { name: "CompTIA Security+", org: "CompTIA", status: "In progress" },
  { name: "Microsoft SC-900", org: "Microsoft", status: "In progress" },
];

function statusStyle(status: string) {
  return status === "In progress"
    ? { backgroundColor: "#FEF3C7", color: "#92400E" }
    : { backgroundColor: "#D1FAE5", color: "#065F46" };
}

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "896px", margin: "0 auto", padding: "120px 24px 80px" }}>

      <Reveal>
        <section style={{ marginBottom: "80px" }}>
          <h1 style={{ color: "#1C1917", fontSize: "2.6rem", fontWeight: "700", marginBottom: "26px" }}>About me</h1>
          <div style={{ maxWidth: "680px", display: "flex", flexDirection: "column", gap: "18px" }}>
            <p style={{ color: "#44403C", fontSize: "18px", lineHeight: "1.85" }}>
              I&apos;m Mark Ciira Munyiri, a cyber security analyst based in Nairobi, Kenya. I work in security operations at Ariel Technology Limited, protecting 2,000+ endpoints and servers in a regulated banking environment. Day to day that means incident response, vulnerability and patch management, and keeping audit-ready records.
            </p>
            <p style={{ color: "#44403C", fontSize: "18px", lineHeight: "1.85" }}>
              I also teach. As Lead Cybersecurity Trainer on the CyberBridge programme, I designed an 18-week, 160-hour curriculum and I am teaching its first cohort of 25 learners, including people from disadvantaged backgrounds.
            </p>
            <p style={{ color: "#44403C", fontSize: "18px", lineHeight: "1.85" }}>
              Outside work I build software: a production ecommerce site for a client, a Django expense tracker, and this website. I am completing a BSc in Telecommunication and Information Technology at Kenyatta University (expected December 2026) and working towards CompTIA Security+ and Microsoft SC-900.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "64px" }}>
          <h2 style={{ color: "#1C1917", fontSize: "1.9rem", fontWeight: "600", marginBottom: "32px" }}>Experience</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "44px" }}>
            {roles.map((role, i) => (
              <Reveal key={role.title + role.period} delay={i * 80}>
                <div style={{ borderLeft: "2px solid #E8E4DD", paddingLeft: "24px" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "8px", marginBottom: "4px" }}>
                    <h3 style={{ color: "#1C1917", fontWeight: "600", fontSize: "17px" }}>{role.title}</h3>
                    <span style={{ color: "#78716C", fontSize: "14px" }}>{role.period}</span>
                  </div>
                  <p style={{ color: "#78716C", fontSize: "14px", marginBottom: "12px" }}>{role.org}</p>
                  <ul style={{ color: "#44403C", fontSize: "15px", lineHeight: "1.9", paddingLeft: "20px" }}>
                    {role.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "64px" }}>
          <h2 style={{ color: "#1C1917", fontSize: "1.9rem", fontWeight: "600", marginBottom: "32px" }}>Skills</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={(i % 2) * 100}>
                <div style={{ border: "1px solid #E8E4DD", borderRadius: "12px", padding: "24px", backgroundColor: "#FFFFFF", height: "100%", boxSizing: "border-box" }}>
                  <h3 style={{ color: "#1C1917", fontWeight: "600", marginBottom: "16px", fontSize: "16px" }}>{group.title}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {group.skills.map((skill) => (
                      <span key={skill} className="hover-tag" style={{ fontSize: "13px", backgroundColor: "#F7F5F2", color: "#0F766E", padding: "5px 13px", borderRadius: "20px", border: "1px solid #E8E4DD" }}>{skill}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "64px" }}>
          <h2 style={{ color: "#1C1917", fontSize: "1.9rem", fontWeight: "600", marginBottom: "32px" }}>Certifications</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {certs.map((cert, i) => (
              <Reveal key={cert.name} delay={i * 80}>
                <div style={{ border: "1px solid #E8E4DD", borderRadius: "12px", padding: "20px 24px", backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <div>
                    <h3 style={{ color: "#1C1917", fontWeight: "500", fontSize: "16px", marginBottom: "4px" }}>{cert.name}</h3>
                    <p style={{ color: "#78716C", fontSize: "14px" }}>{cert.org}</p>
                  </div>
                  <span style={{ fontSize: "13px", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap", ...statusStyle(cert.status) }}>
                    {cert.status}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <p style={{ color: "#78716C", fontSize: "14px", lineHeight: "1.7", marginTop: "20px" }}>
            Hands-on labs on TryHackMe: SIEM (Splunk), Firewall Fundamentals and Penetration Testing.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E4DD", borderRadius: "16px", padding: "48px", textAlign: "center" }}>
          <h2 style={{ color: "#1C1917", fontSize: "1.9rem", fontWeight: "600", marginBottom: "12px" }}>Want to work together?</h2>
          <p style={{ color: "#44403C", marginBottom: "24px", fontSize: "16px" }}>I&apos;m open to cybersecurity roles, freelance web projects, and technical collaborations.</p>
          <Link href="/contact" style={{ backgroundColor: "#0F766E", color: "#FFFFFF", padding: "13px 26px", borderRadius: "8px", fontSize: "15px", fontWeight: "600", textDecoration: "none" }}>Get in touch</Link>
        </section>
      </Reveal>

    </div>
  );
}