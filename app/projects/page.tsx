import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Projects",
  description: "Projects by Mark Ciira: a client ecommerce site, a cybersecurity training CTF, web applications and a home lab.",
};

interface Project {
  title: string;
  description: string;
  tags: string[];
  type: string;
  status: string;
  links: { label: string; href: string }[];
}

const projects: Project[] = [
  {
    title: "Evolve ecommerce platform",
    description:
      "A production ecommerce site built for a client, Evolution Nexus Ltd, and delivered from first build through to handover of all accounts. The payment flow is designed around M-Pesa Paybill only, with no stored card data and no customer accounts, which keeps the attack surface small. Product data lives in Sanity CMS, order emails go out through Resend (DKIM and SPF verified), and the site is deployed on Vercel. I moved the catalogue from static files to the CMS without downtime.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Sanity", "Resend", "Vercel", "M-Pesa"],
    type: "Client project",
    status: "Delivered",
    links: [{ label: "Live site", href: "https://evolveke.com" }],
  },
  {
    title: "CyberBridge capstone CTF",
    description:
      "The capstone exercise for the CyberBridge training programme: a Capture-the-Flag on TryHackMe with 5 categories, 16 challenges and 3,600 points. I am building it, including Linux VM provisioning scripts for each challenge machine.",
    tags: ["TryHackMe", "Linux", "CTF design", "Training"],
    type: "Training project",
    status: "In progress",
    links: [],
  },
  {
    title: "Xtracker",
    description:
      "A full-stack expense tracker built with Python and Django. It uses relational data models, user-scoped access controls so people only see their own data, and a secure Django ORM backend.",
    tags: ["Python", "Django", "Access control"],
    type: "Personal project",
    status: "Built",
    links: [{ label: "GitHub", href: "https://github.com/MunyiriCM" }],
  },
  {
    title: "Personal portfolio",
    description:
      "This website. Built with Next.js, TypeScript and Tailwind CSS, with a Sanity-powered blog and a contact form that sends email through Resend. Deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity", "Resend", "Vercel"],
    type: "Personal project",
    status: "Live",
    links: [{ label: "GitHub", href: "https://github.com/MunyiriCM" }],
  },
  {
    title: "Security home lab",
    description:
      "A home lab I am building with OPNsense, Wazuh and Kali Linux, to study how firewall logs and EDR alerts relate to each other.",
    tags: ["OPNsense", "Wazuh", "Kali Linux"],
    type: "Home lab",
    status: "In progress",
    links: [],
  },
];

function getStatusStyle(status: string) {
  if (status === "In progress") return { backgroundColor: "#FEF3C7", color: "#92400E" };
  if (status === "Built") return { backgroundColor: "#F1F5F9", color: "#475569" };
  return { backgroundColor: "#D1FAE5", color: "#065F46" };
}

export default function ProjectsPage() {
  return (
    <div style={{ maxWidth: "896px", margin: "0 auto", padding: "120px 24px 80px" }}>

      <Reveal>
        <section style={{ marginBottom: "64px" }}>
          <h1 style={{ color: "#1C1917", fontSize: "2.6rem", fontWeight: "700", marginBottom: "18px" }}>Projects</h1>
          <p style={{ color: "#44403C", fontSize: "18px", lineHeight: "1.8", maxWidth: "620px" }}>
            Things I have built and am building: a client ecommerce site, training material, web applications and a home lab. Code for my personal projects is on GitHub.
          </p>
        </section>
      </Reveal>

      <section>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <div className="hover-card" style={{ border: "1px solid #E8E4DD", borderRadius: "12px", padding: "26px", backgroundColor: "#FFFFFF" }}>

                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "10px", marginBottom: "14px" }}>
                  <h2 style={{ color: "#1C1917", fontSize: "1.3rem", fontWeight: "600" }}>{project.title}</h2>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    <span style={{ fontSize: "12px", padding: "3px 10px", borderRadius: "20px", backgroundColor: "#E0F2FE", color: "#075985" }}>{project.type}</span>
                    <span style={{ fontSize: "12px", padding: "3px 10px", borderRadius: "20px", ...getStatusStyle(project.status) }}>{project.status}</span>
                  </div>
                </div>

                <p style={{ color: "#44403C", fontSize: "15px", lineHeight: "1.75", marginBottom: "18px" }}>{project.description}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: project.links.length > 0 ? "18px" : "0" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="hover-tag" style={{ fontSize: "13px", backgroundColor: "#F7F5F2", color: "#0F766E", padding: "4px 13px", borderRadius: "20px", border: "1px solid #E8E4DD" }}>{tag}</span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                    {project.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="hover-link" style={{ color: "#44403C", fontSize: "15px", textDecoration: "none" }}>
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}

              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </div>
  );
}