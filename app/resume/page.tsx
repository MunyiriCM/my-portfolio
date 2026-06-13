export const metadata = {
  title: "Resume",
  description: "Resume of Mark Munyiri — cybersecurity engineer and software developer based in Nairobi, Kenya.",
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      <div className="flex items-start justify-between mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-2">Mark Ciira Munyiri</h1>
          <p className="text-gray-600 mb-1">Cybersecurity Engineer · Software Developer</p>
          <p className="text-gray-500 text-sm">Nairobi, Kenya</p>
        </div>
        <a href="/mark-munyiri-cv.pdf" download className="bg-black text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">Download PDF</a>
      </div>

      <section className="mb-12 flex flex-wrap gap-6 text-sm text-gray-600">
        <span>mmunyiri12@gmail.com</span>
        <span>linkedin.com/in/markmunyiri</span>
        <span>github.com/markmunyiri</span>
        <span>markmunyiri.dev</span>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Summary</h2>
        <p className="text-gray-600 leading-relaxed">
          IT Technical Support Engineer with hands-on experience in SOC operations, endpoint security, and network monitoring in a live banking environment. Currently securing 1,500+ endpoints at Family Bank through Ariel Technology Limited. Holds ISC2 CC and CyberShujaa/Cisco Ethical Hacker certifications, with CompTIA Security+ in progress. Also builds full-stack web applications using Python, Django, React, and Next.js.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">Experience</h2>
        <div>
          <div className="flex items-start justify-between mb-1">
            <h3 className="font-semibold">IT Technical Support Engineer</h3>
            <span className="text-sm text-gray-400">2023 — Present</span>
          </div>
          <p className="text-sm text-gray-500 mb-3">Ariel Technology Limited · Deployed at Family Bank, Nairobi</p>
          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>SOC monitoring across 1,500+ endpoints and servers daily</li>
            <li>Endpoint protection and threat management using Kaspersky Security Center EDR</li>
            <li>Deployed CrowdStrike alongside Kaspersky with mutual exclusion configuration</li>
            <li>Documented firewall rules for Postillion servers in formal reports</li>
            <li>Network security monitoring and incident response</li>
            <li>Technical troubleshooting and infrastructure support</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">Education</h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-semibold">BSc Telecommunication and Information Technology</h3>
              <span className="text-sm text-gray-400">Expected 2026</span>
            </div>
            <p className="text-sm text-gray-500">Kenyatta University, Nairobi</p>
          </div>
          <div>
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-semibold">ALX Back-End Web Development</h3>
              <span className="text-sm text-gray-400">Completed</span>
            </div>
            <p className="text-sm text-gray-500">ALX Africa</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">Certifications</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">ISC2 Certified in Cybersecurity (CC)</p>
              <p className="text-xs text-gray-500">ISC2</p>
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Active</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">CyberShujaa / Cisco Ethical Hacker</p>
              <p className="text-xs text-gray-500">CyberShujaa · Cisco</p>
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Active</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">CompTIA Security+</p>
              <p className="text-xs text-gray-500">CompTIA</p>
            </div>
            <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">In Progress</span>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-700">Cybersecurity</h3>
            <div className="flex flex-wrap gap-2">
              {["SOC Operations", "Endpoint Protection", "Network Security", "Kaspersky EDR", "CrowdStrike", "Splunk", "Incident Response", "Ethical Hacking"].map((skill) => (
                <span key={skill} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-700">Development</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Django", "Django REST Framework", "React", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"].map((skill) => (
                <span key={skill} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">References</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="font-medium text-sm mb-1">Samwel Wamui</p>
            <p className="text-xs text-gray-500 mb-1">Cybersecurity Engineer</p>
            <p className="text-xs text-gray-500">NTT DATA</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="font-medium text-sm mb-1">Emmanuel Simiyu Wamalwa</p>
            <p className="text-xs text-gray-500 mb-1">Software Engineer</p>
            <p className="text-xs text-gray-500">Family Bank Limited</p>
          </div>
        </div>
      </section>

    </div>
  );
}