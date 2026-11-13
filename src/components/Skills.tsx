import type { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { LuLayoutGrid, LuShieldCheck } from "react-icons/lu";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiNodedotjs, SiExpress, SiMongodb, SiStripe, SiGit, SiGithub } from "react-icons/si";

const skills: { name: string; Icon: IconType }[] = [
  { name: "HTML5", Icon: FaHtml5 }, { name: "CSS3", Icon: FaCss3Alt },
  { name: "JavaScript", Icon: SiJavascript }, { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact }, { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss }, { name: "shadcn/ui", Icon: LuLayoutGrid },
  { name: "Framer Motion", Icon: SiFramer }, { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress }, { name: "MongoDB", Icon: SiMongodb },
  { name: "Better Auth", Icon: LuShieldCheck }, { name: "Stripe", Icon: SiStripe },
  { name: "Git", Icon: SiGit }, { name: "GitHub", Icon: SiGithub },
];

export default function Skills() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {skills.map(({ name, Icon }) => (
        <li key={name} className="flex items-center gap-3 glow rounded-xl border border-line bg-card px-4 py-3 text-sm opacity-60 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100">
          <Icon className="size-5 shrink-0" aria-hidden />
          {name}
        </li>
      ))}
    </ul>
  );
}
