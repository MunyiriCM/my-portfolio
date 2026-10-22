"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle = {
    width: "100%",
    backgroundColor: "#FFFFFF",
    border: "1px solid #D6D2CA",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "15px",
    color: "#1C1917",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: "500" as const,
    color: "#44403C",
    marginBottom: "8px",
  };

  const infoHeading = { color: "#1C1917", fontWeight: "600" as const, fontSize: "16px", marginBottom: "8px" };

  return (
    <div style={{ maxWidth: "896px", margin: "0 auto", padding: "120px 24px 80px" }}>

      <Reveal>
        <section style={{ marginBottom: "64px" }}>
          <h1 style={{ color: "#1C1917", fontSize: "2.6rem", fontWeight: "700", marginBottom: "18px" }}>Get in touch</h1>
          <p style={{ color: "#44403C", fontSize: "18px", lineHeight: "1.8", maxWidth: "620px" }}>
            Open to cybersecurity roles, freelance web development projects and technical collaborations. Fill in the form and I will get back to you as soon as possible.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "56px" }}>

          <div style={{ flex: "1 1 220px", display: "flex", flexDirection: "column", gap: "30px" }}>
            <div>
              <h2 style={infoHeading}>Email</h2>
              <a href="mailto:mmunyiri12@gmail.com" style={{ color: "#0F766E", fontSize: "15px", textDecoration: "none" }}>mmunyiri12@gmail.com</a>
            </div>
            <div>
              <h2 style={infoHeading}>Location</h2>
              <p style={{ color: "#44403C", fontSize: "15px" }}>Nairobi, Kenya</p>
            </div>
            <div>
              <h2 style={infoHeading}>LinkedIn</h2>
              <a href="https://www.linkedin.com/in/mark-ciira-1a1a332a4/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#0A66C2", color: "#FFFFFF", padding: "9px 18px", borderRadius: "6px", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>Visit LinkedIn ↗</a>
            </div>
            <div>
              <h2 style={infoHeading}>GitHub</h2>
              <a href="https://github.com/MunyiriCM" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#1C1917", color: "#FFFFFF", padding: "9px 18px", borderRadius: "6px", fontSize: "14px", fontWeight: "500", textDecoration: "none" }}>Visit GitHub ↗</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ flex: "2 1 340px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
              <div>
                <label htmlFor="name" style={labelStyle}>Name</label>
                <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" maxLength={100} required style={inputStyle} />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" maxLength={200} required style={inputStyle} />
              </div>
            </div>

            <div>
              <label htmlFor="subject" style={labelStyle}>Subject</label>
              <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required style={{ ...inputStyle, cursor: "pointer" }}>
                <option value="">Select a subject</option>
                <option value="Job Opportunity">Job opportunity</option>
                <option value="Freelance Project">Freelance project</option>
                <option value="Collaboration">Collaboration</option>
                <option value="General Enquiry">General enquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or enquiry..." rows={6} maxLength={5000} required style={{ ...inputStyle, resize: "vertical" }} />
            </div>

            {status === "success" && (
              <div role="status" style={{ backgroundColor: "#D1FAE5", border: "1px solid #6EE7B7", borderRadius: "8px", padding: "12px 16px", color: "#065F46", fontSize: "15px" }}>
                Message sent. I will get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div role="alert" style={{ backgroundColor: "#FEE2E2", border: "1px solid #FCA5A5", borderRadius: "8px", padding: "12px 16px", color: "#991B1B", fontSize: "15px" }}>
                Something went wrong. Please try again or email me directly at mmunyiri12@gmail.com.
              </div>
            )}

            <button type="submit" disabled={status === "loading"} style={{ backgroundColor: "#0F766E", color: "#FFFFFF", padding: "14px 24px", borderRadius: "8px", fontSize: "15px", fontWeight: "600", border: "none", cursor: status === "loading" ? "not-allowed" : "pointer", opacity: status === "loading" ? 0.6 : 1 }}>
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
          </form>

        </div>
      </Reveal>
    </div>
  );
}