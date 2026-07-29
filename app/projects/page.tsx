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
  if (status === "Live") return { backgroundColor: "#D1FAE5", color: "#065F46" };
  if (status === "In Progress") return { backgroundColor: "#FEF3C7", color: "#92400E" };
  return { backgroundColor: "#F1F5F9", color: "#64748B" };
}

export default function ProjectsPage() {
  return (
    <div style={{ maxWidth: "896px", margin: "0 auto", padding: "120px 24px 80px" }}>

      <Reveal>
        <section style={{ marginBottom: "64px" }}>
          <h1 style={{ color: "#1C1917", fontSize: "2.6rem", fontWeight: "700", marginBottom: "18px" }}>Projects</h1>
          <p style={{ color: "#44403C", fontSize: "18px", lineHeight: "1.8", maxWidth: "620px" }}>
            A collection of things I have built — web applications, security tools, and side projects. All source code is available on GitHub.
          </p>
        </section>
      </Reveal>

      <section>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <div className="hover-card" style={{ border: "1px solid #E8E4DD", borderRadius: "12px", padding: "26px", backgroundColor: "#FFFFFF" }}>

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
                  <h2 style={{ color: "#1C1917", fontSize: "1.3rem", fontWeight: "600" }}>{project.title}</h2>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ fontSize: "12px", padding: "3px 10px", borderRadius: "20px", backgroundColor: "#E0F2FE", color: "#075985" }}>{project.type}</span>
                    <span style={{ fontSize: "12px", padding: "3px 10px", borderRadius: "20px", ...getStatusStyle(project.status) }}>{project.status}</span>
                  </div>
                </div>

                <p style={{ color: "#44403C", fontSize: "15px", lineHeight: "1.75", marginBottom: "18px" }}>{project.description}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "18px" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="hover-tag" style={{ fontSize: "13px", backgroundColor: "#F7F5F2", color: "#0F766E", padding: "4px 13px", borderRadius: "20px", border: "1px solid #E8E4DD" }}>{tag}</span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover-link" style={{ color: "#44403C", fontSize: "15px", textDecoration: "none" }}>GitHub →</a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover-link" style={{ color: "#44403C", fontSize: "15px", textDecoration: "none" }}>Live demo →</a>
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