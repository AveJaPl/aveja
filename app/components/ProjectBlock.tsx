import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

interface Project {
    logo: string;
    name: string;
    description: string;
    targetAudience: string;
    screenshots: string[];
    link: string;
}

export default function ProjectBlock(project: Project) {
    return (
        <Card
            className="w-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <CardHeader className="p-4 border-b-2 rounded-t-lg">
              <div className="flex items-center space-x-4">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={70}
                  height={70}
                  className="rounded"
                />
                <CardTitle className="text-xl font-bold">
                  {project.name}
                </CardTitle>
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
              <Carousel className="w-5/6">
                <CarouselContent>
                  {project.screenshots.map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="flex items-center justify-center p-4"
                    >
                      <Image
                        src={
                          project.screenshots[
                            index
                          ]
                        }
                        alt={`Screenshot ${index + 1}`}
                        width={500}
                        height={300}

                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <Link href={project.link} className="w-full" passHref target='_blank'>
                <Button
                  variant="secondary"
                  className="mt-4 w-full"
                >
                  <ArrowRightIcon className="mr-2" />
                  View Project
                </Button>
              </Link>
            </CardContent>
          </Card>
    )
}