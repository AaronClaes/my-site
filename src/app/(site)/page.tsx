import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";

export default function HomePage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <h1 className="text-6xl">Aaron Claes.</h1>
      <div className="flex gap-3">
        <SiTypescript />
        <SiThreedotjs />
        <SiReact />
        <SiNodedotjs />
        <SiMongodb />
        <SiVite />
        <SiNextdotjs />
        <SiTailwindcss />
      </div>
    </div>
  );
}
