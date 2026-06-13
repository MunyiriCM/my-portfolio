import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      {/* Hero Section */}
      <section className="mb-20">
        <p className="text-sm text-gray-500 mb-3">Based in Nairobi, Kenya</p>
        <h1 className="text-4xl font-bold mb-6">
          Hi, I'm Mark Munyiri
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Cybersecurity engineer and software developer. I protect systems,
          build web applications, and write about what I learn along the way.
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            View my work
          </Link>
          <Link
            href="/contact"
            className="border border-gray-300 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">What I do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Cybersecurity</h3>
            <p className="text-sm text-gray-600">
              SOC monitoring, endpoint protection, network security, and
              incident response. Currently securing 1,500+ endpoints at
              Family Bank.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Software Development</h3>
            <p className="text-sm text-gray-600">
              Full-stack web development using Python, Django, React, and
              Next.js. I build secure, practical applications.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-semibold mb-2">IT Support</h3>
            <p className="text-sm text-gray-600">
              Technical support, infrastructure management, and system
              administration in enterprise banking environments.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Recent posts</h2>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-black transition-colors">
            View all →
          </Link>
        </div>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl p-6">
            <p className="text-xs text-gray-400 mb-2">Coming soon</p>
            <h3 className="font-medium text-gray-400">
              Blog posts will appear here once connected to Sanity CMS
            </h3>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-semibold mb-3">Let's work together</h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Open to cybersecurity roles, freelance web development projects,
          and technical collaborations.
        </p>
        <Link
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Contact me
        </Link>
      </section>

    </div>
  );
}