import { extract } from "$std/encoding/front_matter.ts";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  category: string;
  description: string;
  content: string;
  status: string;
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
  const publishedAt = new Date(params.published_at);
  if (params.status && params.status !== "published") {
    return null;
  }
  return {
    slug,
    title: params.title,
    publishedAt,
    category: params.category,
    description: params.description,
    content: body,
    status: params.status
  };
}

export async function listPosts(): Promise<Post[]> {
  const promises = [];
  for await (const entry of Deno.readDir("./data/posts")) {
    const slug = entry.name.replace(".md", "");
    promises.push(loadPost(slug));
  }
  const posts = (await Promise.all(promises) as Post[]).filter(post =>  post != null);
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

  return posts;
}