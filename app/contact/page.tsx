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

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
        <p className="text-gray-600 max-w-2xl">
          Open to cybersecurity roles, freelance web development projects, and
          technical collaborations. Fill in the form and I will get back to you
          as soon as possible.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold mb-1">Email</h2>
            <p className="text-sm text-gray-600">mmunyiri12@gmail.com</p>
          </div>
          <div>
            <h2 className="font-semibold mb-1">Location</h2>
            <p className="text-sm text-gray-600">Nairobi, Kenya</p>
          </div>
          <div>
            <h2 className="font-semibold mb-1">LinkedIn</h2>
            <p className="text-sm text-gray-600">linkedin.com/in/markmunyiri</p>
          </div>
          <div>
            <h2 className="font-semibold mb-1">GitHub</h2>
            <p className="text-sm text-gray-600">github.com/markmunyiri</p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors"
              >
                <option value="">Select a subject</option>
                <option value="Job Opportunity">Job opportunity</option>
                <option value="Freelance Project">Freelance project</option>
                <option value="Collaboration">Collaboration</option>
                <option value="General Enquiry">General enquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or enquiry..."
                rows={6}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors resize-none"
              />
            </div>

            {status === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm">
                Message sent successfully. I will get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}