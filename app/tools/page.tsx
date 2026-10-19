import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Tools",
  description: "Tools, software and platforms used by Mark Ciira across security operations, development and training.",
};

const tools = [
  {
    category: "Security operations",
    items: [
      { name: "Kaspersky Security Center", description: "My main endpoint security platform. I administer it across 2,000+ endpoints and servers: agent connectivity, protection status and routine health checks, plus Application Control troubleshooting on production servers." },
      { name: "CrowdStrike Falcon", description: "Troubleshot installation conflicts between Falcon and Kaspersky's kernel driver and self-defence module." },
      { name: "Splunk", description: "SIEM I am learning through TryHackMe labs, for log analysis and detection." },
    ],
  },
  {
    category: "Offensive and analysis tools (lab and training use)",
    items: [
      { name: "Nmap", description: "Network scanning and enumeration in labs and training." },
      { name: "Burp Suite", description: "Web application testing in labs and training." },
      { name: "Metasploit", description: "Exploitation framework used in labs and training exercises." },
      { name: "Wireshark", description: "Packet analysis in labs and training." },
    ],
  },
  {
    category: "Home lab (being built)",
    items: [
      { name: "OPNsense", description: "Firewall in my home lab. I am building the lab to study how firewall logs and EDR alerts relate to each other." },
      { name: "Wazuh", description: "Detection and monitoring platform in the same home lab, still being built." },
      { name: "Kali Linux", description: "Used for lab and training work, including my home lab." },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "Python", description: "My main programming language, used for Django applications and scripting." },
      { name: "Django", description: "The framework behind Xtracker, my expense tracker, with user-scoped access controls and the Django ORM." },
      { name: "Next.js", description: "The React framework behind this site and the Evolve ecommerce site I built for a client." },
      { name: "TypeScript", description: "Used across my Next.js projects to catch bugs early." },
      { name: "Tailwind CSS", description: "Used for styling on the Evolve ecommerce site." },
      { name: "Bash", description: "Shell scripting on Linux." },
    ],
  },
  {
    category: "Platforms and services",
    items: [
      { name: "VS Code", description: "My main code editor." },
      { name: "GitHub", description: "Version control and code hosting for my projects." },
      { name: "Vercel", description: "Hosting for this site and the Evolve ecommerce site." },
      { name: "Sanity", description: "Headless CMS behind the blog on this site and the product data on the Evolve site." },
      { name: "Resend", description: "Email delivery for this site's contact form and Evolve's order emails, with DKIM and SPF verified." },
      { name: "TryHackMe", description: "Where I practise SIEM, firewall and penetration testing labs, and where I am building the CyberBridge capstone CTF." },
    ],
  },
  {
    category: "Learning",
    items: [
      { name: "ISC2 Certified in Cybersecurity (CC)", description: "Certified." },
      { name: "Cisco Ethical Hacker", description: "Certified through CyberShujaa, 2025 cohort." },
      { name: "Fortinet NSE 1 and NSE 2", description: "Certified in Cybersecurity." },
      { name: "CompTIA Security+", description: "Currently studying towards this certification." },
      { name: "Microsoft SC-900", description: "Currently studying towards this certification." },
    ],
  },
];

export default function ToolsPage() {
  return (
    <div style={{ maxWidth: "896px", margin: "0 auto", padding: "120px 24px 80px" }}>

      <Reveal>
        <section style={{ marginBottom: "64px" }}>
          <h1 style={{ color: "#1C1917", fontSize: "2.6rem", fontWeight: "700", marginBottom: "18px" }}>Tools</h1>
          <p style={{ color: "#44403C", fontSize: "19px", lineHeight: "1.8", maxWidth: "620px" }}>
            The tools, platforms and technologies I use for security operations, development and training. I update this page as my stack changes.
          </p>
        </section>
      </Reveal>

      <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
        {tools.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 50}>
            <section>
              <h2 style={{ color: "#1C1917", fontSize: "1.6rem", fontWeight: "600", marginBottom: "24px", paddingBottom: "8px", borderBottom: "1px solid #E8E4DD" }}>
                {group.category}
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
                {group.items.map((tool) => (
                  <div key={tool.name} className="hover-card" style={{ border: "1px solid #E8E4DD", borderRadius: "12px", padding: "20px", backgroundColor: "#FFFFFF" }}>
                    <h3 style={{ color: "#0F766E", fontWeight: "600", fontSize: "16px", marginBottom: "8px" }}>{tool.name}</h3>
                    <p style={{ color: "#44403C", fontSize: "15px", lineHeight: "1.75" }}>{tool.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        ))}
      </div>

    </div>
  );
}