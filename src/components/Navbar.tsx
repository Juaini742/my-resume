"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LinkedInImage from "@/assets/linkedin.png";
import GithubImage from "@/assets/github.png";
import WaImage from "@/assets/wa.png";
import GoogleImage from "@/assets/google.png";
import downloadImage from "@/assets/download.png";
import sonImage from "@/assets/son.png";
import moonImage from "@/assets/moon.png";
import Image from "next/image";
import Link from "next/link";
import { githubLink, googleLink, linkedInLink, waLink } from "@/contents";
import { CoolMode } from "./magicui/cool-mode";
import { Button } from "./ui/button";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed bottom-5 left-0 right-0 z-50 mx-auto">
        <Dock direction="middle">
          <DockIcon>
            <button>
              <Link href={linkedInLink} target="_blank">
                <Image
                  src={LinkedInImage}
                  alt="LinkedIn"
                  className="w-6 md:w-7"
                  title="LinkedIn"
                />
              </Link>
            </button>
          </DockIcon>
          <DockIcon>
            <Link href={githubLink} target="_blank">
              <Image
                src={GithubImage}
                alt="Github"
                className="w-6 md:w-7"
                title="Github"
              />
            </Link>
          </DockIcon>
          <DockIcon>
            <Link href={waLink} target="_blank">
              <Image
                src={WaImage}
                alt="WA"
                className="w-6 md:w-7"
                title="What's up"
              />
            </Link>
          </DockIcon>
          <DockIcon>
            <Link href={googleLink} target="_blank">
              <Image
                src={GoogleImage}
                alt="Google"
                className="w-6 md:w-7"
                title="Gmail"
              />
            </Link>
          </DockIcon>
          <Separator orientation="vertical" className="h-full" />
          <DockIcon>
            <a
              href="https://console.cloudinary.com/console/c-fbf05cbe64e27f1326077bb89b6f23/media_library/asset/b12bbf9d14c8a2b0d9b3cf69007d9084/manage"
              target="_blank"
              download
            >
              <Image
                src={downloadImage}
                alt="Google"
                className="w-6 md:w-7"
                title="Gmail"
              />
            </a>
          </DockIcon>
          <Separator orientation="vertical" className="h-full" />
          <DockIcon>
            {theme === "dark" ? (
              <CoolMode>
                <Button
                  variant="secondary"
                  onClick={() => setTheme("light")}
                  className="py-1.5 px-1.5 rounded-full"
                >
                  <Image
                    src={sonImage}
                    alt="Github"
                    className="w-6 md:w-7"
                    title="son"
                  />
                </Button>
              </CoolMode>
            ) : (
              <CoolMode>
                <Button
                  variant="secondary"
                  onClick={() => setTheme("dark")}
                  className="py-1.5 px-1.5 rounded-full"
                >
                  <Image
                    src={moonImage}
                    alt="Github"
                    className="w-6 md:w-7"
                    title="moon"
                  />
                </Button>
              </CoolMode>
            )}
          </DockIcon>
        </Dock>
      </div>
    </>
  );
}
