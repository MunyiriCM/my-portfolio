import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Learn more about Mark Munyiri — cybersecurity engineer and software developer based in Nairobi, Kenya.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      {/* Intro */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">About me</h1>
        <div className="max-w-2xl space-y-4 text-gray-600 leading-relaxed">
          <p>
            I'm Mark Ciira Munyiri, an IT Technical Support Engineer based in
            Nairobi, Kenya. I'm currently deployed at Family Bank through Ariel
            Technology Limited, where I work in network security and SOC
            operations — monitoring over 1,500 endpoints and servers daily.
          </p>
          <p>
            I'm completing a BSc in Telecommunication and Information Technology
            at Kenyatta University, and I hold an ISC2 Certified in
            Cybersecurity (CC) credential alongside a CyberShujaa/Cisco Ethical
            Hacker certification. I'm currently working toward CompTIA
            Security+.
          </p>
          <p>
            Outside of security, I build web applications using Python, Django,
            React, and Next.js. My personal project Xtracker is a secure
            full-stack expense tracking app that I use as a portfolio piece to
            demonstrate my development skills.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Experience</h2>
        <div className="space-y-8">
          <div className="border-l-2 border-gray-200 pl-6">
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-semibold">IT Technical Support Engineer</h3>
              <span className="text-sm text-gray-400">2023 — Present</span>
            </div>
            <p className="text-sm text-gray-500 mb-3">
              Ariel Technology Limited · Deployed at Family Bank, Nairobi
            </p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>SOC monitoring across 1,500+ endpoints and servers</li>
              <li>Endpoint protection using Kaspersky Security Center EDR</li>
              <li>CrowdStrike deployment and mutual exclusion configuration</li>
              <li>Network security, firewall rule documentation</li>
              <li>Incident response and technical troubleshooting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Cybersecurity</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "SOC Operations",
                "Endpoint Protection",
                "Network Security",
                "Kaspersky EDR",
                "CrowdStrike",
                "Splunk",
                "Incident Response",
                "Ethical Hacking",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Development</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "Django",
                "Django REST Framework",
                "React",
                "Next.js",
                "TypeScript",
                "PostgreSQL",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Certifications */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Certifications</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl p-6 flex items-center justify-between">
            <div>
              <h3 className="font-medium">ISC2 Certified in Cybersecurity (CC)</h3>
              <p className="text-sm text-gray-500">ISC2</p>
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Active
            </span>
          </div>
          <div className="border border-gray-200 rounded-xl p-6 flex items-center justify-between">
            <div>
              <h3 className="font-medium">CyberShujaa / Cisco Ethical Hacker</h3>
              <p className="text-sm text-gray-500">CyberShujaa · Cisco</p>
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Active
            </span>
          </div>
          <div className="border border-gray-200 rounded-xl p-6 flex items-center justify-between">
            <div>
              <h3 className="font-medium">CompTIA Security+</h3>
              <p className="text-sm text-gray-500">CompTIA</p>
            </div>
            <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
              In progress
            </span>
          </div>
          <div className="border border-gray-200 rounded-xl p-6 flex items-center justify-between">
            <div>
              <h3 className="font-medium">ALX Back-End Web Development</h3>
              <p className="text-sm text-gray-500">ALX Africa</p>
            </div>
            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Completed
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-semibold mb-3">Want to work together?</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          I'm open to cybersecurity roles, freelance web projects, and
          technical collaborations.
        </p>
        <Link
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Get in touch
        </Link>
      </section>

    </div>
  );
}