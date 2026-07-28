import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Tools",
  description: "Tools, software, and equipment used by Mark Ciira day to day.",
};

const tools = [
  {
    category: "Cybersecurity",
    items: [
      { name: "Kaspersky Security Center", description: "My main EDR and endpoint protection platform. I use this daily to monitor 1,500+ endpoints and servers at Family Bank." },
      { name: "CrowdStrike Falcon", description: "Deployed alongside Kaspersky for advanced threat detection. Configured mutual exclusions between both platforms." },
      { name: "Splunk", description: "SIEM platform I am actively developing skills in through TryHackMe labs for log analysis and threat hunting." },
      { name: "Wireshark", description: "Network packet analysis for troubleshooting and monitoring suspicious traffic." },
      { name: "Nmap", description: "Network scanning and enumeration during security assessments." },
      { name: "Metasploit", description: "Penetration testing framework used in ethical hacking labs and CTF practice." },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "Python", description: "My primary programming language. I use it for backend development, scripting, and automation." },
      { name: "Django", description: "My go-to web framework for building secure full-stack applications. Used in Xtracker and other projects." },
      { name: "Django REST Framework", description: "Building REST APIs that connect Django backends to React and Next.js frontends." },
      { name: "Next.js", description: "React framework I use for building fast, SEO-friendly frontends including this portfolio." },
      { name: "TypeScript", description: "Typed JavaScript that helps catch bugs early. I use it in all my Next.js projects." },
      { name: "PostgreSQL", description: "My preferred relational database for production applications." },
      { name: "Tailwind CSS", description: "Utility-first CSS framework I use to build clean, responsive UIs quickly." },
    ],
  },
  {
    category: "Tools and Platforms",
    items: [
      { name: "VS Code", description: "My main code editor. I use it for everything from writing Python to building Next.js frontends." },
      { name: "GitHub", description: "Version control and code hosting. All my projects live here." },
      { name: "Vercel", description: "Where I deploy Next.js projects. Auto-deploys from GitHub on every push." },
      { name: "TryHackMe", description: "My main platform for practising cybersecurity skills, labs, and CTF challenges." },
      { name: "Postman", description: "Testing and debugging REST APIs during development." },
      { name: "Windows 11", description: "My daily operating system for both development and security work." },
    ],
  },
  {
    category: "Learning",
    items: [
      { name: "ISC2 CC", description: "Certified in Cybersecurity — my first professional security certification." },
      { name: "CompTIA Security+", description: "Currently studying toward this certification to deepen my security fundamentals." },
      { name: "CyberShujaa / Cisco Ethical Hacker", description: "Completed ethical hacking training covering reconnaissance, exploitation, and reporting." },
      { name: "ALX Back-End Development", description: "Structured programme that solidified my Python and Django backend development skills." },
    ],
  },
];

export default function ToolsPage() {
  return (
    <div style={{ maxWidth: "896px", margin: "0 auto", padding: "120px 24px 80px" }}>

      <Reveal>
        <section style={{ marginBottom: "64px" }}>
          <h1 style={{ color: "#F9FAFB", fontSize: "2.5rem", fontWeight: "700", marginBottom: "16px" }}>Tools</h1>
          <p style={{ color: "#9CA3AF", fontSize: "16px", lineHeight: "1.8", maxWidth: "600px" }}>
            The tools, platforms, and technologies I use day to day for cybersecurity work, software development, and learning. Updated as my stack evolves.
          </p>
        </section>
      </Reveal>

      <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
        {tools.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 50}>
            <section>
              <h2 style={{ color: "#F9FAFB", fontSize: "1.4rem", fontWeight: "600", marginBottom: "24px", paddingBottom: "8px", borderBottom: "1px solid #374151" }}>
                {group.category}
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
                {group.items.map((tool) => (
                  <div key={tool.name} className="hover-card" style={{ border: "1px solid #374151", borderRadius: "12px", padding: "20px", backgroundColor: "#1F2937" }}>
                    <h3 style={{ color: "#2DD4BF", fontWeight: "600", fontSize: "14px", marginBottom: "8px" }}>{tool.name}</h3>
                    <p style={{ color: "#9CA3AF", fontSize: "13px", lineHeight: "1.7" }}>{tool.description}</p>
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