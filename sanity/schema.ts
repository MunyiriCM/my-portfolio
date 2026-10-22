import type { Rule } from "sanity";

export const postSchema = {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "readTime",
      title: "Read Time",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
        },
        {
          type: "code",
          title: "Code block",
          options: {
            language: "bash",
            withFilename: true,
            languageAlternatives: [
              { title: "Bash", value: "bash", mode: "sh" },
              { title: "PowerShell", value: "powershell", mode: "sh" },
              { title: "Python", value: "python" },
              { title: "JavaScript", value: "javascript" },
              { title: "TypeScript", value: "typescript" },
              { title: "JSON", value: "json" },
              { title: "YAML", value: "yaml" },
              { title: "SQL", value: "sql" },
              { title: "HTML", value: "html" },
              { title: "CSS", value: "css" },
              { title: "Plain text / logs", value: "text" },
            ],
          },
        },
      ],
    },
  ],
};