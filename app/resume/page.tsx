import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Resume",
  description: "Resume of Mark Ciira — cyber security analyst, cybersecurity trainer and developer based in Nairobi, Kenya.",
};

const tagStyle = {
  fontSize: "13px",
  backgroundColor: "#F7F5F2",
  color: "#0F766E",
  padding: "4px 13px",
  borderRadius: "20px",
  border: "1px solid #E8E4DD",
};

const h2Style = {
  color: "#1C1917",
  fontSize: "1.5rem",
  fontWeight: "600" as const,
  marginBottom: "24px",
  paddingBottom: "8px",
  borderBottom: "1px solid #E8E4DD",
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
      "Configure and troubleshoot Kaspersky Application Control on production servers without weakening protection",
      "Manage endpoint firewall rules and produced formal firewall rule documentation",
      "Troubleshot installation conflicts between CrowdStrike Falcon and Kaspersky's kernel driver and self-defence module",
      "Audit access-control settings to find inappropriate privileges and segregation-of-duties gaps, and drive fixes with system owners",
      "Keep audit-ready incident and compliance records supporting ISO 27001, PCI-DSS and the Kenya Data Protection Act",
      "Prepare security reports and incident summaries for management, explaining risk and progress to technical and non-technical readers",
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
      "Helped enforce secure configurations and IT security policies across endpoints and network infrastructure",
      "Led a digital invoicing transition that cut processing errors by 25% and improved data accuracy by 15%",
    ],
  },
];

const certs = [
  { name: "ISC2 Certified in Cybersecurity (CC)", org: "ISC2", status: "Certified" },
  { name: "Cisco Ethical Hacker", org: "CyberShujaa · 2025 cohort", status: "Certified" },
  { name: "Fortinet NSE 1 and NSE 2 Certified in Cybersecurity", org: "Fortinet", status: "Certified" },
  { name: "CompTIA Security+", org: "CompTIA", status: "In progress" },
  { name: "Microsoft SC-900", org: "Microsoft", status: "In progress" },
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

function statusStyle(status: string) {
  return status === "In progress"
    ? { backgroundColor: "#FEF3C7", color: "#92400E" }
    : { backgroundColor: "#D1FAE5", color: "#065F46" };
}

export default function ResumePage() {
  return (
    <div style={{ maxWidth: "896px", margin: "0 auto", padding: "120px 24px 80px" }}>

      <Reveal>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "20px", marginBottom: "32px" }}>
          <div>
            <h1 style={{ color: "#1C1917", fontSize: "2.6rem", fontWeight: "700", marginBottom: "8px" }}>Mark Ciira Munyiri</h1>
            <p style={{ color: "#44403C", fontSize: "17px", marginBottom: "4px" }}>Cyber Security Analyst · Trainer · Developer</p>
            <p style={{ color: "#78716C", fontSize: "15px" }}>Nairobi, Kenya</p>
          </div>
          <a href="/mark-munyiri-cv.pdf" download style={{ backgroundColor: "#0F766E", color: "#FFFFFF", padding: "13px 26px", borderRadius: "8px", fontSize: "15px", fontWeight: "600", textDecoration: "none" }}>Download PDF</a>
        </div>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "44px", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
          <span style={{ color: "#44403C", fontSize: "15px" }}>mmunyiri12@gmail.com</span>
          <span style={{ color: "#44403C", fontSize: "15px" }}>markciira.com</span>
          <a href="https://www.linkedin.com/in/mark-ciira-1a1a332a4/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#0A66C2", color: "#FFFFFF", padding: "7px 15px", borderRadius: "6px", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>LinkedIn ↗</a>
          <a href="https://github.com/MunyiriCM" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#1C1917", color: "#FFFFFF", padding: "7px 15px", borderRadius: "6px", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>GitHub ↗</a>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "56px" }}>
          <h2 style={h2Style}>Summary</h2>
          <p style={{ color: "#44403C", fontSize: "17px", lineHeight: "1.85" }}>
            Cyber security analyst protecting a 2,000+ endpoint banking environment. Resolves 15+ incidents a month, with 98% closed within SLA, and raised patch compliance from 60% to 85%. Hands-on with Kaspersky EDR from alert triage to root cause and recovery, documented for audit under ISO 27001, PCI-DSS and the Kenya Data Protection Act. Also leads a cybersecurity training programme, currently teaching its first cohort of 25 learners, and builds software in Python, Django and Next.js.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "56px" }}>
          <h2 style={h2Style}>Experience</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {roles.map((role, i) => (
              <Reveal key={role.title + role.period} delay={i * 80}>
                <div>
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
        <section style={{ marginBottom: "56px" }}>
          <h2 style={h2Style}>Education</h2>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "8px", marginBottom: "4px" }}>
            <h3 style={{ color: "#1C1917", fontWeight: "600", fontSize: "16px" }}>BSc Telecommunication and Information Technology</h3>
            <span style={{ color: "#78716C", fontSize: "14px" }}>Expected December 2026</span>
          </div>
          <p style={{ color: "#78716C", fontSize: "14px" }}>Kenyatta University, Nairobi</p>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ marginBottom: "56px" }}>
          <h2 style={h2Style}>Certifications</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {certs.map((cert) => (
              <div key={cert.name} style={{ border: "1px solid #E8E4DD", borderRadius: "12px", padding: "16px 20px", backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <div>
                  <p style={{ color: "#1C1917", fontWeight: "500", fontSize: "16px", marginBottom: "4px" }}>{cert.name}</p>
                  <p style={{ color: "#78716C", fontSize: "14px" }}>{cert.org}</p>
                </div>
                <span style={{ fontSize: "13px", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap", ...statusStyle(cert.status) }}>
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
          <p style={{ color: "#78716C", fontSize: "14px", lineHeight: "1.7", marginTop: "18px" }}>
            Hands-on labs on TryHackMe: SIEM (Splunk), Firewall Fundamentals and Penetration Testing.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 style={h2Style}>Skills</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 style={{ color: "#78716C", fontSize: "13px", fontWeight: "600", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{group.title}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.skills.map((skill) => (
                    <span key={skill} style={tagStyle}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

    </div>
  );
}