import { DocsLayout } from "fumadocs-ui/layout";
import { pageTree } from "@/app/source";
import type { ReactNode } from "react";
import { SiLinkedin, SiX } from "@icons-pack/react-simple-icons";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={pageTree}
      nav={{
        title: "Aaron Claes",
        githubUrl: "https://github.com/AaronClaes",
      }}
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
    >
      {children}
    </DocsLayout>
  );
}
