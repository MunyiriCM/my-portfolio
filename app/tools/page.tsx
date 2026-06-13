export const metadata = {
  title: "Tools",
  description: "Tools, software, and equipment used by Mark Munyiri day to day.",
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
    <div className="max-w-4xl mx-auto px-6 py-20">

      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Tools</h1>
        <p className="text-gray-600 max-w-2xl">
          The tools, platforms, and technologies I use day to day for
          cybersecurity work, software development, and learning. Updated
          as my stack evolves.
        </p>
      </section>

      <div className="space-y-16">
        {tools.map((group) => (
          <section key={group.category}>
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">{group.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.items.map((tool) => (
                <div key={tool.name} className="border border-gray-200 rounded-xl p-5 hover:border-gray-400 transition-colors">
                  <h3 className="font-semibold text-sm mb-2">{tool.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

    </div>
  );
}