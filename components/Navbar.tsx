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
    <div style={{ position: "fixed", top: "16px", left: 0, right: 0, zIndex: 50, display: "flex", justifyContent: "center", padding: "0 16px" }}>
      <nav
        style={{
          maxWidth: "1000px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: scrolled ? "#FFFFFF" : "rgba(255,255,255,0.9)",
          border: "1px solid #E8E4DD",
          borderRadius: "999px",
          padding: "10px 12px 10px 20px",
          boxShadow: scrolled ? "0 4px 16px rgba(0,0,0,0.08)" : "0 2px 8px rgba(0,0,0,0.04)",
          backdropFilter: "blur(8px)",
          transition: "box-shadow 0.3s ease, background-color 0.3s ease",
        }}
      >
        <Link href="/" style={{ fontWeight: "600", fontSize: "16px", color: "#1C1917", textDecoration: "none" }}>
          Mark Ciira
        </Link>

        <ul style={{ display: "flex", gap: "22px", listStyle: "none", margin: 0, padding: 0 }}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} style={{ fontSize: "13px", fontWeight: "500", color: "#57534E", textDecoration: "none" }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          style={{
            backgroundColor: "#0F766E",
            color: "#FFFFFF",
            padding: "9px 20px",
            borderRadius: "999px",
            fontSize: "13px",
            fontWeight: "600",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Contact me
        </Link>
      </nav>
    </div>
  );
}