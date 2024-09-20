import {FaNodeJs, FaReact, FaRobot, FaRocket } from "react-icons/fa";
import GrowthBlock from "../components/GrowthBlock";
import { SiGraphql, SiNextdotjs, SiTypescript, SiExpress } from "react-icons/si";

type CourseStatus = "Planned" | "In Progress" | "Completed";

interface Course {
  name: string;
  status: CourseStatus;
  plannedStartDate: string | null;
  expectedCompletion: string | null;
  completionDate: string | null;
  certificate: string | null;
  icon: JSX.Element;
}

export default function Growth() {
  const courses: Course[] = [
    {
      name: "Learn the MERN Stack course",
      status: "Completed",
      plannedStartDate: null,
      expectedCompletion: null,
      completionDate: "July 2023",
      certificate: null,
      icon: <SiExpress className="text-white" />, // Express (black color)
    },
    {
      name: "MERN with deployment course",
      status: "Completed",
      plannedStartDate: null,
      expectedCompletion: null,
      completionDate: "August 2023",
      certificate: null,
      icon: <FaRocket className="text-red-500" />, // Rocket icon (red color)
    },
    {
      name: "Next.js, Tailwind CSS, and MongoDB course",
      status: "Completed",
      plannedStartDate: null,
      expectedCompletion: null,
      completionDate: "February 2024",
      certificate: null,
      icon: <SiNextdotjs className="text-white" />, // Next.js (black color)
    },
    {
      name: "React full course",
      status: "Completed",
      plannedStartDate: null,
      expectedCompletion: null,
      completionDate: "May 2023",
      certificate: null,
      icon: <FaReact className="text-blue-500" />, // React (blue color)
    },
    {
      name: "Machine Learning for Everybody - full course",
      status: "Completed",
      plannedStartDate: null,
      expectedCompletion: null,
      completionDate: "June 2023",
      certificate: null,
      icon: <FaRobot className="text-green-500" />, // Machine learning (green color)
    },
    {
      name: "Learn Typescript - Full Course for Beginners",
      status: "Completed",
      plannedStartDate: null,
      expectedCompletion: null,
      completionDate: "April 2023",
      certificate: null,
      icon: <SiTypescript className="text-blue-600" />, // TypeScript (blue color)
    },
    {
      name: "Building Apps with Third-Party Integrations",
      status: "In Progress",
      plannedStartDate: null,
      expectedCompletion: "December 2024",
      completionDate: null,
      certificate: null,
      icon: <FaNodeJs className="text-green-600" />, // Node.js (green color)
    },
    {
      name: "GraphQL with React: The Complete Developers Guide",
      status: "Planned",
      plannedStartDate: "October 2024",
      expectedCompletion: "January 2025",
      completionDate: null,
      certificate: null,
      icon: <SiGraphql className="text-pink-500" />, // GraphQL (pink color)
    },
    {
      name: "NodeJS: Advanced Concepts",
      status: "Planned",
      plannedStartDate: "November 2024",
      expectedCompletion: "February 2025",
      completionDate: null,
      certificate: null,
      icon: <FaNodeJs className="text-green-600" />, // Node.js (green color)
    }
  ];
  const sortedCourses = courses.sort((a, b) => {
    const statusOrder: { [key in CourseStatus]: number } = {
      Planned: 1,
      "In Progress": 2,
      Completed: 3,
    };
    if (statusOrder[a.status] !== statusOrder[b.status]) {
      return statusOrder[a.status] - statusOrder[b.status];
    }
    // If the statuses are the same, sort by the presence of a certificate
    return b.certificate ? 1 : -1;
  });

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">
        📈 My Growth Journey
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
        {sortedCourses.map((course, index) => (
          <GrowthBlock key={index} {...course} />
        ))}
      </div>
    </div>
  );
}
