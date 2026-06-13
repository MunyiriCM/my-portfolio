import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "Articles and write-ups by Mark Munyiri on cybersecurity, software development, and IT.",
};

const posts = [
  {
    slug: "getting-started-with-isc2-cc",
    title: "How I prepared for the ISC2 Certified in Cybersecurity exam",
    description:
      "A breakdown of my study approach, resources I used, and tips for anyone preparing for the ISC2 CC certification.",
    date: "2024-03-01",
    tags: ["Cybersecurity", "Certifications", "ISC2"],
    readTime: "5 min read",
  },
  {
    slug: "kaspersky-edr-deployment",
    title: "Deploying Kaspersky EDR in a banking environment",
    description:
      "Lessons learned from managing endpoint protection across 1,500+ devices in a live banking environment.",
    date: "2024-02-15",
    tags: ["SOC", "Endpoint Security", "Kaspersky"],
    readTime: "7 min read",
  },
  {
    slug: "django-secure-apps",
    title: "Building secure web applications with Django",
    description:
      "Key security practices I apply when building Django applications — from authentication to input validation.",
    date: "2024-01-20",
    tags: ["Django", "Python", "Security"],
    readTime: "6 min read",
  },
];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      {/* Header */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600 max-w-2xl">
          I write about cybersecurity, software development, and things I learn
          on the job. Practical articles from real experience.
        </p>
      </section>

      {/* Tags filter — static for now */}
      <section className="mb-10">
        <div className="flex flex-wrap gap-2">
          {["All", "Cybersecurity", "SOC", "Django", "Python", "Certifications"].map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-3 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Posts list */}
      <section>
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition-colors"
            >
              {/* Date and read time */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
                <span className="text-xs text-gray-300">·</span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold mb-2 hover:text-gray-700 transition-colors">
                {post.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}