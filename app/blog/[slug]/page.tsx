import Link from "next/link";
import { notFound } from "next/navigation";

const posts = [
  {
    slug: "getting-started-with-isc2-cc",
    title: "How I prepared for the ISC2 Certified in Cybersecurity exam",
    date: "2024-03-01",
    tags: ["Cybersecurity", "Certifications", "ISC2"],
    readTime: "5 min read",
    content: `
      This is a placeholder for the full blog post content. Once Sanity CMS
      is connected, the real content will load here automatically.

      The ISC2 CC exam covers five domains: Security Principles, Business
      Continuity and Disaster Recovery, Access Controls, Network Security,
      and Security Operations. I spent about six weeks preparing using the
      official ISC2 study materials and practice questions.
    `,
  },
  {
    slug: "kaspersky-edr-deployment",
    title: "Deploying Kaspersky EDR in a banking environment",
    date: "2024-02-15",
    tags: ["SOC", "Endpoint Security", "Kaspersky"],
    readTime: "7 min read",
    content: `
      This is a placeholder for the full blog post content. Once Sanity CMS
      is connected, the real content will load here automatically.

      Managing endpoint protection at scale in a banking environment comes
      with unique challenges — performance impact on production servers,
      exclusion policies, and balancing security with operational needs.
    `,
  },
  {
    slug: "django-secure-apps",
    title: "Building secure web applications with Django",
    date: "2024-01-20",
    tags: ["Django", "Python", "Security"],
    readTime: "6 min read",
    content: `
      This is a placeholder for the full blog post content. Once Sanity CMS
      is connected, the real content will load here automatically.

      Django comes with a lot of security built in — CSRF protection, SQL
      injection prevention, and XSS protection. But there are still important
      practices you need to apply yourself.
    `,
  },
];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">

      <Link
        href="/blog"
        className="text-sm text-gray-500 hover:text-black transition-colors mb-10 inline-block"
      >
        ← Back to blog
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
          <span className="text-xs text-gray-300">·</span>
          <span className="text-xs text-gray-400">{post.readTime}</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
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
      </header>

      <article>
        {post.content.split("\n").filter((line) => line.trim()).map((paragraph, i) => (
          <p key={i} className="text-gray-600 leading-relaxed mb-4">
            {paragraph.trim()}
          </p>
        ))}
      </article>

      <div className="mt-16 pt-8 border-t border-gray-200">
        <Link
          href="/blog"
          className="text-sm text-gray-500 hover:text-black transition-colors"
        >
          ← Back to all posts
        </Link>
      </div>

    </div>
  );
}