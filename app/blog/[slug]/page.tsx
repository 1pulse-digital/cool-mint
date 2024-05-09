import { getPosts } from "@/app/library/posts";
import fs from "fs";
import Image from "next/image";
import Link from "next/link";
import matter from 'gray-matter';
import path from "path";


interface PostPageProps {
  params: {
    slug: string;
  };
}

const getPostContent = (slug: string) => {
  const decodedSlug = decodeURIComponent(slug);
  const folder = path.join(process.cwd(), 'posts');
  const file = path.join(folder, `${decodedSlug}.mdx`);
  const fileContents = fs.readFileSync(file, 'utf8');
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  // Combine the data with the slug and content
  return {
    slug: decodedSlug,
    content,
    title: data.title,
    date: data.date,
    author: data.author,
    description: data.description,
    imageUrl: data.imageUrl,
  };
};

const PostPage = async (props: PostPageProps) => {

  const slug = props.params.slug;
  const content = getPostContent(slug);
  const posts = await getPosts();

  return (
    <div className={"bg-background"}>
      <div className="h-[500px] px-6 py-6 2xl:mx-40 sm:px-16">
        <Image
          src={content.imageUrl}
          alt="made in workshop"
          className="rounded-md"
          width={500}
          height={700}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div className="grid items-center justify-center px-8 sm:px-4 2xl:mx-40">
        <div className={"grid content-center font-helvetica sm:p-10 "}>
          <div className="inline-flex flex-wrap items-start justify-start pb-4 font-helvetica text-xs font-normal text-secondary">
            <Link href="/">
              <div>
                Home
                <span className="px-1">|</span>
              </div>
            </Link>

            <Link href="/blog">
              <div className="">
                News <span className="px-1">|</span>{" "}
              </div>
            </Link>
            <Link href="/blog">
              <div className="text-primary">
                {content.title}
              </div>
            </Link>
          </div>
          <h1
            className={
              "text-start font-helvetica text-headings font-bold leading-tight text-secondary"
            }
          >
            {content.title}
            <span className="leading-snug text-primary">.</span>
          </h1>
          <div className="row flex space-x-4 pb-8">
            <span className="inline-flex items-center py-1 text-xs text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FDBB10"
                className="mr-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              {content.date}
            </span>
            <span className="inline-flex py-1 text-xs text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FDBB10"
                className="mr-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              {content.author}
            </span>
          </div>
          <p
            className={
              "pb-8 text-start font-helvetica text-BodyText font-light text-textColor"
            }
          >
            {content.description}
          </p>

          <p
            className={
              "text-start font-helvetica text-[16px] font-normal text-secondary"
            }
          >
            {content.content}
          </p>
          <div className="pt-12">
            <hr className="h-[1px] flex-grow border-0 bg-textColor"></hr>
          </div>

          {/* Latest News Start */}

          <div>
            <h1
              className={
                "py-10 text-start font-helvetica text-headings font-bold text-secondary"
              }
            >
              Latest News
            </h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 text-secondary w-full">
              {posts
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 3) // latest three posts
                .map((post) => (
                  <article key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative mx-4 mb-8 grid h-96 py-10 sm:py-0">
                        <Link href={"/newsTitle"}>
                          <div>
                            <div className="absolute inset-0 h-full w-full">
                              <Image
                                fill
                                style={{ objectFit: "cover" }}
                                src={post.imageUrl}
                                alt="news"
                                className="rounded-md"
                              />
                            </div>
                            <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-black opacity-100"></div>
                          </div>
                        </Link>
                        <div className="absolute bottom-0 z-10 grid h-auto w-full  px-5">
                          <div className="row flex space-x-4 py-2">
                            <p className="inline-flex items-start py-1 text-xs text-secondary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#FDBB10"
                                className="mr-2 h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                />
                              </svg>
                              {post.date}
                            </p>
                            <p className="inline-flex py-1 text-xs text-secondary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#FDBB10"
                                className="mr-2 h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                />
                              </svg>
                              {post.author}
                            </p>
                          </div>
                          <p className="pb-1 text-start font-helvetica text-[18px] font-bold leading-tight text-secondary hover:text-primary">
                            {post.title}
                          </p>
                          <div className="pb-8 pt-2 text-start text-[12px] text-secondary">
                            <p>{post.categories}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default PostPage;