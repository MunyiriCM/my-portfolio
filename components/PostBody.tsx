import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import type { PortableTextBlock } from "@portabletext/react";

// Sanity image references look like: image-<id>-<width>x<height>-<format>
function imageInfo(ref: string) {
  const [, id, dimensions, format] = ref.split("-");
  const [width, height] = dimensions.split("x").map(Number);
  const url = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}-${dimensions}.${format}`;
  return { url, width, height };
}

const languageLabels: Record<string, string> = {
  bash: "Bash",
  powershell: "PowerShell",
  python: "Python",
  javascript: "JavaScript",
  typescript: "TypeScript",
  json: "JSON",
  yaml: "YAML",
  sql: "SQL",
  html: "HTML",
  css: "CSS",
  text: "Plain text",
};

const bodyText = { color: "#2D2A26", fontSize: "18px", lineHeight: "1.95" };

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p style={{ ...bodyText, marginBottom: "18px" }}>{children}</p>
    ),
    h1: ({ children }) => (
      <h2 style={{ color: "#1C1917", fontSize: "1.6rem", fontWeight: 600, margin: "34px 0 14px" }}>{children}</h2>
    ),
    h2: ({ children }) => (
      <h2 style={{ color: "#1C1917", fontSize: "1.6rem", fontWeight: 600, margin: "34px 0 14px" }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ color: "#1C1917", fontSize: "1.3rem", fontWeight: 600, margin: "26px 0 10px" }}>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 style={{ color: "#1C1917", fontSize: "1.1rem", fontWeight: 600, margin: "22px 0 8px" }}>{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote style={{ ...bodyText, borderLeft: "3px solid #0F766E", paddingLeft: "20px", margin: "24px 0", color: "#44403C", fontStyle: "italic" }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{ ...bodyText, paddingLeft: "26px", marginBottom: "18px", lineHeight: "1.9" }}>{children}</ul>
    ),
    number: ({ children }) => (
      <ol style={{ ...bodyText, paddingLeft: "26px", marginBottom: "18px", lineHeight: "1.9" }}>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li style={{ marginBottom: "6px" }}>{children}</li>,
    number: ({ children }) => <li style={{ marginBottom: "6px" }}>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong style={{ fontWeight: 700, color: "#1C1917" }}>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    "strike-through": ({ children }) => <s>{children}</s>,
    code: ({ children }) => (
      <code style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.9em", backgroundColor: "#EFEBE4", padding: "2px 6px", borderRadius: "4px" }}>
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href: string = value?.href ?? "";
      // Only allow normal web, email and site-relative links
      const safeHref = /^(https?:|mailto:|\/)/.test(href) ? href : "#";
      return (
        <a href={safeHref} target="_blank" rel="noopener noreferrer" style={{ color: "#0F766E", textDecoration: "underline" }}>
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const ref = value?.asset?._ref;
      if (!ref) return null;
      const { url, width, height } = imageInfo(ref);
      return (
        <div style={{ margin: "32px 0" }}>
          <Image
            src={url}
            alt=""
            width={width}
            height={height}
            style={{ width: "100%", height: "auto", borderRadius: "12px", border: "1px solid #E8E4DD" }}
          />
        </div>
      );
    },
    code: ({ value }) => {
      const language: string = value?.language ?? "text";
      const label = languageLabels[language] ?? language;
      const filename: string | undefined = value?.filename;
      return (
        <div style={{ margin: "28px 0", borderRadius: "12px", overflow: "hidden", border: "1px solid #292524" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#292524", color: "#A8A29E", fontSize: "13px", padding: "8px 16px", fontFamily: "var(--font-geist-mono), monospace" }}>
            <span>{filename ?? ""}</span>
            <span>{label}</span>
          </div>
          <pre style={{ backgroundColor: "#1C1917", color: "#F7F5F2", padding: "18px 20px", margin: 0, overflowX: "auto", fontSize: "14px", lineHeight: "1.7" }}>
            <code style={{ fontFamily: "var(--font-geist-mono), monospace", whiteSpace: "pre" }}>{value?.code}</code>
          </pre>
        </div>
      );
    },
  },
};

export default function PostBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}