import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Projects",
  description: "Projects built by Mark Ciira — cybersecurity tools, web applications, and software development work.",
};

const projects = [
  {
    title: "Xtracker",
    description: "A secure full-stack expense tracking application. Built with Python and Django, featuring user authentication, expense categorization, and spending analytics. Demonstrates secure coding practices and full-stack Django development.",
    tags: ["Python", "Django", "PostgreSQL", "Security"],
    type: "Web App",
    status: "Live",
    github: "https://github.com/MunyiriCM",
    demo: "",
  },
  {
    title: "Personal Portfolio",
    description: "This website. Built with Next.js, TypeScript, and Tailwind CSS. Features a blog, projects showcase, contact form, and newsletter subscription. Deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    type: "Web App",
    status: "Live",
    github: "https://github.com/MunyiriCM",
    demo: "",
  },
  {
    title: "Ecommerce Platform",
    description: "A full-stack ecommerce platform with product catalog, cart, checkout, and M-Pesa and Stripe payment integration. Built with Next.js on the frontend and Django REST Framework on the backend.",
    tags: ["Next.js", "Django REST", "PostgreSQL", "Stripe", "M-Pesa"],
    type: "Web App",
    status: "In Progress",
    github: "https://github.com/MunyiriCM",
    demo: "",
  },
];

function getStatusStyle(status: string) {
  if (status === "Live") return { backgroundColor: "#0F2E2B", color: "#14B8A6" };
  if (status === "In Progress") return { backgroundColor: "#374151", color: "#F59E0B" };
  return { backgroundColor: "#374151", color: "#9CA3AF" };
}

export default function ProjectsPage() {
  return (
    <div style={{ maxWidth: "896px", margin: "0 auto", padding: "120px 24px 80px" }}>

      <Reveal>
        <section style={{ marginBottom: "64px" }}>
          <h1 style={{ color: "#F9FAFB", fontSize: "2.5rem", fontWeight: "700", marginBottom: "16px" }}>Projects</h1>
          <p style={{ color: "#9CA3AF", fontSize: "16px", lineHeight: "1.8", maxWidth: "600px" }}>
            A collection of things I have built — web applications, security tools, and side projects. All source code is available on GitHub.
          </p>
        </section>
      </Reveal>

      <section>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <div className="hover-card" style={{ border: "1px solid #374151", borderRadius: "12px", padding: "24px", backgroundColor: "#1F2937" }}>

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
                  <h2 style={{ color: "#F9FAFB", fontSize: "1.2rem", fontWeight: "600" }}>{project.title}</h2>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ fontSize: "11px", padding: "3px 10px", borderRadius: "20px", backgroundColor: "#1A2744", color: "#60A5FA" }}>{project.type}</span>
                    <span style={{ fontSize: "11px", padding: "3px 10px", borderRadius: "20px", ...getStatusStyle(project.status) }}>{project.status}</span>
                  </div>
                </div>

                <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.7", marginBottom: "16px" }}>{project.description}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="hover-tag" style={{ fontSize: "12px", backgroundColor: "#374151", color: "#2DD4BF", padding: "4px 12px", borderRadius: "20px" }}>{tag}</span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover-link" style={{ color: "#6B7280", fontSize: "14px", textDecoration: "none" }}>GitHub →</a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover-link" style={{ color: "#6B7280", fontSize: "14px", textDecoration: "none" }}>Live demo →</a>
                  )}
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </div>
  );
}