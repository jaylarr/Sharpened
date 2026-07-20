import blogData from "./blogPosts.json";

export type BlogAuthor = {
  name: string;
  bio: string;
  image?: string;
  imageAlt?: string;
};

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "numbered"; items: Array<{ title: string; text: string }> };

type RawBlogPost = {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category: string;
  author: string;
  blocks: ArticleBlock[];
};

export type BlogPost = Omit<RawBlogPost, "author"> & {
  author: BlogAuthor;
  readingMinutes: number;
};

const rawData = blogData as unknown as {
  authors: Record<string, BlogAuthor>;
  posts: RawBlogPost[];
};

function getBlockText(block: ArticleBlock) {
  if (block.type === "list") return block.items.join(" ");
  if (block.type === "numbered") {
    return block.items.map((item) => `${item.title} ${item.text}`).join(" ");
  }
  return block.text;
}

function calculateReadingMinutes(post: RawBlogPost) {
  const text = [post.title, post.subtitle, ...post.blocks.map(getBlockText)]
    .filter(Boolean)
    .join(" ");
  const wordCount = text.trim().split(/\s+/).length;

  return Math.max(2, Math.ceil(wordCount / 220));
}

export const blogPosts: BlogPost[] = rawData.posts.map((post) => ({
  ...post,
  author: rawData.authors[post.author],
  readingMinutes: calculateReadingMinutes(post),
}));

export function getBlogPost(slug: string | undefined) {
  return blogPosts.find((post) => post.slug === slug);
}

