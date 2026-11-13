import { FaGithub, FaLinkedinIn, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { profile } from "../lib/data";

const items = [
  { name: "GitHub", href: profile.github, Icon: FaGithub },
  { name: "LinkedIn", href: profile.linkedin, Icon: FaLinkedinIn },
  { name: "X", href: profile.x, Icon: FaXTwitter },
  { name: "Email", href: profile.gmail, Icon: FaEnvelope },
];

export default function Socials() {
  return (
    <ul className="flex gap-3">
      {items.map(({ name, href, Icon }) => (
        <li key={name}>
          <a href={href} aria-label={name} target="_blank" rel="noopener noreferrer"
            className="grid size-11 place-items-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent">
            <Icon className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
