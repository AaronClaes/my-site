import { getPages } from "@/app/source";
import { SiGithub, SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function Topbar() {
  const blogsCount = getPages().filter((b) => b.slugs.length > 1).length;
  console.log(getPages());

  return (
    <div className="flex px-3 pt-4">
      <nav className="flex items-center gap-2">
        <Link href="/" className="border-r pr-4">
          Aaron Claes.
        </Link>
        <Link className="button" href="/blogs">
          Blogs
          <div className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs">
            {blogsCount}
          </div>
        </Link>
      </nav>
      <div className="ml-auto flex">
        <a
          className="icon-button"
          href="https://github.com/aaronclaes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub size={20} />
        </a>
        <a
          className="icon-button"
          href="https://x.com/aaronclaes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiX size={20} />
        </a>
        <a
          className="icon-button"
          href="https://www.linkedin.com/in/aaron-claes-618626207/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin size={20} />
        </a>
      </div>
    </div>
  );
}
