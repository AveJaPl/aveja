// app/about/page.tsx
import Link from "next/link";
import {
  Card, CardContent, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase, GraduationCap, Heart, Fish, Dumbbell, Code2,
  Mail, MapPin, ExternalLink,
} from "lucide-react";

/* ───────── Data ───────── */
type CareerItem = { role: string; company: string; when: string; place?: string; link?: string };
type EducationItem = { school: string; major: string; when: string; diplomas?: { title: string; score: string }[]; link?: string };

const career: CareerItem[] = [
  { role: "Apprentice", company: "Spice Solutions", when: "2024–2025" },
  { role: "Marketing Assistant", company: "Tubes International", when: "2022–2024" },
  { role: "Data Entry Intern", company: "Społem PSS", when: "2021" },
];

const education: EducationItem[] = [
  {
    school: "Poznań University of Technology",
    major: "Cybersecurity",
    when: "2025–present",
  },
  {
    school: "ZSK Poznań",
    major: "Programming Technician",
    when: "2020–2025",
    diplomas: [
      { title: "INF-03", score: "99%" },
      { title: "INF-04", score: "95%" },
    ],
  },
];

const hobbies = [
  {
    title: "Fishing",
    icon: <Fish className="h-4 w-4 text-blue-500" />,
    description:
      "Carp fishing helps me reset. Planning the next catch by the water is a perfect break from everyday life.",
  },
  {
    title: "Gym",
    icon: <Dumbbell className="h-4 w-4 text-green-500" />,
    description:
      "Regular training for shape and energy. Discipline and consistency spill into everything else I do.",
  },
  {
    title: "Programming",
    icon: <Code2 className="h-4 w-4 text-purple-500" />,
    description:
      "Started in primary school. It became a real passion—constant learning and practical problem-solving.",
  },
];

const stack = {
  "Languages": ["TypeScript", "JavaScript", "Python", "HTML", "CSS", "SQL"],
  "Frameworks & Libraries": ["React", "Next.js", "Express", "Tailwind CSS", "Node.js", "Mongoose"],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Supabase"],
  "Tools & Platforms": ["Git", "Docker", "Postman", "VS Code", "Jira"],
};


const now = {
  availability: "Open to freelance",
  focus: "Shipping Hooplytics (PWA): practice stats, voice control, duels",
  location: "Poznań, PL",
  contact: "filip.piatek2005@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/AveJaPl" },
    { label: "Instagram", href: "https://www.instagram.com/aveja.pl/" },
    { label: "Facebook", href: "https://www.facebook.com/aveja.pl" },
  ],
};

/* ───────── Page ───────── */
export default function AboutPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
      {/* LEFT */}
      <div className="space-y-6">
        {/* Career & Education */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            <CardTitle>Career & Education</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <section>
              <MiniHeader icon={<Briefcase className="h-4 w-4" />} title="Career" />
              <Timeline>
                {career.map((c, i) => (
                  <TimelineItem key={i} title={c.company} subtitle={c.role} meta={c.when} place={c.place} link={c.link} />
                ))}
              </Timeline>
            </section>

            <section>
              <MiniHeader icon={<GraduationCap className="h-4 w-4" />} title="Education" />
              <Timeline>
                {education.map((e, i) => (
                  <TimelineItem
                    key={i}
                    title={e.school}
                    subtitle={e.major}
                    meta={e.when}
                    link={e.link}
                    extra={
                      e.diplomas?.length ? (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {e.diplomas.map((d, j) => (
                            <Badge key={j} variant="secondary" className="text-xs">
                              {d.title} • {d.score}
                            </Badge>
                          ))}
                        </div>
                      ) : null
                    }
                  />
                ))}
              </Timeline>
            </section>
          </CardContent>
        </Card>

        {/* Hobbies – snap scroll on mobile, grid on desktop */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              Hobbies <Heart className="h-5 w-5 text-red-600" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-4 md:overflow-visible">
              {hobbies.map((h, i) => (
                <div
                  key={i}
                  className="snap-center min-w-[80%] md:min-w-0 rounded-2xl border p-4 from-background to-muted/40"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium">{h.title}</div>
                    {h.icon}
                  </div>
                  <p className="text-sm text-muted-foreground">{h.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* RIGHT */}
      <div className="space-y-6">
        {/* Now */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Now</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <Row label="Availability">
              <Badge variant="secondary">{now.availability}</Badge>
            </Row>
            <Separator />
            <Row label="Focus">{now.focus}</Row>
            <Row label="Location">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {now.location}
              </span>
            </Row>
            <Row label="Contact">
              <span className="inline-flex items-center gap-1">
                <Mail className="h-3.5 w-3.5" />
                <a className="underline underline-offset-4" href={`mailto:${now.contact}`}>
                  {now.contact}
                </a>
              </span>
            </Row>
            {now.links?.length ? (
              <>
                <Separator />
                <div className="flex flex-wrap gap-2">
                  {now.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs underline underline-offset-4"
                    >
                      {l.label} <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </>
            ) : null}
          </CardContent>
        </Card>

        {/* Tech stack grouped */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Tech stack</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group}>
                <div className="mb-2 text-xs uppercase tracking-wide text-muted-foreground">{group}</div>
                <div className="flex flex-wrap gap-2">
                  {items.map((t) => (
                    <Badge key={t} variant="outline" className="rounded-full px-3 py-1 text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/* ───────── UI helpers ───────── */
function MiniHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
      {icon}
      {title}
    </div>
  );
}

function Timeline({ children }: { children: React.ReactNode }) {
  return <ol className="relative ms-3 border-s ps-4">{children}</ol>;
}

function TimelineItem({
  title, subtitle, meta, place, link, extra,
}: {
  title: string; subtitle?: string; meta?: string; place?: string; link?: string; extra?: React.ReactNode;
}) {
  return (
    <li className="mb-5">
      <div className="absolute -start-[6px] mt-1 h-2 w-2 rounded-full bg-primary" />
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-medium">
          {link ? (
            <Link href={link} target="_blank" className="underline underline-offset-4">
              {title}
            </Link>
          ) : (
            title
          )}
        </p>
        {meta ? <span className="text-[11px] text-muted-foreground">{meta}</span> : null}
      </div>
      {subtitle ? <p className="text-xs text-muted-foreground">{subtitle}</p> : null}
      {place ? (
        <p className="mt-0.5 text-[11px] text-muted-foreground inline-flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {place}
        </p>
      ) : null}
      {extra}
    </li>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[96px,1fr] items-start gap-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div>{children}</div>
    </div>
  );
}
