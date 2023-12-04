import {Instagram, Twitter, Linkedin, Facebook} from "lucide-react";
import Link from 'next/link';
import React from 'react';

const SocialLink = ({
    platform,
    link,
    isSharedURL = false
}:{
    platform:string; 
    link: string; 
    isSharedURL?: boolean
}) => {
    const getIcon = (platform: string) => {
        switch(platform) {
            case "instagram":
                return <Instagram size="20"/>;
                case "twitter":
                    return <Twitter size="20"/>;              
                case "linkedin":
                    return <Linkedin size="20"/>;
                case "facebook":
                    return <Facebook size="20"/>;
        };
    };
  return (
    <Link href={link}>
        <div
        className={`${
            isSharedURL
                ? "py-2 px-3 bg-neutral-200 rounded-md text-neutral-600 hover:bg-neutral-600 hover:text-neutral-100 duration-100 ease-in-out transition-colors"
                : ""
        }`}>
            {getIcon(platform)}
        </div>
    </Link>
  );
};

export default SocialLink;