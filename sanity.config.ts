import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";
import { postSchema } from "./sanity/schema";

export default defineConfig({
  name: "mark-portfolio",
  title: "Mark Ciira — Portfolio CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [deskTool(), codeInput()],
  schema: {
    types: [postSchema],
  },
  basePath: "/studio",
});