import React from "react";
import parse, { Element } from "html-react-parser";
import Image from "next/image";
import GoogleAdSquareReactive from "@/components/elements/google-ad-in-article";

const PostBody = ({ body }: { body: string }) => {
  const options = {
    replace: (domNode: any) => {
      // Replace the [google-ad] placeholder with the Google ad component.
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
                {index !== parts.length - 1 && <GoogleAdSquareReactive />}
              </React.Fragment>
            ))}
          </span>
        );
      }

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

  const getParsedHTML = (body: string) => {
    return parse(body, options);
  };

  return <div className="rich-text">{getParsedHTML(body)}</div>;
};

export default PostBody;
