import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

interface Project {
  logo: string;
  name: string;
  description: string;
  targetAudience: string;
  screenshots: string[];
  link: string | null;
  status: 'Done' | 'In Progress';
}

export default function ProjectBlock(project: Project) {
  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <CardHeader className="p-4 border-b-2 rounded-t-lg">
        <div className="flex items-center space-x-4">
          {/* poziome logo */}
          <div className="w-[100px] h-[40px] relative overflow-hidden rounded">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              fill
              className="object-cover"
            />
          </div>
          <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col items-center p-4">
        <div className="w-full space-y-4 p-2">
          <p className="text-sm">{project.description}</p>
          <p className="text-sm text-muted-foreground font-medium">
            Suitable for: {project.targetAudience}
          </p>
        </div>

        {/* Carousel for screenshots */}
        <Carousel className="w-full max-w-[480px] relative">
          <CarouselContent>
            {project.screenshots.map((src, index) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-center" // bez p-4
              >
                {/* poziomy, lekko kwadratowy screenshot */}
                <div className="w-[450px] h-[250px] relative overflow-hidden rounded">
                  <Image
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* strzałki bliżej zdjęcia / na zdjęciu */}
          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
          <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
        </Carousel>

        {project.status === 'In Progress' ? (
          <Button
            variant="secondary"
            className="mt-4 w-full cursor-not-allowed opacity-50"
            disabled
          >
            <ArrowRightIcon className="mr-2" />
            Project In Progress
          </Button>
        ) : (
          <Link
            href={project.link ?? ''}
            className="w-full"
            passHref
            target="_blank"
          >
            <Button variant="secondary" className="mt-4 w-full">
              <ArrowRightIcon className="mr-2" />
              View Project
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
