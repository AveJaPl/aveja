import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DownloadIcon,
  CheckCircleIcon,
  ClockIcon,
  CalendarIcon,
} from "lucide-react";

interface Course {
  name: string;
  status: string;
  plannedStartDate: string | null;
  expectedCompletion: string | null;
  completionDate: string | null;
  certificate: string | null;
  icon: JSX.Element;
}

export default function GrowthBlock(course: Course) {
  const renderBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <div className="flex items-center space-x-2 text-green-400">
            <CheckCircleIcon className="w-5 h-5" />
            <Badge variant="outline" className="text-green-400">
              Completed
            </Badge>
          </div>
        );
      case "In Progress":
        return (
          <div className="flex items-center space-x-2 text-yellow-400">
            <ClockIcon className="w-5 h-5" />
            <Badge variant="outline" className="text-yellow-400">
              In Progress
            </Badge>
          </div>
        );
      case "Planned":
        return (
          <div className="flex items-center space-x-2 text-red-400">
            <CalendarIcon className="w-5 h-5" />
            <Badge variant="outline" className="text-red-400">
              Planned
            </Badge>
          </div>
        );
      default:
        return (
          <Badge variant="outline" className="text-gray-400">
            Unknown
          </Badge>
        );
    }
  };
  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-[1.01]">
      <CardHeader className="p-4 rounded-t-lg border-border border-b-2">
        <div className="flex items-center space-x-4 text-xl">
          {course.icon}
          <CardTitle className="text-xl">{course.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <span>Status:</span>
          {renderBadge(course.status)}
        </div>
        {course.completionDate && (
          <div className="flex items-center justify-between">
            <span>Completion Date:</span>
            <span>{course.completionDate}</span>
          </div>
        )}
        {course.expectedCompletion && (
          <div className="flex items-center justify-between">
            <span>Expected Completion:</span>
            <span>{course.expectedCompletion}</span>
          </div>
        )}
        {course.plannedStartDate && (
          <div className="flex items-center justify-between">
            <span>Planned Start Date:</span>
            <span>{course.plannedStartDate}</span>
          </div>
        )}
        {course.certificate && (
          <Button
            variant="secondary"
            className="mt-4 w-full"
            onClick={() => {
              if (course.certificate) {
                window.open(course.certificate, "_blank");
              }
            }}
          >
            <DownloadIcon className="mr-2" />
            Download Certificate
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
