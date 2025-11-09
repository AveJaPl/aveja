import ProjectBlock from "../components/ProjectBlock";

type status = "Done" | "In Progress"

export default function Projects() {
  const projects = [
    {
      logo: "/aurora_logo.png",
      name: "Aurora",
      description:
        "An application to track user progress on custom parameters.",
      targetAudience: "Fitness enthusiasts, people who want to track their progress.",
      screenshots: ["/aurora1.png", "/aurora2.png", "/aurora3.png"],
      link: null,
      status: "In Progress" as status,
    },
    {
      logo: "/logo_placeholder.png",
      name: "Hooplytics",
      description:
        "Mobile PWA for tracking basketball practice with voice logging.",
      targetAudience: "Amateur and professional basketball players.",
      screenshots: ["/image_placeholder.png", "/image_placeholder.png"],
      link: "https://hooplytics-stats.netlify.app",
      status: "Done" as status,
    }
  
    // Add more projects as needed
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">🚀 My Projects</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectBlock key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
