"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SiVisualstudiocode, SiDocker, SiPostman, SiJira, SiGithub, SiBitbucket } from "react-icons/si";

export default function Software() {
  const software = [
    { name: "GitHub", icon: <SiGithub className="mr-2 text-white" />, startDate: 2020 },
    { name: "Docker", icon: <SiDocker className="mr-2 text-blue-600" />, startDate: 2021 },
    { name: "Postman", icon: <SiPostman className="mr-2 text-orange-500" />, startDate: 2021 },
    { name: "Jira", icon: <SiJira className="mr-2 text-blue-400" />, startDate: 2022 },
    { name: "Bitbucket", icon: <SiBitbucket className="mr-2 text-blue-500" />, startDate: 2022 },
    { name: "VS Code", icon: <SiVisualstudiocode className="mr-2 text-blue-500" />, startDate: 2018 },
  ];

  const getRandomDelay = () => `${Math.random() * 2}s`; // Losowa przerwa od 0 do 2 sekund
  const getRandomDuration = () => `${2 + Math.random() * 1.5}s`; // Losowy czas trwania od 2 do 3.5 sekundy

  return (
    <Card className="w-full lg:w-2/3 p-3 overflow-hidden relative">
      <CardHeader className="text-xl font-bold">Software I use</CardHeader>
      <CardContent className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {software.map((skill, index) => (
          <div
            key={index}
            className="skill-item border border-border p-4 rounded-lg flex flex-col items-center justify-center transition-transform duration-500 hover:scale-105"
          >
            <div
              className="icon-container text-3xl cursor-pointer mb-2"
              style={{
                animation: `irregularPulse ${getRandomDuration()} infinite`,
                animationDelay: getRandomDelay(),
              }}
            >
              {skill.icon}
            </div>
            <div className="text-xl font-semibold">{skill.name}</div>
            <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              {
                new Date().getFullYear() - skill.startDate}{" "}years
            </div>
            <div className="pt-2 text-xs text-gray-500 dark:text-gray-600">
              Since {skill.startDate}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
