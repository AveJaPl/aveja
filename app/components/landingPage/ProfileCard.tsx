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
          <CardFooter className="flex space-x-4">
            <a
              href="https://github.com/AveJaPl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-mark-white.svg"
                alt="GitHub"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://www.instagram.com/aveja_pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/ig-logo.svg" alt="Instagram" width={58} height={58} />
            </a>
            <a
              href="https://www.facebook.com/AveJaPl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/facebook-logo.svg"
                alt="Facebook"
                width={32}
                height={32}
              />
            </a>
          </CardFooter>
        </div>
      </Card>
    );
  }
  