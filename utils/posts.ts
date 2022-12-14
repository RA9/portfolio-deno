import { extract } from "$std/encoding/front_matter.ts";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  category: string;
  description: string;
  content: string;
}

export async function loadPost(slug: string): Promise<Post | null> {
  let text: string;
  try {
    text = await Deno.readTextFile(`./data/posts/${slug}.md`);
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return null;
    }
    throw err;
  }
  const { attrs, body } = extract(text);
  const params = attrs as Record<string, string>;
  console.log({params})
  const publishedAt = new Date(params.published_at);
  return {
    slug,
    title: params.title,
    publishedAt,
    category: params.category,
    description: params.description,
    content: body,
  };
}

export async function listPosts(): Promise<Post[]> {
  const promises = [];
  for await (const entry of Deno.readDir("./data/posts")) {
    const slug = entry.name.replace(".md", "");
    promises.push(loadPost(slug));
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}