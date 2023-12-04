/* eslint-disable @next/next/no-img-element */

import directus_old from "@/lib/directus_old";
import { ImageResponse } from "next/og";
export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Epic Cheerleader | Blog";
export const contentType = "image/png";

// Get category data
const getCategoryData = async (categorySlug: string) => {
  try {
      const category = await directus_old.items("category").readByQuery({
          filter: {
              slug: {
                  _eq: categorySlug,
              },
          },
          fields: [ 
              "*",
              "posts.*",
              "posts.author.id",
              "posts.author.first_name",
              "posts.category.id",
              "posts.category.title",
          ],
      });
      return category?.data?.[0];
  } catch (error) {
      console.log(error);
      throw new Error("Error fetching data at category");
  }
};

export default async function og({
  params: { category },
}: {
  params: { category: string; };
}) {
  // Get Data from CMS
  const categoryData = await getCategoryData(category);

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img
            tw="flex flex-1 object-cover w-full h-full object-center"
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80"
            alt="Explorer"
          />
          {/* Overlay */}
          <div
            tw={`absolute flex inset-0 bg-opacity-80 ${
              categoryData?.title === "Cities"
                ? "bg-emerald-600"
                : "bg-indigo-600"
            }`}
          />
        </div>
        <div tw="flex flex-col text-white">
          {/* Title */}
          <div tw="text-[60px]">{categoryData?.title}</div>
          {/* Description */}
          <div tw="text-3xl max-w-4xl">{categoryData?.description}</div>
        </div>
      </div>
    ),
    size
  );
}
