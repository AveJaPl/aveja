import ProjectBlock from "../components/ProjectBlock";

export default function Projects() {
  const projects = [
    {
      logo: "/progresio_logo.png", // replace with actual image path
      name: "Progresio App",
      description:
        "An application to track user progress on custom parameters.",
      targetAudience: "Fitness enthusiasts, people who want to track their progress.",
      screenshots: ["/progresio1.png", "/progresio2.png", "/progresio3.png"], // multiple screenshots for carousel
      link: "https://progresio.netlify.app",
    },
  
    // Add more projects as needed
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">🚀 My Projects</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectBlock key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
