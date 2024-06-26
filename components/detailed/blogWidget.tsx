import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogWidgetProps {
  imageUrl: string;
  date: string;
  author: string;
  title: string;
  categories: string[];
  linkUrl: string;
}

const BlogWidget: React.FC<BlogWidgetProps> = ({
  imageUrl,
  date,
  author,
  title,
  categories,
  linkUrl,
}) => {
  return (
    <div className="relative mx-4 mb-8 grid h-96 py-10 sm:py-0">
      <Link href={"/newsTitle"}>
      <div className="">
        <div className="absolute inset-0 h-full w-full">
          <Image
            fill
            style={{ objectFit: "cover" }}
            src={imageUrl}
            alt="news"
            className="rounded-md"
          />
        </div>
        <div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent to-black opacity-100"></div>
      </div>
      </Link>
      <div className="absolute bottom-0 z-10 grid h-auto w-full  px-5">
        <div className="row flex space-x-4 py-2">
          <p className="inline-flex items-start py-1 text-xs text-foreground">
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
            {date}
          </p>
          <p className="inline-flex py-1 text-xs text-foreground">
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
            {author}
          </p>
        </div>
        <Link href={linkUrl}>
          <p className="pb-1 text-start font-helvetica text-[18px] font-bold leading-tight text-foreground hover:text-primary">
            {title}
          </p>
        </Link>
        <div className="pb-8 pt-2 text-start text-[12px] text-foreground">
          <p>{categories.join(" | ")}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogWidget;
