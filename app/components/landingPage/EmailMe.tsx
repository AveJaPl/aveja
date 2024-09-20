import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EmailMe() {
  return (
    <Card className="w-full lg:w-1/3 p-4 flex flex-col items-center justify-center">
      <CardHeader>
        <CardTitle>Get in touch</CardTitle>
        <CardDescription>
          I&apos;m always looking for new opportunities and collaborations. If you want to chat or work together, feel free to reach out!
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <Button asChild className="mt-4" variant="default" size="lg">
          <a href="mailto:filip.piatek2005@gmail.com?subject=Collaboration%20Inquiry">
            Email me
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
