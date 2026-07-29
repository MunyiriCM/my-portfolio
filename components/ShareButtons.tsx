"use client";

import { useState } from "react";

interface ShareButtonsProps {
  url: string;
  title: string;
  slug: string;
}

export default function ShareButtons({ url, title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  function handleCopy() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #E8E4DD" }}>      <p style={{ color: "#1C1917", fontSize: "15px", fontWeight: "600", marginBottom: "6px" }}>Share this post</p>
      <p style={{ color: "#78716C", fontSize: "13px", marginBottom: "20px" }}>Found this useful? Share it with your network.</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "32px" }}>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#0A66C2", color: "#fff", padding: "10px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>LinkedIn ↗</a>
        <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#000000", color: "#fff", padding: "10px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>X / Twitter ↗</a>
        <a href={`https://wa.me/?text=${encodeURIComponent(title + " — " + url)}`} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#25D366", color: "#fff", padding: "10px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>WhatsApp ↗</a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#1877F2", color: "#fff", padding: "10px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>Facebook ↗</a>
        <button onClick={handleCopy} style={{ backgroundColor: copied ? "#0F766E" : "#F7F5F2", color: copied ? "#FFFFFF" : "#1C1917", padding: "10px 18px", borderRadius: "8px", fontSize: "13px", fontWeight: "500", border: "1px solid #E8E4DD", cursor: "pointer", transition: "background-color 0.2s" }}>          {copied ? "Copied! ✓" : "Copy link"}
        </button>
      </div>

      <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E4DD", borderRadius: "10px", padding: "14px 16px", marginBottom: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
        <span style={{ color: "#78716C", fontSize: "12px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{url}</span>
          <button onClick={handleCopy} style={{ backgroundColor: "#F7F5F2", color: "#0F766E", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "500", border: "1px solid #E8E4DD", cursor: "pointer", whiteSpace: "nowrap" }}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}