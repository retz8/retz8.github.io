import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a href="https://github.com/retz8" target="_blank">
        <AiFillGithub
          className="text-3xl 
        text-muted-foreground hover:text-foreground"
        />
      </a>
      <a href="https://www.linkedin.com/in/jioh-in/" target="_blank">
        <AiFillLinkedin
          className="text-3xl
        text-muted-foreground hover:text-[#0072B1]"
        />
      </a>
      <a href="mailto:jiohin@umich.edu" target="_blank">
        <BiLogoGmail
          className="text-3xl
        text-muted-foreground hover:text-[#C71610]"
        />
      </a>
    </div>
  );
}
