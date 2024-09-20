"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaNodeJs, FaGit, FaPython } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiPostgresql } from "react-icons/si";

export default function SkillsCard() {
  const skills = [
    { name: "TypeScript", icon: <SiTypescript className="mr-2 text-blue-500" />, level: "Advanced" },
    { name: "Next.js", icon: <SiNextdotjs className="mr-2 text-gray-800 dark:text-gray-200" />, level: "Intermediate" },
    { name: "Node.js", icon: <FaNodeJs className="mr-2 text-green-500" />, level: "Advanced" },
    { name: "Python", icon: <FaPython className="mr-2 text-yellow-500" />, level: "Intermediate" },
    { name: "Git", icon: <FaGit className="mr-2 text-orange-500" />, level: "Beginner" },
    { name: "Postgres", icon: <SiPostgresql className="mr-2 text-blue-800" />, level: "Intermediate" }
  ];

  const getRandomDelay = () => `${Math.random() * 2}s`; // Losowa przerwa od 0 do 2 sekund
  const getRandomDuration = () => `${1 + Math.random() * 1.5}s`; // Losowy czas trwania od 1 do 2.5 sekundy

  return (
    <Card className="w-full lg:w-2/3 overflow-hidden relative">
      <CardHeader className="text-xl font-bold">Most developed skills</CardHeader>
      <CardContent className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item border border-border p-4 rounded-lg flex flex-col items-center justify-center transition-transform duration-500 hover:scale-105"
          >
            <div
              className="icon-container text-2xl cursor-pointer mb-2"
              style={{
                animation: `irregularPulse ${getRandomDuration()} infinite`,
                animationDelay: getRandomDelay(),
              }}
            >
              {skill.icon}
            </div>
            <div className="text-lg font-semibold">{skill.name}</div>
            <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              {skill.level}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
