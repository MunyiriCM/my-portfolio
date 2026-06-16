import { client } from "./client";

export async function getAllPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      readTime,
      tags,
      excerpt,
      mainImage
    }`
  );
}

export async function getPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      readTime,
      tags,
      excerpt,
      mainImage,
      body
    }`,
    { slug }
  );
}