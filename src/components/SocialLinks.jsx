import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import React from "react";
import Link from "next/link";
export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Link href="https://github.com/retz88">
        <AiFillGithub
          className="text-3xl 
        text-muted-foreground hover:text-foreground"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/jiohin/">
        <AiFillLinkedin
          className="text-3xl
        text-muted-foreground hover:text-foreground"
        />
      </Link>
    </div>
  );
}
