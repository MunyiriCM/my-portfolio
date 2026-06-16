export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  readTime?: string;
  tags?: string[];
  excerpt?: string;
  mainImage?: {
    asset: { _ref: string };
    hotspot?: { x: number; y: number };
  };
  body?: any[];
}