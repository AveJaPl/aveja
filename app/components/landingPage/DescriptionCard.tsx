import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DescriptionCard() {
  return (
    <Card className="w-full lg:w-3/5 p-4 flex flex-col lg:grid lg:grid-cols-[auto_1fr] lg:gap-4">
      <CardHeader>
        <CardTitle>Hey there! 👋</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold">
          I’m Filip, a Junior Full-Stack Developer with a passion for JavaScript and TypeScript.
        </p>
        <p className="mt-2">
          I love building modern, interactive web apps using tools like Next.js. Always eager to level up my skills and learn new things, coding for me is about creating awesome, user-friendly experiences.
          If you&apos;re down to chat or work together, let’s connect! 🚀
        </p>
      </CardContent>
    </Card>
  );
}
