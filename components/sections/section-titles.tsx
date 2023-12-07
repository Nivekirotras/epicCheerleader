import React from 'react';
import Link from 'next/link';

interface SectionTitles {
  title: string;
  url: string; // URL for the "See more service articles" link
}

const SectionTitle = ({ title, url }: SectionTitles) => {
  return (
    <div className="pt-8 flex items-center justify-between">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>
      <div className="flex-grow border-t-2 border-purple-700 mx-8"></div> {/* This creates the line */}
      <Link href={url}>
        <p className="text-lg text-decoration-line: underline text-purple-700 hover:text-purple-600">
          See more articles
        </p>
      </Link>
    </div>
  );
};

export default SectionTitle;