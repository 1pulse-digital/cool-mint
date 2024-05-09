import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { ReactNode } from "react";

export type Post = {
  thumbnail: ReactNode;
  title: string;
  slug: string;
  date: string;
  description: string;
  body: string;
  imageUrl: string;
  author: string;
  categories: string;
  filter: string;
};

export async function getPosts() {
  const posts = await fs.readdir("./posts/");

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `./posts/${file}`;
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(fileContent);
        
        // Generate slug from file name or define it explicitly in front matter
        const slug = path.parse(file).name; // Assuming file name is the slug
        
        return { ...data, body: content, slug } as Post;
      })
  );
}

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}

