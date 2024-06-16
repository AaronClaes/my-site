import type { ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layout";
import { pageTree } from "../source";
import { SiLinkedin, SiX } from "@icons-pack/react-simple-icons";

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <DocsLayout
      tree={pageTree}
      nav={{
        title: "Aaron Claes",
        githubUrl: "https://github.com/AaronClaes",
      }}
      sidebar={{ enabled: false }}
      links={[
        {
          text: "X",
          url: "https://x.com/aaronclaes",
          icon: <SiX />,
          external: true,
          type: "secondary",
        },
        {
          text: "LinkedIn",
          url: "https://www.linkedin.com/in/aaron-claes-618626207/",
          icon: <SiLinkedin />,
          external: true,
          type: "secondary",
        },
        {
          text: "Blogs",
          url: "/blogs",
          type: "main",
          active: "nested-url",
        },
      ]}
      containerProps={{ className: "h-full" }}
    >
      <div className="h-full w-screen">{children}</div>
    </DocsLayout>
  );
}
