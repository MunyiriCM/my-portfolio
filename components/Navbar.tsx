"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: "16px 24px",
      borderBottom: scrolled ? "1px solid #374151" : "1px solid transparent",
      backgroundColor: scrolled ? "rgba(17,24,39,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.3s ease",
    }}>
      <nav style={{ maxWidth: "896px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ fontWeight: "600", fontSize: "18px", color: "#F9FAFB", textDecoration: "none" }}>
          Mark Ciira
        </Link>
        <ul style={{ display: "flex", gap: "24px", listStyle: "none", margin: 0, padding: 0 }}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} style={{ fontSize: "13px", color: "#9CA3AF", textDecoration: "none" }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}