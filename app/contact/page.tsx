"use client";

import { useState } from "react";

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

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
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
    backgroundColor: "#111827",
    border: "1px solid #374151",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "14px",
    color: "#F9FAFB",
    outline: "none",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: "500" as const,
    color: "#9CA3AF",
    marginBottom: "8px",
  };

  return (
    <div style={{ maxWidth: "896px", margin: "0 auto", padding: "80px 24px" }}>

      <section style={{ marginBottom: "64px" }}>
        <h1 style={{ color: "#F9FAFB", fontSize: "2.5rem", fontWeight: "700", marginBottom: "16px" }}>Get in touch</h1>
        <p style={{ color: "#9CA3AF", fontSize: "16px", lineHeight: "1.8", maxWidth: "600px" }}>
          Open to cybersecurity roles, freelance web development projects, and technical collaborations. Fill in the form and I will get back to you as soon as possible.
        </p>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "64px" }}>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div>
            <h2 style={{ color: "#F9FAFB", fontWeight: "600", fontSize: "15px", marginBottom: "6px" }}>Email</h2>
            <p style={{ color: "#9CA3AF", fontSize: "14px" }}>mmunyiri12@gmail.com</p>
          </div>
          <div>
            <h2 style={{ color: "#F9FAFB", fontWeight: "600", fontSize: "15px", marginBottom: "6px" }}>Location</h2>
            <p style={{ color: "#9CA3AF", fontSize: "14px" }}>Nairobi, Kenya</p>
          </div>
          <div>
            <h2 style={{ color: "#F9FAFB", fontWeight: "600", fontSize: "15px", marginBottom: "6px" }}>LinkedIn</h2>
            <p style={{ color: "#9CA3AF", fontSize: "14px" }}>linkedin.com/in/markmunyiri</p>
          </div>
          <div>
            <h2 style={{ color: "#F9FAFB", fontWeight: "600", fontSize: "15px", marginBottom: "6px" }}>GitHub</h2>
            <p style={{ color: "#9CA3AF", fontSize: "14px" }}>github.com/MunyiriCM</p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={labelStyle}>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Subject</label>
            <select name="subject" value={formData.subject} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
              <option value="" style={{ backgroundColor: "#111827" }}>Select a subject</option>
              <option value="Job Opportunity" style={{ backgroundColor: "#111827" }}>Job opportunity</option>
              <option value="Freelance Project" style={{ backgroundColor: "#111827" }}>Freelance project</option>
              <option value="Collaboration" style={{ backgroundColor: "#111827" }}>Collaboration</option>
              <option value="General Enquiry" style={{ backgroundColor: "#111827" }}>General enquiry</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or enquiry..." rows={6} style={{ ...inputStyle, resize: "none" }} />
          </div>

          {status === "success" && (
            <div style={{ backgroundColor: "#0F2E2B", border: "1px solid #0F766E", borderRadius: "8px", padding: "12px 16px", color: "#2DD4BF", fontSize: "14px" }}>
              Message sent successfully. I will get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div style={{ backgroundColor: "#2D1515", border: "1px solid #7F1D1D", borderRadius: "8px", padding: "12px 16px", color: "#FCA5A5", fontSize: "14px" }}>
              Something went wrong. Please try again or email me directly.
            </div>
          )}

          <button onClick={handleSubmit} disabled={status === "loading"} style={{ backgroundColor: "#0F766E", color: "#F9FAFB", padding: "14px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: "600", border: "none", cursor: status === "loading" ? "not-allowed" : "pointer", opacity: status === "loading" ? 0.6 : 1 }}>
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
        </div>

      </div>
    </div>
  );
}