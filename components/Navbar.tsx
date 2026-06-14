import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/tools", label: "Tools" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-gray-700 py-4 px-6 bg-gray-800">
      <nav className="max-w-4xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg text-white">
          Mark Ciira
        </Link>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}