import LinkedInImage from "@/assets/linkedin.png";
import GithubImage from "@/assets/github.png";
import WaImage from "@/assets/wa.png";
import GoogleImage from "@/assets/google.png";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { githubLink, googleLink, linkedInLink, waLink } from "@/contents";
import Link from "next/link";
import BoxReveal from "@/components/magicui/box-reveal";

function SocialMedia() {
  const items = [
    {
      img: LinkedInImage,
      title: "LinkedIn",
      description: "Follow me on LinkedIn",
      link: linkedInLink,
    },
    {
      img: GithubImage,
      title: "Github",
      description: "View my Github profile",
      link: githubLink,
    },
    {
      img: WaImage,
      title: "What's Up",
      description: "Chat with me on WhatsApp",
      link: waLink,
    },
    {
      img: GoogleImage,
      title: "Gmail",
      description: "Send me an email",
      link: googleLink,
    },
  ];
  return (
    <div className="flex flex-col gap-5 mt-5">
      <h2 className="text-sm text-muted-foreground">Socials</h2>
      {items.map((item, index) => (
        <BoxReveal key={index} boxColor={"#16a34a"} duration={0.5}>
          <div className="flex gap-3 items-center">
            <Image
              src={item.img}
              alt={item.title}
              className="w-6 md:w-7"
              title={item.title}
            />
            <div className="flex flex-col">
              <Link
                href={item.link}
                className="text-sm hover:underline pb-1"
                target="_blank"
              >
                {item.title}
              </Link>
              <span className="text-xs text-muted-foreground">
                {item.description}
              </span>
            </div>
          </div>
        </BoxReveal>
      ))}
      <Separator orientation="horizontal" className="w-full mt-3" />
    </div>
  );
}

export default SocialMedia;
