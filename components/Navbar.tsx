"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!menuOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <div style={{ position: "fixed", top: "16px", left: 0, right: 0, zIndex: 50, display: "flex", justifyContent: "center", padding: "0 16px" }}>
      <div style={{ maxWidth: "1000px", width: "100%" }}>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            backgroundColor: scrolled || menuOpen ? "#FFFFFF" : "rgba(255,255,255,0.9)",
            border: "1px solid #E8E4DD",
            borderRadius: "999px",
            padding: "10px 12px 10px 20px",
            boxShadow: scrolled || menuOpen ? "0 4px 16px rgba(0,0,0,0.08)" : "0 2px 8px rgba(0,0,0,0.04)",
            backdropFilter: "blur(8px)",
            transition: "box-shadow 0.3s ease, background-color 0.3s ease",
          }}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{ fontWeight: "600", fontSize: "16px", color: "#1C1917", textDecoration: "none", whiteSpace: "nowrap" }}
          >
            Mark Ciira
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex" style={{ gap: "22px", listStyle: "none", margin: 0, padding: 0 }}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    color: isActive(link.href) ? "#0F766E" : "#57534E",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden md:inline-block"
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

          {/* Mobile menu button */}
          <button
            type="button"
            className="flex items-center justify-center md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "999px",
              border: "1px solid #E8E4DD",
              backgroundColor: menuOpen ? "#F7F5F2" : "#FFFFFF",
              color: "#1C1917",
              cursor: "pointer",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile dropdown panel */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden"
            style={{
              marginTop: "8px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E8E4DD",
              borderRadius: "24px",
              padding: "8px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      borderRadius: "16px",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: isActive(link.href) ? "#0F766E" : "#1C1917",
                      backgroundColor: isActive(link.href) ? "#F0FDFA" : "transparent",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                marginTop: "8px",
                textAlign: "center",
                backgroundColor: "#0F766E",
                color: "#FFFFFF",
                padding: "12px 20px",
                borderRadius: "999px",
                fontSize: "15px",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Contact me
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
