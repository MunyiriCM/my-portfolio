export const metadata = {
  title: "Projects",
  description:
    "Projects built by Mark Munyiri — cybersecurity tools, web applications, and software development work.",
};

const projects = [
  {
    title: "Xtracker",
    description:
      "A secure full-stack expense tracking application. Built with Python and Django, featuring user authentication, expense categorization, and spending analytics. Demonstrates secure coding practices and full-stack Django development.",
    tags: ["Python", "Django", "PostgreSQL", "Security"],
    type: "Web App",
    status: "Live",
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Personal Portfolio",
    description:
      "This website. Built with Next.js, TypeScript, and Tailwind CSS. Features a blog, projects showcase, contact form, and newsletter subscription. Deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    type: "Web App",
    status: "Live",
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Ecommerce Platform",
    description:
      "A full-stack ecommerce platform with product catalog, cart, checkout, and M-Pesa and Stripe payment integration. Built with Next.js on the frontend and Django REST Framework on the backend.",
    tags: ["Next.js", "Django REST", "PostgreSQL", "Stripe", "M-Pesa"],
    type: "Web App",
    status: "In Progress",
    github: "https://github.com/",
    demo: "",
  },
];

function getTypeColor(type: string): string {
  if (type === "Web App") return "bg-blue-100 text-blue-700";
  if (type === "Security Tool") return "bg-red-100 text-red-700";
  return "bg-gray-100 text-gray-700";
}

function getStatusColor(status: string): string {
  if (status === "Live") return "bg-green-100 text-green-700";
  if (status === "In Progress") return "bg-yellow-100 text-yellow-700";
  return "bg-gray-100 text-gray-500";
}

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      {/* Header */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-gray-600 max-w-2xl">
          A collection of things I have built — web applications, security
          tools, and side projects. All source code is available on GitHub.
        </p>
      </section>

      {/* Projects Grid */}
      <section>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition-colors"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <div className="flex gap-2">
                  <span className={`text-xs px-3 py-1 rounded-full ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-black transition-colors">
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-black transition-colors">
                    Live demo →
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}