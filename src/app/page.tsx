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
import Topbar from "../components/topbar";

export default function HomePage() {
  return (
    <main className="flex h-screen w-screen flex-col">
      <Topbar />
      <div className="mt-[-50px] flex h-full w-full flex-col items-center justify-center gap-5">
        <h1 className="text-5xl">Aaron Claes.</h1>
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
    </main>
  );
}
