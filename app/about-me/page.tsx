import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import {
  FaBriefcase,
  FaFish,
  FaDumbbell,
  FaCode,
  FaHeart,
} from "react-icons/fa";

export default function AboutMe() {
  const career = [
    {
      title: "Data Entry Intern",
      company: "Społem PSS",
      date: "2021",
      logo_darkmode: "/spolem.png",
      logo_lightmode: "/spolem.png",
      size: 40,
    },
    {
      title: "Marketing Assistant",
      company: "Tubes International",
      date: "2022-2024",
      logo_darkmode: "/tubes_black.svg",
      logo_lightmode: "/tubes_white.png",
      size: 120,
    },
    {
      title: "Apprentice",
      company: "Spice Solutions",
      date: "2024-2025",
      logo_darkmode: "/spice.png",
      logo_lightmode: "/spice_white.png",
      size: 140,
    },
  ];

  const education = [
    {
      schoolName: "ZSK Poznań",
      date: "2020-2025",
      major: "Programming Technician",
      diplomas: [
        {
          title: "INF 03",
          score: "99%",
        },
        {
          title: "INF 04",
          score: "95%",
        },
      ],
      logo_darkmode: "/zsk.png",
      logo_lightmode: "/zsk.png",
      size: 45,
    },
    // {
    //   schoolName: "Politechnika Poznańska",
    //   major: "Artificial Intelligence",
    //   date: "2025-2029",
    //   logo: "/pp.svg",
    //   size: 45,
    // }
  ];

  const hobbies = [
    {
      title: "Fishing",
      description:
        "I’m a passionate carp fisherman. It’s a hobby that helps me relax and clear my mind. Spending time by the water, planning the next catch, and enjoying the outdoors is a perfect break from everyday life.",
      icon: <FaFish size={24} className="text-blue-500" />,
    },
    {
      title: "Gym",
      description:
        "I go to the gym regularly to stay in shape and keep my energy levels high. For me, it’s not just about fitness, but also about staying disciplined and motivated in all areas of life.",
      icon: <FaDumbbell size={24} className="text-green-500" />,
    },
    {
      title: "Programming",
      description:
        "My journey with coding started back in primary school. Over the years, it’s grown from a simple interest into a real passion. I love the constant learning and problem-solving that programming brings.",
      icon: <FaCode size={24} className="text-purple-500" />,
    },
  ];

  return (
    <div className="grid grid-rows-[auto, 1fr] gap-4 h-full">
      {/* Career & Education Section */}
      <Card className="w-full flex justify-between px-2 shadow-lg">
        {/* Main Content Section */}
        <div className=" w-full xl:w-4/5 flex flex-col">
          {/* Career Header */}
          <CardHeader className="text-2xl font-bold flex flex-row items-center mb-2 ml-[-10px]">
            <FaBriefcase size={40} className="text-blue-600" />
            <h3 className="ml-4">Career & Education</h3>
          </CardHeader>

          {/* Career and Education Grid */}
          <CardContent className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {career.map((job, index) => (
              <Card key={index} className="flex flex-col shadow-sm rounded-lg">
                <CardHeader className="text-lg font-semibold flex flex-row items-center justify-between">
                  <span>{job.company}</span>
                  <Image
                    src={job.logo_darkmode}
                    alt={`${job.company} logo`}
                    width={job.size}
                    height={job.size}
                    className="rounded object-contain lg:dark:block hidden"
                  />
                  <Image
                    src={job.logo_lightmode}
                    alt={`${job.company} logo`}
                    width={job.size}
                    height={job.size}
                    className="rounded object-contain lg:dark:hidden"
                  />
                </CardHeader>
                <div className="flex justify-between">
                  <CardContent className="text-muted-foreground">
                    {job.title}
                  </CardContent>
                  <CardFooter className="text-muted-foreground">
                    {job.date}
                  </CardFooter>
                </div>
              </Card>
            ))}

            {education.map((school, index) => (
              <Card key={index} className="flex flex-col shadow-sm rounded-lg">
                <CardHeader className="text-lg font-semibold flex flex-row items-center justify-between">
                  <span>{school.schoolName}</span>
                  <Image
                    src={school.logo_darkmode}
                    alt={`${school.schoolName} logo`}
                    width={school.size}
                    height={school.size}
                    className="rounded object-contain hidden lg:block"
                  />
                </CardHeader>
                <div className="flex justify-between">
                  <CardContent className="text-muted-foreground">
                    {school.major ? school.major : "N/A"}
                  </CardContent>
                  <CardFooter className="text-muted-foreground">
                    {school.date}
                  </CardFooter>
                </div>
              </Card>
            ))}
          </CardContent>
        </div>

        {/* Footer with Image */}
        <CardFooter className="hidden xl:w-1/5 xl:flex justify-center items-center p-0">
          <Image
            src="/about-me.jpg"
            alt="Filip Piątek"
            width={270}
            height={270}
            className="rounded-lg object-cover hidden xl:block h-4/5 max-h-[600px]"
          />
        </CardFooter>
      </Card>

      {/* Hobbies Section */}
      <Card className="w-full flex px-2 justify-between shadow-lg">
        {/* Footer with Image */}
        <CardFooter className="hidden xl:w-1/5 xl:flex justify-center items-center p-0">
          <Image
            src="/me-fisherman.jpg"
            alt="Filip Piątek"
            width={270}
            height={270}
            className="rounded-lg object-cover hidden xl:block h-4/5 max-h-[600px]"
          />
        </CardFooter>
        {/* Main Content Section */}
        <div className="w-full xl:w-4/5 flex flex-col">
          {/* Career Header */}
          <CardHeader className="text-2xl font-bold grid grid-cols-[auto,auto] justify-end items-center">
            <h3 className="mr-4">Hobbies</h3>
            <FaHeart size={40} className="text-red-600" />
          </CardHeader>

          {/* Career and Education Grid */}
          <CardContent className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            {hobbies.map((hobby, index) => (
              <Card key={index} className="flex flex-col shadow-sm rounded-lg">
                <CardHeader className="text-lg font-semibold flex flex-row items-center justify-between">
                  <span>{hobby.title}</span>
                  {hobby.icon}
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {hobby.description}
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
