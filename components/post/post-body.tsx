import React from "react";
import parse, { Element } from "html-react-parser";
import Image from "next/image";

// Dummy ad component for testing
const DummyAd = () => {
  return (
    <div
      style={{
        border: "2px dashed red",
        padding: "20px",
        textAlign: "center",
        margin: "20px 0",
      }}
    >
      <img
        src="https://picsum.photos/200/150"
        alt="Dummy Ad"
        style={{ maxWidth: "100%" }}
      />
      <p>Dummy Ad Component</p>
    </div>
  );
};

const PostBody = ({ body }: { body: string }) => {
  const options = {
    replace: (domNode: any) => {
      // Replace the [google-ad] placeholder with the DummyAd component for testing.
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
                {index !== parts.length - 1 && <DummyAd />}
              </React.Fragment>
            ))}
          </span>
        );
      }

      // Replace <img> elements with Next.js Image component.
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
