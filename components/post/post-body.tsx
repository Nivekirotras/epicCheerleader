import React from "react";
import parse, { Element } from "html-react-parser";
import Image from "next/image";
import GoogleAdInArticle from "@/components/elements/google-ad-in-article";

const PostBody = ({ body }: { body: string }) => {
  const options = {
    replace: (domNode: any) => {
      // Replace every occurrence of [google-ad] in a text node
      if (
        domNode.type === "text" &&
        typeof domNode.data === "string" &&
        domNode.data.includes("[google-ad]")
      ) {
        const parts = domNode.data.split("[google-ad]");
        return (
          <span>
            {parts.map((part: string, index: number) => (
              <React.Fragment key={index}>
                {part}
                {index !== parts.length - 1 && <GoogleAdInArticle />}
              </React.Fragment>
            ))}
          </span>
        );
      }

      // Replace <img> elements with Next.js Image component
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === "img") {
          const { src, alt } = domNode.attribs;
          return (
            <Image
              className="object-cover object-center w-full my-3 rounded-md h-auto max-h-[300px] md:max-h-[500px]"
              src={src}
              alt={alt}
              width={1280}
              height={620}
            />
          );
        }
      }
    },
  };

  const parsedHTML = parse(body, options);
  return <div className="rich-text">{parsedHTML}</div>;
};

export default PostBody;