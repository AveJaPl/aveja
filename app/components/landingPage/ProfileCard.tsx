import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { cn } from "@/lib/utils";
  import Image from "next/image";
  
  export default function ProfileCard() {

    const socialMedia = [
      {
        name: "GitHub",
        url: "https://github.com/AveJaPl",
        icon: "/github-mark-white.svg",
        iconSize: 30,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/aveja_pl/",
        icon: "/ig-logo.svg",
        iconSize: 58,
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/AveJaPl",
        icon: "/facebook-logo.svg",
        iconSize: 32,
      }
    ]
    return (
      <Card className={cn("w-full lg:w-2/5 grid grid-cols-[auto_1fr] gap-4 p-6")}>
        <div className="flex items-center justify-center">
          <CardContent className="p-0">
            <Image
              src="/me.jpg"
              alt="Picture of Filip Piątek"
              width={180}
              height={180}
              className="rounded-full"
            />
          </CardContent>
        </div>
        <div className="space-y-4">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Filip Piątek</CardTitle>
            <CardDescription>Junior Full-Stack Developer</CardDescription>
          </CardHeader>
          <CardFooter className="flex space-x-1">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={social.iconSize}
                  height={social.iconSize}
                />
              </a>
            ))}
          </CardFooter>
        </div>
      </Card>
    );
  }
  