import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function Inspirations() {
  return (
    <Card className="w-full lg:w-1/3 p-4 overflow-hidden relative">
      <div className="flex">
        {/* Lewy div z tekstem, który pozostaje stały */}
        <div className="flex flex-col w-full lg:max-w-xs">
          <CardHeader className="text-xl font-bold">What Drives Me</CardHeader>
          <CardContent className="text-base leading-relaxed italic border-l-4 pl-4 border-gray-300 dark:border-gray-700">
            &quot;Coding, like sports, demands focus, while fishing teaches me the art of patience. This balance inspires me to approach each challenge with clarity and determination.&quot;
          </CardContent>
        </div>

        {/* Prawy div, który rozciąga się */}
        <CardFooter className="hidden lg:flex lg:flex-grow"></CardFooter>
      </div>
    </Card>
  );
}
